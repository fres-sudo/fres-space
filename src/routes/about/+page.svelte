<script lang="ts">
  import AboutHeading from "$lib/components/AboutHeading.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Education from "$lib/components/Education.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Projects from "$lib/components/Projects.svelte";
</script>

<main class="flex flex-col h-full max-w-6xl items-center justify-start">
  <AboutHeading />
  <div class="flex flex-col items-start justify-start pb-10">
    <Separator class="mx-10 my-4" />
    <Projects />
  </div>
</main>
