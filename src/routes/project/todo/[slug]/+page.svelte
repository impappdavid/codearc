<script lang="ts">
	import AppSidebar from "$lib/components/sidebar/app-sidebar.svelte";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import DropdownMenuSeparator from "$lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte";
	import LogOut from "lucide-svelte/icons/log-out";
	import { Palette, Settings, User, Users, Bell } from "lucide-svelte";
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	import { Button, buttonVariants } from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog/index.js";
    import Modetoggle from "$lib/components/modetoggle.svelte";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import Notification from "$lib/components/notifications/notification.svelte";
    import Board from "$lib/components/todo/Board.svelte";
	import { datas } from "./data";
    import TodoToolBar from "$lib/components/todo/todoToolBar.svelte";
    import { derived } from 'svelte/store';

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

    function handleFilterChange(event) {
        activeFilters = {
            devType: event.detail.devType,
            priority: event.detail.priority,
            timeframe: event.detail.timeframe
        };
    }

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

	let value = $state(0);

  
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header
			class="flex h-16 shrink-0 px-4 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-zinc-100 dark:bg-zinc-900"
		>
			<div class="flex items-center gap-2">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#">Project</Breadcrumb.Link>
						</Breadcrumb.Item>
                        <Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Todo</Breadcrumb.Page>
						</Breadcrumb.Item>
                        <Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page>CollaBug</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
			<div class="flex gap-3 items-center px-4">
				<Sheet.Root>
                    <Sheet.Trigger
                        class="w-9 h-9 border rounded-lg flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-950/20 transition-all"
                        ><Bell class="w-4 h-4" /></Sheet.Trigger
                    >
                    <Sheet.Content
                        side="right"
                        class=" p-3 h-full bg-transparent flex-1 w-full"
                    >
                        <div class="bg-zinc-100 dark:bg-zinc-900 rounded-xl h-full p-4">
                            <Sheet.Header class="flex flex-col gap-1">
                                <Sheet.Title class="flex gap-2 items-center">
                                    <div class="flex gap-1 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="icon icon-tabler icons-tabler-filled icon-tabler-bell"
                                            ><path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            /><path
                                                d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
                                            /><path
                                                d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
                                            /></svg
                                        >
                                        Notifications
                                    </div>
                                    <div
                                        class="h-5 w-5 bg-zinc-300 dark:bg-zinc-700 text-xs flex justify-center font-normal items-center text-center rounded-md"
                                    >
                                        2
                                    </div>
                                </Sheet.Title>
                                <Sheet.Description>
                                    <Separator />
                                </Sheet.Description>
                            </Sheet.Header>
                            <Notification />
                            <Sheet.Footer class="">
                                <div class="w-full ">
                                    <Button class="h-9 w-full dark:bg-zinc-950 text-white dark:hover:bg-zinc-950/80 rounded-xl">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-checks"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                                        Mark all as read
                                    </Button>
                                    
                                </div>
                            </Sheet.Footer>
                        </div>
                    </Sheet.Content>
                </Sheet.Root>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="flex items-center gap-2 ">
						<div class="w-8 h-8 bg-blue-500 rounded-lg flex justify-center items-center"><svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg></div>
					
					</DropdownMenu.Trigger>
					<DropdownMenu.Content
						align="end"
						class="rounded-xl min-w-40 dark:bg-zinc-950/20 backdrop-blur-lg"
					>
						<DropdownMenu.Group>
							<DropdownMenu.GroupHeading
								>My Account</DropdownMenu.GroupHeading
							>
							<DropdownMenuSeparator />
							<DropdownMenu.Item onclick={() => location.href= "../profile/david"}
								class="rounded-lg hover:cursor-pointer"
							>
								<User class="w-4 h-4" />
								Profile
							</DropdownMenu.Item>
							<Dialog.Root>
								<Dialog.Trigger class="w-full outline-none">
									<DropdownMenu.Item 
										class="rounded-lg hover:cursor-pointer"
									>
										<Palette class="w-4 h-4" />
										Theme
									</DropdownMenu.Item>
								</Dialog.Trigger>
								<Dialog.Content
									class="rounded-xl bg-zinc-200 dark:bg-zinc-900 flex flex-col gap-4"
								>
									<Dialog.Header>
										<Dialog.Title>Theme select</Dialog.Title
										>
									</Dialog.Header>
									<Modetoggle/>
								</Dialog.Content>
							</Dialog.Root>

							<DropdownMenuSeparator />

							<DropdownMenu.Item
								class="rounded-lg hover:cursor-pointer"
							>
								<Settings class="w-4 h-4" />
								Settings
							</DropdownMenu.Item>
							<DropdownMenuSeparator />

							<DropdownMenu.Item
								class="rounded-lg hover:cursor-pointer text-red-400"
							>
								<LogOut class="w-4 h-4" />
								Logout
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</header>
		<div class="flex flex-1 flex-col gap-2 px-2 xl:p-4 py-4">
			<TodoToolBar 
				increment={() => value += 1} 
				decrement={() => value -= 1}
				on:filterChange={handleFilterChange}
			/>
			<Board columns={filteredColumns} onFinalUpdate={handleBoardUpdated} />
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
