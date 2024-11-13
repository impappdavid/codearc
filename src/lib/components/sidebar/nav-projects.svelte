<script lang="ts">
	import * as Collapsible from "$lib/components/ui/collapsible/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import ChevronRight from "lucide-svelte/icons/chevron-right";

	let {
		projects,
	}: {
		projects: {
			name: string;
			url: string;
			// this should be `Component` after lucide-svelte updates types
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			icon?: any;
			
		}[];
	} = $props();
</script>

<Sidebar.Group>
	<Sidebar.GroupLabel>Project</Sidebar.GroupLabel>
	<Sidebar.Menu>
		{#each projects as mainItem (mainItem.name)}
			<Collapsible.Root class="group/collapsible ">
				{#snippet child({ props })}
					<Sidebar.MenuItem {...props} onclick={() => location.href= mainItem.url}>
						<Collapsible.Trigger class="rounded-lg transition-all">
							{#snippet child({ props })}
								<Sidebar.MenuButton {...props}>
									{#snippet tooltipContent()}
										{mainItem.name}
									{/snippet}
									{#if mainItem.icon}
										<mainItem.icon />
									{/if}
									<span>{mainItem.name}</span>
									
								</Sidebar.MenuButton>
							{/snippet}
						</Collapsible.Trigger>
						
					</Sidebar.MenuItem>
				{/snippet}
			</Collapsible.Root>
		{/each}
	</Sidebar.Menu>
</Sidebar.Group>
