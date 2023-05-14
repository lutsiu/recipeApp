import classes from './styles.module.scss'
import { useSelector } from "react-redux";
import { RandomRecipe } from "./RecipeContainer";
import Button from '../../MainComponents/Button';
interface State {
  randomRecipe: RandomRecipe
}



export default function BackSide() {

  const {randomRecipe: recipe} = useSelector((state: State) => state);

  return (
    <div className={`${classes.backSide} ${classes.side} bg-white flex flex-col justify-center items-start p-[2rem]`}>
      <p className='text-4xl text-black'>Ingredients : </p>
      <ul className='ml-[1.2rem] mt-[1rem] mb-[1rem]'>
        {recipe.extendedIngredients.map((ing, i) => {
          return <li className='text-2xl text-black mb-[0.5rem] list-disc' key={i}>{ing.name}</li>
        })}
      </ul>
      <Button link={true} href={recipe.id.toString()} class='purple' >View full recipe</Button>
    </div>
  )
}