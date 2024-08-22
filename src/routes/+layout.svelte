<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
  import { ModeWatcher, setMode } from "mode-watcher";

  setMode("dark");
</script>

<ModeWatcher defaultMode={"dark"} />,

<main
  class="p-6 sm:p-10 flex min-h-screen flex-col items-center justify-between"
>
  <Navbar />

  <slot />

  <Footer />
</main>
