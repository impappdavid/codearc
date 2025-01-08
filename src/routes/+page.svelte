<script>
    import Animatedtext from "$lib/components/animatedtext.svelte";
    import Features from "$lib/components/landinpage/features.svelte";
    import Hero from "$lib/components/landinpage/hero.svelte";
    import Howitworks from "$lib/components/landinpage/howitworks.svelte";
    import Navbar from "$lib/components/landinpage/navbar.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { cn } from "$lib/utils";
    import { Link } from "lucide-svelte";
</script>

<div class="w-full px-2 sm:px-0">
    <Navbar></Navbar>

    <section class="w-full flex flex-col items-center gap-4">
        <Hero/>
        <div class="w-full flex justify-center" id="features">
        <Features/>
    </div>
       
        
        
        
        <Howitworks />
    </section>
</div>
