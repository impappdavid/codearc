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

	let allSelected = false;
	let searchQuery = ""; // Declare the variable in the parent component
	import { page } from "$app/stores";
	import MonacoEditor from "$lib/components/templates/MonacoEditor.svelte";
	let code = "";
	if ($page.params.slug == "bottom_nav_menu.xml") {
		code = `<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">


    <item
        android:id="@+id/navigation_dashboard"
        android:icon="@drawable/baseline_fitness_center_24"
        android:iconTint="@color/white"
        />

    <item
        android:id="@+id/navigation_notifications"
        android:icon="@drawable/baseline_calendar_month_24"
        android:iconTint="@color/white"/>

</menu>
	`;
	}else if($page.params.slug == "+page.svelte"){
		code = `
<div
    class="w-full dark:bg-zinc-950/20 py-1.5 px-1.5 rounded-xl border flex justify-between"
>
    <div class="flex gap-2 sm:w-full max-w-[300px]">
        <Button
            class="p-0 h-7 w-7 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-800/70 rounded-lg"
        >
            <Plus class="w-4 h-4 text-black dark:text-white" />
        </Button>
        <Button
            class="p-0 h-7 w-7 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-800/70 rounded-lg"
        >
            <FolderPlus class="w-4 h-4 text-black dark:text-white" />
        </Button>
        <Separator orientation="vertical" />
        <Button
            class="p-0 h-7 w-7 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-800/70 rounded-lg"
        >
            <List class="w-4 h-4 text-black dark:text-white" />
        </Button>
        <Button
            class="p-0 h-7 w-7 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-800/70 rounded-lg"
        >
            <Grid2x2 class="w-4 h-4 text-black dark:text-white" />
        </Button>
    </div>
    <div class="flex gap-2">
        
        <Input class="text-xs p-0 h-7 px-2 bg-zinc-200 rounded-lg md:w-96 dark:bg-zinc-800/70" placeholder="Search by file name"   bind:value/>
        
    </div>
    <div class="flex gap-2 sm:w-full max-w-[300px] justify-end">
        
        <Button
            class="p-0 h-7 w-7 bg-red-800/20 dark:bg-red-400/20 hover:bg-red-700/30 dark:hover:bg-red-400/10 rounded-lg"
        >
            <Trash2 class="w-4 h-4 text-red-500 dark:text-red-500" />
        </Button>
    </div>
</div>
`
	}
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
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="../teamName"
								>Templates</Breadcrumb.Link
							>
						</Breadcrumb.Item>
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page
								>{$page.params.slug}</Breadcrumb.Page
							>
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
						<div class="w-8 h-8 bg-blue-500 rounded-lg flex justify-center items-center"><svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg></div>
					
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
							<DropdownMenu.Item
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
			<div class="min-h-[100vh] flex-1 rounded-xl md:min-h-min w-full">
				<MonacoEditor bind:value={code} language="xml" />
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
