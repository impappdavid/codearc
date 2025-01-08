<script>
    import Animatedtext from "$lib/components/animatedtext.svelte";
    import { cn } from "$lib/utils";
    import { Link, Github, ScanFace, ArrowRight } from "lucide-svelte";
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
            <div class="flex gap-1.5 items-center">
                <div
                    class="w-fit px-3 h-7 bg-zinc-100/90 dark:bg-zinc-900/90 rounded-xl flex justify-center gap-0.5 items-center border text-sm text-orange-500 hover:cursor-pointer hover:bg-zinc-200/50 dark:hover:bg-zinc-800 transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                    What's new in CodeArc v1.0
                </div>
            </div>
            <div class="flex flex-col gap-4">
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
                        class="flex gap-1 bg-zinc-900 dark:text-black text-white dark:bg-white/90 hover:bg-zinc-950 hover:text-white dark:hover:bg-white/80 rounded-xl"
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
                        class="bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800 text-black dark:text-white  rounded-xl w-full"
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
                        class="bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800 text-black dark:text-white rounded-xl w-full"
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
                    class="transition-all bg-orange-500 dark:bg-orange-500 text-white dark:text-black hover:bg-orange-500/80 dark:hover:bg-orange-500/90 rounded-xl p-2 pt-4 pb-4 transition-all"
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
