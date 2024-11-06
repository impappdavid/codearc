<script>
    import { Link } from "lucide-svelte";
    import Animatedtext from "../animatedtext.svelte";
    import { Button } from "../ui/button";
    import { cn } from "$lib/utils";


</script>

<div class="w-full max-w-6xl">
    <div class="w-full p-2 aspect-video pt-14 sm:pt-28 flex flex-col gap-6">
        <div
            class={cn(
                "group mx-auto rounded-md w-fit border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-zinc-200 dark:border-white/5 dark:bg-zinc-900 dark:hover:bg-zinc-800",
            )}
        >
            <Animatedtext
                class=" inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-zinc-600 hover:duration-600 hover:dark:text-zinc-400 flex gap-1 text-sm"
            >
                <Link class="w-4 h-4" />
                Collabug v1.0
            </Animatedtext>
        </div>
        <div
            class="w-full flex justify-center text-xl sm:text-6xl text-center tracking-normal leading-relaxed font-semibold"
        >
            Manage your development teams and projects effortlessly with
            Collabug.
        </div>
        <div
            class="text-sm sm:text-md text-zinc-400 w-full mx-auto max-w-2xl"
        >
            <div class="text-center ">
                With Collabug, easily collaborate with your team,
                track project progress in real-time, and ensure timely
                delivery of results, all from a single, intuitive
                platform.
            </div>
        </div>
        <div class="flex gap-2 mx-auto pt-2 sm:pt-6">
            <Button class="border-none rounded-lg px-6">Get started</Button>
            <Button variant="outline" class="rounded-lg px-6">Learn more</Button>
        </div>
        <div class="w-full bg-white aspect-video rounded-xl border dark:bg-zinc-900 bg-zinc-200"></div>
    </div>
</div>