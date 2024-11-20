
<script lang="ts">
    import { Separator } from "$lib/components/ui/separator";
    import { Button } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Select from "$lib/components/ui/select";
    import { ExternalLink, Italic } from "lucide-svelte";
    import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";
     let {members} = $props();

    const teamRoles = [
    { value: "admin", label: "Admin" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
  ];

  let selected = { value: "frontend", label: "Frontend" };
  let value: string = $state("frontend");
  
 
 
</script>
<div class="h-full">
    <div class="flex flex-col gap-2 w-full items-center">
        <div
            class="text-xl text-zinc-600 dark:text-zinc-400"
        >
            Members
        </div>
        <Separator />
    </div>

    <div
        class="flex flex-col overflow-y-scroll max-h-[700px]"
    >
        {#each members as active}
            <div
                class="w-full min-h-14 hover:bg-muted/20 border-b flex justify-between px-2"
            >
                <div class="flex items-center gap-2">
                    <div
                        class="w-9 h-9 bg-blue-500 rounded-md"
                    ></div>
                    <div
                        class="flex flex-col justify-center"
                    >
                        <div class="text-sm">
                            {active.userName}
                        </div>

                        <div class="text-xs text-zinc-400">
                            {active.userEmail}
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <div
                        class="text-xs py-1 px-2 bg-blue-500 rounded-md text-white"
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
                        <Dialog.Root>
                            <Dialog.Trigger onclick={()=> selected = { value: active.teamRole, label: active.teamRole }}
                                class="outline-none"
                            >
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
                            </Dialog.Trigger>
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title
                                        >Member settings</Dialog.Title
                                    >
                                </Dialog.Header>
                                <div
                                    class="flex justify-between text-sm"
                                >
                                    <div
                                        class="text-sm text-zinc-400"
                                    >
                                        Member name
                                    </div>
                                    {active.userName}
                                </div>
                                <div
                                    class="flex justify-between text-sm"
                                >
                                    <div
                                        class="text-sm text-zinc-400"
                                    >
                                        Member email
                                    </div>
                                    {active.userEmail}
                                </div>
                                <div
                                    class="flex justify-between items-center"
                                >
                                    <div
                                        class="text-sm text-zinc-400"
                                    >
                                        Team role
                                    </div>
                                    <ToggleGroup.Root type="single" bind:value>
                                        <ToggleGroup.Item value="Admin" aria-label="Admin" class="h-8">
                                          Admin
                                        </ToggleGroup.Item>
                                        <ToggleGroup.Item value="Frontend" aria-label="Frontend" class="h-8">
                                          Frontend
                                        </ToggleGroup.Item>
                                        <ToggleGroup.Item value="Backend" aria-label="Backend" class="h-8">
                                          Backend
                                        </ToggleGroup.Item>
                                      </ToggleGroup.Root>
                                    
                                </div>
                                <Dialog.Footer class="w-full">
                                    <Dialog.Close class="w-full">
                                        <Button
                                            class="w-full h-9 bg-zinc-900 text-white hover:bg-zinc-900/80"
                                            >Save changes</Button
                                        >
                                    </Dialog.Close>
                                </Dialog.Footer>
                            </Dialog.Content>
                        </Dialog.Root>
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
                                /><path
                                    d="M22 22l-5 -5"
                                /><path
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