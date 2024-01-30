import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/TypeWriterEffect";
import { TextGenerateEffect } from "@/components/ui/GenerateEffect";
import Link from "next/link";

function AboutPage() {
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
    </main>
  );
}

export default AboutPage;
