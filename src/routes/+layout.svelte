<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import DarkMode from 'flowbite-svelte/DarkMode.svelte';
	import Navbar from 'flowbite-svelte/Navbar.svelte';
	import NavBrand from 'flowbite-svelte/NavBrand.svelte';
	import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
	import Sidebar from 'flowbite-svelte/Sidebar.svelte';
	import SidebarGroup from 'flowbite-svelte/SidebarGroup.svelte';
	import SidebarItem from 'flowbite-svelte/SidebarItem.svelte';
	import SidebarWrapper from 'flowbite-svelte/SidebarWrapper.svelte';
	import Drawer from 'flowbite-svelte/Drawer.svelte';
	import CloseButton from 'flowbite-svelte/CloseButton.svelte';
	import { Avatar } from 'flowbite-svelte';
	import Dropdown from 'flowbite-svelte/Dropdown.svelte';
	import DropdownHeader from 'flowbite-svelte/DropdownHeader.svelte';
	import DropdownItem from 'flowbite-svelte/DropdownItem.svelte';
	import DropdownDivider from 'flowbite-svelte/DropdownDivider.svelte';
	import { sineIn } from 'svelte/easing';

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	let breakPoint: number = 1024;
	let width: number;
	let backdrop: boolean = false;
	let activateClickOutside = true;
	let drawerHidden: boolean = false;
	$: if (width >= breakPoint) {
		drawerHidden = false;
		activateClickOutside = false;
	} else {
		drawerHidden = true;
		activateClickOutside = true;
	}
	onMount(() => {
		if (width >= breakPoint) {
			drawerHidden = false;
			activateClickOutside = false;
		} else {
			drawerHidden = true;
			activateClickOutside = true;
		}
	});
	const toggleSide = () => {
		if (width < breakPoint) {
			drawerHidden = !drawerHidden;
		}
	};
	const toggleDrawer = () => {
		drawerHidden = false;
	};
	$: activeUrl = $page.url.pathname;
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-2 top-12  md:top-3 md:right-2 z-50';
</script>

<svelte:window bind:innerWidth={width} />

{#if activeUrl === '/login'}
	<slot />
{:else}
	<Navbar let:hidden let:toggle color="primary">
		<NavHamburger on:click={toggleDrawer} btnClass="ml-3 lg:hidden" />
		<NavBrand href="/" class="lg:ml-64">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-red-800 pl-4">
				Perpus-Telk
			</span>
		</NavBrand>
		<div class="flex items-center md:order-2">
			<Avatar
				id="avatar-menu"
				src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
			/>
		</div>
		<Dropdown placement="bottom" triggeredBy="#avatar-menu">
			<DropdownHeader>
				<span class="block text-sm"> Nama Lengkap </span>
				<span class="block text-sm"> Kelas </span>
				<span class="block truncate text-sm font-medium"> NIP/NIS </span>
			</DropdownHeader>
			<DropdownItem>Dashboard</DropdownItem>
			<DropdownDivider />
			<DropdownItem>Logout</DropdownItem>
		</Dropdown>
	</Navbar>
	<DarkMode btnClass={darkmodebtn} />
	<Drawer
		transitionType="fly"
		{backdrop}
		{transitionParams}
		bind:hidden={drawerHidden}
		bind:activateClickOutside
		width="w-64"
		class="overflow-scroll pb-32"
		id="sidebar"
	>
		<div class="flex items-center">
			<CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
		</div>
		<Sidebar asideClass="w-54">
			<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-grey-800">
				<SidebarGroup>
					<SidebarItem
						label="Dashboard"
						href="/"
						aClass="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700"
						activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-red-200 dark:bg-red-800 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700"
						on:click={toggleSide}
						active={activeUrl === `/`}
					>
						<svelte:fragment slot="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
								/>
							</svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem
						label="Users"
						href="/users"
						aClass="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700"
						activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-red-200 dark:bg-red-800 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700"
						on:click={toggleSide}
						active={activeUrl === `/users`}
					>
						<svelte:fragment slot="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
								/>
							</svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem
						label="ACC"
						href="/acc"
						aClass="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700"
						activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-red-200 dark:bg-red-800 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700"
						on:click={toggleSide}
						active={activeUrl === `/acc`}
					>
						<svelte:fragment slot="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
								/>
							</svg>
						</svelte:fragment>
					</SidebarItem>
				</SidebarGroup>
				<SidebarGroup border>
					<SidebarItem
						label="Report"
						href="/report"
						aClass="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700"
						activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-red-200 dark:bg-red-800 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700"
						on:click={toggleSide}
						active={activeUrl === `/report`}
					>
						<svelte:fragment slot="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
								/></svg
							>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem
						label="Logout"
						href="/logout"
						aClass="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700"
						activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-red-200 dark:bg-red-800 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700"
						on:click={toggleSide}
						active={activeUrl === `/logout`}
					>
						<svelte:fragment slot="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
								/>
							</svg>
						</svelte:fragment>
					</SidebarItem>
				</SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
	</Drawer>

	<div class="flex px-4 mx-auto w-full">
		<main class="lg:ml-72 w-full mx-auto">
			<slot />
		</main>
	</div>
{/if}
