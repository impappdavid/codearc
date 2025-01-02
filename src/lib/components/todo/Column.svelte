<script lang="ts">
	import { flip } from "svelte/animate";
	import { dndzone, TRIGGERS } from "svelte-dnd-action";
	import Card from "./Card.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { Plus } from "lucide-svelte";
	import RespCard from "./RespCard.svelte";
	import * as Dialog from "$lib/components/ui/dialog";
	import Input from "../ui/input/input.svelte";
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

<div class="h-full w-full p-2 hidden sm:flex flex-col">
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
		<Dialog.Root>
			<Dialog.Trigger>
				<Button
					size="icon"
					class="bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800 h-8 w-8"
				>
					<Plus class="w-4 h-4 text-black dark:text-white" />
				</Button>
			</Dialog.Trigger>
			<Dialog.Content class="w-fit rounded-xl">
				<Dialog.Header>
					<Dialog.Title class="text-xl flex gap-2 items-center"
						>New card
						<div
							class="px-1 py-0.5 text-xs text-zinc-400 flex items-center bg-zinc-900 w-fit border rounded-md"
						>
							{name}
						</div>
					</Dialog.Title>
					<div class="flex flex-col gap-4">
						<div class="">
							<Label for="title">Priority</Label>
							<Select />
						</div>
						<div class="">
							<Label for="title">Title</Label>
							<Input
								id="title"
								class="text-xs p-0 h-8 px-2 bg-zinc-200 rounded-lg md:w-96 dark:bg-zinc-800/70 border"
								placeholder="Card title"
							/>
						</div>
						<div class="flex flex-col gap-1">
							<Label for="description">Description</Label>
							<textarea
								id="description"
								class="text-xs p-2 h-8 px-2 bg-zinc-200 rounded-lg md:w-96 dark:bg-zinc-800/70 h-[100px] resize-none outline-none focus-ring-none border"
								placeholder="Card desription"
							/>
						</div>

						<div class="w-full">
							<Label for="title">Tag</Label>
							<ToggleGroup.Root type="multiple" class="w-full">
								<ToggleGroup.Item
									value="frontend"
									aria-label="frontend"
									class="text-xs h-8 gap-1 px-2 text-zinc-400 w-1/2"
								>
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
										class="icon icon-tabler icons-tabler-outline icon-tabler-stack-forward"
										><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
											d="M12 5l-8 4l8 4l8 -4l-8 -4"
											fill="currentColor"
										/><path d="M10 12l-6 3l8 4l8 -4l-6 -3" /></svg
									>
									<div class="hidden sm:flex">Frontend</div>
								</ToggleGroup.Item>
								<ToggleGroup.Item
									value="backend"
									aria-label="backend"
									class="text-xs h-8 gap-1 px-2 text-zinc-400 w-1/2"
								>
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
										class="icon icon-tabler icons-tabler-outline icon-tabler-stack-backward"
										><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
											d="M14 12l6 -3l-8 -4l-8 4l6 3"
										/><path
											d="M10 12l-6 3l8 4l8 -4l-6 -3l-2 1z"
											fill="currentColor"
										/></svg
									>
									<div class="hidden sm:flex">Backend</div>
								</ToggleGroup.Item>
							</ToggleGroup.Root>
						</div>
						
						<div class="">
							<Label for="title">End date</Label>
							<Input
								id="title"
								type="date"
								class="text-xs p-0 h-8 w-full px-2 bg-zinc-200 rounded-lg md:w-96 dark:bg-zinc-800/70"
								
							/>
						</div>
					</div>
				</Dialog.Header>
				<Dialog.Footer class="w-full">
					<Dialog.Close class="w-full">
						<Button
							type="submit"
							class="outline-none w-full bg-white h-8 text-black rounded-lg hover:bg-white/80"
							>Create</Button
						>
					</Dialog.Close>
				</Dialog.Footer>
			</Dialog.Content>
			
		</Dialog.Root>
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
