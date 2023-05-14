import Title from "../../MainComponents/Title"
import RecipeContainer from "./RecipeContainer"
export default function RandomRecipe() {

  return (
    <div className="bg-black p-[1rem] sm:p-[2rem] md:p-[3rem]">
      <Title color="text-white">Try out some random recipe</Title>
      <RecipeContainer/>
    </div>
  )
}