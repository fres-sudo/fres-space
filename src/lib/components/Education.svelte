<script lang="ts">
  import { CalendarRange } from "lucide-svelte";
  import Button from "./ui/button/button.svelte";
</script>

<div class="flex flex-col h-full min-w-full items-start ml-10 my-10">
  <div class="flex flex-row items-center justify-between w-full">
    <h1 class="font-mono text-2xl m-5">
      <span class="text-green-500">Exp</span>erience
    </h1>
    <Button
      variant="outline"
      disabled
      class="bg-muted-foreground hover:bg-muted"
    >
      <CalendarRange class="mr-2 w-5 h-5" /> Oct 2022 - Present
    </Button>
  </div>
  <p class="ml-10">• University of Camerino</p>
</div>
