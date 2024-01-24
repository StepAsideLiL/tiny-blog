"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

export default function Logo({ variants = "" }: { variants?: "" | "link" }) {
  if (variants === "link") {
    return (
      <Link href={"/"}>
        <Icon />
      </Link>
    );
  }

  return <Icon />;
}

function Icon() {
  const { theme } = useTheme();

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        // stroke="#fff"
        stroke={theme === "light" ? "#000" : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m40.5 42.5h-33a2.0059 2.0059 0 0 1 -2-2v-33a2.0059 2.0059 0 0 1 2-2h33a2.0059 2.0059 0 0 1 2 2v33a2.0059 2.0059 0 0 1 -2 2z" />
        <path d="m10.5 15.6028h11.1263" />
        <path d="m16.0631 32.3972v-16.7944" />
        <path d="m13.8589 32.3972h4.4085" />
        <path d="m10.5 17.8071v-2.2043" />
        <path d="m21.6263 17.8071v-2.2043" />
        <path d="m33.3014 24a4.1986 4.1986 0 0 1 0 8.3972h-6.9277v-16.7944h6.9277a4.1986 4.1986 0 0 1 0 8.3972z" />
        <path d="m33.3014 24h-6.9277" />
        <path d="m24.1695 15.6028h2.2042" />
        <path d="m24.1695 32.3972h2.2042" />
      </g>
    </svg>
  );
}
