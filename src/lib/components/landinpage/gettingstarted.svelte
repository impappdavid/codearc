<script>
    import { Link } from "lucide-svelte";
    import Animatedtext from "../animatedtext.svelte";
    import { cn } from "$lib/utils";
    import * as Tabs from "$lib/components/ui/tabs";
    import ApirouteShow from "./showcase/apiRoute/apirouteShow.svelte";
    import Board from "./showcase/todo/Board.svelte";
    import { datas } from "./data";
    import TodoToolBar from "../todo/todoToolBar.svelte";

    // Add filter state
    let activeFilters = $state({
        devType: [],
        priority: [],
        timeframe: []
    });


    // Create derived value for filtered data
    const filteredColumns = $derived($datas.map(column => ({
        ...column,
        items: column.items.filter(item => {
            // If no filters are active, show all items
            if (!activeFilters.devType.length && 
                !activeFilters.priority.length && 
                !activeFilters.timeframe.length) {
                return true;
            }

            // Check dev type filter
            const matchesDevType = !activeFilters.devType.length || 
                activeFilters.devType.includes(item.fordev);

            // Check priority filter
            const matchesPriority = !activeFilters.priority.length || 
                activeFilters.priority.includes(item.important);

            return matchesDevType && matchesPriority;
        })
    })));

    function handleBoardUpdated(newColumnsData) {
		// Update the original data while preserving items that were filtered out
		$datas = $datas.map((originalColumn) => {
			const newColumn = newColumnsData.find(col => col.id === originalColumn.id);
			if (!newColumn) return originalColumn;

			// Get all items that were filtered out in the original column
			const filteredOutItems = originalColumn.items.filter(item => {
				const matchesDevType = !activeFilters.devType.length || 
					activeFilters.devType.includes(item.fordev);
				const matchesPriority = !activeFilters.priority.length || 
					activeFilters.priority.includes(item.important);
				return !(matchesDevType && matchesPriority);
			});

			// Combine the new items with the filtered out items
			return {
				...newColumn,
				items: [...newColumn.items, ...filteredOutItems]
			};
		});
	}

    function handleFilterChange(event) {
        activeFilters = {
            devType: event.detail.devType,
            priority: event.detail.priority,
            timeframe: event.detail.timeframe
        };
    }

    let value = $state(0);
</script>

<div
    class="w-full max-w-4xl flex flex-col items-center border-x border-b"
    id="getting-started"
>
    <Tabs.Root value="api" class="w-full">
        <Tabs.List class="grid w-full grid-cols-3 ">
            <Tabs.Trigger
                value="api"
                class="border-b flex flex-col item-start p-2 hover:bg-zinc-900/30"
            >
                <div class="text-lg font-medium">API</div>
                <div class="text-xs text-start text-zinc-400 hidden sm:flex">
                    Clear instructions on required parameters.
                </div>
            </Tabs.Trigger>
            <Tabs.Trigger
                value="todo"
                class="border-x border-b flex flex-col item-start p-2 hover:bg-zinc-900/30"
            >
                <div class="text-lg font-medium">TODO</div>
                <div class="text-xs text-start text-zinc-400 hidden sm:flex">
                    Filter tasks by backend, frontend, or priority.
                </div>
            </Tabs.Trigger>
            <Tabs.Trigger
                value="database"
                class="border-b  flex flex-col item-start p-2 hover:bg-zinc-900/30"
            >
                <div class="text-lg font-medium">Database</div>
                <div class="text-xs text-start text-zinc-400 hidden sm:flex">
                    No coding? No problem.
                </div>
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="api" class="w-full px-2 py-2 h-fit">
                <ApirouteShow />
        </Tabs.Content>
        <Tabs.Content value="todo" class="w-full px-2  h-fit">
            <Board columns={filteredColumns} onFinalUpdate={handleBoardUpdated}/>
        </Tabs.Content>
        <Tabs.Content value="database" class="w-full px-2 py-2 h-[400px]">
            Coming soon
            
        </Tabs.Content>
    </Tabs.Root>
</div>
