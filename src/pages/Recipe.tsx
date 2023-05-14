import { useLocation } from "react-router-dom";
import useGetMealsInfo from "../hooks/useGetMealsInfo";
import Description from "../components/Recipe/Description";
import Header from "../components/Recipe/Header";
import List from "../components/Recipe/List";
export interface RecipeType {
  title: string;
  servings: number;
  readyInMinutes: number;
  image: string;
  extendedIngredients: {
    image: string;
    name: string;
    original: string;
    amount: number;
  }[];
  vegan: boolean;
  analyzedInstructions: {name: string, steps:{step: string, number:number}[]}[];
  instructions: string;
}

export default function Recipe() {
  const { pathname } = useLocation();
  const id = +pathname.replace("/", "");
  const { recipe }: { recipe: RecipeType | null } = useGetMealsInfo(
    "",
    undefined,
    undefined,
    undefined,
    undefined,
    id
  );


  return (
    <div className=" xl:ml-[2rem] 2xl:ml-[10rem]">
      {recipe && (
        <div className="bg-black-400 py-[2rem] px-[1.3rem] sm:px-[4rem] flex flex-col justify-center w-full lg:w-[80%]">
          <Header title={recipe.title} image={recipe.image} />
          <Description
            readyInMinutes={recipe.readyInMinutes}
            servings={recipe.servings}
            vegan={recipe.vegan}
            ings={recipe.extendedIngredients.length.toString()}
          />
          <List ings={recipe.extendedIngredients}/>
          <List steps={recipe.analyzedInstructions[0].steps} firstStep={recipe.analyzedInstructions[0].name} />
        </div>
      )}
    </div>
  );
}
