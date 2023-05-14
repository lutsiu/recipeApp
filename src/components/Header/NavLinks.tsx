import NavigationLink from "./NavigationLink";
import {navLinks} from "../../data/navLinks";
export default function NavLinks() {
  return (
    <ul className="2xl:flex-[6] xl:flex-[6] lg:flex-[5] flex justify-between pr-[9rem] xl:pr-[5rem] lg:pr-[2rem] lg:pl-[2rem] pl-[5rem] ">
      <NavigationLink link="dinners" nestedLinks={navLinks.dinners} />
      <NavigationLink link="meals" nestedLinks={navLinks.meals} />
      <NavigationLink link="ingredients" nestedLinks={navLinks.ingredients} />
      <NavigationLink link="cuisine" nestedLinks={navLinks.cuisine} />
    </ul>
  );
}
