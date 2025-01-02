<script>
    import { Button } from "../ui/button";
import { Separator } from "../ui/separator";


</script>

<div class="absolute w-full p-2 z-50">
    <div class="w-full bg-zinc-950/50 backdrop-blur-lg h-9 flex justify-between rounded-lg border">
        <div class="flex items-center gap-2 py-0.5 px-2">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-tools"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" /><path d="M14.5 5.5l4 4" /><path d="M12 8l-5 -5l-4 4l5 5" /><path d="M7 8l-1.5 1.5" /><path d="M16 12l5 5l-4 4l-5 -5" /><path d="M16 17l-1.5 1.5" /></svg>
            <Separator orientation="vertical" />
            <div class="flex gap-2">
                <Button class="h-6 text-xs p-1 bg-transparent text-white hover:bg-zinc-900">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                </Button>
            </div>
        </div>

    </div>

</div>