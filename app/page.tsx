import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-12 sm:px-24 py-10">
      <div className="w-full h-full">
        <div className="flex z-10 w-full items-center justify-center font-mono text-sm">
          <div className="flex h-5 items-center space-x-4 text-sm">
            <Button variant="ghost">Blog</Button>
            <Separator orientation="vertical" />
            <Button variant="outline">Fres Space</Button>
            <Separator orientation="vertical" />
            <Button variant="ghost">About</Button>
          </div>
        </div>
        <Separator className=" my-10" />
      </div>
      <div className="relative flex flex-col items-center place-items-center ">
        <h2 className="text-center font-semibold text-2xl">
          Hi, iam <br />
        </h2>

        <h1 className="text-center text-white font-black text-8xl">
          Francesco Calicchio
        </h1>
      </div>
    </main>
  );
}
