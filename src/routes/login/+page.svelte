<script>
    import Animatedtext from "$lib/components/animatedtext.svelte";
    import { cn } from "$lib/utils";
    import { Link, Github } from "lucide-svelte";
    import * as Form from "$lib/components/ui/form";
    import { enhance } from "$app/forms";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import { Button } from "$lib/components/ui/button";
    import { Separator } from "$lib/components/ui/separator";
    import { Checkbox } from "$lib/components/ui/checkbox";
    import * as Tooltip from "$lib/components/ui/tooltip";
</script>

<div class="w-full h-screen flex justify-center items-center">
    <div
        class="w-full sm:max-w-sm h-screen sm:h-fit py-6 bg-zinc-200/50 dark:bg-zinc-900/50 px-6 sm:rounded-xl backdrop-filter backdrop-blur-lg sm:border flex-col gap-4"
    >
        <div class="w-full flex flex-col gap-4 items-center">
            <div
                class={cn(
                    "group mx-auto rounded-md w-fit border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-zinc-200 dark:border-white/5 dark:bg-zinc-900 dark:hover:bg-zinc-800",
                )}
            >
                <Animatedtext
                    class=" inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-zinc-600 hover:duration-600 hover:dark:text-zinc-400 flex gap-1 text-sm"
                >
                    <Link class="w-4 h-4" />
                    Collabug v1.0
                </Animatedtext>
            </div>
            <div class="flex flex-col gap-2">
                <div class="w-full flex justify-center text-xl font-semibold">
                    Sign In
                </div>
                <div
                    class="w-full flex justify-center text-sm dark:text-zinc-400"
                >
                    Please enter your details to sign in.
                </div>
            </div>

            <form action="" class="w-full flex flex-col gap-4">
                <div class="flex flex-col gap-4">
                    <Button
                        variant="outline"
                        class="flex gap-1 bg-zinc-900 dark:text-black text-white dark:bg-white/90 hover:bg-zinc-300 dark:hover:bg-zinc-900/70 rounded-lg"
                    >
                        <Github />
                        Sign In with Github
                    </Button>
                    <div class="flex justify-center items-center gap-2">
                        <Separator class="w-1/3" />
                        <span class="text-zinc-600 text-xs">OR</span>
                        <Separator class="w-1/3" />
                    </div>
                </div>
                <div class="flex flex-col w-full justify-center gap-1.5">
                    <Label for="email" class="text-zinc-500">Email</Label>
                    <Input
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Email"
                        class="bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800 text-black dark:text-white  rounded-lg w-full"
                    />
                </div>
                <div class="flex flex-col w-full justify-center gap-1.5">
                    <Label for="password" class="text-zinc-500"
                        >Password</Label
                    >
                    <Input
                    name="password"
                        type="password"
                        id="password"
                        placeholder="Password"
                        class="bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800 text-black dark:text-white rounded-lg w-full"
                    />
                </div>

                <div class="flex justify-between">
                    <div class="flex items-center space-x-2">
                        <Checkbox id="terms" class="border-zinc-500" />

                        <label
                            for="terms"
                            class="text-xs text-black dark:text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Remember me
                        </label>
                    </div>
                    <div class="flex">
                        <a
                            href=""
                            class="underline text-xs text-zinc-500 dark:text-zinc-400"
                            >Forgot password?</a
                        >
                    </div>

                </div>

                <Button
                    class="transition-all bg-zinc-900 dark:bg-zinc-200 text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-300 rounded-lg p-2 pt-4 pb-4 transition-all"
                    type="submit">Login</Button
                >
            </form>
            <span class="text-xs text-zinc-500"
                >Don't have an account yet? <a
                    href="./signup"
                    class="underline font-semibold text-black dark:text-white">SignUp</a
                ></span
            >
        </div>
    </div>
</div>
