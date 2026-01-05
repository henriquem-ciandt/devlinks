import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 space-y-4 relative min-h-screen w-full bg-cover sm:bg-[url(/bg-desktop-light.svg)] sm:dark:bg-[url(/bg-desktop.svg)] bg-[url(/bg-mobile-light.svg)] dark:bg-[url(/bg-mobile.svg)]">
      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-start min-h-screen px-1 py-3.5 md:py-2 md:pt-3.5">
        {/* Profile */}
        <div className="flex justify-center items-center flex-col min-w-90 sm:min-w-147 min-h-48 gap-2 py-6 px-31 sm:p-6">
          <Avatar className="size-28 bg-white border-2 border-stroke">
            <AvatarImage src={"/avatar.jpeg"} />
          </Avatar>
          <Link className="w-auto min-w-20 min-h-6 text-4 sm:text-3.5/24 text-l/24 font-medium sm:font-normal text-black dark:text-white" href={"https://github.com/henriquem-ciandt"}>@henriquem-ciandt</Link>
        </div>
        {/* Switch */}
        <Switch />
        {/* Links */}
        <div className="flex-col w-min-90 sm:w-min-147 h-min-80 justify-start gap-4 p-6 space-y-4">
          <Button className="w-full h-min-14 gap-2 px-6 py-4 justify-center rounded-b-md bg-surface hover:bg-surface-hover border border-stroke">Inscreva-se no NLW</Button>
          <Button className="w-full h-min-14 gap-2 px-6 py-4 justify-center rounded-b-md bg-surface hover:bg-surface-hover border border-stroke">Baixe meu e-book</Button>
          <Button className="w-full h-min-14 gap-2 px-6 py-4 justify-center rounded-b-md bg-surface hover:bg-surface-hover border border-stroke">Veja meu portfólio</Button>
          <Button className="w-full h-min-14 gap-2 px-6 py-4 justify-center rounded-b-md bg-surface hover:bg-surface-hover border border-stroke">Conheça meu curso</Button>
        </div>
      </div>
    </div>
  );
}
