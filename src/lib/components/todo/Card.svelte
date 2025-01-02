<script>
	import { CalendarDays } from "lucide-svelte";
	import Separator from "../ui/separator/separator.svelte";

	export let name;
	export let description;
	export let createdBy;
	export let endDate;
	export let important;
	export let fordev;
</script>

<div
	class="h-fit md:w-[250px] xl:w-full py-2 px-3 flex flex-col gap-2 bg-zinc-200/60 dark:bg-zinc-900 rounded-xl backdrop-blur-lg"
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
		<div
			class="flex items-center w-fit h-fit overflow-visible py-0.5 px-1.5 bg-zinc-300/60 dark:bg-zinc-950/50 border rounded-md text-xs text-zinc-600 dark:text-zinc-400 gap-0.5"
		>
		{#if fordev === "frontend"}
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
		Frontend
	{:else}
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
		Backend
	{/if}
		</div>
		<div class="text-xs flex gap-1 rounded-md text-zinc-600 dark:text-zinc-400 items-center">
			<CalendarDays class="w-3 h-3" />
			{endDate}
		</div>
	</div>
</div>
