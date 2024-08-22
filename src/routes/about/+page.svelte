<script lang="ts">
  import AboutHeading from "$lib/components/AboutHeading.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Education from "$lib/components/Education.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Projects from "$lib/components/Projects.svelte";
</script>

<main class="flex flex-col h-full items-center justify-start">
  <AboutHeading />
  <div class="flex flex-col items-start justify-start">
    <Separator class="mx-10 my-4" />
    <Experience />
    <Separator class="mx-10 my-4" />
    <Projects />
    <Separator class="mx-10 my-4" />
    <Education />
  </div>
</main>
