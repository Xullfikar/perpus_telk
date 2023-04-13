import { auth } from '$lib/server/lucia.js';
import { redirect, fail } from '@sveltejs/kit';
import { LuciaError } from 'lucia-auth';
import type { Actions, PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (session) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
    default: async ({ request }) => {
        const { nama, foto, username, password, kpassword, wa, level, np, nis, kelas, jurusan } = Object.fromEntries(
			await request.formData()
		) as Record<string, string>;

		let masalah = {
			nama, 
			username, 
			password, 
			kpassword, 
			wa, 
			level, 
			np, 
			nis, 
			kelas, 
			jurusan,
		}

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

		if(usernameCheck) {
			masalah.usernameReady = true;		
        }

		if(password != kpassword) {
			masalah.incorrect = true;		
        }

		if (level === "PETUGAS") {
			if (!np) {
				masalah.missingNp = true;		
			}

			if (!nama || !username || !level || !np || usernameCheck || password != kpassword) {		
				return fail(400, masalah)
			}
		} else if (level === "SISWA") {
			if (!nis) {
				masalah.missingNis = true;		
			}
	
			if (!kelas) {
				masalah.missingKelas = true;		
			}
	
			if (!jurusan) {
				masalah.missingJurusan = true;		
			}

			if (!nama || !username || !level || !nis || !kelas || !jurusan || usernameCheck || password != kpassword) {		
				return fail(400, masalah)
			}
		}

		try {
			await auth.createUser({
				primaryKey: {
					providerId: "username",
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
			})
		} catch (error) {
			console.error(error);
			if (error instanceof LuciaError) {
				const message = error.message;
				console.error(message);
			}
			return fail(400, {message: "Gagal membuat akun"})
		}

		throw redirect(302, '/users')
    }
};