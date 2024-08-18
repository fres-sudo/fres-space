<script lang="ts">
import Separator from "./ui/separator/separator.svelte";
import Button from "./ui/button/button.svelte";
</script>
    <div class="w-full h-full items-start">
      <div class="flex z-10 w-full items-center justify-center font-mono text-sm">
        <div class="flex h-5 items-center space-x-4 text-sm">
          <Button variant="ghost">
            <a href="/blog">Blog</a>
          </Button>
          <Separator orientation="vertical" />
          <Button variant="outline" class="text-green-500">
            <a href="/">Fres Space</a>
          </Button>
          <Separator orientation="vertical" />
          <Button variant="ghost">
            <a href="/about">About</a>
          </Button>
        </div>
      </div>
      <Separator class=" my-10" />
    </div>
