<script>

    import { Trash2 } from "lucide-svelte";
    import { Button } from "../ui/button";
    import Checkbox from "../ui/checkbox/checkbox.svelte";
    import Separator from "../ui/separator/separator.svelte";
    import * as Table from "$lib/components/ui/table";
    import * as ContextMenu from "$lib/components/ui/context-menu";
    import ContextMenuSeparator from "../ui/context-menu/context-menu-separator.svelte";
    import { onDestroy, onMount } from "svelte";
    import * as Dialog from "$lib/components/ui/dialog";
    import DialogFooter from "../ui/dialog/dialog-footer.svelte";

    export let isSelected;

    let rows = [
        {
            id: 0,
            file: {
                name: "+page.svelte",
                icon: "svelte",
                iconpaths:
                    '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8l-5 3l.821 -.495c1.86 -1.15 4.412 -.49 5.574 1.352a3.91 3.91 0 0 1 -1.264 5.42l-5.053 3.126c-1.86 1.151 -4.312 .591 -5.474 -1.251a3.91 3.91 0 0 1 1.263 -5.42l.26 -.16"/><path d="M8 17l5 -3l-.822 .496c-1.86 1.151 -4.411 .491 -5.574 -1.351a3.91 3.91 0 0 1 1.264 -5.42l5.054 -3.127c1.86 -1.15 4.311 -.59 5.474 1.252a3.91 3.91 0 0 1 -1.264 5.42l-.26 .16"/>',
                iconColor: "text-orange-500",
                url: "team/templates/+page.svelte",
            },
            author: "Papp Dávid",
            reviewer: "Bognár Ádám",
            lines: 453,
            status: {
                label: "Error",
                color: "bg-red-400/40",
            },
            category: {
                label: "Frontend",
                color: "dark:bg-sky-500/40",
            },
            createdDate: "2024.10.08",
            updatedDate: "2024.10.01",
            actions: [
                {
                    type: "delete",
                    icon: "trash",
                    iconColor: "dark:text-red-500",
                    buttonClass: "dark:bg-red-400/20 dark:hover:bg-red-400/10",
                },
            ],
            isClicked: false,
        },
        {
            id: 1,
            file: {
                name: "bottom_nav_menu.xml",
                icon: "coffee",
                iconpaths:
                    '<path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" /><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" /><path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />',
                iconColor: "text-black dark:text-white",
                url: "team/templates/bottom_nav_menu.xml",
            },
            author: "Bognár Ádám",
            reviewer: "Bognár Ádám",
            lines: 16,
            status: {
                label: "Ready",
                color: "bg-emerald-400/40",
            },
            category: {
                label: "Frontend",
                color: "dark:bg-sky-500/40",
            },
            createdDate: "2024.07.02",
            updatedDate: "2024.05.01",
            actions: [
                {
                    type: "delete",
                    icon: "trash",
                    iconColor: "dark:text-red-500",
                    buttonClass: "dark:bg-red-400/20 dark:hover:bg-red-400/10",
                },
            ],
            isClicked: false,
        },
        {
            id: 2,
            file: {
                name: "users.ts",
                icon: "typescript",
                iconpaths:
                    '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" /><path d="M9 12h4" /><path d="M11 12v6" /><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"/>',
                iconColor: "text-blue-500",
                url: "team/templates/users.ts",
            },
            author: "Papp Dávid",
            reviewer: "Papp Dávid",
            lines: 160,
            status: {
                label: "Ready",
                color: "bg-emerald-400/40",
            },
            category: {
                label: "Backend",
                color: "dark:bg-green-500/40",
            },
            createdDate: "2024.07.02",
            updatedDate: "2024.05.01",
            actions: [
                {
                    type: "delete",
                    icon: "trash",
                    iconColor: "dark:text-red-500",
                    buttonClass: "dark:bg-red-400/20 dark:hover:bg-red-400/10",
                },
            ],
            isClicked: false,
        },
    ];

    export let searchdata = "";

    $: filteredRows = rows.filter((row) =>
        row.file.name.toLowerCase().includes(searchdata.toLowerCase()),
    );
    let selectedIds = []; // Store selected row IDs

    let lastSelectedId = null; // Track the last selected row for Shift selection

    let foundRows;
    // Function to toggle the clicked state
    function toggleColor(id, event) {
        if (event.shiftKey && lastSelectedId !== null) {
            // If Shift is pressed, select a range of items
            const startIndex = rows.findIndex(
                (row) => row.id === lastSelectedId,
            );
            const endIndex = rows.findIndex((row) => row.id === id);

            // Determine the range (either forward or backward)
            const [start, end] =
                startIndex < endIndex
                    ? [startIndex, endIndex]
                    : [endIndex, startIndex];

            // Select all items within the range
            selectedIds = rows.slice(start, end + 1).map((row) => row.id);
            foundRows = rows.filter((row) => selectedIds.includes(row.id));
        } else if (event.ctrlKey) {
            // If Ctrl is pressed, toggle the selection of the clicked row
            if (selectedIds.includes(id)) {
                // Deselect if already selected
                selectedIds = selectedIds.filter((itemId) => itemId !== id);
                foundRows = rows.filter((row) => selectedIds.includes(row.id));
            } else {
                // Select the row
                selectedIds = [...selectedIds, id];
                foundRows = rows.filter((row) => selectedIds.includes(row.id));
            }
        } else {
            // If neither Ctrl nor Shift is pressed, select only the clicked row and clear others
            selectedIds = [id];
            foundRows = rows.filter((row) => selectedIds.includes(row.id));
        }

        // Update last selected ID
        lastSelectedId = id;
    }

    // Function to select all items
    function selectAll() {
        selectedIds = rows.map((row) => row.id); // Select all row IDs
        foundRows = rows.filter((row) => selectedIds.includes(row.id));
    }

    // Handle "Ctrl + A" keydown
    function handleKeydown(event) {
        if (event.ctrlKey && event.key === "a") {
            event.preventDefault(); // Prevent the default "select all" browser behavior
            selectAll();
        }
    }

    // Attach event listeners on mount and remove on destroy
    onMount(() => {
        if (typeof window !== "undefined") {
            // Only add listeners if running in the browser
            document.addEventListener("keydown", handleKeydown);
        }
    });

    onDestroy(() => {
        if (typeof window !== "undefined") {
            document.removeEventListener("keydown", handleKeydown);
        }
    });
