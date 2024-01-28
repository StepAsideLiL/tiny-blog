import Logo from "@/components/uis/logo";
import { Button } from "@/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import UserAvatar from "./user-avatar";
import { Menu } from "lucide-react";
import Menus from "./menus";

export default function Navbar() {
  const { userId } = auth();

  return (
    <div className="border-b sticky top-0 bg-background z-50">
      <header className="w-full py-3 container flex justify-between items-center">
        {/* 1st section */}
        <div className="w-full flex justify-start">
          <Logo variants="link" className="lg:inline-block hidden" />
          <Menu className="inline-block lg:hidden" />
        </div>

        {/* 2nd section */}
        <div className="w-full flex justify-center">
          <Logo variants="link" className="inline-block lg:hidden" />
          <Menus className="lg:block hidden" />
        </div>

        {/* 3rd section */}
        <div className="w-full flex justify-end">
          {userId ? (
            <UserAvatar />
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <PersonIcon />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={"/sign-in"} className="cursor-pointer">
                    Sign In
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href={"/sign-up"} className="cursor-pointer">
                    Create an account
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </header>
    </div>
  );
}
