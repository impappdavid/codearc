<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
	import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
	import Plus from "lucide-svelte/icons/plus";

	// This should be `Component` after lucide-svelte updates types
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let { teams }: { teams: { name: string; logo: any; plan: string }[] } = $props();
	const sidebar = useSidebar();

	let activeTeam = $state(teams[0]);
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						{...props}
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground rounded-xl border transition-all hover:bg-zinc-950/20"
					>
						<div
							class="bg-orange-500 text-sidebar-primary-foreground  flex aspect-square size-8 items-center justify-center rounded-lg"
						>
							<activeTeam.logo class="size-4 text-white dark:text-black" />
						</div>
						<div class="grid flex-1 text-left text-sm leading-tight">
							<span class="truncate font-semibold">
								{activeTeam.name}
							</span>
							<span class="truncate text-xs text-zinc-400">{activeTeam.plan}</span>
						</div>
						<ChevronsUpDown class="ml-auto" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				class="w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-xl bg-zinc-200/20 dark:bg-zinc-950/20 backdrop-blur-lg"
				align="start"
				side={sidebar.isMobile ? "bottom" : "bottom"}
				sideOffset={4}
			>
				<DropdownMenu.Label class="text-muted-foreground text-xs">Team projects</DropdownMenu.Label>
				{#each teams as team, index (team.name)}
					<DropdownMenu.Item onSelect={() => (activeTeam = team)} class="gap-2 p-2 hover:cursor-pointer rounded-lg">
						<div class="flex size-6 items-center justify-center rounded-sm border">
							<team.logo class="size-4 shrink-0" />
						</div>
						{team.name}
					</DropdownMenu.Item>
				{/each}
				<DropdownMenu.Separator />
				<DropdownMenu.Item class="gap-2 p-2 hover:cursor-pointer rounded-lg">
					<div
						class="bg-zinc-950/20 flex size-6 items-center justify-center rounded-md border"
					>
						<Plus class="size-4" />
					</div>
					<div class="text-muted-foreground font-medium">Add project</div>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>
