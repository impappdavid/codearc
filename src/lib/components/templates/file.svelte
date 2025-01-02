<script>
    import { Button } from "../ui/button";
    import Checkbox from "../ui/checkbox/checkbox.svelte";
    import Separator from "../ui/separator/separator.svelte";
    import * as Table from "$lib/components/ui/table";
    import * as ContextMenu from "$lib/components/ui/context-menu";
    import { onDestroy, onMount } from "svelte";
    import { Trash2 } from "lucide-svelte";
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
                url: "team/templates/editor/+page.svelte",
            },
            author: "Papp Dávid",
            reviewer: "Bognár Ádám",
            lines: 41,
            createdDate: "2024.10.08",
            updatedDate: "2024.10.01",
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
                url: "team/templates/editor/bottom_nav_menu.xml",
            },
            author: "Bognár Ádám",
            reviewer: "Bognár Ádám",
            lines: 16,
            createdDate: "2024.07.02",
            updatedDate: "2024.05.01",
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
                url: "team/templates/editor/users.ts",
            },
            author: "Papp Dávid",
            reviewer: "Papp Dávid",
            lines: 0,
            createdDate: "2024.07.02",
            updatedDate: "2024.05.01",
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
      const startIndex = rows.findIndex(row => row.id === lastSelectedId);
      const endIndex = rows.findIndex(row => row.id === id);

      // Determine the range (either forward or backward)
      const [start, end] = startIndex < endIndex ? [startIndex, endIndex] : [endIndex, startIndex];
      
      // Select all items within the range
      selectedIds = rows.slice(start, end + 1).map(row => row.id);
      foundRows = rows.filter((row) => selectedIds.includes(row.id));
    } else if (event.ctrlKey) {
      // If Ctrl is pressed, toggle the selection of the clicked row
      if (selectedIds.includes(id)) {
        // Deselect if already selected
        selectedIds = selectedIds.filter(itemId => itemId !== id);
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
    selectedIds = rows.map(row => row.id); // Select all row IDs
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

{#if searchdata.length > 0}
    {#each filteredRows as row}
    <ContextMenu.Root>
        <ContextMenu.Trigger>
            <div
            class={`selectable-item flex items-center border-t border-zinc-400 select-none ${
                selectedIds.includes(row.id)
                    ? "bg-zinc-200 dark:bg-zinc-900/90 select-none"
                    : "bg-zinc-100 dark:bg-transparent select-none"
            }`}
                class:selected={selectedIds.includes(row.id)}
                ondblclick={() => (location.href = `/${row.file.url}`)}
                onclick={(event) => toggleColor(row.id, event)}
            >
                <div class="px-2 flex-1 flex items-center gap-1 text-xs">
                    <!-- File Icon and Name -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class={`w-4 h-4 icon icon-tabler icon-tabler-brand-${row.file.icon} ${row.file.iconColor}`}
                    >
                        {@html row.file.iconpaths}
                    </svg>
                    {row.file.name}
                </div>
                <div class="p-2 flex-1 text-xs">{row.author}</div>
                <div class="p-2 flex-1 text-xs">{row.reviewer}</div>
                <div class="p-2 flex-1 text-xs">{row.lines}</div>
                <div class="p-2 flex-1 text-xs">{row.createdDate}</div>
                <div class="p-2 flex-1 text-xs text-right">
                    {row.updatedDate}
                </div>
            </div>
        </ContextMenu.Trigger>

        <ContextMenu.Content class="dark:bg-zinc-900 rounded-xl">
            <ContextMenu.Item
                class="rounded-lg"
                onclick={() => (location.href = `/${row.file.url}`)}
            >
                Open
            </ContextMenu.Item>
            <ContextMenu.Item class="rounded-lg">Rename</ContextMenu.Item>
            <ContextMenu.Separator />
            {#if selectedIds.length > 1}
                <ContextMenu.Item
                    class="rounded-lg text-red-500 hover:text-red-400"
                >
                    Remove all
                </ContextMenu.Item>
            {:else}
                <ContextMenu.Item
                    class="rounded-lg text-red-500 hover:text-red-400 outline-none"
                >
                    Remove
                </ContextMenu.Item>
            {/if}
        </ContextMenu.Content>
    </ContextMenu.Root>
    {/each}
{:else}
    {#each rows as row (row.id)}
        <ContextMenu.Root>
            <ContextMenu.Trigger>
                <div
                class={`selectable-item flex items-center border-t border-zinc-300 dark:border-zinc-700 ${
                    selectedIds.includes(row.id)
                        ? "bg-zinc-200 dark:bg-zinc-900/90 select-none"
                        : "bg-zinc-100 dark:bg-transparent select-none"
                }`}
                    class:selected={selectedIds.includes(row.id)}
                    ondblclick={() => (location.href = `/${row.file.url}`)}
                    onclick={(event) => toggleColor(row.id, event)}
                >
                    <div class="px-2 flex-1 flex items-center gap-1 text-xs">
                        <!-- File Icon and Name -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class={`w-4 h-4 icon icon-tabler icon-tabler-brand-${row.file.icon} ${row.file.iconColor}`}
                        >
                            {@html row.file.iconpaths}
                        </svg>
                        {row.file.name}
                    </div>
                    <div class="p-2 hidden md:flex flex-1 text-xs">{row.author}</div>
                    <div class="p-2 hidden xl:flex flex-1 text-xs">{row.reviewer}</div>
                    <div class="p-2 hidden md:flex flex-1 text-xs">{row.lines}</div>
                    <div class="p-2 hidden xl:flex flex-1 text-xs">{row.createdDate}</div>
                    <div class="p-2 flex-1 text-xs text-right">
                        {row.updatedDate}
                    </div>
                </div>
            </ContextMenu.Trigger>

            <ContextMenu.Content class="dark:bg-zinc-900 rounded-xl">
                
                {#if selectedIds.length > 1}
                <Dialog.Root>
                    
                    <Dialog.Trigger class="w-full outline-none">
                        <ContextMenu.Item
                            class="rounded-lg text-red-500 hover:text-red-400 outline-none"
                            >Remove</ContextMenu.Item
                        >
                    </Dialog.Trigger>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title
                                >Are you sure to delete this
                                file?</Dialog.Title
                            >
                            <Dialog.Description class="flex-1 gap-2 flex-col w-full">
                                {#each foundRows as row}
                                <div
                                class={`selectable-item flex items-center bg-zinc-950`}
                                    
                                >
                                    <div class="px-2 flex-1 flex items-center gap-1 text-xs">
                                        <!-- File Icon and Name -->
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class={`w-4 h-4 icon icon-tabler icon-tabler-brand-${row.file.icon} ${row.file.iconColor}`}
                                        >
                                            {@html row.file.iconpaths}
                                        </svg>
                                        {row.file.name}
                                    </div>
                                    <div class="p-2 hidden md:flex flex-1 text-xs">{row.author}</div>
                                    <div class="p-2 hidden md:flex flex-1 text-xs">{row.lines}</div>
                                    <div class="p-2 flex-1 text-xs text-right">
                                        {row.updatedDate}
                                    </div>
                                </div>
                                {/each}
                            </Dialog.Description>
                        </Dialog.Header>
                        <DialogFooter>
                            <div class="w-full flex gap-4">
                                <Dialog.Close class="w-1/2 outline-none">
                                    <Button
                                        class="w-full bg-transparent border hover:bg-zinc-900 text-zinc-400 transition-all rounded-xl"
                                        >Close</Button
                                    >
                                </Dialog.Close>
                                <Button
                                    class="w-1/2 bg-red-500/50 text-zinc-200 hover:bg-red-500/60 transition-all rounded-xl"
                                    >Delete</Button
                                >
                            </div>
                        </DialogFooter>
                    </Dialog.Content>
                </Dialog.Root>
                {:else}
                <ContextMenu.Item
                    class="rounded-lg text-xs"
                    onclick={() => (location.href = `/${row.file.url}`)}
                >
                    Open
                </ContextMenu.Item>
                <ContextMenu.Item class="rounded-lg text-xs">Rename</ContextMenu.Item>
                <ContextMenu.Separator />
                <Dialog.Root>
                    
                    <Dialog.Trigger class="w-full">
                        <ContextMenu.Item
                            class="rounded-lg text-red-500 hover:text-red-400  outline-none"
                            >Remove</ContextMenu.Item
                        >
                    </Dialog.Trigger>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title
                                >Are you sure to delete this
                                file?</Dialog.Title
                            >
                            <Dialog.Description class="flex-1 gap-2 flex-col w-full mt-2">
                                {#each foundRows as row}
                                <div
                                class={`selectable-item flex items-center bg-zinc-950`}
                                    
                                >
                                    <div class="px-2 flex-1 flex items-center gap-1 text-xs">
                                        <!-- File Icon and Name -->
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class={`w-4 h-4 icon icon-tabler icon-tabler-brand-${row.file.icon} ${row.file.iconColor}`}
                                        >
                                            {@html row.file.iconpaths}
                                        </svg>
                                        {row.file.name}
                                    </div>
                                    <div class="p-2 hidden md:flex flex-1 text-xs">{row.author}</div>
                                    <div class="p-2 hidden md:flex flex-1 text-xs">{row.lines}</div>
                                    <div class="p-2 flex-1 text-xs text-right">
                                        {row.updatedDate}
                                    </div>
                                </div>
                                {/each}
                            </Dialog.Description>
                        </Dialog.Header>
                        <DialogFooter>
                            <div class="w-full flex gap-4">
                                <Dialog.Close class="w-1/2">
                                    <Button
                                        class="w-full bg-transparent border hover:bg-zinc-900 text-zinc-400 text-xs transition-all rounded-xl  outline-none focus-none"
                                        >Close</Button
                                    >
                                </Dialog.Close>
                                <Button
                                    class="w-1/2 bg-red-500/50 text-zinc-200 hover:bg-red-500/60 transition-all text-xs p-0 rounded-xl "
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
