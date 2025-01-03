<script>
    import { Link } from "lucide-svelte";
</script>

<div class="w-full flex-col justify-center sticky top-0 z-50">
    <div class="flex justify-center">
        <div
            class="w-full px-2 sm:px-4 backdrop-blur-sm border-b flex justify-center"
        >
            <div class="flex items-center justify-between w-full max-w-5xl ">
                <div class="w-full">
                    <a
                        href="./"
                        class="w-fit p-1 dark:text-white flex gap-1 font-bold text-lg items-center transition-all dark:hover:text-sky-400"
                    >
                        <Link class="w-6 h-6 " />
                        CollaBug
                    </a>
                </div>

                

                <div
                    class="w-full py-2 px-1 flex justify-end items-center gap-2"
                >
                    
                    <a
                        href="/login"
                        class="bg-sky-400 flex text-white dark:text-black dark:hover:bg-sky-400/90 items-center px-3 py-1.5 text-sm rounded-lg transition-all font-sans"
                    >
                        Get started</a
                    >
                </div>
            </div>
        </div>
    </div>
</div>
