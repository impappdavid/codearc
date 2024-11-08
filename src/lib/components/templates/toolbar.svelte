<script>
    import { FolderPlus, Grid2x2, Grid3x3, List, Plus, Trash2 } from "lucide-svelte";
    import Button from "../ui/button/button.svelte";
    import Separator from "../ui/separator/separator.svelte";
    import Input from "../ui/input/input.svelte";
</script>

<div
    class="w-full dark:bg-zinc-950/20 py-1 px-1 rounded-xl border flex justify-between"
>
    <div class="flex gap-2">
        <Button
            class="p-0 h-7 w-7 dark:bg-zinc-800 dark:hover:bg-zinc-800/70 rounded-lg"
        >
            <Plus class="w-4 h-4 dark:text-white" />
        </Button>
        <Button
            class="p-0 h-7 w-7 dark:bg-zinc-800 dark:hover:bg-zinc-800/70 rounded-lg"
        >
            <FolderPlus class="w-4 h-4 dark:text-white" />
        </Button>
        <Separator orientation="vertical" />
        <Button
            class="p-0 h-7 w-7 dark:bg-zinc-800 dark:hover:bg-zinc-800/70 rounded-lg"
        >
            <List class="w-4 h-4 dark:text-white" />
        </Button>
        <Button
            class="p-0 h-7 w-7 dark:bg-zinc-800 dark:hover:bg-zinc-800/70 rounded-lg"
        >
            <Grid2x2 class="w-4 h-4 dark:text-white" />
        </Button>
    </div>
    <div class="flex gap-2">
        
        <Input class="text-xs p-0 h-7 px-2 rounded-lg w-96 bg-zinc-800/70" placeholder="Search"/>
            
    </div>
    <div class="flex gap-2">
        
        <Button
            class="p-0 h-7 w-7 dark:bg-red-400/20 dark:hover:bg-red-400/10 rounded-lg"
        >
            <Trash2 class="w-4 h-4 dark:text-red-500" />
        </Button>
    </div>
</div>
