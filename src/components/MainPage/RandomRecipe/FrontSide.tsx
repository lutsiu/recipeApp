import classes from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RandomRecipe } from "./RecipeContainer";
import { FaUserAlt, FaBookOpen, FaClock } from "react-icons/fa";
import FrontSideIcon from "./FrontSideIcon";
import { useState } from "react";
import oval from "../../../assets/Loader/oval.svg";
import { motion } from "framer-motion";
interface State {
  randomRecipe: RandomRecipe;
}

export default function FrontSide() {
  const { randomRecipe: recipe } = useSelector((state: State) => state);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`${classes.frontSide} ${classes.side} bg-white text-black`}>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{duration: 1}}
        src={imageLoaded ? recipe.image : oval}
        alt={recipe.title}
        loading="lazy"
        
        onLoad={handleImageLoaded}
      />
      <p className="text-2xl sm:text-2xl text-center mt-[1rem] ">
        {recipe.title}
      </p>
      <div className="flex justify-between px-[1rem] mt-[3rem]">
        <FrontSideIcon
          title="minutes"
          icon={<FaClock className="w-[2rem] h-[2rem]" />}
          number={recipe.readyInMinutes}
        />
        <FrontSideIcon
          title="ingredients"
          icon={<FaBookOpen className="w-[2rem] h-[2rem]" />}
          number={recipe.extendedIngredients.length}
        />
        <FrontSideIcon
          title="servings"
          icon={<FaUserAlt className="w-[2rem] h-[2rem]" />}
          number={recipe.servings}
        />
      </div>
    </div>
  );
}
