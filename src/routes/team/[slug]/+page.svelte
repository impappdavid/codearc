<script lang="ts">
    import AppSidebar from "$lib/components/sidebar/app-sidebar.svelte";
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import DropdownMenuSeparator from "$lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte";
    import LogOut from "lucide-svelte/icons/log-out";
    import { Palette, Settings, User, Bell, ExternalLink } from "lucide-svelte";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import { Button } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import Modetoggle from "$lib/components/modetoggle.svelte";
    import Notification from "$lib/components/notifications/notification.svelte";

    let teamData = {
        id: 0,
        teamName: "Collabug",
        description: "Making competition able applications",
        tag: "Team",
        avtivity: true,
        links: [
            {
                name: "Twitter",
                link: "",
                path: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />',
            },
            {
                name: "GitHub",
                link: "",
                path: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />',
            },
            
            {
                name: "Website",
                link: "",
                path: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" />',
            },
        ],
        
        createdAt: "August 6 2024",
        firstProjectDate: "April 17 2024",
        firstProjectName: "Collabug",
        aboutText: `Hi, I'm a software developer with a love for learning and building impactful apps. I enjoy exploring tech, creating with code, and am driven by the motto, "Dream big and make it happen!"`,
        totalProjectCount: "12",
        latestProjects: [
            {
                id: 0,
                projectName: "Collabug",
                projectType: "Project manager app",
            },
        ],
        activeMembers: [
            {
                id: 0,
                memberName: "Papp Dávid",
                teamRole: "Creator",
            },
        ],
    };
    let activeUsers = [
        {
            id: 0,
            userName: "Papp Dávid",
            userEmail: "pappd377@gmail.com",
            teamRole: "Frontend",
        },
        {
            id: 1,
            userName: "Bognár Ádám",
            userEmail: "bgnradam@gmail.com",
            teamRole: "Backend",
        },
        {
            id: 2,
            userName: "Makai Atilla",
            userEmail: "mkatilla@gmail.com",
            teamRole: "Homeless",
        },
        {
            id: 3,
            userName: "Bogda Zoltán",
            userEmail: "bgnradam@gmail.com",
            teamRole: "Designer",
        },
    ];
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
                            <Breadcrumb.Link href="#">Collabug</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator class="hidden md:block" />
                        <Breadcrumb.Item class="hidden md:block">
                            <Breadcrumb.Link href="#">Team</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator class="hidden md:block" />
                        <Breadcrumb.Item>
                            <Breadcrumb.Page>Collabug</Breadcrumb.Page>
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
                        <div
                            class="bg-zinc-100 dark:bg-zinc-900 rounded-xl h-full p-4"
                        >
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
                                <div class="w-full">
                                    <Button
                                        class="h-9 w-full dark:bg-zinc-950 text-white dark:hover:bg-zinc-950/80 rounded-xl"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-checks"
                                            ><path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            /><path d="M7 12l5 5l10 -10" /><path
                                                d="M2 12l5 5m5 -5l5 -5"
                                            /></svg
                                        >
                                        Mark all as read
                                    </Button>
                                </div>
                            </Sheet.Footer>
                        </div>
                    </Sheet.Content>
                </Sheet.Root>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger class="flex items-center gap-2 ">
                        <div
                            class="w-8 h-8 bg-blue-500 rounded-lg flex justify-center items-center"
                        >
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
                                class="icon icon-tabler icons-tabler-outline icon-tabler-user"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                /><path
                                    d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
                                /><path
                                    d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                                /></svg
                            >
                        </div>
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
                            <DropdownMenu.Item
                                onclick={() =>
                                    (location.href = "../profile/david")}
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
                                    <Modetoggle />
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
        <div class="flex flex-col gap-6 p-4 py-4 h-full">
            <div class="w-full sm:px-8 grid lg:grid-cols-6 gap-4">
                <div
                    class="col-span-3 flex flex-col gap-4 p-4 bg-zinc-100 border dark:bg-muted/30 rounded-2xl"
                >
                    <div class="flex gap-4">
                        <div
                            class="min-w-24 h-24 border bg-blue-500/80 rounded-2xl flex justify-center items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="55"
                                height="55"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-spider text-white"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                /><path d="M5 4v2l5 5" /><path
                                    d="M2.5 9.5l1.5 1.5h6"
                                /><path d="M4 19v-2l6 -6" /><path
                                    d="M19 4v2l-5 5"
                                /><path d="M21.5 9.5l-1.5 1.5h-6" /><path
                                    d="M20 19v-2l-6 -6"
                                /><path
                                    d="M12 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
                                /><path
                                    d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                                /></svg
                            >
                        </div>
                        <div class="w-full flex justify-between">
                            <div class="flex flex-col gap-3 justify-center">
                                <div class="flex flex-col">
                                    <div class="text-xl font-medium">
                                        {teamData.teamName}
                                    </div>
                                    <div
                                        class="text-xs text-zinc-600 dark:text-zinc-400"
                                    >
                                        {teamData.description}
                                    </div>
                                </div>
                                <div class="flex gap-1">
                                    {#each teamData.links as link}
                                        <div
                                            class=" sm:w-1/3 h-9 h-full flex gap-1 items-center hover:cursor-pointer hover:bg-zinc-200 dark:hover:bg-muted/30 rounded-md px-2 py-2 transition-all"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                                                >{@html link.path}</svg>
                                                <div
                                                class="flex flex-col justify-center"
                                            >
                                                <div
                                                    class="text-xs font-medium"
                                                >
                                                    {link.name}
                                                </div>
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <div class="flex items-start">
                                {#if teamData.avtivity}
                                    <div
                                        class="flex justify-center items-center text-xs p-1 px-2 rounded-lg bg-blue-500/60"
                                    >
                                        Active
                                    </div>
                                {:else}
                                    <div
                                        class="flex justify-center items-center text-xs p-1 px-2 rounded-lg bg-zinc-500/60"
                                    >
                                        Inactive
                                    </div>
                                {/if}
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex flex-col gap-2">
                        <div class="text-md font-medium">Summary</div>
                        <div class="flex">
                            <div class="w-1/3 h-28 p-1 sm:p-2">
                                <div
                                    class="w-full h-full bg-zinc-200 dark:bg-muted/30 rounded-2xl flex flex-col gap-2 justify-center items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="icon icon-tabler icons-tabler-filled icon-tabler-bolt"
                                        ><path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        /><path
                                            d="M13 2l.018 .001l.016 .001l.083 .005l.011 .002h.011l.038 .009l.052 .008l.016 .006l.011 .001l.029 .011l.052 .014l.019 .009l.015 .004l.028 .014l.04 .017l.021 .012l.022 .01l.023 .015l.031 .017l.034 .024l.018 .011l.013 .012l.024 .017l.038 .034l.022 .017l.008 .01l.014 .012l.036 .041l.026 .027l.006 .009c.12 .147 .196 .322 .218 .513l.001 .012l.002 .041l.004 .064v6h5a1 1 0 0 1 .868 1.497l-.06 .091l-8 11c-.568 .783 -1.808 .38 -1.808 -.588v-6h-5a1 1 0 0 1 -.868 -1.497l.06 -.091l8 -11l.01 -.013l.018 -.024l.033 -.038l.018 -.022l.009 -.008l.013 -.014l.04 -.036l.028 -.026l.008 -.006a1 1 0 0 1 .402 -.199l.011 -.001l.027 -.005l.074 -.013l.011 -.001l.041 -.002z"
                                        /></svg
                                    >
                                    <div class="flex flex-col items-center">
                                        <div class="text-sm">
                                            {teamData.createdAt}
                                        </div>
                                        <div
                                            class="text-xs text-zinc-600 dark:text-zinc-400"
                                        >
                                            Created at
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/3 h-28 p-1 sm:p-2">
                                <div
                                    class="w-full h-full bg-zinc-200 dark:bg-muted/30 rounded-2xl flex flex-col gap-2 justify-center items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-check"
                                        ><path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        /><path d="M5 12l5 5l10 -10" /></svg
                                    >
                                    <div class="flex flex-col items-center">
                                        <div class="text-sm">
                                            {teamData.firstProjectDate}
                                        </div>
                                        <div
                                            class="text-xs text-zinc-600 dark:text-zinc-400"
                                        >
                                            First project
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/3 h-28 p-1 sm:p-2">
                                <div
                                    class="w-full h-full bg-zinc-200 dark:bg-muted/30 rounded-2xl flex flex-col gap-2 justify-center items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-users"
                                        ><path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        /><path
                                            d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
                                        /><path
                                            d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                                        /><path
                                            d="M16 3.13a4 4 0 0 1 0 7.75"
                                        /><path
                                            d="M21 21v-2a4 4 0 0 0 -3 -3.85"
                                        /></svg
                                    >
                                    <div class="flex flex-col items-center">
                                        <div class="text-sm">
                                            {teamData.firstProjectName}
                                        </div>
                                        <div
                                            class="text-xs text-zinc-600 dark:text-zinc-400"
                                        >
                                            First project name
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex flex-col gap-2">
                        <div class="text-md font-medium">About</div>
                        <div
                            class="w-full text-sm text-zinc-600 dark:text-zinc-400"
                        >
                            {teamData.aboutText}
                        </div>
                    </div>
                </div>
                <div class=" col-span-3 rounded-2xl">
                    <div class="grid sm:grid-cols-2 grid-rows-9 gap-4 h-full">
                        <div
                            class=" rounded-xl grid grid-rows-4 row-span-9 gap-4 h-full"
                        >
                            <div
                                class="w-full row-span-1 p-4 sm:p-0 bg-zinc-100 border dark:bg-muted/30 rounded-xl flex flex-col items-center justify-center"
                            >
                                <div class="text-2xl font-medium">
                                    {teamData.totalProjectCount}
                                </div>
                                <div
                                    class="text-sm text-zinc-600 dark:text-zinc-400"
                                >
                                    Total projects
                                </div>
                            </div>

                            <div
                                class="w-full row-span-5 gap-4 grid grid-cols-1"
                            >
                                <div
                                    class="bg-zinc-100 border dark:bg-muted/30 rounded-xl flex flex-col gap-2 items-center p-4"
                                >
                                    <div
                                        class="text-xl text-zinc-600 dark:text-zinc-400"
                                    >
                                        Latest projects
                                    </div>
                                    <div class="flex flex-col w-full">
                                        <Separator />
                                        {#each teamData.latestProjects as project}
                                            <div
                                                class="w-full border-b min-h-14 hover:cursor-pointer hover:bg-zinc-200 dark:hover:bg-muted/40 px-2 transition-all flex gap-3 justify-between items-center"
                                            >
                                                <div
                                                    class="flex gap-3 items-center"
                                                >
                                                    <div
                                                        class="w-9 h-9 bg-blue-500/80 rounded-lg"
                                                    ></div>
                                                    <div
                                                        class="flex flex-col justify-center"
                                                    >
                                                        <div
                                                            class="text-sm font-medium"
                                                        >
                                                            {project.projectName}
                                                        </div>
                                                        <div
                                                            class="text-[11px] text-zinc-600 dark:text-zinc-400"
                                                        >
                                                            {project.projectType}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex justify-center items-center"
                                                >
                                                    <ExternalLink
                                                        class="w-4 h-4"
                                                    />
                                                </div>
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="p-4 bg-zinc-100 border dark:bg-muted/30 rounded-xl flex flex-col row-span-9 items-center"
                        >
                            <div
                                class="flex flex-col gap-2 w-full items-center"
                            >
                                <div
                                    class="text-xl text-zinc-600 dark:text-zinc-400"
                                >
                                    Active members
                                </div>
                                <Separator />
                            </div>
                            <div
                                class="flex flex-col w-full h-full max-h-[400px] overflow-y-scroll"
                            >
                                {#each activeUsers as member}
                                    <div
                                        class="w-full min-h-14 border-b hover:cursor-pointer hover:bg-zinc-200 dark:hover:bg-muted/40 px-2 transition-all flex gap-3 justify-between items-center"
                                    >
                                        <div class="flex gap-3 items-center">
                                            <div
                                                class="w-9 h-9 bg-blue-500/80 rounded-lg"
                                            ></div>
                                            <div
                                                class="flex flex-col justify-center"
                                            >
                                                <div
                                                    class="text-sm font-medium"
                                                >
                                                    {member.userName}
                                                </div>
                                                <div
                                                    class="text-[11px] text-zinc-600 dark:text-zinc-400"
                                                >
                                                    {member.teamRole}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="flex justify-center items-center"
                                        >
                                            <ExternalLink class="w-4 h-4" />
                                        </div>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar.Inset>
</Sidebar.Provider>
