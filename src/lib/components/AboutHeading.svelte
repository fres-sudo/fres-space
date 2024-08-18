

<script lang="ts">
  import { Separator } from "$lib/components/ui/separator";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Github, Linkedin, Instagram, Binary, MapPin, FileText, PersonStanding, Mail, Phone} from "lucide-svelte"
</script>


 <div class="flex flex-col sm:flex-row w-full items-start justify-start">
    <img
      class="mx-10"
      src={"/shape-cv-image-2.png"}
      alt="image"
      width={300}
      height={300}
    />
    <div class="flex flex-col w-full my-10">
      <div class='flex flex-row justify-between'>
        <h1 class="text-start text-white font-bold text-3xl sm:text-4xl mb-5">
          Francesco <span class="text-green-500">Calicchio</span>{" "}
        </h1>
        <Button class=" text-green-500 font-mono" variant={"outline"} >
          <a  target="_blank" href="/CV_FRANCESCO_CALICCHIO.pdf"  ><FileText class="mr-2 h-4 w-4"/> Download CV</a>
        </Button>
      </div>
      
      <Separator />
      <div class="flex flex-row w-full h-full items-start justify-around">
        <h2 class="flex items-center text-start text-muted-foreground font-thin text-sm mt-5">
          <Binary class="mr-2 w-5 h-5" />
          Software Engineer
        </h2>
        <Separator orientation="vertical" class="m-5 h-6" />
        <h2 class="flex items-center text-start text-muted-foreground font-thin text-sm mt-5">
          <MapPin class="mr-2 w-5 h-5" />
          Benevento, Italy
        </h2>
        <Separator orientation="vertical" class="m-5 h-6" />
        <h2 class="flex items-center text-start text-muted-foreground font-thin text-sm mt-5">
          <PersonStanding class="mr-2 w-5 h-5" />
          20 years old
        </h2>
      </div>
      <Separator />
      <h2 class="font-mono text-sm my-5">
        <span class="text-green-500">Contact</span> me:
      </h2>
      <div class="flex flex-col sm:flex-row w-full h-8 items-center justify-around">
        <h2 class="flex items-center text-start text-muted-foreground font-thin text-sm mb-2">
          <Mail class="mr-2 w-5 h-5" />
          francescocalicchio@hotmail.com
        </h2>
        <Separator orientation="vertical" />
        <h2 class="flex items-center text-start text-muted-foreground font-thin text-sm">
          <Phone class="mr-2 w-5 h-5" />
          +39 377 455 2296
        </h2>
      </div>
    </div>
  </div>
