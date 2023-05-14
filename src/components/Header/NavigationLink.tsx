import { NavLink, Link } from "react-router-dom";
interface Props {
  link: string;

  nestedLinks: { link: string; title: string }[];
}

export default function NavigationLink(props: Props) {
  return (
    <li className="relative">
      <NavLink
        to={`${props.link}`}
        className={({ isActive }) =>
          isActive ? "nav-link--active" : "nav-link--passive"
        }
      >
        {props.link}
      </NavLink>
      <ul className="nested-links  z-20 absolute top-[1.6rem] left-[-2.2rem] opacity-0 pointer-events-none duration-500 text-sm bg-main rounded-md px-[0.5rem] py-[0.7rem] w-[12rem]">
        {props.nestedLinks.map((item) => (
          <li key={item.link} className=" last-of-type:mb-0 mb-[0.6rem]">
            <Link
              to={`${props.link}/${item.link}`}
              className=" inline-block origin-left hover:scale-125 duration-500 text-lg"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
