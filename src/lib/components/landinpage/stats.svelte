<script>
    import { Link } from "lucide-svelte";
    import Animatedtext from "../animatedtext.svelte";
    import { cn } from "$lib/utils";

</script>

<div class="w-full max-w-6xl px-2 grid grid-cols-3 gap-4 h-fit pt-24" >
    <div class="flex flex-col items-center px-4 border-r">
        <span class="text-4xl font-semibold">0</span>
        <div class="text-md text-zinc-400">Total users created</div>
    </div>
    <div class="flex flex-col items-center px-4 border-r">
        <span class="text-4xl font-semibold">0</span>
        <div class="text-md text-zinc-400">Total teams created</div>
    </div>
    <div class="flex flex-col items-center px-4 ">
        <span class="text-4xl font-semibold">0</span>
        <div class="text-md text-zinc-400">Total projects created</div>
    </div>
</div>
