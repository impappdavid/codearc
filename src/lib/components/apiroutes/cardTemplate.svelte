<script>
    import { Pencil, Route } from "lucide-svelte";
    import Separator from "../ui/separator/separator.svelte";
    import { Button, buttonVariants } from "$lib/components/ui/button";
    const data = [
        {
            action: "POST",
            route: "/user",
            description: "Create a user",
            requestBody: [
                {
                    name: "id",
                    type: "0",
                },
                {
                    name: "username",
                    type: "string",
                },
                {
                    name: "firstName",
                    type: "string",
                },
            ],
            responseBody: [
                {
                    name: "code",
                    type: "0",
                },
                {
                    name: "message",
                    type: "string",
                },
            ],
        },

        {
            action: "GET",
            route: "/user/{username}",
            description: "Get the specific user data",
            responseBody: [
                {
                    name: "400",
                    type: "Not a valid user",
                },
                {
                    name: "404",
                    type: "User not found",
                },
            ],
        },
        {
            action: "DELETE",
            route: "/user/{username}",
            description: "Delete the specific user",
            responseBody: [
                {
                    name: "400",
                    type: "Not a valid user",
                },
                {
                    name: "404",
                    type: "User not found",
                },
            ],
        },
        {
            action: "PUT",
            route: "/user/{username}",
            description: "Edit a specific user data",
            requestBody: [
                {
                    name: "id",
                    type: "0",
                },
                {
                    name: "username",
                    type: "string",
                },
                {
                    name: "firstName",
                    type: "string",
                },
            ],
            responseBody: [
                {
                    name: "code",
                    type: "0",
                },
                {
                    name: "message",
                    type: "string",
                },
            ],
        },

        {
            action: "POST",
            route: "/team",
            description: "Create a team",
            requestBody: [
                {
                    name: "id",
                    type: "0",
                },
                {
                    name: "username",
                    type: "string",
                },
                {
                    name: "firstName",
                    type: "string",
                },
            ],
            responseBody: [
                {
                    name: "code",
                    type: "0",
                },
                {
                    name: "message",
                    type: "string",
                },
            ],
        },

        {
            action: "GET",
            route: "/team/{teamId}",
            description: "Get the specific team data",
            responseBody: [
                {
                    name: "400",
                    type: "Not a valid user",
                },
                {
                    name: "404",
                    type: "User not found",
                },
            ],
        },
        {
            action: "DELETE",
            route: "/team/{teamId}",
            description: "Delete the specific team",
            responseBody: [
                {
                    name: "400",
                    type: "Not a valid user",
                },
                {
                    name: "404",
                    type: "User not found",
                },
            ],
        },
        {
            action: "PUT",
            route: "/team/{teamId}",
            description: "Edit a specific team",
            requestBody: [
                {
                    name: "id",
                    type: "0",
                },
                {
                    name: "username",
                    type: "string",
                },
                {
                    name: "firstName",
                    type: "string",
                },
            ],
            responseBody: [
                {
                    name: "code",
                    type: "0",
                },
                {
                    name: "message",
                    type: "string",
                },
            ],
        },
    ];

    const bgColor = {
        POST: "bg-gradient-to-r from-emerald-700 to-emerald-900 hover:bg-green-500/60",
        GET: "bg-gradient-to-r from-sky-700 to-sky-900 hover:bg-sky-500/60",
        PUT: "bg-gradient-to-r from-orange-700 to-orange-900 hover:bg-orange-500/60",
        DELETE: "bg-gradient-to-r from-red-700 to-red-900 hover:bg-red-500/60",
    };
    const backgroundColor = {
        POST: "bg-gradient-to-r from-emerald-700 to-emerald-900 ",
        GET: "bg-gradient-to-r from-sky-700 to-sky-900 ",
        PUT: "bg-gradient-to-r from-orange-700 to-orange-900 ",
        DELETE: "bg-gradient-to-r from-red-700 to-red-900",
    };
    const textColor = {
        POST: "text-green-300",
        GET: "text-sky-300",
        PUT: "text-orange-300",
        DELETE: "text-red-300",
    };
    import * as Dialog from "$lib/components/ui/dialog";

    export let searchdata = "";

    $: filteredRows = data.filter(
        (row) =>
            row.route.toLowerCase().includes(searchdata.toLowerCase()) ||
            row.action.toLowerCase().includes(searchdata.toLowerCase()),
    );
</script>

<meta
    name="viewport"
    content="width=device-width, initial-scale=1, user-scalable=no"
/>

