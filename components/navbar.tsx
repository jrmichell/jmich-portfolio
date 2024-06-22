import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <div className="fixed z-50 bg-slate-900 w-full py-2">
      <div className="flex justify-start items-center mx-8">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={50} height={50} priority />
        </Link>
        <div className="fixed right-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
