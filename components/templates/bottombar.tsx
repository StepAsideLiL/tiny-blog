import { auth } from "@clerk/nextjs";
import Menus from "./menus";

export default async function Bottombar() {
  const { userId } = auth();

  return (
    <Menus
      className="container flex lg:hidden justify-between"
      userId={userId}
    />
  );
}
