import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="fixed z-50 bg-background w-full py-2">
      <div className="flex justify-start items-center mx-8 gap-6">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={50} height={50} priority />
        </Link>
        <Button variant="outline" className="uppercase">
          <Link href="/">Home</Link>
        </Button>
        <Button variant="outline" className="uppercase">
          <Link href="/contact">Contact</Link>
        </Button>
        <div className="fixed right-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
