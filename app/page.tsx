import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/TypeWriterEffect";
import { TextGenerateEffect } from "@/components/ui/GenerateEffect";
import Link from "next/link";
import { Github, Instagram, Linkedin, LinkedinIcon } from "lucide-react";

export default function Home() {
  const words = [
    {
      text: "Francesco",
      className: "font-serif",
    },
    {
      text: "Calicchio",
      className: "text-blue-500 dark:text-green-500 font-serif",
    },
  ];
  const generatedSubtitle =
    "Welcome to my space, here you can find more about me, my interest, and you can broswe through my mind.";

  const generatedAKA = "You can also call me fres";
  return (
    <main className="flex flex-col h-screen items-center justify-between px-12 sm:px-24 py-10">
      <div className="w-full h-full items-start">
        <div className="flex z-10 w-full items-center justify-center font-mono text-sm">
          <div className="flex h-5 items-center space-x-4 text-sm">
            <Link href="/blog">
              <Button variant="ghost">Blog</Button>
            </Link>
            <Separator orientation="vertical" />
            <Link href="/">
              <Button variant="outline" className="text-green-500">
                Fres Space
              </Button>
            </Link>
            <Separator orientation="vertical" />
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
          </div>
        </div>
        <Separator className=" my-10" />
      </div>
      <div className="relative flex flex-col items-center place-items-center ">
        <h2 className="text-center font-thin text-ml text-muted-foreground">
          Hi, I am <br />
        </h2>
        <h1 className="text-center text-white font-sans text-8xl">
          <TypewriterEffectSmooth words={words} />
        </h1>
        <div className="flex flex-col w-[25rem]">
          <TextGenerateEffect
            words={generatedSubtitle}
            className="font-thin text-center text-sm sm:text-ml"
            delay={3000}
          />
          <TextGenerateEffect
            words={generatedAKA}
            className=" font-mono text-white text-center text-ml "
            delay={7000}
          />
        </div>
      </div>
      <div className="flex flex-col h-full w-full justify-end items-center ">
        <Separator />
        <h1 className="pt-5 font-mono">You can also find me here</h1>
        <div className="flex w-20 h-10 items-center my-6 space-x-4 justify-center">
          <Link
            href="https://github.com/fres-sudo/"
            className={buttonVariants({ variant: "outline", size: "icon" })}>
            <Github className="m-2" />
          </Link>

          <Separator orientation="vertical" />
          <Link
            href="https://linkedin.com/in/francesco-calicchio/"
            className={buttonVariants({ variant: "outline", size: "icon" })}>
            <Linkedin className="m-2" />
          </Link>
          <Separator orientation="vertical" />
          <Link
            href="https://instagram.com/aka_fres/"
            className={buttonVariants({ variant: "outline", size: "icon" })}>
            <Instagram className="m-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}
