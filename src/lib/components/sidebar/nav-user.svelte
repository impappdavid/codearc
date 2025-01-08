<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
	import BadgeCheck from "lucide-svelte/icons/badge-check";
	import Bell from "lucide-svelte/icons/bell";
	import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
	import CreditCard from "lucide-svelte/icons/credit-card";
	import LogOut from "lucide-svelte/icons/log-out";
	import Sparkles from "lucide-svelte/icons/sparkles";

	let { user }: { user: { name: string; email: string; avatar: string } } =
		$props();
	const sidebar = useSidebar();
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground rounded-xl border transition-all hover:bg-zinc-950/20"
						{...props}
					>
						<div
							class="bg-orange-500 text-white dark:text-black text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
						>
						<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
						</div>
						<div
							class="grid flex-1 text-left text-sm leading-tight"
						>
							<span class="truncate font-semibold"
								>{user.name}</span
							>
							<span
								class="truncate text-xs text-zinc-600 dark:text-zinc-400"
								>{user.email}</span
							>
						</div>
						<ChevronsUpDown class="ml-auto size-4" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				class="w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-xl bg-zinc-200/20 dark:bg-zinc-950/20 backdrop-blur-lg"
				side={sidebar.isMobile ? "top" : "top"}
				align="end"
				sideOffset={4}
			>
				<DropdownMenu.Label class="p-0 font-normal ">
					<div
						class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
					>
					<div
					class="bg-orange-500 text-white dark:text-black text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
				>
				<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
				</div>
						<div
							class="grid flex-1 text-left text-sm leading-tight"
						>
							<span class="truncate font-semibold"
								>{user.name}</span
							>
							<span
								class="truncate text-xs text-zinc-600 dark:text-zinc-400"
								>{user.email}</span
							>
						</div>
					</div>
				</DropdownMenu.Label>
				<DropdownMenu.Separator />

				<DropdownMenu.Group>
					<DropdownMenu.Item
						class="hover:cursor-pointer rounded-lg"
						onclick={() => (location.href = "../../team/collabug")}
					>
						<BadgeCheck />
						Team
					</DropdownMenu.Item>
					<DropdownMenu.Item
						class="hover:cursor-pointer rounded-lg"
						onclick={() =>
							(location.href = "../../team/settings/collabug")}
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
							class="icon icon-tabler icons-tabler-outline icon-tabler-settings"
							><path
								stroke="none"
								d="M0 0h24v24H0z"
								fill="none"
							/><path
								d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
							/><path
								d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
							/></svg
						>
						Settings
					</DropdownMenu.Item>
					
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Item class=" dark:text-red-400 border-red-500">
					<LogOut />
					Leave team
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>
