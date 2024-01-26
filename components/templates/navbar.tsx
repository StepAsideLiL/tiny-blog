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

export default function Navbar() {
  const { userId } = auth();

  return (
    <div className="border-b">
      <header className="py-3 container flex justify-between items-center">
        <div>
          <Logo variants="link" />
        </div>

        <div className="h-8 flex items-center gap-2">
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
