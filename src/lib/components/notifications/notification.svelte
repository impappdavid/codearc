<script>
    import * as Avatar from "$lib/components/ui/avatar/";
    import { Button } from "../ui/button";

    let notifications = [
        {
            id: 0,
            type: "invitation",
            avatarsrc: "",
            avataralt: "PD",
            sender: "David",
            action: "invited you to",
            end: "Collabug",
            date: "Moday 4:18 PM",
            read: false,
        },
        {
            id: 1,
            type: "normal",
            avatarsrc: "",
            avataralt: "PD",
            sender: "David",
            action: "added a card to",
            end: "Todo",
            date: "Sunday 8:47 PM",
            read: false,
        },
        {
            id: 2,
            type: "normal",
            avatarsrc: "",
            avataralt: "BÁ",
            sender: "Ádám",
            action: " edited a table in ",
            end: "Database planner",
            date: "Monday 10:35 AM",
            read: true,
        },
    ];
</script>

<div class="flex flex-col h-full max-h-[580px] sm:max-h-[835px] max-h-96">
    {#each notifications as notification}
        {#if notification.type == "normal"}
            <div
                class="w-full p-2 py-3 hover:cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-950/30 transition-all flex flex-col gap-2"
            >
                <div class="flex justify-between">
                    <div class="flex gap-2 items-center">
                        <Avatar.Root class="h-9 w-9 rounded-lg">
                            <Avatar.Image
                                src={notification.avatarsrc}
                                alt={notification.avataralt}
                            />
                            <Avatar.Fallback class="rounded-xl text-xs"
                                >{notification.avataralt}</Avatar.Fallback
                            >
                        </Avatar.Root>
                        <div class="flex-col flex">
                            <div class="text-sm max-w-60 truncate">
                                <span class="font-medium"
                                    >{notification.sender}</span
                                >
                                {notification.action}
                                <span class="font-medium"
                                    >{notification.end}</span
                                >
                            </div>
                            <div class="text-xs dark:text-zinc-400">
                                {notification.date}
                            </div>
                        </div>
                    </div>
                    {#if notification.read}
                        <div class=""></div>
                    {:else}
                        <div
                            class="w-2 h-2 rounded-full bg-blue-500 mt-1"
                        ></div>
                    {/if}
                </div>
            </div>
        {:else}
        <div class="w-full p-2 py-3 hover:cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-950/30 transition-all flex flex-col gap-2">
            <div class="flex justify-between">
                <div class="flex gap-2 items-center">
                    <Avatar.Root
                        class="h-9 w-9 rounded-lg"
                    >
                        <Avatar.Image src="" alt="PD" />
                        <Avatar.Fallback
                            class="rounded-xl text-xs"
                            >PD</Avatar.Fallback
                        >
                    </Avatar.Root>
                    <div class="flex-col flex">
                        <div class="text-sm">
                            <span class="font-medium"
                                >David</span
                            >
                            invited you to
                            <span class="font-medium"
                                >Collabug</span
                            >
                        </div>
                        <div
                            class="text-xs dark:text-zinc-400"
                        >
                            Moday 4:18 PM
                        </div>
                    </div>
                </div>
                {#if notification.read}
                        <div class=""></div>
                    {:else}
                        <div
                            class="w-2 h-2 rounded-full bg-blue-500 mt-1"
                        ></div>
                    {/if}
            </div>
            <div class="flex w-fit ml-9 pl-1 gap-2">
                <Button class="bg-transparent border border-zinc-400 dark:border-zinc-700 h-8 text-black dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-950/40 rounded-lg outline-none">Decline</Button>
                <Button class="bg-blue-500/80 h-8 text-white hover:bg-blue-500/70 rounded-lg">Accept</Button>
            </div>
        </div>
        {/if}
    {/each}
</div>
