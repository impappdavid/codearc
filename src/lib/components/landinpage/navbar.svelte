<script>
    import { Link } from "lucide-svelte";
</script>

<div class="w-full flex-col justify-center sticky top-5 z-50">
    <div class="flex items-center px-4 sm:px-12 lg:px-24 justify-between w-full">
        <div class="w-full">
            <a
                href="./"
                class="w-fit p-1 dark:text-white flex gap-1 font-bold text-lg items-center transition-all dark:hover:text-orange-400"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#f97316"
                        d="m23.414 12l-4.95-4.95l-1.414 1.414L20.586 12l-2.5 2.501l1.415 1.414zm-2 8L4 2.587L2.586 4.001l3 3l-5 5l4.95 4.949l1.414-1.414L3.414 12L7 8.415l13 13z"
                    />
                </svg>
                CodeArc
            </a>
        </div>
        <div
            class="w-fit hidden lg:flex gap-6 bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-md p-1.5 px-2 rounded-full border"
        >
            <a href="#" class="flex gap-1.5 items-center">
                <div
                    class="w-7 h-7 bg-zinc-100/90 dark:bg-zinc-900/90 rounded-full flex justify-center items-center border"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-smart-home"
                        ><path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        /><path
                            d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"
                        /><path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" /></svg
                    >
                </div>
                <div class="text-sm">Home</div>
            </a>
            <a
                href="#features"
                class="flex items-center text-zinc-500 hover:text-black dark:hover:text-white transition-all"
            >
                <div class="text-sm">Features</div>
            </a>
            <a
                href="#"
                class="flex items-center text-zinc-500 hover:text-black dark:hover:text-white transition-all"
            >
                <div class="text-sm">About</div>
            </a>
            
            <a
                href="#"
                class="flex items-center text-zinc-500 hover:text-black dark:hover:text-white transition-all"
            >
                <div class="text-sm">Team</div>
            </a>
            <a
                href="#"
                class="min-w-max flex items-center text-zinc-500 hover:text-black dark:hover:text-white transition-all"
            >
                <div class="text-sm">How it works</div>
            </a>
            <div class="flex gap-1.5 items-center">
                <div
                    class="w-fit min-w-max px-2 h-7 bg-zinc-100/90 dark:bg-zinc-900/90 rounded-full flex justify-center gap-0.5 items-center border text-xs text-orange-500 opacity-60 hover:opacity-100 hover:cursor-pointer transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
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
                    CodeArc - v1.0
                </div>
            </div>
        </div>
        <div class="w-full py-3 px-2 flex justify-end items-center gap-2">
            <a
                href="/login"
                class="tracking-wide bg-zinc-950 dark:bg-white backdrop-blur-sm border flex hover:bg-zinc-950/80 dark:hover:bg-white/80 text-white dark:text-black items-center px-4 py-1.5 text-sm lg:text-md rounded-full transition-all"
            >
                Get started</a
            >
        </div>
    </div>
</div>
