import { currentUser } from "@clerk/nextjs";
import Menus from "./menus";

export default async function Bottombar() {
  const user = await currentUser();

  return (
    <Menus
      className="container flex lg:hidden justify-between"
      username={user?.username}
    />
  );
}
