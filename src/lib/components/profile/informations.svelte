<script>
import * as Tabs from "$lib/components/ui/tabs";
    import Profile from "./profile.svelte";
    import Projects from "./projects.svelte";
</script>

<Tabs.Root value="profile" class="w-full ">
    <Tabs.List class="flex gap-2 bg-zinc-900 rounded-xl justify-start">
      <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
      <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="profile" class="w-full h-full">
      <Profile />
    </Tabs.Content>
    <Tabs.Content value="projects">
      <Projects />
    </Tabs.Content>
  </Tabs.Root>