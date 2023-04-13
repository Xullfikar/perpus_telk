<script lang="ts">
	import { Fileupload } from 'flowbite-svelte';

	import Helper from 'flowbite-svelte/Helper.svelte';
	import Select from 'flowbite-svelte/Select.svelte';
	import Button from 'flowbite-svelte/Button.svelte';
	import InputAddon from 'flowbite-svelte/InputAddon.svelte';
	import ButtonGroup from 'flowbite-svelte/ButtonGroup.svelte';
	import Input from 'flowbite-svelte/Input.svelte';
	import Label from 'flowbite-svelte/Label.svelte';
	import Alert from 'flowbite-svelte/Alert.svelte';

	let slevel = '';
	let skelas: any;
	let sjurusan: any;
	let notresolve = false;
	let files: any;
	let avatar: any;
	let selected: any;

	let level = [
		{ value: 'PETUGAS', name: 'PETUGAS' },
		{ value: 'SISWA', name: 'SISWA' }
	];

	let kelas = [
		{ value: 'X', name: 'X' },
		{ value: 'XI', name: 'XI' },
		{ value: 'XII', name: 'XII' }
	];

	let jurusan = [
		{ value: 'RPL', name: 'Rekayasa Perangkat Lunak' },
		{ value: 'TKJ', name: 'Teknik Komputer dan Jaringan' },
		{ value: 'TJA', name: 'Teknik Jaringan Akses' },
		{ value: 'TEL', name: 'Teknik Telekomunikasi' },
		{ value: 'DBK', name: 'Digital Bisnis dan Keparawisataan' }
	];

	import type { ActionData } from './$types.d.ts';
	export let form: ActionData;

	if (form !== null) {
		notresolve = true;
	}

	const onFileSelected = (e: any) => {
		let image = e.target.files[0];
		let imageGenerated = true;
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			avatar = e.target?.result ?? '';
		};
	};

	const resolved = () => {
		notresolve = false;
	};
</script>

