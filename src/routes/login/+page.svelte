<script lang="ts">
	import Label from 'flowbite-svelte/Label.svelte';
	import Input from 'flowbite-svelte/Input.svelte';
	import ButtonGroup from 'flowbite-svelte/ButtonGroup.svelte';
	import InputAddon from 'flowbite-svelte/InputAddon.svelte';
	import Button from 'flowbite-svelte/Button.svelte';
	import Alert from 'flowbite-svelte/Alert.svelte';

	import type { ActionData } from './$types.d.ts';
	export let form: ActionData;
</script>

<form action="" method="post">
	<div class="flex items-center h-screen px-5">
		<div class="mx-auto w-full sm:w-96 bg-red-50 dark:bg-red-300 p-5 rounded-3xl">
			<div class="mb-6">
				<p class="text-3xl font-bold text-red-800 dark:text-red-800 text-center">Perpus-Telk</p>
			</div>
			{#if form?.noUsername}
				<div class="-mt-2 mb-3">
					<Alert border color="red" dismissable accent>
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
						<span class="font-medium">Username!</span> tidak terdaftar
					</Alert>
				</div>
			{/if}
			{#if form?.missingLogin}
				<div class="-mt-2 mb-3">
					<Alert border color="red" dismissable accent>
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
						<span class="font-medium">Password!</span> salah
					</Alert>
				</div>
			{/if}
			<div class="mb-6">
				<Label for="website-admin" class="block mb-2 text-red-800 dark:text-red-800">Username</Label
				>
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
						size="lg"
						type="text"
						name="username"
						placeholder="username"
						value={form?.username}
					/>
				</ButtonGroup>
			</div>
			<div class="mb-6">
				<Label for="website-admin" class="block mb-2 text-red-800 dark:text-red-800">Password</Label
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
						size="lg"
						name="password"
						placeholder="password"
					/>
				</ButtonGroup>
			</div>
			<div class="w-full">
				<Button outline pill={true} color="red" type="submit" style="width: 100%;">MASUK</Button>
			</div>
		</div>
	</div>
</form>
