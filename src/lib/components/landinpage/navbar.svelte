<script>
    import { Link } from "lucide-svelte";
</script>

<div class="w-full flex-col justify-center sticky top-5">
    <div class="flex justify-center">
        <div
            class="w-full max-w-5xl px-2 sm:px-4 flex justify-between items-center backdrop-blur-lg dark:bg-zinc-900/50 rounded-xl"
        >
            <div class="w-full max-w-[200px]">
                <a
                    href="./"
                    class="w-fit p-1 dark:text-white flex gap-1 font-bold text-lg items-center transition-all dark:hover:text-emerald-500"
                >
                    <Link class="w-6 h-6 " />
                    CollaBug
                </a>
            </div>

            <div
                class="w-fit flex justify-center gap-2 h-fit rounded-lg py-1 sm:px-1"
            >
                <a
                    href=""
                    class="hover:bg-zinc-200 hidden sm:flex dark:hover:bg-zinc-900/80 flex items-center px-2 py-2 text-sm rounded-lg transition-all font-sans"
                    >Getting started</a
                >

                <a
                    href=""
                    class="hover:bg-zinc-200 hidden sm:flex dark:hover:bg-zinc-900/80 flex items-center px-2 py-2 text-sm rounded-lg transition-all font-sans"
                    >Functions</a
                >
                <a
                    href=""
                    class="hover:bg-zinc-200 hidden sm:flex dark:hover:bg-zinc-900/80 flex items-center px-2 py-2 text-sm rounded-lg transition-all font-sans"
                    >Docs</a
                >
                <a
                    href=""
                    class="hover:bg-zinc-200 hidden sm:flex dark:hover:bg-zinc-900/80 flex items-center px-2 py-2 text-sm rounded-lg transition-all font-sans"
                    >How it's work?</a
                >
            </div>

            <div
                class="w-full max-w-[200px] py-2 px-1 flex justify-end items-center gap-2"
            >
                <a
                    href="/login"
                    class=" dark:text-white dark:hover:bg-zinc-800 flex items-center px-3 py-1.5 text-sm rounded-md transition-all font-sans  border"
                >
                    Sign In</a
                >
                <a
                    href=""
                    class="dark:bg-white hidden sm:flex dark:text-black dark:hover:bg-zinc-200 items-center px-3 py-1.5 text-sm rounded-md transition-all font-sans"
                >
                    Get started</a
                >
            </div>
        </div>
    </div>
</div>
