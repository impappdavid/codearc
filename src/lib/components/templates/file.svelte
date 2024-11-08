<script>
    import { Trash2 } from "lucide-svelte";
    import { Button } from "../ui/button";
    import Checkbox from "../ui/checkbox/checkbox.svelte";
    import Separator from "../ui/separator/separator.svelte";
    import * as Table from "$lib/components/ui/table";
</script>

<Table.Row>
    <Table.Cell><Checkbox /></Table.Cell>
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-svelte text-orange-500"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M15 8l-5 3l.821 -.495c1.86 -1.15 4.412 -.49 5.574 1.352a3.91 3.91 0 0 1 -1.264 5.42l-5.053 3.126c-1.86 1.151 -4.312 .591 -5.474 -1.251a3.91 3.91 0 0 1 1.263 -5.42l.26 -.16"
                /><path
                    d="M8 17l5 -3l-.822 .496c-1.86 1.151 -4.411 .491 -5.574 -1.351a3.91 3.91 0 0 1 1.264 -5.42l5.054 -3.127c1.86 -1.15 4.311 -.59 5.474 1.252a3.91 3.91 0 0 1 -1.264 5.42l-.26 .16"
                /></svg
            >

            +page.svelte
        </div>
    </Table.Cell>
    <Table.Cell class="text-xs">Papp Dávid</Table.Cell>
    <Table.Cell class="text-xs">Bognár Ádám</Table.Cell>
    <Table.Cell class="text-xs">453</Table.Cell>
    <Table.Cell class="text-xs">
        <div class="px-2 py-0.5 text-center rounded-sm bg-red-400/40 w-fit">Error</div>
    </Table.Cell>
    <Table.Cell class="text-xs">Frontend</Table.Cell>
    <Table.Cell class="text-xs">2024.10.08</Table.Cell>
    <Table.Cell class="text-xs">2024.10.01</Table.Cell>
    <Table.Cell class="text-right">
        <Button
            class="p-0 h-7 w-7 dark:bg-red-400/20 dark:hover:bg-red-400/10 rounded-lg"
        >
            <Trash2 class="w-4 h-4 dark:text-red-500" />
        </Button>
    </Table.Cell>
</Table.Row>

<Table.Row>
    <Table.Cell><Checkbox /></Table.Cell>
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-coffee text-white"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1"
                /><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path
                    d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"
                /><path
                    d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z"
                /><path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" /></svg
            >
            bottom_nav_menu.xml
        </div>
    </Table.Cell>
    <Table.Cell class="text-xs">Bognár Ádám</Table.Cell>
    <Table.Cell class="text-xs">Bognár Ádám</Table.Cell>
    <Table.Cell class="text-xs">16</Table.Cell>
    <Table.Cell class="text-xs">
        <div class="px-2 py-0.5 text-center rounded-sm bg-emerald-400/40 w-fit">Ready</div>
    </Table.Cell>
    <Table.Cell class="text-xs">Frontend</Table.Cell>
    <Table.Cell class="text-xs">2024.07.02</Table.Cell>
    <Table.Cell class="text-xs">2024.05.01</Table.Cell>
    <Table.Cell class="text-right">
        <Button
            class="p-0 h-7 w-7 dark:bg-red-400/20 dark:hover:bg-red-400/10 rounded-lg"
        >
            <Trash2 class="w-4 h-4 dark:text-red-500" />
        </Button>
    </Table.Cell>
</Table.Row>
