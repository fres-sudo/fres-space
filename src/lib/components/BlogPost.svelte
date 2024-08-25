<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import Separator from "./ui/separator/separator.svelte";
  import { type Post } from "$lib/types";

  export let data: Post;

  const { title, description, date, image, tags } = data;
</script>

<Card.Root>
  <Card.Header class="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
    <div class="space-y-1">
      <Card.Title>{title}</Card.Title>
      <Card.Description>
        Beautifully designed components built with Radix UI and Tailwind CSS.
      </Card.Description>
    </div>
    <div
      class="bg-secondary text-secondary-foreground flex items-center space-x-1 rounded-md"
    >
      <Button variant="secondary" class="px-3 shadow-none">Star</Button>
      <Separator orientation="vertical" class="h-[20px]" />
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            variant="secondary"
            class="px-2 shadow-none"
          ></Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-[200px]" align="end">
          <DropdownMenu.Label>Suggested Lists</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.CheckboxItem checked
            >Future Ideas</DropdownMenu.CheckboxItem
          >
          <DropdownMenu.CheckboxItem>My Stack</DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem>Inspiration</DropdownMenu.CheckboxItem>
          <DropdownMenu.Separator />
          <DropdownMenu.Item></DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  </Card.Header>
  <Card.Content>
    <div class="text-muted-foreground flex space-x-4 text-sm">
      <div class="flex items-center">TypeScript</div>
      <div class="flex items-center">20k</div>
      <div>Updated April 2023</div>
    </div>
  </Card.Content>
</Card.Root>
