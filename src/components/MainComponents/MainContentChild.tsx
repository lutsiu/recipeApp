import { Link } from "react-router-dom";
import Query from "../MainComponents/Query";
interface Props {
  links?: { title: string; link: string }[];
  query?: string;
  title?:  string;
}
export default function DinnerChild(props: Props) {
  return (
    <div className="flex flex-col items-center mt-[2rem]">
      <h3 className="text-3xl text-center lg:text-5xl">{props.title}</h3>
      <Query query={props.query}/>
      <div className="flex gap-[2rem] mb-[2rem] px-[1rem]">
        {props.links && props.links.map((link, i) => {
          return (
            <Link
              key={i}
              to={link.link}
              className=" text-lg text-center md:text-2xl hover:text-main-hover hover:scale-110 duration-500"
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
