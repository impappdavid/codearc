<script>
	import { CalendarDays } from "lucide-svelte";
	import Separator from "../ui/separator/separator.svelte";

	export let name;
	export let description;
	export let createdBy;
	export let endDate;
	export let important;
</script>

<div
	class="h-fit py-2 px-3 w-full flex flex-col gap-2 bg-zinc-100 dark:bg-zinc-900 rounded-xl"
>
	<div class="flex flex-col">
		<div class="flex gap-1 items-center">
			{#if important == "high"}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					{...$$props}
				>
					<path
						fill="#ff3d3d"
						d="M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71"
					/>
				</svg>
			{:else if important == "medium"}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					{...$$props}
				>
					<path
						fill="#fd8c4e"
						fill-opacity="0.3"
						d="M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71"
					/>
					<path
						fill="#fd8c4e"
						d="M14 10L3.71 20.29c-.63.63-.19 1.71.7 1.71H14z"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					{...$$props}
				>
					<path
						fill="#80c1ff"
						fill-opacity="0.3"
						d="M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71"
					/>
					<path
						fill="#80c1ff"
						d="m12 12l-8.29 8.29c-.63.63-.19 1.71.7 1.71H12z"
					/>
				</svg>
			{/if}

			<div class="font-medium text-lg">{name}</div>
		</div>
		<div class="text-xs font-light text-zinc-600 dark:text-zinc-400">
			{description}
		</div>
	</div>

	<Separator />
	<div class="flex w-full justify-between items-center">
		<div class="flex items-center w-12 h-fit overflow-visible py-1 w-full">
			<div class="relative flex">
				<!-- Yellow Circle -->
				<div
					class="w-4 h-4 bg-yellow-500 rounded-full opacity-80"
				></div>
				<!-- Cyan Circle -->
				<div
					class="w-4 h-4 bg-cyan-500 rounded-full opacity-80 -ml-2"
				></div>
				<!-- Blue Circle -->
				<div
					class="w-4 h-4 bg-blue-500 rounded-full opacity-80 -ml-2"
				></div>
			</div>
		</div>
		<div class="text-xs flex gap-1 rounded-md text-zinc-400 items-center">
			<CalendarDays class="w-3 h-3" />
			{endDate}
		</div>
	</div>
</div>
