<script lang="ts">
	import { flip } from "svelte/animate";
	import { dndzone, TRIGGERS } from "svelte-dnd-action";
	import Card from "./Card.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { Plus } from "lucide-svelte";
	import RespCard from "./RespCard.svelte";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Label } from "$lib/components/ui/label";
    import Select from "./select.svelte";
	import * as ToggleGroup from "$lib/components/ui/toggle-group";
	
 
	const flipDurationMs = 150;

	export let name;
	export let items;
	export let onFolderDragStart;
	export let onDrop;

	export let isDraggingFolder;
	function handleDndConsiderCards(e) {
		const {
			items: newItems,
			info: { id, trigger },
		} = e.detail;
		console.warn("got consider", name);
		if (trigger == TRIGGERS.DRAG_STARTED) {
			const itemIdx = items.findIndex((item) => item.id === id);
			console.log("index", itemIdx);
			if (!!items[itemIdx].items) {
				onFolderDragStart();
			}
		}
		items = newItems;
	}

	function handleDndFinalizeCards(e) {
		isDraggingFolder = false;
		onDrop(e.detail.items);
		const isParty = Math.random() < 0.2;
	}
</script>

<div class="h-full w-full p-2 min-h-[400px] max-h-[400px] hidden sm:flex flex-col">
	<div
		class="h-fit py-2 px-3 font-semibold text-lg flex items-center justify-between bg-zinc-200/40 dark:bg-zinc-900/40 border-x border-t rounded-t-2xl"
	>
		<div class="flex gap-2 items-center">
			{name}
			<div
				class="h-6 w-6 bg-zinc-200 dark:bg-zinc-800 rounded-md flex justify-center items-center text-xs"
			>
				{items.length}
			</div>
		</div>
		
				<Button
					size="icon"
					class="bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800 h-8 w-8"
				>
					<Plus class="w-4 h-4 text-black dark:text-white" />
				</Button>
			
	</div>
	<div
		class="h-full overflow-x-scroll outline-zinc-500 bg-zinc-200/40 dark:bg-zinc-900/40 rounded-b-2xl focus:ring-none flex xl:flex-col py-1.5 px-1.5 border-x border-b gap-2 max-h-[770px] xl:overflow-y-scroll"
		use:dndzone={{
			items,
			flipDurationMs,
			dropTargetStyle: {
				outline: "1px dashed #71717a",
			},
		}}
		on:consider={handleDndConsiderCards}
		on:finalize={handleDndFinalizeCards}
	>
		{#each items as item (item.id)}
			<div
				animate:flip={{ duration: flipDurationMs }}
				class="outline-none"
			>
				<Card
					name={item.name}
					description={item.description}
					createdBy={item.createdBy}
					endDate={item.endDate}
					important={item.important}
					fordev={item.fordev}
				/>
			</div>
		{/each}
	</div>
</div>

<div class="h-full w-full p-2 flex sm:hidden flex-col">
	<div
		class="h-fit py-2 px-3 w-full font-semibold text-lg flex items-center justify-between bg-zinc-200/40 dark:bg-zinc-900/40 border-x border-t rounded-t-2xl"
	>
		<div class="flex gap-2 items-center">
			{name}
			<div
				class="h-6 w-6 bg-zinc-200 dark:bg-zinc-800 rounded-md flex justify-center items-center text-xs"
			>
				{items.length}
			</div>
		</div>
		<Button
			size="icon"
			class="bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800 h-8 w-8"
		>
			<Plus class="w-4 h-4 text-black dark:text-white" />
		</Button>
	</div>
	<div
		class="h-full outline-zinc-500 bg-zinc-200/40 dark:bg-zinc-900/40 rounded-b-2xl focus:ring-none flex xl:flex-col py-1.5 px-1.5 border-x border-b gap-2 max-h-[790px] overflow-y-scroll"
	>
		{#each items as item (item.id)}
			<div
				animate:flip={{ duration: flipDurationMs }}
				class="outline-none"
			>
				<RespCard
					name={item.name}
					description={item.description}
					createdBy={item.createdBy}
					endDate={item.endDate}
					important={item.important}
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Example: Remove default focus ring */
</style>
