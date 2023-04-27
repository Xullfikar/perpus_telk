<script lang="ts">
	import Breadcrumb from 'flowbite-svelte/Breadcrumb.svelte';
	import BreadcrumbItem from 'flowbite-svelte/BreadcrumbItem.svelte';
	import Card from 'flowbite-svelte/Card.svelte';

	import { onMount } from 'svelte';

	import type { PageData } from './$types.js';
	export let data: PageData;

	// @ts-ignore
	$: ({ peminjamans } = data);
	let tablePeminjamans: HTMLTableElement;
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
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
				/></svg
			>
		</svelte:fragment>
		Report
	</BreadcrumbItem>
</Breadcrumb>

<svelte:head>
	<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
	<link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css" />
	<link
		rel="stylesheet"
		href="https://cdn.datatables.net/buttons/2.3.6/css/buttons.dataTables.min.css"
	/>
	<script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/2.3.6/js/dataTables.buttons.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/2.3.6/js/buttons.print.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/2.3.6/js/buttons.colVis.min.js"></script>
	<script src="https://cdn.datatables.net/select/1.6.2/js/dataTables.select.min.js"></script>
	<script>
		$(document).ready(function () {
			$('#example').DataTable({
				dom: 'Bfrtip',
				buttons: [
					{
						extend: 'print',
						messageTop: 'Laporan Peminjaman Buku',
						exportOptions: {
							columns: ':visible'
						}
					},
					'colvis'
				],
				columnDefs: [
					{
						targets: -1,
						visible: false
					}
				],
				select: true
			});
		});
	</script>
</svelte:head>

<p class="text-xl text-center md:text-start md:text-3xl font-semibold dark:text-white">
	Daftar Laporan
</p>

<Card class="my-5" size="xl">
	<table id="example" class="display compact table-auto" style="width:100%">
		<thead>
			<tr>
				<th>Peminjam</th>
				<th>Nama Buku</th>
				<th>Kode Buku</th>
				<th>Tanggal Peminjaman</th>
				<th>Tanggal Tenggat</th>
				<th>Tanggal Pengembalian</th>
				<th>Catatan</th>
				<th>Status</th>
				<th>Penanggung Jawab</th>
			</tr>
		</thead>
		<tbody>
			{#each peminjamans as pinjam}
				<tr>
					<td>{pinjam.peminjam.nama}</td>
					<td>{pinjam.buku.judulBuku}</td>
					<td>{pinjam.kodeBuku ? pinjam.kodeBuku : ''}</td>
					<td>{pinjam.tanggalPeminjaman.toLocaleDateString('id-ID')}</td>
					<td>{pinjam.tanggalTenggat ? pinjam.tanggalTenggat.toLocaleDateString('id-ID') : ''}</td>
					<td
						>{pinjam.tanggalPengembalian
							? pinjam.tanggalPengembalian.toLocaleDateString('id-ID')
							: ''}</td
					>
					<td>{pinjam.catatan ? pinjam.catatan : ''}</td>
					<td>{pinjam.status}</td>
					<td>{pinjam.penanggungJawab ? pinjam.penanggungJawab.nama : ''}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</Card>
