<script>
    import Separator from "../ui/separator/separator.svelte";

    import * as ToggleGroup from "$lib/components/ui/toggle-group";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let { increment, decrement } = $props();
    
    // Track selected filters
    let selectedDevType = $state([]);
    let selectedPriority = $state([]);
    let selectedTimeframe = $state([]);

    // Watch for filter changes and dispatch events
    $effect(() => {
        dispatch('filterChange', {
            devType: selectedDevType,
            priority: selectedPriority,
            timeframe: selectedTimeframe
        });
    });
</script>

<div
    class="w-full px-3 py-1 bg-white dark:bg-zinc-900/50 border rounded-xl flex gap-2 items-center"
>
    <div class="">
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-filter"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"
            /></svg
        >
    </div>
    <Separator orientation="vertical" />
    <div class="flex gap-1 items-center">
        <ToggleGroup.Root type="multiple" bind:value={selectedDevType}>
            <ToggleGroup.Item
                value="frontend"
                aria-label="frontend"
                class="text-xs h-8 gap-1 px-2 text-zinc-400"
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
                class="text-xs h-8 gap-1 px-2 text-zinc-400"
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
    <Separator orientation="vertical" />

    <div class="flex gap-1 items-center">
        <ToggleGroup.Root type="multiple" bind:value={selectedPriority}>
            <ToggleGroup.Item
                value="low"
                aria-label="low"
                class="text-xs h-8 gap-1 px-2 text-zinc-400"
                onclick={decrement}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
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
            </ToggleGroup.Item>
            <ToggleGroup.Item
                value="medium"
                aria-label="medium"
                class="text-xs h-8 gap-1 px-2 text-zinc-400"
                onclick={increment}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
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
            </ToggleGroup.Item>
            <ToggleGroup.Item
                value="high"
                aria-label="high"
                class="text-xs h-8 gap-1 px-2 text-zinc-400"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#ff3d3d"
                        d="M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71"
                    />
                </svg>
            </ToggleGroup.Item>
        </ToggleGroup.Root>
    </div>

    
</div>
