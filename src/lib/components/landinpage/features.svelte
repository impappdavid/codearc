<script>
    import { Link } from "lucide-svelte";
    import Animatedtext from "../animatedtext.svelte";
    import { cn } from "$lib/utils";
    import Flickering from "./flickering.svelte";
    import teamFeature from "$lib/imgs/activityFeature.png";
    import lightApiRoute from "../../imgs/lightApiRoute.png";
    import darkApiRoute from "../../imgs/darkApiRoute.png";
    import lightTodo from "../../imgs/lighTodo.png";
    import bigTodo from "../../imgs/bigTodo.png";
    import darkBigTodo from "../../imgs/bigDarkTodo.png";
</script>

<section class="py-24">
    <div class="w-full flex justify-center">
        <div
            class="w-fit px-4 h-7 dark:bg-zinc-900/90 bg-zinc-100 text-lg rounded-xl flex justify-center gap-0.5 items-center border text-sm text-orange-500 transition-all"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-bolt"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M13 2l.018 .001l.016 .001l.083 .005l.011 .002h.011l.038 .009l.052 .008l.016 .006l.011 .001l.029 .011l.052 .014l.019 .009l.015 .004l.028 .014l.04 .017l.021 .012l.022 .01l.023 .015l.031 .017l.034 .024l.018 .011l.013 .012l.024 .017l.038 .034l.022 .017l.008 .01l.014 .012l.036 .041l.026 .027l.006 .009c.12 .147 .196 .322 .218 .513l.001 .012l.002 .041l.004 .064v6h5a1 1 0 0 1 .868 1.497l-.06 .091l-8 11c-.568 .783 -1.808 .38 -1.808 -.588v-6h-5a1 1 0 0 1 -.868 -1.497l.06 -.091l8 -11l.01 -.013l.018 -.024l.033 -.038l.018 -.022l.009 -.008l.013 -.014l.04 -.036l.028 -.026l.008 -.006a1 1 0 0 1 .402 -.199l.011 -.001l.027 -.005l.074 -.013l.011 -.001l.041 -.002z"
                /></svg
            >
            Features
        </div>
    </div>
    <div
        id="#features"
        class="grid grid-cols-3 grid-rows-2 w-full max-w-6xl gap-6 mt-12"
    >
        <div
            id="featurecard"
            class="w-full flex h-fit flex-col col-span-1 py-8 px-8 gap-12 rounded-2xl transition-all "
        >
            <div class="flex flex-col gap-2">
                <div class="text-orange-600 text-lg font-medium">
                    Seamless Team Collaboration
                </div>
                <div class="text-zinc-600 text-lg">
                    Effortlessly create and manage multiple projects within your
                    team. Assign roles and track tasks.
                </div>
            </div>
            <div class="w-full drop-shadow-lg flex dark:hidden" id="img1">
                <img src={lightApiRoute} alt="apiroute" class="rounded-md" />
            </div>
            <div class="w-full drop-shadow-lg hidden dark:flex" id="img1">
                <img src={darkApiRoute} alt="apiroute" class="rounded-md" />
            </div>
        </div>

        <div
            id="featurecard"
            class="w-full flex h-fit flex-col col-span-1 py-8 px-8 gap-12 rounded-2xl transition-all "
        >
            <div class="flex flex-col gap-2">
                <div class="text-orange-600 text-lg font-medium">
                    AI-Powered Tools
                </div>
                <div class="text-zinc-600 text-lg">
                    everage cutting-edge AI for code quality checks, automated documentation generation.
                </div>
            </div>
            <div class="w-full drop-shadow-lg flex dark:hidden" id="img1">
                <img src={lightApiRoute} alt="apiroute" class="rounded-md" />
            </div>
            <div class="w-full drop-shadow-lg hidden dark:flex" id="img1">
                <img src={darkApiRoute} alt="apiroute" class="rounded-md" />
            </div>
        </div>

        <div
            id="featurecard"
            class="w-full flex flex-col row-span-2 col-span-1 h-fit py-8 px-8 gap-12 rounded-2xl transition-all "
        >
            <div class="flex flex-col gap-2">
                <div class="text-orange-600 text-lg font-medium">
                    Advanced Todo Management
                    
                </div>
                <div class="text-zinc-600 text-lg">
                    Filter tasks by backend, frontend, or priority. Mark important items and track progress,
                    
                </div>
            </div>
            <div class="w-full drop-shadow-lg flex dark:hidden" id="img1">
                <img src={bigTodo} alt="apiroute" class="rounded-md" />
            </div>
            <div class="w-full drop-shadow-lg hidden dark:flex" id="img1">
                <img src={darkBigTodo} alt="apiroute" class="rounded-md" />
            </div>
        </div>

        <div
            id="featurecard"
            class="w-full flex flex-col col-span-1 h-fit py-8 px-8 gap-12 rounded-2xl transition-all "
        >
            <div class="flex flex-col gap-2">
                <div class="text-orange-600 text-lg font-medium">
                    User-Friendly Database Planner
                </div>
                <div class="text-zinc-600 text-lg">
                    Design and generate SQL databases with just a few clicks. Visualize your schema and customize it.
                </div>
            </div>
            <div class="w-full drop-shadow-lg flex dark:hidden" id="img1">
                <img src={lightApiRoute} alt="apiroute" class="rounded-md" />
            </div>
            <div class="w-full drop-shadow-lg hidden dark:flex" id="img1">
                <img src={darkApiRoute} alt="apiroute" class="rounded-md" />
            </div>
        </div>

        <div
            id="featurecard"
            class="w-full flex flex-col col-span-1 h-fit py-8 px-8 gap-12 rounded-2xl transition-all "
        >
            <div class="flex flex-col gap-2">
                <div class="text-orange-600 text-lg font-medium">
                    Smart API Route Manager
                </div>
                <div class="text-zinc-600 text-lg">
                    View backend API routes with clear instructions on required parameters and expected responses.
                </div>
            </div>
            <div class="w-full drop-shadow-lg flex dark:hidden" id="img1">
                <img src={lightApiRoute} alt="apiroute" class="rounded-md" />
            </div>
            <div class="w-full drop-shadow-lg hidden dark:flex" id="img1">
                <img src={darkApiRoute} alt="apiroute" class="rounded-md" />
            </div>
        </div>


    </div>
</section>

<style>
   #featurecard {
    position: relative; /* Required for pseudo-element positioning */
    overflow: hidden; /* Ensures the pseudo-element doesn't extend outside */
}

#featurecard::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(249, 115, 22, 0.20) 0%,
        rgba(250, 250, 250, 1) 100%
    );
    z-index: -1; /* Ensures it stays behind content */
    opacity: 0; /* Initially invisible */
    transition: opacity 0.3s ease-in-out, background 0.3s ease-in-out;
}

#featurecard:hover::before {
    opacity: 1; /* Fade in the gradient on hover */
}

#img1 {
    transition: transform 0.3s ease-in-out; /* Smooth image animation */
}

#featurecard:hover #img1 {
    transform: translateY(-10px); /* Smooth move effect */
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
    #featurecard::before {
        background: linear-gradient(
            180deg,
            #fb923c20 0%,
            #09090b 100%
        );
    }
}


</style>
