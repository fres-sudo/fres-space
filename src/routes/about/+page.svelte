<script lang="ts">
  import AboutHeading from "$lib/components/AboutHeading.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import { CalendarRange } from "lucide-svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Education from "$lib/components/Education.svelte";
</script>

<main
  class="flex flex-col h-full items-center justify-between px-12 sm:px-64 py-10"
>
  <Navbar />
  <div class="flex flex-col h-screen w-full items-start justify-start px-24">
    <AboutHeading />
    <div class="flex flex-col w-full items-start justify-start">
      <Separator />

      <div class="flex flex-col w-full items-start justify-between">
        <Education />
      </div>
    </div>
  </div>
</main>
