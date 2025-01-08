<script>
    import {
        ArrowRight,
        ChevronRight,
        Link,
        Pin,
        ScanFace,
    } from "lucide-svelte";
    import Animatedtext from "../animatedtext.svelte";
    import { Button } from "../ui/button";
    import { cn } from "$lib/utils";
    import { Input } from "../ui/input";
    import * as Tabs from "$lib/components/ui/tabs";
    import apirouteDark from "../../imgs/apirouteDark.png";
    import apirouteLight from "../../imgs/apirouteLight.png";
    import todoDark from "../../imgs/todoDark.png";
    import todoLight from "../../imgs/todoLight.png";
    import databaseplannerDark from "../../imgs/databaseplannerDark.png";

</script>

<div class="w-full flex flex-1 py-24 px-0 sm:px-4 lg:px-8">
    <div
        class="w-full max-w-full h-fit apect-video rounded-2xl p-8 sm:p-8 flex justify-center"
    >
        <div
            class="flex flex-col gap-6 sm:gap-8 items-center justify-center w-full"
        >
            <div class="flex gap-1.5 items-center">
                <div
                    class="w-fit px-3 h-7 bg-zinc-100/90 dark:bg-zinc-900/90 rounded-xl flex justify-center gap-0.5 items-center border text-sm text-orange-500 hover:cursor-pointer hover:bg-zinc-200/70 dark:hover:bg-zinc-800 transition-all"
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
            <div
                class="flex flex-col items-center text-5xl sm:text-6xl sm:tracking-wide text-medium sm:font-semibold text-center"
            >
                Build, Collaborate,<br /> and Innovate
            </div>
            <div
                class="text-md sm:text-xl text-zinc-600 dark:text-zinc-400 text-center max-w-3xl"
            >
                Streamline development with powerful tools, seamless
                collaboration, and AI-driven efficiency in one platform.
            </div>
            <div class="flex gap-4">
                <div class="">
                    <Button
                        class="bg-orange-500 dark:bg-orange-500 text-white dark:text-white tracking-wide hover:bg-zinc-950/80 dark:hover:bg-orange-500/80 rounded-full px-4 sm:px-6 sm:text-md transition-all flex gap-2 items-center"
                        aria-label="Get started for free"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#ffffff"
                                d="m23.414 12l-4.95-4.95l-1.414 1.414L20.586 12l-2.5 2.501l1.415 1.414zm-2 8L4 2.587L2.586 4.001l3 3l-5 5l4.95 4.949l1.414-1.414L3.414 12L7 8.415l13 13z"
                            />
                        </svg>
                        Start for free
                    </Button>
                </div>
                <div class="">
                    <Button
                        class="bg-transparent text-black dark:text-white tracking-wide hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 border rounded-full px-4 sm:px-6 sm:text-md transition-all"
                        aria-label="Get started for free"
                    >
                        Try demo
                    </Button>
                </div>
            </div>

            <div class="w-full max-w-6xl flex justify-center mt-8">
                <Tabs.Root value="apiroute" class="w-full ">
                    <Tabs.List class="w-full bg-transparent">
                        <Tabs.Trigger
                            value="apiroute"
                            class="flex gap-1 text-xs sm:text-sm"
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
                                class="icon icon-tabler icons-tabler-outline icon-tabler-api hidden sm:flex"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                /><path d="M4 13h5" /><path
                                    d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"
                                /><path d="M20 8v8" /><path
                                    d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"
                                /></svg
                            >
                            <div class="">Api route manage</div>
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="todomanagement"
                            class="flex gap-1 text-xs sm:text-sm"
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
                                class="icon icon-tabler icons-tabler-outline icon-tabler-layout-list hidden sm:flex"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                /><path
                                    d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                                /><path
                                    d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                                /></svg
                            >
                            <div class="">Todo management</div>
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="databaseplanner"
                            class="flex gap-1 text-xs sm:text-sm"
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
                                class="icon icon-tabler icons-tabler-outline icon-tabler-database hidden sm:flex"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                /><path
                                    d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"
                                /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path
                                    d="M4 12v6a8 3 0 0 0 16 0v-6"
                                /></svg
                            >
                            <div class="">Database planner</div>
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content
                        value="apiroute"
                        class="bg-zinc-900  border rounded-xl"
                    >
                        <img
                            src={apirouteDark}
                            alt="apiroute"
                            class="hidden dark:flex rounded-xl"
                        />
                        <img
                            src={apirouteLight}
                            alt="apiroute"
                            class="flex dark:hidden rounded-xl"
                        />
                    </Tabs.Content>
                    <Tabs.Content
                        value="todomanagement"
                        class="bg-zinc-900  border rounded-xl"
                    >
                        <img src={todoDark} alt="apiroute" class="rounded-xl hidden dark:flex rounded-xl" />
                        <img
                            src={todoLight}
                            alt="apiroute"
                            class="flex dark:hidden rounded-xl"
                        />
                    </Tabs.Content>
                    <Tabs.Content
                        value="databaseplanner"
                        class="bg-zinc-900  border rounded-xl"
                    >
                        <img
                            src={databaseplannerDark}
                            alt="apiroute"
                            class="rounded-xl"
                        />
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
    </div>
</div>
