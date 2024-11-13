<script>
    import {
        FolderPlus,
        Grid2x2,
        Grid3x3,
        List,
        Plus,
        Trash2,
    } from "lucide-svelte";
    import Button from "../ui/button/button.svelte";
    import Separator from "../ui/separator/separator.svelte";
    import Input from "../ui/input/input.svelte";
    import * as Tabs from "$lib/components/ui/tabs";
    import { onMount } from "svelte";
    export let value = ""; // Declare the bindable variable

    import { storable } from '../../stores/templatevies'
    const viewPreference = storable('viewPreference', 'listview');

    
  function setView(view) {
    viewPreference.set(view);  // This will trigger the store subscription and update localStorage
  }
    
</script>

<div
    class="w-full dark:bg-zinc-950/20 py-1.5 px-1.5 rounded-xl border flex justify-between"
>
    <div class="flex gap-2 sm:w-full max-w-[300px]">
        <Button
            class="p-0 h-7 w-7 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-800/70 rounded-lg"
        >
            <Plus class="w-4 h-4 text-black dark:text-white" />
        </Button>
        <Separator orientation="vertical" />
        <Tabs.Trigger value="listview" class="focus:ring-0 focus:ring-offset-0 outline-none">
            <Button
            onclick={() => setView('listview')}
                class="p-0 h-7 w-7 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-800/70 rounded-lg"
            >
                <List class="w-4 h-4 text-black dark:text-white" />
            </Button>
        </Tabs.Trigger>
        <Tabs.Trigger value="boxview" class="focus:ring-0 focus:ring-offset-0 outline-none">
            <Button
            onclick={() => setView('boxview')}
                class="p-0 h-7 w-7 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-800/70 rounded-lg"
            >
                <Grid2x2 class="w-4 h-4 text-black dark:text-white" />
            </Button>
        </Tabs.Trigger>
    </div>
    <div class="flex gap-2">
        <Input
            class="text-xs p-0 h-7 px-2 bg-zinc-200 rounded-lg md:w-96 dark:bg-zinc-800/70"
            placeholder="Search by file name"
            bind:value
            
        />
    </div>
    <div class="flex gap-2 sm:w-full max-w-[300px] justify-end">
        <Button
            class="p-0 h-7 w-7 bg-red-800/20 dark:bg-red-400/20 hover:bg-red-700/30 dark:hover:bg-red-400/10 rounded-lg"
        >
            <Trash2 class="w-4 h-4 text-red-500 dark:text-red-500" />
        </Button>
    </div>
</div>
