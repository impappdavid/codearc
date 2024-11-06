<script>
    import Animatedtext from "$lib/components/animatedtext.svelte";
    import Hero from "$lib/components/landinpage/hero.svelte";
    import Navbar from "$lib/components/landinpage/navbar.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { cn } from "$lib/utils";
    import { Link } from "lucide-svelte";
</script>

<div class="w-full px-2 sm:px-0">
    <Navbar></Navbar>

    <section class="w-full flex justify-center pt-2">
        <Hero/>
    </section>
</div>
