<script>
    import { BadgeInfo, Mail, MapPinHouse, User } from "lucide-svelte";
</script>

<div class="w-full h-full bg-zinc-900 rounded-xl flex flex-col gap-2 p-4">
    <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col gap-2">
            <div class="text-xl text-white font-semibold">About me</div>
            <div class="text-sm text-zinc-400">
                I'm a frontend developer with a passion for building intuitive
                and engaging user experiences. While I specialize in Svelte,
                Next.js, and TypeScript, I also have backend experience with
                NestJS and MySQL. I've worked on projects like an NFT
                marketplace with a custom generator and DevFlow, a
                developer-focused platform with AI-powered tools. Beyond coding,
                I love gaming, music, and learning new tech. My goal is to
                create impactful, innovative solutions while growing as a
                developer.
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="text-xl text-white font-semibold">Informations</div>
            <div class="flex flex-col gap-2">
                <div class="flex gap-2 items-center">
                    <User class="w-4 h-4 text-zinc-400" />
                    <div class="text-zinc-300 text-sm">Papp Dávid</div>
                </div>
                <div class="flex gap-2 items-center">
                    <Mail class="w-4 h-4 text-zinc-400" />
                    <div class="text-zinc-300 text-sm">
                        impappdavid@gmail.com
                    </div>
                </div>
                <div class="flex gap-2 items-center">
                    <BadgeInfo class="w-4 h-4 text-zinc-400" />
                    <div class="text-zinc-300 text-sm">22 yrs</div>
                </div>
                <div class="flex gap-2 items-center">
                    <MapPinHouse class="w-4 h-4 text-zinc-400" />
                    <div class="text-zinc-300 text-sm">Hungary</div>
                </div>
            </div>
        </div>
    </div>
</div>
