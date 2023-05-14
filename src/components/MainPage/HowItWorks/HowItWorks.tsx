import together from "../../../assets/Icons/together.svg";
import cooking from "../../../assets/Icons/cooking.svg";
import search from "../../../assets/Icons/search.svg";
import Card from "./Card";
import Title from "../../MainComponents/Title";
export default function HowItWorks() {
  return (
    <div className="py-[2rem]">
      <Title color='text-white'>How does it work?</Title>
      <div className="flex max-w-full lg:justify-between 2xl:justify-evenly flex-col items-center lg:flex-row mt-[3rem] px-[3rem]">
        <Card img={search} alt="search" title="Find a recipe" />
        <Card img={cooking} alt="cooking" title="Prepare the food" />
        <Card img={together} alt="enjoy" title="Enjoy your meal" />
      </div>
    </div>
  );
}
