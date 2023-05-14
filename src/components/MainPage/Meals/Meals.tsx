import Title from "../../MainComponents/Title";
import Button from "../../MainComponents/Button";
import { navLinks } from "../../../data/navLinks";
import { useState} from "react";
import MealsContent from "./MealsContent";
export default function Meals() {
  const contentArray = [
    <MealsContent />,
    <MealsContent query="breakfasts" link="breakfasts"/>,
    <MealsContent query="soups" link="soups"/>,
    <MealsContent query="side dish" link="side-dishes"/>,
    <MealsContent query="drinks" link="drinks"/>,
  ];

  const [content, setContent] = useState(0);
  const [activeBtn, setActiveBtn] = useState(0);
  const showContent = (buttonId: number) => {
    setContent(buttonId);
    setActiveBtn(buttonId);
  };

  return (
    <div
      className=" bg-gray-100 py-[3rem] flex flex-col items-center px-[2rem] "
      id="meals"
    >
      <Title color="text-black">Meals</Title>
      <div className="flex gap-[1.5rem] mt-[2rem] flex-wrap justify-center">
        <Button
          key={0}
          class="transparent"
          link={false}
          blackFont={true}
          onClick={() => showContent(0)}
          active={activeBtn === 0}
        >
          All meals
        </Button>
        {navLinks.meals.map((meal, i) => {
          return (
            <Button
              key={i}
              class="transparent"
              link={false}
              blackFont={true}
              onClick={() => showContent(i + 1)}
              active={activeBtn === i+1 ? true: false}
            >
              {meal.title}
            </Button>
          );
        })}
      </div>
      <div className="text-black mt-[4rem] w-full relative">{contentArray[content]}</div>
    </div>
  );
}
