<script>
    import { ArrowRight, Link, Pin, ScanFace } from "lucide-svelte";
    import Animatedtext from "../animatedtext.svelte";
    import { Button } from "../ui/button";
    import { cn } from "$lib/utils";
    import { Input } from "../ui/input";

    const data = [
        {
            action: "POST",
            route: "/user",
            description: "Create a user",
        },

        {
            action: "GET",
            route: "/user/{username}",
            description: "Get the specific user data",
        },
        {
            action: "DELETE",
            route: "/user/{username}",
            description: "Delete the specific user",
        },
        {
            action: "PUT",
            route: "/user/{username}",
            description: "Edit a specific user data",
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
</script>

<div class="w-full max-w-4xl border-x border-b">
    <div class="grid md:grid-cols-2 p-12">
        <div class="flex flex-col items-center md:items-start gap-6">
            <div
                class={cn(
                    "group  rounded-lg w-fit border border-sky-500/50 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-zinc-200 dark:border-white/5 dark:bg-sky-900 dark:hover:bg-sky-800",
                )}
            >
                <Animatedtext
                    class=" inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-sky-600 hover:duration-600 hover:dark:text-sky-400 flex gap-1 text-sm"
                >
                    <ScanFace class="w-4 h-4 " />
                    <div class="flex gap-2 text-md">
                        <div class="font-medium">New </div>
                        <div class="">-</div>
                        <div class="flex items-center gap-0.5">
                            Introducing DevFlow <ArrowRight class="w-4 h-4" />
                        </div>
                    </div>
                </Animatedtext>
            </div>
            <div class="text-7xl font-semibold mt-4">DevFlow</div>
            <div class="text-center md:text-start text-sm md:text-lg text-zinc-400 font-medium">
                Create powerful AI agent workflows with just<br /> a few lines
                of code, enabling complex task<br /> automation and decision-making
                processes.
            </div>
            <div class="w-fit">
                <a
                    href="/login"
                    class="bg-sky-400 flex gap-1 text-white dark:text-black dark:hover:bg-sky-400/90 items-center px-4 py-2 text-md rounded-lg transition-all font-sans"
                >
                    <Link class="w-5 h-5 " />
                    Get started</a
                >
            </div>
        </div>
        <div class="hidden md:flex p-12 w-full justify-center items-center flex">
            <div
                class="w-full flex h-fit bg-zinc-900 border rounded-xl p-1 flex-col gap-1"
            >

                {#each data as route}
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
                                    <div class="text-sm font-medium">
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
                {/each}
            </div>
        </div>
    </div>
</div>
