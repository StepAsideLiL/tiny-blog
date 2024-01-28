"use client";

import { cn } from "@/lib/utils";
import { Home, NotebookPen, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuList = [
  {
    title: "Home",
    href: "/",
    icon: <Home strokeWidth="0.5px" size={"36px"} />,
    activeIcon: <Home strokeWidth="3px" size={"36px"} />,
  },
  {
    title: "Write Blog",
    href: "/add",
    icon: <NotebookPen strokeWidth="0.5px" size={"36px"} />,
    activeIcon: <NotebookPen strokeWidth="3px" size={"36px"} />,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: <User strokeWidth="0.5px" size={"36px"} />,
    activeIcon: <User strokeWidth="3px" size={"36px"} />,
  },
];

export default function Menus({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex gap-3", className)}>
      {menuList.map((list) => (
        <Link
          key={list.href}
          href={list.href}
          className={cn(
            "inline-block p-3 hover:bg-muted rounded",
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
