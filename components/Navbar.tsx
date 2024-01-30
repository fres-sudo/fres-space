import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function Navbar() {
  return (
    <div className="w-full h-full items-start">
      <div className="flex z-10 w-full items-center justify-center font-mono text-sm">
        <div className="flex h-5 items-center space-x-4 text-sm">
          <Button variant="ghost">
            <Link href="/blog">Blog</Link>
          </Button>
          <Separator orientation="vertical" />
          <Button variant="outline" className="text-green-500">
            <Link href="/">Fres Space</Link>
          </Button>
          <Separator orientation="vertical" />
          <Button variant="ghost">
            <Link href="/about">About</Link>
          </Button>
        </div>
      </div>
      <Separator className=" my-10" />
    </div>
  );
}

export default Navbar;
