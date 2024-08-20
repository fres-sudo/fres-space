 
<script lang="ts">
  import { Separator } from "$lib/components/ui/separator";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Github, Linkedin, Instagram } from "lucide-svelte"
</script>


    <main class="flex flex-col h-screen items-center justify-between px-12 sm:px-24 py-10">
      <div class="w-full h-full items-start">
        <div class="flex z-10 w-full items-center justify-center font-mono text-sm">
          <div class="flex h-5 items-center space-x-4 text-sm">
            <a href="/blog">
              <Button variant="ghost">Blog</Button>
            </a>
            <Separator orientation="vertical" />
            <a href="/">
              <Button variant="outline" class="text-green-500">
                Fres Space
              </Button>
            </a>
            <Separator orientation="vertical" />
            <a href="/about">
              <Button variant="ghost">About</Button>
            </a>
          </div>
        </div>
        <Separator class=" my-10" />
      </div>
      <div class="relative flex flex-col items-center place-items-center ">
        <h2 class="text-center font-thin text-ml text-muted-foreground">
          Hi, I am <br />
        </h2>
        <h1 class="text-center text-white font-serif font-bold text-7xl">
            <span class="text-green-500">Francesco</span> Calicchio
        </h1>
        <div class="flex flex-col w-[25rem]">
            <p class="font-thin text-center text-sm sm:text-ml py-6">
              Welcome to my space, here you can find more about me, my interest, and you can broswe through my mind.
            </p>
            <p class="font-mono text-center text-sm sm:text-ml">
            You can also call me <span class="hover:text-green-500">fres</span>.      
      </p>
        </div>
      </div>
      <div class="flex flex-col h-full w-full justify-end items-center ">
        <Separator />
        <h1 class="pt-5 font-mono">You can find me here</h1>
        <div class="flex w-20 h-10 items-center my-6 space-x-4 justify-center">
          <a
            target="_blank"
            class="hover:underline"
            href="https://github.com/fres-sudo/">
            <Github class="m-2" />
          </a>

          <Separator orientation="vertical" />
          <a
            target="_blank"
            class="hover:underline"
            href="https://linkedin.com/in/francesco-calicchio/">
            <Linkedin class="m-2" />
          </a>
          <Separator orientation="vertical" />
          <a
            target="_blank"
            class="hover:underline"
            href="https://instagram.com/aka_fres/">
            <Instagram class="m-2" />
          </a>
        </div>
      </div>
    </main>
