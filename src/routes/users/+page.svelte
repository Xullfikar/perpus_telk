<script lang="ts">
	import Heading from 'flowbite-svelte/Heading.svelte';
	import Breadcrumb from 'flowbite-svelte/Breadcrumb.svelte';
	import BreadcrumbItem from 'flowbite-svelte/BreadcrumbItem.svelte';
	import Table from 'flowbite-svelte/Table.svelte';
	import TableBody from 'flowbite-svelte/TableBody.svelte';
	import TableBodyCell from 'flowbite-svelte/TableBodyCell.svelte';
	import TableBodyRow from 'flowbite-svelte/TableBodyRow.svelte';
	import TableHead from 'flowbite-svelte/TableHead.svelte';
	import TableHeadCell from 'flowbite-svelte/TableHeadCell.svelte';
	import Badge from 'flowbite-svelte/Badge.svelte';
	import ButtonGroup from 'flowbite-svelte/ButtonGroup.svelte';
	import Button from 'flowbite-svelte/Button.svelte';
</script>

<Breadcrumb class="mb-4 mt-4">
	<BreadcrumbItem home>
		<svelte:fragment slot="icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-4 h-4 mr-2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
				/>
			</svg>
		</svelte:fragment>
		Users
	</BreadcrumbItem>
</Breadcrumb>

<div class="flex justify-between items-center mb-4">
	<p class="text-xl md:text-3xl font-semibold dark:text-white">Daftar Pengguna</p>
	<Button gradient color="green" href="/users/register">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="mr-2 -ml-1 w-5 h-5"
		>
			<path
				d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
			/>
		</svg>
		Tambah
	</Button>
</div>

<Table shadow>
	<TableHead>
		<TableHeadCell>Nama Pengguna</TableHeadCell>
		<TableHeadCell>Username</TableHeadCell>
		<TableHeadCell>Level</TableHeadCell>
		<TableHeadCell>Aksi</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		<TableBodyRow>
			<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
			<TableBodyCell>Sliver</TableBodyCell>
			<TableBodyCell>
				<!-- {#if } -->
				<!-- <Badge large border color="indigo">Admin</Badge> -->
				<Badge large border color="indigo">Admin</Badge>
			</TableBodyCell>
			<TableBodyCell>
				<ButtonGroup divClass="inline-flex rounded-lg shadow-sm">
					<Button gradient color="blue">Detail</Button>
					<Button gradient color="purple">Ubah</Button>
					<Button gradient color="red">Hapus</Button>
				</ButtonGroup>
			</TableBodyCell>
		</TableBodyRow>
	</TableBody>
</Table>
