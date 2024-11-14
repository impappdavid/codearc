<script lang="ts">
	import AppSidebar from "$lib/components/sidebar/app-sidebar.svelte";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import DropdownMenuSeparator from "$lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte";
	import LogOut from "lucide-svelte/icons/log-out";
	import { Palette, Settings, User, Users, Bell } from "lucide-svelte";
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import { buttonVariants } from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import Modetoggle from "$lib/components/modetoggle.svelte";
	import Toolbar from "$lib/components/templates/toolbar.svelte";
	import File from "$lib/components/templates/file.svelte";
	import * as Table from "$lib/components/ui/table/index.js";
	import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
	import { onMount } from "svelte";
	import * as Tabs from "$lib/components/ui/tabs/index.js";
    import Boxview from "$lib/components/templates/boxview.svelte";

	let allSelected = false;
	let searchQuery = ""; // Declare the variable in the parent component


</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header
			class="flex h-16 shrink-0 px-4 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-zinc-100 dark:bg-zinc-900"
		>
			<div class="flex items-center gap-2">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#">Collabug</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#">Team</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Templates</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
			<div class="flex gap-3 items-center px-4">
				<Sheet.Root>
					<Sheet.Trigger
						class="w-9 h-9 border rounded-lg flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-950/20 transition-all"
						><Bell class="w-4 h-4" /></Sheet.Trigger
					>
					<Sheet.Content
						side="right"
						class="bg-zinc-200 dark:bg-zinc-900"
					>
						<Sheet.Header>
							<Sheet.Title>Edit profile</Sheet.Title>
							<Sheet.Description>
								Make changes to your profile here. Click save
								when you're done.
							</Sheet.Description>
						</Sheet.Header>
						<div class="grid gap-4 py-4"></div>
						<Sheet.Footer>
							<Sheet.Close
								class={buttonVariants({ variant: "outline" })}
								>Save changes</Sheet.Close
							>
						</Sheet.Footer>
					</Sheet.Content>
				</Sheet.Root>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="flex items-center gap-2 ">
						<div
							class="w-8 h-8 bg-black dark:bg-white rounded-lg"
						></div>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content
						align="end"
						class="rounded-xl min-w-40 dark:bg-zinc-950/20 backdrop-blur-lg"
					>
						<DropdownMenu.Group>
							<DropdownMenu.GroupHeading
								>My Account</DropdownMenu.GroupHeading
							>
							<DropdownMenuSeparator />
							<DropdownMenu.Item onclick={() => location.href= "../profile/david"}
								class="rounded-lg hover:cursor-pointer"
							>
								<User class="w-4 h-4" />
								Profile
							</DropdownMenu.Item>
							<Dialog.Root>
								<Dialog.Trigger class="w-full outline-none">
									<DropdownMenu.Item
										class="rounded-lg hover:cursor-pointer"
									>
										<Palette class="w-4 h-4" />
										Theme
									</DropdownMenu.Item>
								</Dialog.Trigger>
								<Dialog.Content
									class="rounded-xl bg-zinc-200 dark:bg-zinc-900 flex flex-col gap-4"
								>
									<Dialog.Header>
										<Dialog.Title>Theme select</Dialog.Title
										>
									</Dialog.Header>
									<Modetoggle />
								</Dialog.Content>
							</Dialog.Root>

							<DropdownMenuSeparator />

							<DropdownMenu.Item
								class="rounded-lg hover:cursor-pointer"
							>
								<Settings class="w-4 h-4" />
								Settings
							</DropdownMenu.Item>
							<DropdownMenuSeparator />

							<DropdownMenu.Item
								class="rounded-lg hover:cursor-pointer text-red-400"
							>
								<LogOut class="w-4 h-4" />
								Logout
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</header>
		<div class="flex flex-1 flex-col gap-4 p-4 py-4">
			<div
				class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min p-2"
			>
				<Tabs.Root value="listview" class="w-full">
					<Tabs.List>
						<Toolbar bind:value={searchQuery} />
					</Tabs.List>
					<Tabs.Content value="listview" class="focus:ring-0 focus:ring-offset-0 outline-none">
						<div class="mt-2 w-full">
						
							<!-- Header Row -->
							<div class="flex border-b border-zinc-500 text-zinc-600 dark:text-zinc-400 text-sm">
								<div class="p-2 flex-1">File name</div>
								<div class="p-2 hidden md:flex flex-1">Created by</div>
								<div class="p-2  hidden xl:flex flex-1">Edited by</div>
								<div class="p-2  hidden md:flex flex-1">Row</div>
								<div class="p-2  hidden xl:flex flex-1">Last modified</div>
								<div class="p-2 flex-1 text-right">Created at</div>
							</div>
						
							<!-- Body (Rows) -->
							<File isSelected={allSelected} searchdata={searchQuery} />
						</div>
					</Tabs.Content>
					<Tabs.Content value="boxview" class=" w-full h-full outline-none"
						>
						<Boxview isSelected={allSelected} searchdata={searchQuery}/>
						</Tabs.Content>
				</Tabs.Root>
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
