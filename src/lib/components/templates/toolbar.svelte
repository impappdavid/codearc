<script>
    import {
    ChevronRight,
        FolderPlus,
        Grid2x2,
        Grid3x3,
        Info,
        List,
        Plus,
        Trash2,
        File,
    } from "lucide-svelte";
    import Button from "../ui/button/button.svelte";
    import Separator from "../ui/separator/separator.svelte";
    import Input from "../ui/input/input.svelte";
    import * as Tabs from "$lib/components/ui/tabs";
    export let value = ""; // Declare the bindable variable

    import { storable } from "../../stores/templatevies";
    const viewPreference = storable("viewPreference", "listview");

    function setView(view) {
        viewPreference.set(view); // This will trigger the store subscription and update localStorage
    }
    import * as Dialog from "$lib/components/ui/dialog";
</script>

<div
    class="w-full dark:bg-zinc-950/20 py-1.5 px-1.5 rounded-xl border flex justify-between"
>
    <div class="flex gap-2 sm:w-full max-w-[300px]">
        <Dialog.Root>
            <Dialog.Trigger>
        <Button
            class="p-0 h-7 w-7 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-800/70 rounded-lg outline-none"
        >
            <Plus class="w-4 h-4 text-black dark:text-white" />
        </Button>
    </Dialog.Trigger>
    <Dialog.Content
        class="sm:max-w-[425px]  rounded-2xl border-none backdrop-blur-md"
    >
        <Dialog.Header>
            <Dialog.Title class="flex gap-1 items-center "
                ><File class="w-4 h-4 " />
                New file</Dialog.Title
            >
        </Dialog.Header>
        <div class="grid gap-2 py-4 text-sm text-white flex flex-col">
            <Input
            class="text-xs p-0 h-8 px-2 bg-zinc-200 rounded-lg md:w-96 dark:bg-zinc-800/70"
            placeholder="File name..."
        />
        </div>
        <Dialog.Footer class="w-full">
            <Dialog.Close class="w-full">
                <Button
                    type="submit"
                    class="outline-none w-full bg-green-600 h-8 text-white rounded-lg hover:bg-green-700"
                    >Save</Button
                >
            </Dialog.Close>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>

        <Separator orientation="vertical" />
        <Tabs.Trigger
            value="listview"
            class="focus:ring-0 focus:ring-offset-0 outline-none"
        >
            <Button
                onclick={() => setView("listview")}
                class="p-0 h-7 w-7 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-800/70 rounded-lg"
            >
                <List class="w-4 h-4 text-black dark:text-white" />
            </Button>
        </Tabs.Trigger>
        <Tabs.Trigger
            value="boxview"
            class="focus:ring-0 focus:ring-offset-0 outline-none"
        >
            <Button
                onclick={() => setView("boxview")}
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
        <Dialog.Root>
            <Dialog.Trigger>
                <Button
                    class="p-0 h-7 w-7 bg-sky-800/20 dark:bg-sky-400/20 hover:bg-sky-700/30 dark:hover:bg-sky-400/30 rounded-lg outline-none"
                >
                    <Info class="w-4 h-4 text-sky-500 dark:text-sky-500" />
                </Button>
            </Dialog.Trigger>
            <Dialog.Content
                class="sm:max-w-[425px] bg-sky-400/20 rounded-2xl border-none backdrop-blur-md"
            >
                <Dialog.Header>
                    <Dialog.Title class="flex gap-1 items-center text-sky-500"
                        ><Info class="w-4 h-4 text-sky-500 dark:text-sky-500" />
                        Info</Dialog.Title
                    >
                </Dialog.Header>
                <div class="grid gap-2 py-4 text-sm text-white flex flex-col">
                    <div class="flex flex-col gap-2">
                        <div class="text-sm text-sky-300">Open</div>
                        <div class="">Double click</div>
                        <div class="flex items-center">Right click <ChevronRight class="w-4 h-4"/> open</div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="text-sm text-sky-300">Select</div>
                        <div class="">Single - Left click</div>
                        <div class="">Multiple - Hold ctrl + left click</div>
                        <div class="">Stack - Hold shift + left click</div>
                        <div class="">All - ctrk + a</div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="text-sm text-white">Action</div>
                        <div class="">All - Right click</div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="text-sm text-sky-300">Action types</div>
                        <div class="">Single - Open, Rename, Delete</div>
                        <div class="">Multiple - Delete</div>
                    </div>
                </div>
                <Dialog.Footer class="w-full">
                    <Dialog.Close class="w-full">
                        <Button
                            type="submit"
                            class="outline-none w-full bg-sky-500 h-8 text-white rounded-lg hover:bg-sky-600"
                            >Close</Button
                        >
                    </Dialog.Close>
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    </div>
</div>
