<script>
    import { Link } from "lucide-svelte";
    import Animatedtext from "../animatedtext.svelte";
    import { cn } from "$lib/utils";

</script>

<div class="w-full max-w-6xl px-2 flex flex-col items-center h-screen pt-24" id="features">
    <div
            class={cn(
                "group mx-auto rounded-md w-fit border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-zinc-200 dark:border-white/5 dark:bg-zinc-900 dark:hover:bg-zinc-800",
            )}
        >
            <Animatedtext
                class=" inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-zinc-600 hover:duration-600 hover:dark:text-zinc-400 flex gap-1 text-sm"
            >
                Features
            </Animatedtext>
        </div>
</div>
