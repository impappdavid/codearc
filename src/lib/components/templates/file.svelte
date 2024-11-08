<script>
    import { Trash2 } from "lucide-svelte";
    import { Button } from "../ui/button";
    import Checkbox from "../ui/checkbox/checkbox.svelte";
    import Separator from "../ui/separator/separator.svelte";
    import * as Table from "$lib/components/ui/table";

    export let isSelected;

    let rows = [
        {
            file: {
                name: "+page.svelte",
                icon: "svelte",
                iconpaths: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8l-5 3l.821 -.495c1.86 -1.15 4.412 -.49 5.574 1.352a3.91 3.91 0 0 1 -1.264 5.42l-5.053 3.126c-1.86 1.151 -4.312 .591 -5.474 -1.251a3.91 3.91 0 0 1 1.263 -5.42l.26 -.16"/><path d="M8 17l5 -3l-.822 .496c-1.86 1.151 -4.411 .491 -5.574 -1.351a3.91 3.91 0 0 1 1.264 -5.42l5.054 -3.127c1.86 -1.15 4.311 -.59 5.474 1.252a3.91 3.91 0 0 1 -1.264 5.42l-.26 .16"/>',
                iconColor: "text-orange-500",
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
        },
        {
            file: {
                name: "bottom_nav_menu.xml",
                icon: "coffee",
                iconpaths: '<path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" /><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" /><path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />',
                iconColor: "text-white",
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
        },
        {
            file: {
                name: "users.ts",
                icon: "typescript",
                iconpaths:
                    '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" /><path d="M9 12h4" /><path d="M11 12v6" /><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"/>',
                iconColor: "text-blue-500",
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
        },
    ];

    export let searchdata = "";

    $: filteredRows = rows.filter((row) =>
        row.file.name.toLowerCase().includes(searchdata.toLowerCase()),
    );
</script>

{#if searchdata.length > 0}
    {#each filteredRows as row}
        <Table.Row>
            <Table.Cell><Checkbox checked={isSelected} /></Table.Cell>
            <Table.Cell>
                <div class="text-xs flex gap-1">
                    
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
                        class={`icon icon-tabler icons-tabler-outline icon-tabler-brand-${row.file.icon} ${row.file.iconColor}`}
                    >
                        {@html row.file.iconpaths}
                    </svg>

                    {row.file.name}
                </div>
            </Table.Cell>
            <Table.Cell class="text-xs">{row.author}</Table.Cell>
            <Table.Cell class="text-xs">{row.reviewer}</Table.Cell>
            <Table.Cell class="text-xs">{row.lines}</Table.Cell>
            <Table.Cell class="text-xs">
                <div
                    class={`px-2 py-0.5 text-center rounded-sm ${row.status.color} w-fit`}
                >
                    {row.status.label}
                </div>
            </Table.Cell>
            <Table.Cell class="text-xs">
                <div
                    class={`px-2 py-0.5 text-center rounded-sm ${row.category.color} w-fit`}
                >
                    {row.category.label}
                </div>
            </Table.Cell>
            <Table.Cell class="text-xs">{row.createdDate}</Table.Cell>
            <Table.Cell class="text-xs">{row.updatedDate}</Table.Cell>
            <Table.Cell class="text-right">
                <Button
                    class="p-0 h-7 w-7 dark:bg-red-400/20 dark:hover:bg-red-400/10 rounded-lg"
                >
                    <Trash2 class={`w-4 h-4 ${row.actions[0].iconColor}`} />
                </Button>
            </Table.Cell>
        </Table.Row>
    {/each}
{:else}
    {#each rows as row}
        <Table.Row>
            <Table.Cell><Checkbox checked={isSelected} /></Table.Cell>
            <Table.Cell>
                <div class="text-xs flex gap-1">
                    
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
                        class={`icon icon-tabler icons-tabler-outline icon-tabler-brand-${row.file.icon} ${row.file.iconColor}`}
                    >
                        {@html row.file.iconpaths}
                    </svg>

                    {row.file.name}
                </div>
            </Table.Cell>
            <Table.Cell class="text-xs">{row.author}</Table.Cell>
            <Table.Cell class="text-xs">{row.reviewer}</Table.Cell>
            <Table.Cell class="text-xs">{row.lines}</Table.Cell>
            <Table.Cell class="text-xs">
                <div
                    class={`px-2 py-0.5 text-center rounded-sm ${row.status.color} w-fit`}
                >
                    {row.status.label}
                </div>
            </Table.Cell>
            <Table.Cell class="text-xs">
                <div
                    class={`px-2 py-0.5 text-center rounded-sm ${row.category.color} w-fit`}
                >
                    {row.category.label}
                </div>
            </Table.Cell>
            <Table.Cell class="text-xs">{row.createdDate}</Table.Cell>
            <Table.Cell class="text-xs">{row.updatedDate}</Table.Cell>
            <Table.Cell class="text-right">
                <Button
                    class="p-0 h-7 w-7 dark:bg-red-400/20 dark:hover:bg-red-400/10 rounded-lg"
                >
                    <Trash2 class={`w-4 h-4 ${row.actions[0].iconColor}`} />
                </Button>
            </Table.Cell>
        </Table.Row>
        
    {/each}
{/if}
