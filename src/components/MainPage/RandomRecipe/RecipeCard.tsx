import BackSide from "./BackSide";
import classes from "./styles.module.scss";
import FrontSide from "./FrontSide";
import { TouchEventHandler } from "react";

interface Props {
  onTouchStart: TouchEventHandler<HTMLDivElement>;
  onTouchEnd: TouchEventHandler<HTMLDivElement>;

}

export default function RecipeCard(props: Props) {
  return (
    <div
      className="relative rounded-[2.8rem] w-[100%] sm:w-[34rem] h-[35rem] overflow-hidden cursor-pointer"
      style={{ perspective: "2000px" }}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
    >

      <div
        className={`${classes.card} w-full h-full absolute  bg-white duration-500 ease-in-out`}
      >
        <FrontSide/>
        <BackSide />
      </div>
    </div>
  );
}
