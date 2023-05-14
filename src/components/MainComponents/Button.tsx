import { Link } from "react-router-dom";
interface Props {
  children?: React.ReactNode;
  class: "purple" | "emerald" | "transparent";
  link: boolean;
  href?: string;
  blackFont?: boolean;
  onClick?: () => void;
  active?: boolean;
}
export default function Button(props: Props) {
  const button: React.ReactElement = (
    <button
      onClick={props.onClick}
      className={`${props.class} ${props.active ? 'scale-110 bg-emerald-400' : ''} ${props.blackFont && "text-black"} button w-fit`}
    >
      {props.children}
    </button>
  );
  const link: React.ReactElement = (
    <Link
      to={props.href as string}
      className={`${props.class} ${props.blackFont && "text-black"} button w-fit`}
    >
      {props.children}
    </Link>
  );
  return <>{props.link ? link : button}</>;
}
