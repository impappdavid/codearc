<script lang="ts">
    import * as Select from "$lib/components/ui/select";

    const fruits = [
        { value: "low", label: "Low", icon: '<path fill="#80c1ff" fill-opacity="0.3" d="M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71"/> <path fill="#80c1ff" d="m12 12l-8.29 8.29c-.63.63-.19 1.71.7 1.71H12z"/>' },
        { value: "medium", label: "Medium", icon: '<path fill="#fd8c4e" fill-opacity="0.3" d="M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71"/> <path fill="#fd8c4e" d="M14 10L3.71 20.29c-.63.63-.19 1.71.7 1.71H14z"/>' },
        { value: "high", label: "High", icon: '<path fill="#ff3d3d" d="M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71"/>' },
    ];

    let value = $state("");

    const triggerContent = $derived(
        fruits.find((f) => f.value === value)?.label ?? "Select priority",
    );
</script>

<Select.Root type="single" name="favoriteFruit" bind:value>
    <Select.Trigger class="w-full h-8 bg-zinc-900 rounded-lg">
        {triggerContent}
    </Select.Trigger>
    <Select.Content class="rounded-lg bg-zinc-900 border">
        <Select.Group>
            {#each fruits as fruit}
                <Select.Item value={fruit.value} label={fruit.label} class="hover:cursor-pointer">
                    
                    {fruit.label}
                </Select.Item>
            {/each}
        </Select.Group>
    </Select.Content>
</Select.Root>
