<script>
  import "../app.css";
  import { ModeWatcher, setMode } from "mode-watcher";

  setMode("dark")
</script>

<ModeWatcher defaultMode={"dark"}/>,

<slot/>