<div class="grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-2">
    {#if searchdata.length > 0}
    {#if filteredRows.length > 0}
        {#each filteredRows as route}
        
        <Dialog.Root>
            <Dialog.Trigger class="outline-none">
                <div
                    class={`w-full h-full  rounded-lg hover:cursor-pointer  transition-all
        ${bgColor[route.action] || "bg-gray-500"}`}
                >
                    <div
                        class="h-14 w-full flex items-center justify-between px-2"
                    >
                        <div
                            class="flex flex-col justify-center items-start"
                        >
                            <div class="flex gap-1 items-end">
                                <div
                                    class={`text-md font-medium ${textColor[route.action] || "text-white"}`}
                                >
                                    {route.action}
                                </div>
                                <div class="text-sm font-medium text-white dark:text-black">
                                    {route.route}
                                </div>
                            </div>
                            <div class="text-xs text-zinc-200">
                                {route.description}
                            </div>
                        </div>
                        <div class="p-r-2">
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
                                class="icon icon-tabler icons-tabler-outline icon-tabler-menu-4"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                /><path d="M7 6h10" /><path
                                    d="M4 12h16"
                                /><path d="M7 12h13" /><path
                                    d="M7 18h10"
                                /></svg
                            >
                        </div>
                    </div>
                </div>
            </Dialog.Trigger>
            <Dialog.Content class="sm:max-w-[425px] p-0 rounded-xl gap-0">
                <Dialog.Header
                    class={`py-3 px-3 rounded-t-xl ${backgroundColor[route.action] || "bg-gray-500"}`}
                >
                    <Dialog.Title class="flex items-baseline	 gap-1">
                        <div
                            class={` ${textColor[route.action] || "bg-gray-500"}`}
                        >
                            {route.action}
                        </div>
                        <div class="text-zinc-200 text-sm">
                            {route.route}
                        </div>
                    </Dialog.Title>
                </Dialog.Header>
                <div class="flex flex-col gap-2 p-4">
                    {#if route.requestBody}
                        
                    
                    <div class="flex flex-col gap-1">
                        <div class="text-xs">Request body</div>
                        <div
                            class="flex flex-col justify-center gap-0.5 w-full h-fit border bg-zinc-200 dark:bg-zinc-900 p-1 rounded-lg text-xs"
                        >
                            <div class="">&nbsp; &#123;</div>
                            {#each route.requestBody as req}
                                <div class="">
                                    &emsp; {req.name} : {req.type},
                                </div>
                            {/each}
                            <div class="">&nbsp; &#125;</div>
                        </div>
                    </div>
                    {/if}
                    <div class="flex flex-col gap-1">
                        <div class="text-xs">Response</div>
                        <div
                            class="flex flex-col justify-center gap-0.5 w-full h-fit border bg-zinc-200 dark:bg-zinc-900 p-1 rounded-lg text-xs"
                        >
                            <div class="">&nbsp; &#123;</div>
                            {#each route.responseBody as resp}
                                <div class="">
                                    &emsp; {resp.name} : {resp.type},
                                </div>
                            {/each}
                            <div class="">&nbsp; &#125;</div>
                        </div>
                    </div>
                </div>
            </Dialog.Content>
        </Dialog.Root>
        
        {/each}
        {:else}
        <div class="text-xs text-zinc-400 w-full col-span-6 flex justify-center">No results found</div>
        {/if}
    {:else}
        {#each data as route}
            <Dialog.Root>
                <Dialog.Trigger class="outline-none">
                    <div
                        class={`w-full h-full  rounded-lg hover:cursor-pointer  transition-all
            ${bgColor[route.action] || "bg-gray-500"}`}
                    >
                        <div
                            class="h-14 w-full flex items-center justify-between px-2"
                        >
                            <div
                                class="flex flex-col justify-center items-start"
                            >
                                <div class="flex gap-1 items-end">
                                    <div
                                        class={`text-md font-medium ${textColor[route.action] || "text-white"}`}
                                    >
                                        {route.action}
                                    </div>
                                    <div class="text-sm font-medium text-white dark:text-black">
                                        {route.route}
                                    </div>
                                </div>
                                <div class="text-xs text-zinc-200">
                                    {route.description}
                                </div>
                            </div>
                            <div class="p-r-2">
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
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-menu-4"
                                    ><path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    /><path d="M7 6h10" /><path
                                        d="M4 12h16"
                                    /><path d="M7 12h13" /><path
                                        d="M7 18h10"
                                    /></svg
                                >
                            </div>
                        </div>
                    </div>
                </Dialog.Trigger>
                <Dialog.Content class="sm:max-w-[425px] p-0 rounded-xl gap-0">
                    <Dialog.Header
                        class={`py-3 px-3 rounded-t-xl ${backgroundColor[route.action] || "bg-gray-500"}`}
                    >
                        <Dialog.Title class="flex items-baseline	 gap-1">
                            <div
                                class={` ${textColor[route.action] || "bg-gray-500"}`}
                            >
                                {route.action}
                            </div>
                            <div class="text-zinc-200 text-sm">
                                {route.route}
                            </div>
                        </Dialog.Title>
                    </Dialog.Header>
                    <div class="flex flex-col gap-2 p-4">
                        {#if route.requestBody}
                            
                        
                        <div class="flex flex-col gap-1">
                            <div class="text-xs">Request body</div>
                            <div
                                class="flex flex-col justify-center gap-0.5 w-full h-fit border bg-zinc-200 dark:bg-zinc-900 p-1 rounded-lg text-xs"
                            >
                                <div class="">&nbsp; &#123;</div>
                                {#each route.requestBody as req}
                                    <div class="">
                                        &emsp; {req.name} : {req.type},
                                    </div>
                                {/each}
                                <div class="">&nbsp; &#125;</div>
                            </div>
                        </div>
                        {/if}
                        <div class="flex flex-col gap-1">
                            <div class="text-xs">Response</div>
                            <div
                                class="flex flex-col justify-center gap-0.5 w-full h-fit border bg-zinc-200 dark:bg-zinc-900 p-1 rounded-lg text-xs"
                            >
                                <div class="">&nbsp; &#123;</div>
                                {#each route.responseBody as resp}
                                    <div class="">
                                        &emsp; {resp.name} : {resp.type},
                                    </div>
                                {/each}
                                <div class="">&nbsp; &#125;</div>
                            </div>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Root>
        {/each}
    {/if}
</div>
