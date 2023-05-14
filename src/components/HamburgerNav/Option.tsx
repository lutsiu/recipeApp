import { IoChevronForward } from "react-icons/io5";
import useShowOptions from "../../hooks/useShowOptions";
interface Props {
  title: string;
  detail: { title: string; link: string }[];
}

export default function Option(props: Props) {
  const { handleDetails } = useShowOptions(props.detail, props.title);
  return (
    <li
      className="flex justify-between items-center border-b-[0.1rem] border-b-zinc-400 py-[0.5rem] w-full cursor-pointer"
      onClick={handleDetails}
    >
      <span className="text-lg uppercase">{props.title}</span>
      <IoChevronForward className="h-[1.5rem] w-[1.5rem]" />
    </li>
  );
}
