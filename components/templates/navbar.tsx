import Logo from "@/components/uis/logo";
import { ModeToggle } from "./dark-mode";

export default function Navbar() {
  return (
    <header className="py-5 container flex justify-between items-center">
      <div>
        <Logo variants="link" />
      </div>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
