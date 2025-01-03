<script>
    import { Link } from "lucide-svelte";
    import Animatedtext from "../animatedtext.svelte";
    import { cn } from "$lib/utils";
    import Flickering from "./flickering.svelte";
    let totalUsers= 12;
    let totalTeams = 2;
    let totalProjects = 5;
</script>

<div
    class="relative h-32 max-w-4xl w-full mx-auto bg-background overflow-hidden border-x border-b"
>
    <Flickering
        class="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.2}
        flickerChance={0.1}
        width={900}
        height={200}
    />
    <div class="w-full flex justify-center h-full items-center">
        <div class="text-md font-bold text-zinc-500">STATISTICS</div>
    </div>
</div>

<div class="grid grid-cols-3 w-full max-w-4xl grid grid-cols-3 h-fit border-x border-b " >
    <div class="flex flex-col w-full items-center py-2 text-zinc-400 hover:text-white transition-all">
        <div class="text-4xl">{totalUsers}</div>
        <div class="text-sm">User created</div>
    </div>
    <div class="flex flex-col w-full items-center border-x py-2 text-zinc-400 hover:text-white transition-all">
        <div class="text-4xl">{totalTeams}</div>
        <div class="text-sm">Teams created</div>
    </div>
    <div class="flex flex-col w-full items-center py-2 text-zinc-400 hover:text-white transition-all">
        <div class="text-4xl">{totalProjects}</div>
        <div class="text-sm">Projects created</div>
    </div>
</div>
