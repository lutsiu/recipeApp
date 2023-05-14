import { useSelector} from "react-redux";
import Icons from "./Icons";
import Option from "./Option";
import OptionDetails from "./OptionDetails";
import SearchBar from "../Icons/SearchBar";
import useResize from "../../hooks/useResize";
interface Options {
  title: string;
  details: { title: string; link: string }[];
}
interface Props {
  options: Options[];
}
export interface StateOptions {
  ui: {showOptions: boolean, showOptionDetails: boolean};
}
export default function Options(props: Props) {
  const {showOptions, showOptionDetails} = useSelector((state: StateOptions) => state.ui);
  const width = useResize();
  const OptionsList: React.ReactElement = (
    <>
      {props.options.map((option) => {
        return (
          <Option
            key={option.title}
            title={option.title}
            detail={option.details}
          />
        );
      })}
      <Icons />
    </>
  );
  
  return (
    <ul className="w-full h-full flex flex-col gap-[2rem] items-center sm:items-center md:items-start">
      {width < 577 && <SearchBar/>}
      {showOptions && OptionsList}
      {showOptionDetails && <OptionDetails/>}
    </ul>
  );
}