</script>

<div class="w-full flex gap-2 flex-wrap">
    {#if searchdata.length > 0}
        {#each filteredRows as row}
            <ContextMenu.Root>
                <ContextMenu.Trigger>
                    <div
                        key={row.id}
                        class={`selectable-item text-xs flex flex-col gap-1 items-center w-fit px-2 py-2 rounded-xl select-none ${
                            selectedIds.includes(row.id)
                                ? "bg-zinc-200 dark:bg-zinc-800 rounded-lg"
                                : "bg-zinc-100 dark:bg-zinc-900 rounded-lg"
                        }`}
                        ondblclick={() => (location.href = `/${row.file.url}`)}
                        onclick={(event) => toggleColor(row.id, event)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class={`icon icon-tabler icons-tabler-outline icon-tabler-brand-${row.file.icon} ${row.file.iconColor}`}
                        >
                            {@html row.file.iconpaths}
                        </svg>

                        {row.file.name}
                    </div>
                </ContextMenu.Trigger>

                <ContextMenu.Content class="dark:bg-zinc-900 rounded-xl">
                    {#if selectedIds.length > 1}
                        <ContextMenu.Item
                            class="rounded-lg text-red-500 hover:text-red-400"
                            >Remove all</ContextMenu.Item
                        >
                    {:else}
                        <ContextMenu.Item
                            class="rounded-lg"
                            onclick={() => (location.href = `/${row.file.url}`)}
                            >Open</ContextMenu.Item
                        >
                        <ContextMenu.Item class="rounded-lg"
                            >Rename</ContextMenu.Item
                        >
                        <ContextMenuSeparator />
                        <ContextMenu.Item
                            class="rounded-lg text-red-500 hover:text-red-400"
                            >Remove</ContextMenu.Item
                        >
                    {/if}
                </ContextMenu.Content>
            </ContextMenu.Root>
        {/each}
    {:else}
        {#each rows as row}
            <ContextMenu.Root>
                <ContextMenu.Trigger>
                    <div
                        key={row.id}
                        class={`selectable-item text-xs flex flex-col gap-1 items-center w-fit px-2 py-2 rounded-xl select-none ${
                            selectedIds.includes(row.id)
                                ? "bg-zinc-200 dark:bg-zinc-800 rounded-lg"
                                : "bg-zinc-100 dark:bg-zinc-900 rounded-lg"
                        }`}
                        ondblclick={() => (location.href = `/${row.file.url}`)}
                        onclick={(event) => toggleColor(row.id, event)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class={`icon icon-tabler icons-tabler-outline icon-tabler-brand-${row.file.icon} ${row.file.iconColor}`}
                        >
                            {@html row.file.iconpaths}
                        </svg>

                        {row.file.name}
                    </div>
                </ContextMenu.Trigger>

                <ContextMenu.Content class="dark:bg-zinc-900 rounded-xl">
                    {#if selectedIds.length > 1}
                    <Dialog.Root>
                        <Dialog.Trigger class="w-full">
                            <ContextMenu.Item
                                class="rounded-lg text-red-500 hover:text-red-400"
                                >Remove</ContextMenu.Item
                            >
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title
                                    >Are you sure to delete this
                                    file?</Dialog.Title
                                >
                                <Dialog.Description class="flex gap-4 flex-wrap">
                                    {#each foundRows as row}
                                        <div
                                            key={row.id}
                                            class={`selectable-item text-xs flex flex-col gap-1 items-center w-fit px-2 py-2 rounded-xl select-none bg-zinc-100 dark:bg-zinc-950 rounded-lg`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class={`icon icon-tabler icons-tabler-outline icon-tabler-brand-${row.file.icon} ${row.file.iconColor}`}
                                            >
                                                {@html row.file.iconpaths}
                                            </svg>

                                            {row.file.name}
                                        </div>
                                    {/each}
                                </Dialog.Description>
                            </Dialog.Header>
                            <DialogFooter>
                                <div class="w-full flex gap-4">
                                    <Dialog.Close class="w-1/2">
                                        <Button
                                            class="w-full bg-transparent border hover:bg-zinc-900 text-zinc-400 transition-all"
                                            >Close</Button
                                        >
                                    </Dialog.Close>
                                    <Button
                                        class="w-1/2 bg-red-500/50 text-zinc-200 hover:bg-red-500/60 transition-all"
                                        >Delete</Button
                                    >
                                </div>
                            </DialogFooter>
                        </Dialog.Content>
                    </Dialog.Root>
                    {:else}
                        <ContextMenu.Item
                            class="rounded-lg"
                            onclick={() => (location.href = `/${row.file.url}`)}
                            >Open</ContextMenu.Item
                        >
                        <ContextMenu.Item class="rounded-lg"
                            >Rename</ContextMenu.Item
                        >
                        <ContextMenuSeparator />

                        <Dialog.Root>
                            <Dialog.Trigger class="w-full">
                                <ContextMenu.Item
                                    class="rounded-lg text-red-500 hover:text-red-400"
                                    >Remove</ContextMenu.Item
                                >
                            </Dialog.Trigger>
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title
                                        >Are you sure to delete this
                                        file?</Dialog.Title
                                    >
                                    <Dialog.Description>
                                        {#each foundRows as row}
                                            <div
                                                key={row.id}
                                                class={`selectable-item text-xs flex flex-col gap-1 items-center w-fit px-2 py-2 rounded-xl select-none bg-zinc-100 dark:bg-zinc-950 rounded-lg`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="50"
                                                    height="50"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class={`icon icon-tabler icons-tabler-outline icon-tabler-brand-${row.file.icon} ${row.file.iconColor}`}
                                                >
                                                    {@html row.file.iconpaths}
                                                </svg>

                                                {row.file.name}
                                            </div>
                                        {/each}
                                    </Dialog.Description>
                                </Dialog.Header>
                                <DialogFooter>
                                    <div class="w-full flex gap-4">
                                        <Dialog.Close class="w-1/2">
                                            <Button
                                                class="w-full bg-transparent border hover:bg-zinc-900 text-zinc-400 transition-all"
                                                >Close</Button
                                            >
                                        </Dialog.Close>
                                        <Button
                                            class="w-1/2 bg-red-500/50 text-zinc-200 hover:bg-red-500/60 transition-all"
                                            >Delete</Button
                                        >
                                    </div>
                                </DialogFooter>
                            </Dialog.Content>
                        </Dialog.Root>
                    {/if}
                </ContextMenu.Content>
            </ContextMenu.Root>
        {/each}
    {/if}
</div>
