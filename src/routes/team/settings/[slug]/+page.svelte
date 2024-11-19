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
    import Input from "$lib/components/ui/input/input.svelte";
    import { toast } from "svelte-sonner";
    import { Label } from "$lib/components/ui/label";

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
            },
            {
                name: "GitHub",
                link: "",
            },
            {
                name: "Memberhistory",
                link: "",
            },
            {
                name: "Website",
                link: "",
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

    let searchQuery = "";
    let users = [
        {
            id: 0,
            userName: "Papp Dávid",
            userEmail: "pappd377@gmail.com",
        },
        {
            id: 1,
            userName: "Bognár Ádám",
            userEmail: "bgnradam@gmail.com",
        },
        {
            id: 2,
            userName: "Makai Atilla",
            userEmail: "mkatilla@gmail.com",
        },
        {
            id: 3,
            userName: "Bogda Zoltán",
            userEmail: "bgnradam@gmail.com",
        },
        {
            id: 4,
            userName: "Paplan Péter",
            userEmail: "pplnpeti@gmail.com",
        },
        {
            id: 5,
            userName: "Papkan Dávid",
            userEmail: "ppkndave@gmail.com",
        },
    ];

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

    // Find the closest match
    $: closestUser =
        searchQuery.length >= 2
            ? users.find((user) =>
                  user.userName
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()),
              )
            : null;

    // Find up to 5 closest matches
    $: closestUsers =
        searchQuery.length >= 2
            ? users
                  .filter((user) =>
                      user.userName
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()),
                  )
                  .slice(0, 5)
            : [];
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
                            <Breadcrumb.Page>Settings</Breadcrumb.Page>
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
                            class="w-8 h-8 bg-blue-500 dark:bg-blue-500 rounded-lg"
                        ></div>
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
        <div class="flex flex-col p-4 py-4 h-full w-full">
            <div class="w-full sm:px-8 grid xl:grid-cols-2 grid-rows-2 gap-4">
                <div
                    class="w-full flex flex-col gap-4 p-4 bg-zinc-100 border dark:bg-muted/30 rounded-2xl"
                >
                    <div class=" flex gap-4">
                        <div
                            class="min-w-24 h-24 shadow-sm border dark:border-zinc-900 dark:shadow-zinc-950 text-zinc-700 dark:text-zinc-200 dark:bg-zinc-900 rounded-2xl flex justify-center items-center"
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
                                class="icon icon-tabler icons-tabler-outline icon-tabler-spider "
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
                                <div class="flex gap-2 w-full">
                                    <div
                                        class="flex w-2/6 max-w-sm flex-col gap-1.5"
                                    >
                                        <Label for="email">Team name</Label>
                                        <Input
                                            type="text"
                                            id="email"
                                            autocomplete="off"
                                            placeholder="Team name"
                                            value={teamData.teamName}
                                        />
                                    </div>
                                    <div
                                        class="flex w-4/6 max-w-sm flex-col gap-1.5"
                                    >
                                        <Label for="email">Description</Label>
                                        <Input
                                            type="text"
                                            id="email"
                                            autocomplete="off"
                                            placeholder="Description"
                                            class="text-xs"
                                            value={teamData.description}
                                        />
                                    </div>
                                </div>
                                <div class="flex gap-2">
                                    <div
                                        class="text-xs text-zinc-600 dark:text-zinc-400 py-1 px-2 rounded-md bg-muted/50 border"
                                    >
                                        {teamData.tag}
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start">
                                {#if teamData.avtivity}
                                    <div
                                        class="flex justify-center items-center text-xs p-1 px-2 rounded-lg bg-emerald-500/60"
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
                    <div class="w-full grid grid-cols-3 sm:h-14">
                        <div
                            class=" w-full h-9 h-full flex gap-2 items-center px-2 py-2 transition-all"
                        >
                            <div class="flex w-full max-w-sm flex-col gap-1.5">
                                <Label for="email">Twitter</Label>
                                <Input
                                    type="text"
                                    id="email"
                                    autocomplete="off"
                                    placeholder={`Twitter link`}
                                    class="text-xs w-full"
                                />
                            </div>
                        </div>

                        <div
                            class="  h-9 h-full flex gap-2 items-center px-2 py-2 transition-all"
                        >
                            <div class="flex w-full max-w-sm flex-col gap-1.5">
                                <Label for="email">Github</Label>
                                <Input
                                    type="text"
                                    id="email"
                                    autocomplete="off"
                                    placeholder={`Github link`}
                                    class="text-xs w-full"
                                />
                            </div>
                        </div>

                        <div
                            class=" h-9 h-full flex gap-2 items-center px-2 py-2 transition-all"
                        >
                            <div class="flex w-full max-w-sm flex-col gap-1.5">
                                <Label for="email">Website</Label>
                                <Input
                                    type="text"
                                    id="email"
                                    autocomplete="off"
                                    placeholder={`Website link`}
                                    class="text-xs w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex flex-col gap-2">
                        <div class="text-md font-medium">About</div>
                        <div
                            class="w-full text-sm text-zinc-600 dark:text-zinc-400"
                        >
                            <textarea
                                value={teamData.aboutText}
                                class="w-full dark:bg-zinc-950 border p-2 outline-none rounded-lg max-h-[100px]"
                            />
                        </div>
                    </div>
                    <Button
                        class="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-950 dark:hover:bg-zinc-950/80 text-black dark:text-white"
                        >Save changes</Button
                    >
                </div>

                <div
                    class="w-full bg-muted/30 grid row-span-2 grid rounded-xl border p-4"
                >
                    <div class="h-full">
                        <div class="flex flex-col gap-2 w-full items-center">
                            <div
                                class="text-xl text-zinc-600 dark:text-zinc-400"
                            >
                                Members
                            </div>
                            <Separator />
                        </div>
                        
                            
                       
                        <div class="flex flex-col overflow-y-scroll max-h-[700px]">
                            {#each activeUsers as active}
                            <div
                                class="w-full min-h-14 hover:bg-muted/20 border-b flex justify-between px-2"
                            >
                                <div class="flex items-center gap-2">
                                    <div
                                        class="w-9 h-9 bg-blue-500 rounded-md"
                                    ></div>
                                    <div class="flex flex-col justify-center">
                                        <div class="text-sm">{active.userName}</div>

                                        <div class="text-xs text-zinc-400">
                                            {active.userEmail}
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-4">
                                    <div
                                        class="text-xs py-1 px-2 bg-blue-500 rounded-md  text-white"
                                    >
                                        {active.teamRole}
                                    </div>

                                    <div class="flex gap-1">
                                        <Button
                                            size="icon"
                                            class="h-8 w-8 bg-transparent hover:bg-zinc-950/10 dark:hover:bg-white/10 text-black dark:text-white transition-all flex justify-center items-center"
                                        >
                                            <ExternalLink />
                                        </Button>

                                        <Button
                                            size="icon"
                                            class="h-8 w-8 bg-transparent hover:bg-blue-500/20 text-blue-500 transition-all flex justify-center items-center"
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
                                                class="icon icon-tabler icons-tabler-outline icon-tabler-user-edit"
                                                ><path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                /><path
                                                    d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
                                                /><path
                                                    d="M6 21v-2a4 4 0 0 1 4 -4h3.5"
                                                /><path
                                                    d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z"
                                                /></svg
                                            >
                                        </Button>

                                        <Button
                                            size="icon"
                                            class="h-8 w-8 bg-transparent hover:bg-red-500/20 text-red-500 transition-all flex justify-center items-center"
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
                                                class="icon icon-tabler icons-tabler-outline icon-tabler-user-x"
                                                ><path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                /><path
                                                    d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
                                                /><path
                                                    d="M6 21v-2a4 4 0 0 1 4 -4h3.5"
                                                /><path d="M22 22l-5 -5" /><path
                                                    d="M17 22l5 -5"
                                                /></svg
                                            >
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            {/each}
                            
                        </div>
                    </div>
                </div>

                <div class="w-full rounded-2xl grid">
                    <div class="grid gap-4 w-full h-full">
                        <div
                            class="p-4 w-full bg-zinc-100 border dark:bg-muted/30 rounded-xl flex flex-col row-span-9 items-center"
                        >
                            <div
                                class="flex flex-col gap-2 w-full items-center"
                            >
                                <div
                                    class="text-xl text-zinc-600 dark:text-zinc-400"
                                >
                                    Invite new users
                                </div>
                                <Separator />
                            </div>
                            <div
                                class="flex flex-col w-full h-full max-h-[400px] overflow-y-scroll"
                            >
                                <div class="w-full max-w-md mx-auto">
                                    <div class="pt-2">
                                        <Input
                                            id="username"
                                            type="text"
                                            bind:value={searchQuery}
                                            autocomplete="off"
                                            placeholder="Search users..."
                                            class="w-full px-4 py-2 border  rounded-lg focus:outline-none "
                                        />
                                    </div>

                                    {#if searchQuery.length >= 2}
                                        {#if closestUsers.length > 0}
                                            <div
                                                class="bg-zinc-950 p-2 rounded-xl flex flex-col gap-2"
                                            >
                                                {#each closestUsers as user}
                                                    <div
                                                        class=" p-2 bg-zinc-900 shadow-sm flex justify-between rounded-lg"
                                                    >
                                                        <div
                                                            class="flex gap-2 items-center"
                                                        >
                                                            <div
                                                                class="w-9 h-9 bg-blue-500 rounded-md"
                                                            ></div>
                                                            <div
                                                                class="flex flex-col"
                                                            >
                                                                <p
                                                                    class="text-sm text-zinc-200"
                                                                >
                                                                    {user.userName}
                                                                </p>
                                                                <p
                                                                    class="text-xs text-zinc-400"
                                                                >
                                                                    {user.userEmail}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex items-center"
                                                        >
                                                            <Button
                                                                onclick={() =>
                                                                    toast.success(
                                                                        `User ${user.userName} has been invited`,
                                                                        {
                                                                            description:
                                                                                "Sunday, December 03, 2023 at 9:00 AM",
                                                                            action: {
                                                                                label: "Close",
                                                                                onClick:
                                                                                    () =>
                                                                                        console.info(
                                                                                            "Close",
                                                                                        ),
                                                                            },
                                                                        },
                                                                    )}
                                                                size="icon"
                                                                class="h-7 w-7 p-0 bg-transparent dark:hover:bg-zinc-800 transition-all text-white border"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="30"
                                                                    height="30"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                                                                    ><path
                                                                        stroke="none"
                                                                        d="M0 0h24v24H0z"
                                                                        fill="none"
                                                                    /><path
                                                                        d="M12 5l0 14"
                                                                    /><path
                                                                        d="M5 12l14 0"
                                                                    /></svg
                                                                >
                                                            </Button>
                                                        </div>
                                                    </div>
                                                {/each}
                                            </div>
                                        {:else}
                                            <p
                                                class="mt-4 text-sm text-red-500"
                                            >
                                                No user found.
                                            </p>
                                        {/if}
                                    {:else if searchQuery.length > 0}
                                        <p class="mt-4 text-sm text-gray-500">
                                            Type at least 2 characters to
                                            search.
                                        </p>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar.Inset>
</Sidebar.Provider>
