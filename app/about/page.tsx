import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/TypeWriterEffect";
import { TextGenerateEffect } from "@/components/ui/GenerateEffect";
import Link from "next/link";
import { TracingBeam } from "@/components/ui/TracingBeam";
import {
  Binary,
  MapPin,
  PersonStanding,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

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
      <TracingBeam className="">
        <div className="flex flex-col h-screen w-full items-start justify-start">
          <div className="flex flex-col sm:flex-row w-full items-start justify-start">
            <Image
              className="mx-10"
              src="/shape-cv-image-2.png"
              alt="image"
              width={300}
              height={300}
            />
            <div className="flex flex-col w-full my-10">
              <h1 className="text-start text-white font-bold text-3xl sm:text-4xl mb-5">
                Francesco <span className="text-green-500">Calicchio</span>{" "}
              </h1>
              <Separator />
              <div className="flex flex-row w-full h-full items-start justify-start">
                <h2 className="flex items-center text-start text-muted-foreground font-thin text-sm mt-5">
                  <Binary className="mr-2 w-5 h-5" />
                  Software Engineer
                </h2>
                <Separator orientation="vertical" className="m-5 h-6" />
                <h2 className="flex items-center text-start text-muted-foreground font-thin text-sm mt-5">
                  <MapPin className="mr-2 w-5 h-5" />
                  Benevento, Italy
                </h2>
                <Separator orientation="vertical" className="m-5 h-6" />
                <h2 className="flex items-center text-start text-muted-foreground font-thin text-sm mt-5">
                  <PersonStanding className="mr-2 w-5 h-5" />
                  20 years old
                </h2>
              </div>
              <Separator />
              <h2 className="font-mono text-sm my-5">
                <span className="text-green-500">Contact</span> me:
              </h2>
              <div className="flex flex-col sm:flex-row w-full h-8 items-center justify-between">
                <h2 className="flex items-center text-start text-muted-foreground font-thin text-sm mb-2">
                  <Mail className="mr-2 w-5 h-5" />
                  francescocalicchio@hotmail.com
                </h2>
                <Separator orientation="vertical" />
                <h2 className="flex items-center text-start text-muted-foreground font-thin text-sm">
                  <Phone className="mr-2 w-5 h-5" />
                  +39 377 455 2296
                </h2>
              </div>
              <h2 className="font-mono text-sm my-5">
                <span className="text-green-500">Reach</span> me out here:
              </h2>
              <div className="flex flex-row w-full  h-8 items-center justify-between">
                <Link
                  href="https://github.com/fres-sudo/"
                  className={buttonVariants({
                    variant: "link",
                  })}>
                  <Github className="mr-2 h-4 w-4" /> Github
                </Link>

                <Separator orientation="vertical" />
                <Link
                  href="https://linkedin.com/in/francesco-calicchio/"
                  className={buttonVariants({
                    variant: "link",
                  })}>
                  <Linkedin className="mr-2 h-4 w-4" /> Linkedin
                </Link>
                <Separator orientation="vertical" />
                <Link
                  href="https://instagram.com/aka_fres/"
                  className={buttonVariants({
                    variant: "link",
                  })}>
                  <Instagram className="mr-2 h-4 w-4" />
                  Instgram
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-start justify-start">
            <Separator />
            <h1 className="font-mono text-2xl my-5">
              <span className="text-green-500">Exp</span>erience:
            </h1>
            <h1 className="font-mono text-2xl my-5">
              <span className="text-green-500">Edu</span>cation:
            </h1>
          </div>
        </div>
      </TracingBeam>

      {
        // ------------ BOTTOM NAV BAR -------------------
      }

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

export default AboutPage;
