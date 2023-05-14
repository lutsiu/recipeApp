import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, TouchEventHandler, useEffect, } from "react";
import useGetMealsInfo from "../../../hooks/useGetMealsInfo";
import RecipeCard from "./RecipeCard";
import { useDispatch } from "react-redux";
import { RandomRecipeActions } from "../../../store/randomRecipe";
import useResize from "../../../hooks/useResize";
import foodCover from '../../../assets/foodCover.png';
export interface RandomRecipe {
  title: string;
  image: string;
  extendedIngredients: { id: number; name: string }[];
  readyInMinutes: number;
  servings: number;
  id: number;
}

const iconClass = "w-[2.5rem] h-[2.5rem] hover:text-gray-300 cursor-pointer duration-300";
  
export default function RecipeContainer() {
  const LAST_CARD = 9;
  const [activeCard, setActiveCard] = useState(0);
  const [startX, setStartX] = useState(0);
  const width = useResize();
  const dispatch = useDispatch();


  const { data }: { data: RandomRecipe[] | null} = useGetMealsInfo(
    "random",
    10,
    true,
    undefined
  );

  
  const handleChangeActiveCard = (i: number) => {
    if (i === LAST_CARD + 1) {
      setActiveCard(0);
      return;
    }
    if (i === -1) {
      setActiveCard(LAST_CARD);
      return;
    }
    setActiveCard(i);
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setStartX(e.changedTouches[0].clientX);
  };
  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    const endX = e.changedTouches[0].clientX;
    const delta = endX - startX;
    if (delta > 40) {
      handleChangeActiveCard(activeCard - 1)
    }
    if (delta < -40) {
      handleChangeActiveCard(activeCard + 1)
    }
    
  };

  

  useEffect(() => {
    if (data) {
      dispatch(
        RandomRecipeActions.setRecipe({
          title: data[activeCard].title,
          image: data[activeCard].image || foodCover,
          extendedIngredients: data[activeCard].extendedIngredients.filter(
            (_, i) => i < 10
          ),
          readyInMinutes: data[activeCard].readyInMinutes,
          servings: data[activeCard].servings,
          id: data[activeCard].id,

        })
      );
    }
  }, [data, activeCard, dispatch]);

  

  return (
    <>
      <div className="relative bg-black w-full mx-auto flex justify-center items-center sm:gap-[2rem] mt-[4rem]">
        {width > 576 && (
          <FaArrowLeft
            className={iconClass}
            onClick={handleChangeActiveCard.bind(null, activeCard - 1)}
          />
        )}
        { <RecipeCard key={activeCard} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}/>}
        {width > 576 && (
          <FaArrowRight
            className={iconClass}
            onClick={handleChangeActiveCard.bind(null, activeCard + 1)}
          />
        )}
      </div>
      <div className="flex gap-[1rem] mx-auto w-fit mt-[1.5rem]">
        {data &&
          data.map((_, i) => {
            return (
              <span
                key={i}
                onClick={handleChangeActiveCard.bind(null, i)}
                className={` inline-block w-[0.7rem] h-[0.7rem] bg-white rounded-full cursor-pointer duration-300 hover:bg-emerald-400`}
                style={{backgroundColor: activeCard === i ? 'rgb(52 211 153)' : 'white'}}
              ></span>
            );
          })}
      </div>
    </>
  );
}
