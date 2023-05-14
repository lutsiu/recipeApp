import useShowOptions from "../../hooks/useShowOptions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
interface Detail {
  title: string;
  link: string;
}
interface UI {
  details: { optionTitle: string; detail: Detail[] };
}
export default function OptionDetails() {
  const { details } = useSelector((state: { ui: UI }) => state.ui);
  const {handleDetails} = useShowOptions({}, '');

  return (
    <>
      <div className="flex gap-[1rem] items-center">
        <IoArrowBackOutline className="icon text-white" onClick={handleDetails}/>
        <h2 className="text-5xl mr-[2rem] uppercase">
          {details.optionTitle.replace(
            details.optionTitle[0],
            details.optionTitle[0].toUpperCase
          ())}
        </h2>
      </div>
      {details.detail.map((det) => {
        return (
          <li key={det.link}>
            <Link to={`${details.optionTitle}/${det.link}`} className="text-2xl">{det.title}</Link>
          </li>
        );
      })}
      <Link className="text-2xl text-black" to={details.optionTitle}>{`View all ${details.optionTitle}`}</Link>
    </>
  );
}
