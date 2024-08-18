<script lang="ts">
    import AboutHeading from "$lib/components/AboutHeading.svelte";
import Separator from "$lib/components/ui/separator/separator.svelte";
import { CalendarRange } from "lucide-svelte";
    import Navbar from "$lib/components/Navbar.svelte"
</script>

<main class="flex flex-col h-full items-center justify-between px-12 sm:px-64 py-10">
			<Navbar />
			<div class="flex flex-col h-screen w-full items-start justify-start px-24">
				<AboutHeading/>
				<div class="flex flex-col w-full items-start justify-start">
					<Separator />

					<div class="flex flex-row w-full items-start justify-between">
						<div class="flex flex-row h-full min-w-full items-start ml-10 my-10">
							<h1 class="font-mono text-2xl m-5">
								<span class="text-green-500">Exp</span>erience
							</h1>
							<div class="flex flex-row items-center bg-transparent border border-white text-white text-sm hover:bg-white hover:text-primary-foreground hover:border-primary p-2 rounded-md ml-10">
								<CalendarRange class="mr-2 w-5 h-5" /> Oct 2022 - Present
							</div>

							<p class="ml-10">• University of Camerino</p>
						</div>

							<h1 class="font-mono text-2xl m-5">
								<span class="text-green-500">Exp</span>erience
							</h1>
							</div>
					</div>
				</div>

	</main>