<form action="" method="post">
	<div
		class="container mx-auto w-full sm:w-11/12 mt-20 bg-red-50 dark:bg-red-300 p-5 rounded-3xl grid grid-cols-2 gap-4"
	>
		<div class="mb-3 col-span-2">
			<p class="text-xl font-bold text-red-800 dark:text-red-800 text-center">Tambah User</p>
		</div>
		<div class="col-span-2">
			{#if files}
				{#if Number(files[0].size) / 1024 > 300}
					<Alert color="red" dismissable accent>
						<span slot="icon"
							><svg
								aria-hidden="true"
								class="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
									clip-rule="evenodd"
								/></svg
							>
						</span>
						Ukuran <span class="font-medium">Foto</span> Melebihi Ketentuan
					</Alert>
				{/if}
			{/if}

			{#if form?.missingNama}
				<Alert color="red" dismissable accent>
					<span slot="icon"
						><svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					<span class="font-medium">Nama</span> wajib Diisi
				</Alert>
			{/if}

			{#if form?.missingUsername}
				<Alert color="red" dismissable accent>
					<span slot="icon"
						><svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					<span class="font-medium">Username</span> wajib Diisi
				</Alert>
			{/if}

			{#if form?.usernameReady}
				<Alert color="red" dismissable accent>
					<span slot="icon"
						><svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					<span class="font-medium">Username</span> sudah digunakan
				</Alert>
			{/if}

			{#if form?.incorrect}
				<Alert color="red" dismissable accent>
					<span slot="icon"
						><svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					<span class="font-medium">Password</span> tidak sesuai
				</Alert>
			{/if}

			{#if form?.missingNp}
				<Alert color="red" dismissable accent>
					<span slot="icon"
						><svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					<span class="font-medium">Petugas</span> wajib mengisi
					<span class="font-medium">Nomor Pegawai</span>
				</Alert>
			{/if}

			{#if form?.missingNis}
				<Alert color="red" dismissable accent>
					<span slot="icon"
						><svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					<span class="font-medium">Siswa</span> wajib mengisi
					<span class="font-medium">Nomor Induk Siswa</span>
				</Alert>
			{/if}

			{#if form?.missingLevel}
				<Alert color="red" dismissable accent>
					<span slot="icon"
						><svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					<span class="font-medium">Role</span> wajib diisi
				</Alert>
			{/if}

			{#if form?.missingKelas}
				<Alert color="red" dismissable accent>
					<span slot="icon"
						><svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					<span class="font-medium">Siswa</span> wajib memilih
					<span class="font-medium"> kelas</span>
				</Alert>
			{/if}

			{#if form?.missigJurusan}
				<Alert color="red" dismissable accent>
					<span slot="icon"
						><svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					<span class="font-medium">Siswa</span> wajib memilih
					<span class="font-medium"> Jurusan</span>
				</Alert>
			{/if}
		</div>

		<div class="mb-3">
			<Label for="nama" class="block mb-2 text-red-800 dark:text-red-800">Nama</Label>
			<Input
				id="nama"
				name="nama"
				value={form?.nama}
				placeholder="Masukkan Nama Lengkap"
				on:input={resolved()}
			/>
		</div>
		<div class="mb-3">
			<Label for="telepon/wa" class="block mb-2 text-red-800 dark:text-red-800"
				>No. Telepon / WA</Label
			>
			<Input
				id="telepon/wa"
				type="number"
				name="wa"
				value={form?.wa}
				placeholder="Masukkan Nomor Whatsapp"
			/>
			<Helper class="text-sm mt-2 text-red-800 dark:text-red-800">Tidak Wajib Diisi*</Helper>
		</div>
		<div class="mb-3">
			<Label class="pb-2 text-red-800 dark:text-red-800">Upload Foto</Label>
			<Fileupload
				name="image"
				accept="image/png, image/jpeg"
				bind:files
				on:change={(e) => onFileSelected(e)}
				type="file"
			/>
			<Input type="text" name="foto" value={avatar} style="display: none" readonly />
			<Helper class="text-sm mt-2 text-red-800 dark:text-red-800"
				>Tidak Wajib Diisi, Max 300kb*</Helper
			>
		</div>
		<div class="mb-3">
			<Label defaultClass="text-w-semibold text-red-800 dark:text-red-800"
				>Pilih Role
				<Select
					name="level"
					class="mt-1 text-red-800 dark:text-red-800"
					items={level}
					bind:value={slevel}
					placeholder="PIlih Role"
				>
					{#if form?.level}
						<option selected value={form?.level}>{form?.level}></option>
					{/if}

					{#each level as { value, name }}
						<option {value}>{name}</option>
					{/each}
				</Select>
			</Label>
		</div>
		<div class="col-span-2 mb-3">
			<Label for="website-admin" class="block mb-2 text-red-800 dark:text-red-800">Username</Label>
			<ButtonGroup class="w-full">
				<InputAddon>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 24 24"
						class="w-6 h-6 red-100"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
						/>
					</svg>
				</InputAddon>
				<Input
					id="website-admin"
					type="text"
					name="username"
					value={form?.username}
					placeholder="username"
				/>
			</ButtonGroup>
		</div>
		<div class="mb-3">
			<Label for="website-admin" class="block mb-2 text-red-800 dark:text-red-800">Password</Label>
			<ButtonGroup class="w-full">
				<InputAddon>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 24 24"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
						/>
					</svg>
				</InputAddon>
				<Input
					id="website-admin"
					type="password"
					name="password"
					value={form?.password}
					placeholder="password"
				/>
			</ButtonGroup>
		</div>
		<div class="mb-3">
			<Label for="website-admin" class="block mb-2 text-red-800 dark:text-red-800"
				>Konfirmasi Password</Label
			>
			<ButtonGroup class="w-full">
				<InputAddon>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 24 24"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
						/>
					</svg>
				</InputAddon>
				<Input
					id="website-admin"
					type="password"
					name="kpassword"
					value={form?.kpassword}
					placeholder="password"
				/>
			</ButtonGroup>
		</div>
		{#if slevel === 'PETUGAS'}
			<div class="col-span-2 mb-3">
				<Label for="np" class="block mb-2 text-red-800 dark:text-red-800">Nomor Pegawai</Label>
				<Input id="np" name="np" value={form?.np} placeholder="Masukkan Nomor Pegawai" />
			</div>
		{:else if slevel === 'SISWA'}
			<div class="col-span-2 mb-3">
				<Label for="nis" class="block mb-2 text-red-800 dark:text-red-800">NIS</Label>
				<Input id="nis" name="nis" value={form?.nis} placeholder="Masukkan Nomor Induk Siswa" />
			</div>
			<div class="mb-3">
				<Label defaultClass="text-w-semibold text-red-800 dark:text-red-800"
					>Pilih Kelas
					<Select
						name="kelas"
						class="mt-1 text-red-800 dark:text-red-800"
						items={kelas}
						bind:value={skelas}
					/>
				</Label>
			</div>
			<div class="mb-3">
				<Label defaultClass="text-w-semibold text-red-800 dark:text-red-800"
					>Pilih Jurusan
					<Select
						name="jurusan"
						class="mt-1 text-red-800 dark:text-red-800"
						items={jurusan}
						bind:value={sjurusan}
					/>
				</Label>
			</div>
		{:else}
			<div class="w-full col-span-2">
				<Alert border color="red">
					<span slot="icon"
						><svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					<span class="font-medium">Pilih Role</span> terlebih dahulu untuk mengisi formulir selanjutnya.
				</Alert>
			</div>
		{/if}
		<div class="w-full col-span-2">
			<Button
				outline
				pill={true}
				color="red"
				style="width: 100%;"
				type="submit"
				disabled={notresolve}>DAFTAR</Button
			>
		</div>
	</div>
</form>
