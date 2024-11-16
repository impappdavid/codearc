<script lang="ts">
    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";
   
    import { resetMode, setMode } from "mode-watcher";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import Button from "./ui/button/button.svelte";
  </script>
   <div class="flex flex gap-2">
    <div class="flex w-1/3 flex-col gap-1">
        <div class="text-md">
            Light mode
        </div>
        <div class="flex">
            <Button onclick={() => setMode("light")}
                class="w-36 h-24 bg-white rounded-lg hover:opacity-90 transition-all"
            ></Button>
        </div>
    </div>

    <div class="flex w-1/3 flex-col gap-1">
        <div class="text-md">
            Dark mode
        </div>
        <div class="flex gap-2">
            <Button onclick={() => setMode("dark")}
                class="w-36 h-24 bg-zinc-950 rounded-lg hover:bg-zinc-950/80 transition-all"
            ></Button>
            
        </div>
    </div>

    <div class="flex w-1/3 flex-col gap-1">
        <div class="text-md">
            System mode
        </div>
        <div class="flex gap-2">
            <Button onclick={() => resetMode()}
                class="w-36 h-24 bg-zinc-950 rounded-lg hover:bg-zinc-950/80 transition-all"
            ></Button>
            
        </div>
    </div>
</div>

  