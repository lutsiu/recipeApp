import Icons from "./Icons";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import useResize from "../../hooks/useResize";
import Hamburger from "./Hamburger";
export default function Header() {
  const width = useResize();

  let Content: React.ReactElement | null = null;
  if (width > 991) {
    Content = (
      <>
        <NavLink to="/" className="flex-[1] text-3xl inline-block">
          Lutsiu Recipe
        </NavLink>
        <NavLinks />
        <Icons />
      </>
    );
  }
  if (width <= 991) {
    Content = (
      <>
        <Hamburger/>
        <NavLink to="/" className=" md:flex-[4] lg:flex-[1] sm:flex-[2] flex-2 text-2xl inline-block md:text-center sm:text-xl">
          Lutsiu Recipe
        </NavLink>
        <Icons />
      </>
    );
  }

  return (
    <header className="w-full fixed min-w-full max-w-full h-[5rem] md:h-[7rem] bg-zinc-900 opacity-90 xl:px-[4rem] lg:px-[2rem] md:px-[2rem] sm:px-[1.5rem] px-[1rem]  z-40">
      <nav className="h-full max-w-full flex items-center">{Content}</nav>
    </header>
  );
}
