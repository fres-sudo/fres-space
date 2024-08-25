<script lang="ts">
  import { Badge } from "$lib/components/ui/badge/index.js";
</script>

<div class="flex flex-col h-full items-start mx-1">
  <div class="flex flex-row items-start w-full">
    <h1 class="font-mono text-2xl mb-3">
      <span class="text-green-500">Pro</span>ject
    </h1>
  </div>
  <a
    href="https://github.com/fres-sudo/pomo"
    class="mx-4 font-semibold mb-2 decoration-neutral-400 underline-offset-2"
    >- <span class="underline">Pomo</span> 🍅</a
  >
  <ul class="list-disc list-inside mx-10">
    <li class="text-muted-foreground">
      Published a mobile app on <span class="text-white">app stores</span>
      focusing on work and study management with the
      <span class="text-white">Pomodoro technique</span>. The app architecture
      enables organization of projects, tasks, and sessions.
    </li>
    <li class="text-muted-foreground">
      Designed a <span class="text-white">lightweight architecture </span>
      using BloC, Dio for HTTP requests, Retrofit for services, and Provider for
      <span class="text-white">Dependency Injection </span> implementation.
    </li>
    <li class="text-muted-foreground pb-1">
      Established a backend system with <span class="text-white"
        >Hono and Bun</span
      >
      following the <span class="text-white">Container pattern</span>,
      interfacing with PostgreSQL. Through highly optimized code, achieved a
      <span class="text-white">60% reduction </span>in processing time per
      request.
    </li>
    <Badge class="bg-muted text-muted-foreground">Flutter</Badge>
    <Badge class="bg-muted text-muted-foreground">Dart</Badge>
    <Badge class="bg-muted text-muted-foreground">Hono</Badge>
    <Badge class="bg-muted text-muted-foreground">Bun</Badge>
    <Badge class="bg-muted text-muted-foreground">PostgreSQL</Badge>
  </ul>

  <a
    href="https://formwizard.fres.space"
    target="_blank"
    class="mx-4 font-semibold my-2 decoration-neutral-400 underline-offset-2"
  >
    - <span class="underline">Form Wizard</span>🧙
  </a>
  <ul class="list-disc list-inside mx-10">
    <li class="text-muted-foreground">
      Led the complete development cycle of a <span>full stack web app </span> using
      Next.js, allowing users to craft dynamic forms and monitor post-publication
      stats.
    </li>
    <li class="text-muted-foreground">
      Accomplished improved form completion rates by implementing a
      user-friendly interface, resulting in a <span>50% reduction </span>in form
      abandonment.
    </li>
    <Badge class="bg-muted text-muted-foreground">Next.js</Badge>
    <Badge class="bg-muted text-muted-foreground">React</Badge>
    <Badge class="bg-muted text-muted-foreground">Prisma</Badge>
    <Badge class="bg-muted text-muted-foreground">PostgreSQL</Badge>
  </ul>
</div>
