<script lang="ts">
	import AppSidebar from "$lib/components/app-sidebar.svelte";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import DropdownMenuSeparator from "$lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte";
	import LogOut from "lucide-svelte/icons/log-out";
    import { Palette, Settings, User, Users } from "lucide-svelte";
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header
			class="flex h-16 shrink-0 px-4 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-zinc-900"
		>
			<div class="flex items-center gap-2  ">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#">Collabug</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Home</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
            <div class="flex gap-2 items-center px-4">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger class="flex items-center gap-2 ">
                        <div class="w-8 h-8 bg-white rounded-lg"></div>
                        
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content align="end" class="rounded-xl min-w-40">
                      <DropdownMenu.Group >
                        <DropdownMenu.Item class="rounded-lg hover:cursor-pointer">
							<User class="w-4 h-4"/>
							Profile
						</DropdownMenu.Item>
                        <DropdownMenu.Item class="rounded-lg hover:cursor-pointer">
							<Users class="w-4 h-4"/>
							Team
						</DropdownMenu.Item>
						
						<DropdownMenu.Item class="rounded-lg hover:cursor-pointer">
							<Palette class="w-4 h-4"/>
							Theme
						</DropdownMenu.Item>
						<DropdownMenuSeparator />

                        <DropdownMenu.Item class="rounded-lg hover:cursor-pointer">
							<Settings class="w-4 h-4"/>
							Settings
						</DropdownMenu.Item>
						<DropdownMenuSeparator />

                        <DropdownMenu.Item class="rounded-lg hover:cursor-pointer text-red-400">
							<LogOut class="w-4 h-4"/>
							Logout
						</DropdownMenu.Item>
                      </DropdownMenu.Group>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
            </div>
		</header>
		<div class="flex flex-1 flex-col gap-4 p-4 py-4">
			<div class="grid auto-rows-min gap-4 md:grid-cols-3">
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
			</div>
			<div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"></div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>