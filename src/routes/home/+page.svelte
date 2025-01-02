<script lang="ts">
	import AppSidebar from "$lib/components/sidebar/app-sidebar.svelte";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import DropdownMenuSeparator from "$lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte";
	import LogOut from "lucide-svelte/icons/log-out";
	import {
		Palette,
		Settings,
		User,
		Users,
		Bell,
		CalendarCheck,
		Library,
		ListTodo,
		Database,
		Calendar,
		Calendar1,
	} from "lucide-svelte";
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	import { Button, buttonVariants } from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import Modetoggle from "$lib/components/modetoggle.svelte";
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import Notification from "$lib/components/notifications/notification.svelte";
	import * as HoverCard from "$lib/components/ui/hover-card/index.js";

	let datas = [
		{
			week: 1,
			interactionNumber: 45,
			type: "bg-green-500/40",
			rank: "silver",

		},
		{
			week: 2,
			interactionNumber: 82,
			type: "bg-green-500/60",
			rank: "gold",
		},
		{
			week: 3,
			interactionNumber: 13,
			type: "bg-green-500/20",
			rank: "bronze",
		},
		{
			week: 4,
			interactionNumber: 102,
			type: "bg-green-500/80",
			rank: "diamond",
		},
		{
			week: 5,
			interactionNumber: 139,
			type: "bg-green-500",
			rank: "legendary",
		},
		{
			week: 6,
			interactionNumber: 76,
			type: "bg-green-500/60",
			rank: "gold",
		},
		{
			week: 7,
			interactionNumber: 0,
			type: "bg-zinc-200 dark:bg-zinc-800",
			rank: "none",
		},
		{
			week: 8,
			interactionNumber: 0,
			type: "bg-zinc-200 dark:bg-zinc-800",
			rank: "none",
		},
		{
			week: 9,
			interactionNumber: 121,
			type: "bg-green-500",
			rank: "legendary",
		},
		{
			week: 10,
			interactionNumber: 113,
			type: "bg-green-500/80",
			rank: "diamond",
		},
		{
			week: 11,
			interactionNumber: 60,
			type: "bg-green-500/60",
			rank: "gold",
		},
		{
			week: 12,
			interactionNumber: 53,
			type: "bg-green-500/40",
			rank: "silver",
		},
		{
			week: 13,
			interactionNumber: 142,
			type: "bg-green-500",
			rank: "legendary",
		},
		{
			week: 14,
			interactionNumber: 2,
			type: "bg-green-500/20",
			rank: "bronze",
		},
		{
			week: 15,
			interactionNumber: 97,
			type: "bg-green-500/80",
			rank: "diamond",
		},
		{
			week: 16,
			interactionNumber: 69,
			type: "bg-green-500/60",
			rank: "gold",
		},
		{
			week: 17,
			interactionNumber: 36,
			type: "bg-green-500/40",
			rank: "silver",
		},
		{
			week: 18,
			interactionNumber: 12,
			type: "bg-green-500/20",
			rank: "bronze",
		},
		{
			week: 19,
			interactionNumber: 131,
			type: "bg-green-500",
			rank: "legendary",
		},
		{
			week: 20,
			interactionNumber: 100,
			type: "bg-green-500/80",
			rank: "diamond",
		},
		{
			week: 21,
			interactionNumber: 79,
			type: "bg-green-500/60",
			rank: "gold",
		},
		{
			week: 22,
			interactionNumber: 0,
			type: "bg-zinc-200 dark:bg-zinc-800",
			rank: "none",
		},
		{
			week: 23,
			interactionNumber: 0,
			type: "bg-zinc-200 dark:bg-zinc-800",
			rank: "none",
		},
		{
			week: 24,
			interactionNumber: 0,
			type: "bg-zinc-200 dark:bg-zinc-800",
			rank: "none",
		},
		{
			week: 25,
			interactionNumber: 110,
			type: "bg-green-500/80",
			rank: "diamond",
		},
		{
			week: 26,
			interactionNumber: 0,
			type: "bg-zinc-200 dark:bg-zinc-800",
			rank: "none",
		},
		{
			week: 27,
			interactionNumber: 59,
			type: "bg-green-500/40",
			rank: "silver",
		},
		{
			week: 28,
			interactionNumber: 27,
			type: "bg-green-500/20",
			rank: "bronze",
		},
		{
			week: 29,
			interactionNumber: 200,
			type: "bg-green-500",
			rank: "legendary",
		},
		{
			week: 30,
			interactionNumber: 109,
			type: "bg-green-500/80",
			rank: "diamond",
		},
		{
			week: 31,
			interactionNumber: 73,
			type: "bg-green-500/60",
			rank: "gold",
		},
		{
			week: 32,
			interactionNumber: 43,
			type: "bg-green-500/40",
			rank: "silver",
		},
		{
			week: 33,
			interactionNumber: 11,
			type: "bg-green-500/20",
			rank: "bronze",
		},
		{
			week: 34,
			interactionNumber: 300,
			type: "bg-green-500",
			rank: "legendary",
		},
		{
			week: 35,
			interactionNumber: 0,
			type: "bg-zinc-200 dark:bg-zinc-800",
			rank: "none",
		},
		{
			week: 36,
			interactionNumber: 89,
			type: "bg-green-500/60",
			rank: "gold",
		},
		{
			week: 37,
			interactionNumber: 0,
			type: "bg-zinc-200 dark:bg-zinc-800",
			rank: "none",
		},
		{
			week: 38,
			interactionNumber: 6,
			type: "bg-green-500/20",
			rank: "bronze",
		},
		{
			week: 39,
			interactionNumber: 121,
			type: "bg-green-500",
			rank: "legendary",
		},
		{
			week: 40,
			interactionNumber: 93,
			type: "bg-green-500/80",
			rank: "diamond",
		},
		{
			week: 41,
			interactionNumber: 61,
			type: "bg-green-500/60",
			rank: "gold",
		},
		{
			week: 42,
			interactionNumber: 31,
			type: "bg-green-500/40",
			rank: "silver",
		},
		{
			week: 43,
			interactionNumber: 18,
			type: "bg-green-500/20",
			rank: "bronze",
		},
		{
			week: 44,
			interactionNumber: 169,
			type: "bg-green-500",
			rank: "legendary",
		},
		{
			week: 45,
			interactionNumber: 117,
			type: "bg-green-500/80",
			rank: "diamond",
		},
		{
			week: 46,
			interactionNumber: 64,
			type: "bg-green-500/60",
			rank: "gold",
		},
		{
			week: 47,
			interactionNumber: 46,
			type: "bg-green-500/40",

			rank: "silver",
		},
		{
			week: 48,
			interactionNumber: 0,
			type: "bg-zinc-200 dark:bg-zinc-800",
			rank: "none",
		},
		{
			week: 49,
			interactionNumber: 162,
			type: "bg-green-500",
			rank: "legendary",
		},
		{
			week: 50,
			interactionNumber: 99,
			type: "bg-green-500/80",
			rank: "diamond",
		},
		{
			week: 51,
			interactionNumber: "Avalible in 1 day",
			type: "bg-zinc-200 dark:bg-zinc-800",
			rank: "none",
		},
		{
			week: 52,
			interactionNumber: 0,
			type: "bg-zinc-200 dark:bg-zinc-800",
			rank: "none",
		},
	];
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
						<Breadcrumb.Item>
							<Breadcrumb.Page>Home</Breadcrumb.Page>
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
						class=" p-3 h-full bg-transparent flex-1 w-full"
					>
						<div
							class="bg-zinc-100 dark:bg-zinc-900 rounded-xl h-full p-4"
						>
							<Sheet.Header class="flex flex-col gap-1">
								<Sheet.Title class="flex gap-2 items-center">
									<div class="flex gap-1 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-bell"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
											/><path
												d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
											/></svg
										>
										Notifications
									</div>
									<div
										class="h-5 w-5 bg-zinc-300 dark:bg-zinc-700 text-xs flex justify-center font-normal items-center text-center rounded-md"
									>
										2
									</div>
								</Sheet.Title>
								<Sheet.Description>
									<Separator />
								</Sheet.Description>
							</Sheet.Header>
							<Notification />
							<Sheet.Footer class="">
								<div class="w-full">
									<Button
										class="h-9 w-full dark:bg-zinc-950 text-white dark:hover:bg-zinc-950/80 rounded-xl"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="icon icon-tabler icons-tabler-outline icon-tabler-checks"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path d="M7 12l5 5l10 -10" /><path
												d="M2 12l5 5m5 -5l5 -5"
											/></svg
										>
										Mark all as read
									</Button>
								</div>
							</Sheet.Footer>
						</div>
					</Sheet.Content>
				</Sheet.Root>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="flex items-center gap-2 ">
						<div
							class="w-8 h-8 bg-blue-500 rounded-lg flex justify-center items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-user"
								><path
									stroke="none"
									d="M0 0h24v24H0z"
									fill="none"
								/><path
									d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
								/><path
									d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
								/></svg
							>
						</div>
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
								onclick={() =>
									(location.href = "../profile/david")}
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
			<div class="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
				<div
					class="bg-zinc-100 dark:bg-zinc-900/50 rounded-xl p-2 flex flex-col gap-1"
				>
					<div
						class="w-7 h-7 bg-sky-500/40 rounded-lg flex justify-center items-center text-sky-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-folder"
							><path
								stroke="none"
								d="M0 0h24v24H0z"
								fill="none"
							/><path
								d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"
							/></svg
						>
					</div>
					<div class="font-medium">Total projects</div>
					<div class="text-sky-500 text-3xl font-medium">12</div>
					<div class="text-xs text-zinc-600 dark:text-zinc-400">
						Project finished
					</div>
				</div>
				<div
					class="bg-zinc-100 dark:bg-zinc-900/50 rounded-xl p-2 flex flex-col gap-1"
				>
					<div
						class="w-7 h-7 bg-violet-500/40 rounded-lg flex justify-center items-center text-violet-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
							><path
								stroke="none"
								d="M0 0h24v24H0z"
								fill="none"
							/><path
								d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
							/><path
								d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"
							/><path
								d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
							/><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path
								d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
							/><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg
						>
					</div>
					<div class="font-medium">Your team</div>
					<div class="text-violet-500 text-3xl font-medium">
						David
					</div>
					<div class="text-xs text-zinc-600 dark:text-zinc-400">
						since 2024.01.12
					</div>
				</div>
				<div
					class="bg-zinc-100 dark:bg-zinc-900/50 rounded-xl p-2 flex flex-col gap-1"
				>
					<div
						class="w-7 h-7 bg-orange-500/40 rounded-lg flex justify-center items-center text-orange-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-folder-bolt"
							><path
								stroke="none"
								d="M0 0h24v24H0z"
								fill="none"
							/><path
								d="M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5"
							/><path d="M19 16l-2 3h4l-2 3" /></svg
						>
					</div>
					<div class="font-medium">Active project</div>
					<div class="text-orange-500 text-3xl font-medium">
						Collabug
					</div>
					<div class="text-xs text-zinc-600 dark:text-zinc-400">
						ends 2024.12.31
					</div>
				</div>
				<div
					class="bg-zinc-100 dark:bg-zinc-900/50 rounded-xl p-2 flex flex-col gap-1"
				>
					<div class="flex justify-between">
						<div
							class="w-7 h-7 bg-red-500/40 rounded-lg flex justify-center items-center text-red-500"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-folder-bolt"
								><path
									stroke="none"
									d="M0 0h24v24H0z"
									fill="none"
								/><path
									d="M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5"
								/><path d="M19 16l-2 3h4l-2 3" /></svg
							>
						</div>
						<div class="">
							<HoverCard.Root>
								<HoverCard.Trigger>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle text-red-500"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path
											d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
										/><path d="M12 9h.01" /><path
											d="M11 12h1v4h1"
										/></svg
									>
								</HoverCard.Trigger>
								<HoverCard.Content
									class="w-fit bg-zinc-900/70 backdrop-blur-lg rounded-xl"
									side="bottom"
								>
									<div class="flex gap-1 items-center">
										<div class="w-3 h-3 bg-green-500 rounded-sm">
									
										</div>

										<div class="text-sm text-zinc-400">
											120+
										</div>
									</div>
									<div class="flex gap-1 items-center">
										<div class="w-3 h-3 bg-green-500/80 rounded-sm">
									
										</div>
										<div class="text-sm text-zinc-400">
											90 - 120
										</div>
									</div>
									<div class="flex gap-1 items-center">
										<div class="w-3 h-3 bg-green-500/60 rounded-sm">
									
										</div>
										<div class="text-sm text-zinc-400">
											60 - 90
										</div>
									</div>
									<div class="flex gap-1 items-center">
										<div class="w-3 h-3 bg-green-500/40 rounded-sm">
									
										</div>
										<div class="text-sm text-zinc-400">
											30 - 60
										</div>
									</div>
									<div class="flex gap-1 items-center">
										<div class="w-3 h-3 bg-green-500/20 rounded-sm">
									
										</div>
										<div class="text-sm text-zinc-400">
											0 - 30
										</div>
									</div>
								</HoverCard.Content>
							</HoverCard.Root>
						</div>
					</div>
					<div class="font-medium">Interactions</div>
					<div class="text-red-500 text-3xl font-medium">32</div>
					<div class="text-xs text-zinc-600 dark:text-zinc-400">
						this week
					</div>
				</div>
				<div
					class="col-span-2 lg:col-span-4 2xl:col-span-2 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl p-2 flex flex-col gap-1"
				>
					<div class="flex gap-2 items-center">
						<div
							class="w-7 h-7 bg-green-500/40 rounded-lg flex justify-center items-center text-green-500"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-down"
								><path
									stroke="none"
									d="M0 0h24v24H0z"
									fill="none"
								/><path d="M17 13v-6l-5 4l-5 -4v6l5 4z" /></svg
							>
						</div>
						<div class="font-medium">Activity</div>
					</div>
					<div class="p-2 flex flex-wrap gap-2">
						{#each datas as data}
						<HoverCard.Root>
							<HoverCard.Trigger>
								<div class="w-3 h-3 {data.type} rounded-sm">
									
								</div>
							</HoverCard.Trigger>
							<HoverCard.Content
								class="w-fit bg-zinc-900/70 backdrop-blur-lg rounded-xl"
								side="bottom"
							>
								<div class="flex flex-col gap-1 justify-center">
									<div class="text-sm">Week {data.week}</div>
									<div class="text-xl text-green-500 font-medium">{data.interactionNumber}</div>
									<div class="text-xs text-zinc-400">Interaction</div>
								</div>
								
							</HoverCard.Content>
						</HoverCard.Root>
						{/each}
					</div>
					<div class="text-xs text-zinc-600 dark:text-zinc-400">
						in 2024
					</div>
				</div>
			</div>
			<div class="grid grid-cols-6 gap-4 h-full">
				<div
					class="col-span-6 lg:col-span-2 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl p-2 h-full flex flex-col gap-2"
				>
					<div class="flex justify-between items-center">
						<div class="flex gap-2 items-center">
							<div
								class="w-7 h-7 bg-cyan-500/20 rounded-lg flex justify-center items-center text-cyan-500"
							>
								<ListTodo class="w-4 h-4" />
							</div>
							<div class="font-medium">Todo actions</div>
						</div>
						<div class="">
							<HoverCard.Root>
								<HoverCard.Trigger>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle text-sky-500"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path
											d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
										/><path d="M12 9h.01" /><path
											d="M11 12h1v4h1"
										/></svg
									>
								</HoverCard.Trigger>
								<HoverCard.Content
									class="w-fit bg-zinc-200/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-xl"
									side="bottom"
								>
									<div class="flex gap-1 items-center">
										<div
											class="w-3 h-3 bg-green-500 rounded-full"
										></div>
										<div
											class="text-xs text-zinc-600 dark:text-zinc-400"
										>
											-
										</div>
										<div
											class="text-sm text-zinc-600 dark:text-zinc-400"
										>
											Created
										</div>
									</div>
									<div class="flex gap-1 items-center">
										<div
											class="w-3 h-3 bg-blue-500 rounded-full"
										></div>
										<div
											class="text-xs text-zinc-600 dark:text-zinc-400"
										>
											-
										</div>
										<div
											class="text-sm text-zinc-600 dark:text-zinc-400"
										>
											Edited
										</div>
									</div>
									<div class="flex gap-1 items-center">
										<div
											class="w-3 h-3 bg-red-500 rounded-full"
										></div>
										<div
											class="text-xs text-zinc-600 dark:text-zinc-400"
										>
											-
										</div>
										<div
											class="text-sm text-zinc-600 dark:text-zinc-400"
										>
											Deleted
										</div>
									</div>
									<div class="flex gap-1 items-center">
										<div
											class="w-3 h-3 bg-violet-500 rounded-full"
										></div>
										<div
											class="text-xs text-zinc-600 dark:text-zinc-400"
										>
											-
										</div>
										<div
											class="text-sm text-zinc-600 dark:text-zinc-400"
										>
											Moved
										</div>
									</div>
								</HoverCard.Content>
							</HoverCard.Root>
						</div>
					</div>
					<Separator />
					<div class="h-full max-h-[670px] flex flex-col gap-2">
						<div
							class="w-full bg-zinc-200 dark:bg-zinc-900 border-l-2 border-violet-500 p-2 rounded-r-md flex flex-col gap-2"
						>
							<div
								class="flex justify-between items-center w-full"
							>
								<div class="w-1/3 rounded-full">
									Landing page
								</div>
								<div class="w-1/3 flex justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path d="M5 12l14 0" /><path
											d="M13 18l6 -6"
										/><path d="M13 6l6 6" /></svg
									>
								</div>
								<div class="w-1/3 rounded-full text-end">
									Doing
								</div>
							</div>
							<Separator />
							<div
								class="w-full flex justify-between items-center"
							>
								<div class="flex items-center gap-1">
									<div
										class="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600"
									></div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										Papp Dávid
									</div>
								</div>
								<div class="flex gap-1">
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-month"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
											/><path
												d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"
											/><path
												d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/></svg
										>
									</div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										2024.12.13
									</div>
								</div>
							</div>
						</div>
						<div
							class="w-full bg-zinc-200 dark:bg-zinc-900 border-l-2 border-green-500 p-2 rounded-r-md flex flex-col gap-2"
						>
							<div
								class="flex justify-between items-center w-full"
							>
								<div class="w-1/3 rounded-full">
									Landing page
								</div>
								<div class="w-1/3 flex justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path d="M12 5l0 14" /><path
											d="M5 12l14 0"
										/></svg
									>
								</div>
								<div class="w-1/3 rounded-full text-end">
									Brainstorm
								</div>
							</div>
							<Separator />
							<div
								class="w-full flex justify-between items-center"
							>
								<div class="flex items-center gap-1">
									<div
										class="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-300"
									></div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										Papp Dávid
									</div>
								</div>
								<div class="flex gap-1">
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-month"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
											/><path
												d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"
											/><path
												d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/></svg
										>
									</div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										2024.11.21
									</div>
								</div>
							</div>
						</div>

						<div
							class="w-full bg-zinc-200 dark:bg-zinc-900 border-l-2 border-blue-500 p-2 rounded-r-md flex flex-col gap-2"
						>
							<div
								class="flex justify-between items-center w-full"
							>
								<div class="w-1/3 rounded-full">Todod page</div>
								<div class="w-1/3 flex justify-end">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path
											d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
										/><path
											d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
										/><path d="M16 5l3 3" /></svg
									>
								</div>
							</div>
							<Separator />
							<div
								class="w-full flex justify-between items-center"
							>
								<div class="flex items-center gap-1">
									<div
										class="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-300"
									></div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										Papp Dávid
									</div>
								</div>
								<div class="flex gap-1">
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-month"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
											/><path
												d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"
											/><path
												d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/></svg
										>
									</div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										2024.12.01
									</div>
								</div>
							</div>
						</div>

						<div
							class="w-full bg-zinc-200 dark:bg-zinc-900 border-l-2 border-blue-500 p-2 rounded-r-md flex flex-col gap-2"
						>
							<div
								class="flex justify-between items-center w-full"
							>
								<div class="w-1/3 rounded-full">Todod page</div>
								<div class="w-1/3 flex justify-end">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path
											d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
										/><path
											d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
										/><path d="M16 5l3 3" /></svg
									>
								</div>
							</div>
							<Separator />
							<div
								class="w-full flex justify-between items-center"
							>
								<div class="flex items-center gap-1">
									<div
										class="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-300"
									></div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										Papp Dávid
									</div>
								</div>
								<div class="flex gap-1">
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-month"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
											/><path
												d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"
											/><path
												d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/></svg
										>
									</div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										2024.12.01
									</div>
								</div>
							</div>
						</div>

						<div
							class="w-full bg-zinc-200 dark:bg-zinc-900 border-l-2 border-red-500 p-2 rounded-r-md flex flex-col gap-2"
						>
							<div
								class="flex justify-between items-center w-full"
							>
								<div class="w-1/2 rounded-full">
									Documentation generator
								</div>
								<div class="w-1/2 flex justify-end">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path d="M4 7l16 0" /><path
											d="M10 11l0 6"
										/><path d="M14 11l0 6" /><path
											d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
										/><path
											d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
										/></svg
									>
								</div>
							</div>
							<Separator />
							<div
								class="w-full flex justify-between items-center"
							>
								<div class="flex items-center gap-1">
									<div
										class="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-300"
									></div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										Papp Dávid
									</div>
								</div>
								<div class="flex gap-1">
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-month"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
											/><path
												d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"
											/><path
												d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/></svg
										>
									</div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										2024.12.01
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					class="col-span-6 lg:col-span-2 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl p-2 flex flex-col gap-2"
				>
					<div class="flex justify-between items-center">
						<div class="flex gap-2 items-center">
							<div
								class="w-7 h-7 bg-blue-500/20 rounded-lg flex justify-center items-center text-blue-500"
							>
								<Database class="w-4 h-4" />
							</div>
							<div class="font-medium">
								Database planner actions
							</div>
						</div>
						<div class="">
							<HoverCard.Root>
								<HoverCard.Trigger>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle text-blue-500"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path
											d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
										/><path d="M12 9h.01" /><path
											d="M11 12h1v4h1"
										/></svg
									>
								</HoverCard.Trigger>
								<HoverCard.Content
									class="w-fit bg-zinc-200/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-xl"
									side="bottom"
								>
									<div class="flex gap-1 items-center">
										<div
											class="w-3 h-3 bg-green-500 rounded-full"
										></div>
										<div
											class="text-xs text-zinc-600 dark:text-zinc-400"
										>
											-
										</div>
										<div
											class="text-sm text-zinc-600 dark:text-zinc-400"
										>
											Created
										</div>
									</div>
									<div class="flex gap-1 items-center">
										<div
											class="w-3 h-3 bg-blue-500 rounded-full"
										></div>
										<div
											class="text-xs text-zinc-600 dark:text-zinc-400"
										>
											-
										</div>
										<div
											class="text-sm text-zinc-600 dark:text-zinc-400"
										>
											Edited
										</div>
									</div>
									<div class="flex gap-1 items-center">
										<div
											class="w-3 h-3 bg-red-500 rounded-full"
										></div>
										<div
											class="text-xs text-zinc-600 dark:text-zinc-400"
										>
											-
										</div>
										<div
											class="text-sm text-zinc-600 dark:text-zinc-400"
										>
											Deleted
										</div>
									</div>
								</HoverCard.Content>
							</HoverCard.Root>
						</div>
					</div>
					<Separator />
					<div class="h-full max-h-[670px] flex flex-col gap-2">
						<div
							class="w-full bg-zinc-200 dark:bg-zinc-900 border-l-2 border-green-500 p-2 rounded-r-md flex flex-col gap-2"
						>
							<div
								class="flex justify-between items-center w-full"
							>
								<div class="w-1/2 rounded-full">Users</div>
								<div class="w-1/2 flex justify-end">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path d="M12 5l0 14" /><path
											d="M5 12l14 0"
										/></svg
									>
								</div>
							</div>
							<Separator />
							<div
								class="w-full flex justify-between items-center"
							>
								<div class="flex items-center gap-1">
									<div
										class="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-300"
									></div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										Papp Dávid
									</div>
								</div>
								<div class="flex gap-1">
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-month"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
											/><path
												d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"
											/><path
												d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/></svg
										>
									</div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										2024.11.21
									</div>
								</div>
							</div>
						</div>

						<div
							class="w-full bg-zinc-200 dark:bg-zinc-900 border-l-2 border-blue-500 p-2 rounded-r-md flex flex-col gap-2"
						>
							<div
								class="flex justify-between items-center w-full"
							>
								<div class="w-1/3 rounded-full">Roles</div>
								<div class="w-1/3 flex justify-end">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path
											d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
										/><path
											d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
										/><path d="M16 5l3 3" /></svg
									>
								</div>
							</div>
							<Separator />
							<div
								class="w-full flex justify-between items-center"
							>
								<div class="flex items-center gap-1">
									<div
										class="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-300"
									></div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										Papp Dávid
									</div>
								</div>
								<div class="flex gap-1">
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-month"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
											/><path
												d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"
											/><path
												d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/></svg
										>
									</div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										2024.12.01
									</div>
								</div>
							</div>
						</div>

						<div
							class="w-full bg-zinc-200 dark:bg-zinc-900 border-l-2 border-blue-500 p-2 rounded-r-md flex flex-col gap-2"
						>
							<div
								class="flex justify-between items-center w-full"
							>
								<div class="w-1/3 rounded-full">Roles</div>
								<div class="w-1/3 flex justify-end">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path
											d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
										/><path
											d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
										/><path d="M16 5l3 3" /></svg
									>
								</div>
							</div>
							<Separator />
							<div
								class="w-full flex justify-between items-center"
							>
								<div class="flex items-center gap-1">
									<div
										class="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-300"
									></div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										Papp Dávid
									</div>
								</div>
								<div class="flex gap-1">
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-month"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
											/><path
												d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"
											/><path
												d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/></svg
										>
									</div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										2024.12.01
									</div>
								</div>
							</div>
						</div>

						<div
							class="w-full bg-zinc-200 dark:bg-zinc-900 border-l-2 border-red-500 p-2 rounded-r-md flex flex-col gap-2"
						>
							<div
								class="flex justify-between items-center w-full"
							>
								<div class="w-1/2 rounded-full">Friends</div>
								<div class="w-1/2 flex justify-end">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path d="M4 7l16 0" /><path
											d="M10 11l0 6"
										/><path d="M14 11l0 6" /><path
											d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
										/><path
											d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
										/></svg
									>
								</div>
							</div>
							<Separator />
							<div
								class="w-full flex justify-between items-center"
							>
								<div class="flex items-center gap-1">
									<div
										class="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-300"
									></div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										Papp Dávid
									</div>
								</div>
								<div class="flex gap-1">
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-month"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
											/><path
												d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"
											/><path
												d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/></svg
										>
									</div>
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										2024.12.01
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					class="col-span-6 lg:col-span-2 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl p-2 flex flex-col gap-2"
				>
					<div class="flex justify-between items-center">
						<div class="flex gap-2 items-center">
							<div
								class="w-7 h-7 bg-rose-500/20 rounded-lg flex justify-center items-center text-rose-500"
							>
								<Calendar1 class="w-4 h-4" />
							</div>
							<div class="font-medium">Daily actions</div>
						</div>
						<div class="">
							<HoverCard.Root>
								<HoverCard.Trigger>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle text-rose-500"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path
											d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
										/><path d="M12 9h.01" /><path
											d="M11 12h1v4h1"
										/></svg
									>
								</HoverCard.Trigger>
								<HoverCard.Content
									class="w-fit bg-zinc-200/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-xl"
									side="bottom"
								>
									<div class="flex gap-1 items-center">
										<div
											class="w-3 h-3 bg-green-500 rounded-full"
										></div>
										<div
											class="text-xs text-zinc-600 dark:text-zinc-400"
										>
											-
										</div>
										<div
											class="text-sm text-zinc-600 dark:text-zinc-400"
										>
											Created
										</div>
									</div>
									<div class="flex gap-1 items-center">
										<div
											class="w-3 h-3 bg-blue-500 rounded-full"
										></div>
										<div
											class="text-xs text-zinc-600 dark:text-zinc-400"
										>
											-
										</div>
										<div
											class="text-sm text-zinc-600 dark:text-zinc-400"
										>
											Edited
										</div>
									</div>
								</HoverCard.Content>
							</HoverCard.Root>
						</div>
					</div>
					<Separator />
					<div class="h-full max-h-[670px] flex flex-col gap-2">
						<div
							class="w-full bg-zinc-200 dark:bg-zinc-900 border-l-2 border-green-500 p-2 rounded-r-md flex flex-col gap-2"
						>
							<div
								class="flex justify-between items-center w-full"
							>
								<div class="w-1/2 rounded-full">Users</div>
								<div class="w-1/2 flex justify-end">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path d="M12 5l0 14" /><path
											d="M5 12l14 0"
										/></svg
									>
								</div>
							</div>
							<div
								class="text-xs text-zinc-600 dark:text-zinc-400"
							>
								Created the user db. Inside the user db there is
								id, name, email, password and created at. We
								need this for authentication the user.
							</div>
							<Separator />
							<div
								class="w-full flex justify-between items-center"
							>
								<div class="flex items-center gap-1">
									<div
										class="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-300"
									></div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										Papp Dávid
									</div>
								</div>
								<div class="flex gap-1">
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-month"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
											/><path
												d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"
											/><path
												d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/></svg
										>
									</div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										2024.11.21
									</div>
								</div>
							</div>
						</div>

						<div
							class="w-full bg-zinc-200 dark:bg-zinc-900 border-l-2 border-blue-500 p-2 rounded-r-md flex flex-col gap-2"
						>
							<div
								class="flex justify-between items-center w-full"
							>
								<div class="w-1/3 rounded-full">Roles</div>
								<div class="w-1/3 flex justify-end">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
										><path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/><path
											d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
										/><path
											d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
										/><path d="M16 5l3 3" /></svg
									>
								</div>
							</div>
							<div
								class="text-xs text-zinc-600 dark:text-zinc-400"
							>
								Edited roles db. There was a bad connection to
								the users.
							</div>
							<Separator />
							<div
								class="w-full flex justify-between items-center"
							>
								<div class="flex items-center gap-1">
									<div
										class="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-300"
									></div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										Papp Dávid
									</div>
								</div>
								<div class="flex gap-1">
									<div
										class="text-zinc-600 dark:text-zinc-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-month"
											><path
												stroke="none"
												d="M0 0h24v24H0z"
												fill="none"
											/><path
												d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
											/><path
												d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/><path
												d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"
											/><path
												d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
											/></svg
										>
									</div>
									<div
										class="text-xs text-zinc-600 dark:text-zinc-400"
									>
										2024.12.01
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
