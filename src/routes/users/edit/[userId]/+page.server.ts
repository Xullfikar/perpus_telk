import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types.js';
import { auth } from '$lib/server/lucia.js';
import { LuciaError } from 'lucia-auth';

export const load: PageServerLoad = async ({ params, locals }) => {
	const { user, session } = await locals.validateUser();
	if (!session) {
		throw redirect(302, '/login');
	}

	return {
		userDetail: await prisma.user.findUnique({
			where: {
				id: params.userId
			}
		}),
		userLevelCheck: await prisma.user.findUnique({
			where: {
				id: user.userId
			}
		})
	};
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const { nama, foto, username, wa, level, np, nis, kelas, jurusan } = Object.fromEntries(
			await request.formData()
		) as Record<string, string>;

		let masalah = {
			nama,
			username,
			wa,
			level,
			np,
			nis,
			kelas,
			jurusan
		};

		if (!nama) {
			masalah.missingNama = true;
		}

		if (!username) {
			masalah.missingUsername = true;
		}

		if (!level) {
			masalah.missingLevel = true;
		}

		const usernameCheck = await prisma.user.findUnique({
			where: {
				username: username
			}
		});

		const usernameCheckUpdate = () => {
			if (usernameCheck) {
				if (usernameCheck.id != params.userId) {
					masalah.usernameReady = true;
					return true;
				}
			}
		};

		if (level === 'PETUGAS') {
			if (!np) {
				masalah.missingNp = true;
			}

			if (!nama || !username || !level || !np || usernameCheckUpdate()) {
				return fail(400, masalah);
			}
		} else if (level === 'SISWA') {
			if (!nis) {
				masalah.missingNis = true;
			}

			if (!kelas) {
				masalah.missingKelas = true;
			}

			if (!jurusan) {
				masalah.missingJurusan = true;
			}

			if (!nama || !username || !level || !nis || !kelas || !jurusan || usernameCheckUpdate()) {
				console.log(masalah);
				return fail(400, masalah);
			}
		}

		console.log(foto);

		try {
			await auth.updateUserAttributes(params.userId, {
				nama,
				username,
				foto,
				wa,
				level,
				np,
				nis,
				kelas,
				jurusan
			});
		} catch (error) {
			console.error(error);
			if (error instanceof LuciaError) {
				const message = error.message;
				console.error(message);
			}
			return fail(400, { message: 'Gagal membuat akun' });
		}

		throw redirect(302, '/users');
	}
};
