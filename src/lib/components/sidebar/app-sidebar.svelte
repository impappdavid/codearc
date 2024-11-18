<script lang="ts" module>
	import AudioWaveform from "lucide-svelte/icons/audio-waveform";
	import BookOpen from "lucide-svelte/icons/book-open";
	import Bot from "lucide-svelte/icons/bot";
	import ChartPie from "lucide-svelte/icons/chart-pie";
	import Command from "lucide-svelte/icons/command";
	import Frame from "lucide-svelte/icons/frame";
	import GalleryVerticalEnd from "lucide-svelte/icons/gallery-vertical-end";
	import Map from "lucide-svelte/icons/map";
	import Settings2 from "lucide-svelte/icons/settings-2";
	import { House ,Users, Info,ListTodo,Database,ShieldCheck,Files,Settings,Library, Folder } from "lucide-svelte";
	
	
	// This is sample data.
	const data = {
		user: {
			name: "Collabug",
			email: "Creator",
			avatar: "",
		},
		teamprojects: [
			{
				name: "Collabug",
				logo: Folder,
				plan: "Project manager",
			},
			
		],
		
		navMain: [
			{
				title: "Home",
				url: "../home",
				icon: House,
				isActive: true,
				
			},
			
			
		],
		navteam:[
			
			{
				name: "Templates",
				url: "/team/templates/teamName",
				icon: Library,
			},
			
			],
		projects: [
			{
				name: "Todo",
				url: "#",
				icon: ListTodo,
			},
			{
				name: "Database planner",
				url: "#",
				icon: Database,
			},
			{
				name: "Code quality checker",
				url: "#",
				icon: ShieldCheck,
			},
			{
				name: "Documentation generator",
				url: "#",
				icon: Files,
			},
			{
				name: "Api test",
				url: "#",
				icon: Settings,
			},
			
		],
	};
</script>

<script lang="ts">
	import NavMain from "$lib/components/sidebar/nav-main.svelte";
	import NavProjects from "$lib/components/sidebar/nav-projects.svelte";
	import NavUser from "$lib/components/sidebar/nav-user.svelte";
	import TeamSwitcher from "$lib/components/sidebar/team-switcher.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";
    import NavTeam from "./nav-team.svelte";

	let {
		ref = $bindable(null),
		collapsible = "icon",
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {collapsible} {...restProps}>
	<Sidebar.Header>
		<TeamSwitcher teams={data.teamprojects} />
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<NavTeam navteam={data.navteam}/>
		<NavProjects projects={data.projects} />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
