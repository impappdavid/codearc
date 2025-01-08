<script>
    import { Button } from "../ui/button";
    import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
export let value = ""; // Declare the bindable variable

</script>

<div class=" w-full ">
    <div class="w-full bg-zinc-100 dark:bg-zinc-900/50 backdrop-blur-lg h-9 flex justify-between rounded-lg border">
        <div class="flex items-center gap-2 py-0.5 px-2 w-90">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-tools"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" /><path d="M14.5 5.5l4 4" /><path d="M12 8l-5 -5l-4 4l5 5" /><path d="M7 8l-1.5 1.5" /><path d="M16 12l5 5l-4 4l-5 -5" /><path d="M16 17l-1.5 1.5" /></svg>
            <Separator orientation="vertical" />
            <div class="flex gap-2">
                <Button class="h-6 text-xs p-1 bg-transparent text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-900">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                </Button>
            </div>
        </div>
        <div class="flex items-center">
            <Input
            class="text-xs p-0 h-7 px-2 bg-zinc-200 rounded-lg md:w-96 dark:bg-zinc-800/70"
            placeholder="Search by name"
            bind:value
        />
        </div>
        <div class="flex items-center w-90">
            
        </div>

    </div>

</div>