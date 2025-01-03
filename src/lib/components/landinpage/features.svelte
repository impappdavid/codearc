<script>
    import { Link } from "lucide-svelte";
    import Animatedtext from "../animatedtext.svelte";
    import { cn } from "$lib/utils";
    import Flickering from "./flickering.svelte";
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
        <div class="text-md font-bold text-zinc-500">FEATURES</div>
    </div>
</div>

<div
    class="grid grid-cols-3 w-full max-w-4xl grid grid-cols-3  h-fit border-x border-b"
>
    <div class="w-full flex flex-col items-center p-4 gap-2 border-b hover:bg-zinc-900/30 transition-all">
        <div
            class="w-12 h-12 bg-sky-600 rounded-lg flex justify-center items-center"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                /><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path
                    d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path
                    d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg
            >
        </div>
        <div class="text-lg font-semibold">Team Collaboration</div>
        <div class="text-sm text-zinc-400 text-center max-w-xs">
            Effortlessly create and manage multiple projects within your team.
        </div>
        <div class="">
            <a href="#" class="text-sm text-sky-600 font-medium hover:underline"
                >Learn more ></a
            >
        </div>
    </div>

    <div class="w-full flex flex-col items-center p-4 gap-2 border-x border-b hover:bg-zinc-900/30 transition-all">
        <div
            class="w-12 h-12 bg-sky-600 rounded-lg flex justify-center items-center"
        >
        <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brain"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" /><path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" /><path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" /><path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" /><path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" /><path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" /></svg>
        </div>
        <div class="text-lg font-semibold">AI-Powered Tools</div>
        <div class="text-sm text-zinc-400 text-center max-w-xs">
            Leverage cutting-edge AI for code quality checks
        </div>
        <div class="">
            <a href="#" class="text-sm text-sky-600 font-medium hover:underline"
                >Learn more ></a
            >
        </div>
    </div>

    <div class="w-full flex flex-col items-center p-4 gap-2 border-b hover:bg-zinc-900/30 transition-all">
        <div
            class="w-12 h-12 bg-sky-600 rounded-lg flex justify-center items-center"
        >
        <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-database"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" /></svg>
        </div>
        <div class="text-lg font-semibold">Database Planner</div>
        <div class="text-sm text-zinc-400 text-center max-w-xs">
            Design and generate SQL databases with just a few clicks.
        </div>
        <div class="">
            <a href="#" class="text-sm text-sky-600 font-medium hover:underline"
                >Learn more ></a
            >
        </div>
    </div>

    <div class="w-full flex flex-col items-center p-4 gap-2 hover:bg-zinc-900/30 transition-all">
        <div
            class="w-12 h-12 bg-sky-600 rounded-lg flex justify-center items-center"
        >
        <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-list"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /></svg>
    </div>
        <div class="text-lg font-semibold">Advanced Todo</div>
        <div class="text-sm text-zinc-400 text-center max-w-xs">
            Filter tasks by backend, frontend, or priority. Mark important items.
        </div>
        <div class="">
            <a href="#" class="text-sm text-sky-600 font-medium hover:underline"
                >Learn more ></a
            >
        </div>
    </div>

    <div class="w-full flex flex-col items-center p-4 gap-2 border-x hover:bg-zinc-900/30 transition-all">
        <div
            class="w-12 h-12 bg-sky-600 rounded-lg flex justify-center items-center"
        >
        <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-api"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 13h5" /><path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" /><path d="M20 8v8" /><path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" /></svg>
    </div>
        <div class="text-lg font-semibold">API Route Manager</div>
        <div class="text-sm text-zinc-400 text-center max-w-xs">
            View backend API routes with clear instructions on required parameters.
        </div>
        <div class="">
            <a href="#" class="text-sm text-sky-600 font-medium hover:underline"
                >Learn more ></a
            >
        </div>
    </div>

    <div class="w-full flex flex-col items-center p-4 gap-2 border-x hover:bg-zinc-900/30 transition-all">
        <div
            class="w-12 h-12 bg-sky-600 rounded-lg flex justify-center items-center"
        >
        <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-social"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 7l0 4" /><path d="M6.7 17.8l2.8 -2" /><path d="M17.3 17.8l-2.8 -2" /></svg>
    </div>
        <div class="text-lg font-semibold">Social</div>
        <div class="text-sm text-zinc-400 text-center max-w-xs">
            Showcase your projects on a dynamic feed, connect with other teams
        </div>
        <div class="">
            <a href="#" class="text-sm text-sky-600 font-medium hover:underline"
                >Learn more ></a
            >
        </div>
    </div>

</div>
