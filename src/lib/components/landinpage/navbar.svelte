<script>
    import { Link } from "lucide-svelte";
</script>

<div class="w-full flex-col justify-center sticky top-0">
    <div class="flex justify-center">
    <div
        class="w-full max-w-7xl py-1 px-4 sm:px-12 flex justify-between items-center backdrop-blur	"
    >
        

        <div
            class="w-fit flex justify-center gap-2 h-fit rounded-lg py-1 sm:px-1"
        >
        <a
                href="./"
                class="w-fit p-1 dark:text-white flex gap-2 font-bold text-lg items-center transition-all"
            >
                <Link class="w-6 h-6 " />
            </a>
            <a
                href=""
                class="hover:bg-zinc-200 hidden sm:flex dark:hover:bg-zinc-900/60 flex items-center px-2 py-2 text-sm rounded-lg transition-all font-sans "
                >Getting started</a
            >

            <a
                href=""
                class="hover:bg-zinc-200 hidden sm:flex  dark:hover:bg-zinc-900/60 flex items-center px-2 py-2 text-sm rounded-lg transition-all font-sans"
                >Functions</a
            >
            <a
                href=""
                class="hover:bg-zinc-200 hidden sm:flex  dark:hover:bg-zinc-900/60 flex items-center px-2 py-2 text-sm rounded-lg transition-all font-sans"
                >Documentation</a
            >
        </div>

        <div
            class="w-full max-w-[100px] py-2 px-1 flex justify-end items-center gap-1"
        >
        <a
        href=""
        class="dark:bg-white dark:text-black dark:hover:bg-zinc-200 flex items-center px-3 py-1.5 text-sm rounded-lg transition-all font-sans font-medium"
        >
        
        Login</a
    >
    
        </div>
        
    </div>
    
</div>

<div class="mx-auto relative w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
</div>
