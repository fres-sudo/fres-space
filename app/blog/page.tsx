import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/TypeWriterEffect";
import { TextGenerateEffect } from "@/components/ui/GenerateEffect";
import Link from "next/link";

function BlogPage() {
  return (
    <main className="flex flex-col  items-start justify-start px-12 sm:px-24 py-10">
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
      <div className="h-full w-screen justify-start">
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Backgrounds
          </p>
        </div>
        <h1 className="text-start text-white font-bold text-4xl">
          All my <span className="text-green-500">posts</span>{" "}
        </h1>
      </div>
    </main>
  );
}

export default BlogPage;
