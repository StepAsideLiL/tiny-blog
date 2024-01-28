"use client";

import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Home, NotebookPen, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menus({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const { user } = useUser();

  const menuList = [
    {
      title: "Home",
      href: "/",
      icon: <Home strokeWidth="0.5px" size={"30px"} />,
      activeIcon: <Home strokeWidth="3px" size={"30px"} />,
    },
    {
      title: "Write Blog",
      href: "/add",
      icon: <NotebookPen strokeWidth="0.5px" size={"30px"} />,
      activeIcon: <NotebookPen strokeWidth="3px" size={"30px"} />,
    },
    {
      title: "Profile",
      href: `/${user?.username}`,
      icon: <User strokeWidth="0.5px" size={"30px"} />,
      activeIcon: <User strokeWidth="3px" size={"30px"} />,
    },
  ];

  return (
    <nav className={cn("flex gap-5", className)}>
      {menuList.map((list) => (
        <Link
          key={list.href}
          href={list.href}
          className={cn(
            "inline-block px-6 py-3 hover:bg-muted rounded",
            pathname === list.href && "bg-muted"
          )}
        >
          <span className="sr-only">{list.title}</span>
          {pathname === list.href ? list.activeIcon : list.icon}
        </Link>
      ))}
    </nav>
  );
}
