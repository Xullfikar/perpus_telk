import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types.js';
import { auth } from '$lib/server/lucia.js';
import { LuciaError } from 'lucia-auth';

export const load: PageServerLoad = async ({ locals }) => {
	const { user, session } = await locals.validateUser();
	if (!session) {
		throw redirect(302, '/login');
	}

	const userLevel = await prisma.user.findUnique({
		select: {
			level: true
		},
		where: {
			id: user.userId
		}
	});

	if (userLevel?.level != 'ADMIN') {
		console.log(user);
		throw redirect(302, '/');
	}

	return {
		users: await prisma.user.findMany()
	};
};

export const actions: Actions = {
	createUser: async ({ request }) => {
		const students = Object.fromEntries(await request.formData()) as Record<string, string>;

		const arrayStudent = JSON.parse(students.students);

		const nisCheck = await prisma.user.findMany({
			select: {
				nis: true
			}
		});

		const NISS = nisCheck.map((item) => item.nis);

		createUsersWithDelay(arrayStudent);
		async function createUsersWithDelay(arrayStudent: string | any[]) {
			for (let i = 0; i < arrayStudent.length; i++) {
				const e = arrayStudent[i];
				if (!NISS.includes(e.NIS)) {
					const username = e.NIS;
					const password = e.NIS;
					const nama = e.Nama;
					const nis = e.NIS;
					await createUser(username, password, nama, nis);
				}
			}
		}

		async function createUser(username: any, password: any, nama: any, nis: any) {
			const level = 'SISWA';
			const foto = null;
			const wa = null;
			const np = null;
			const kelas = null;
			const jurusan = null;
			try {
				await auth.createUser({
					primaryKey: {
						providerId: 'username',
						providerUserId: username,
						password
					},
					attributes: {
						nama,
						username,
						foto,
						wa,
						level,
						np,
						nis,
						kelas,
						jurusan
					}
				});
			} catch (error) {
				console.error(error);
				if (error instanceof LuciaError) {
					const message = error.message;
					console.error(message);
				}
				return fail(400, { message: 'Gagal membuat akun' });
			}
		}

		throw redirect(302, '/users');
	},

	deleteUser: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await auth.deleteUser(id);
		} catch (error) {
			console.error(error);
			if (error instanceof LuciaError) {
				const message = error.message;
				console.error(message);
			}
			return fail(400, { message: 'Gagal menghapus user' });
		}

		throw redirect(302, '/users');
	}
};
