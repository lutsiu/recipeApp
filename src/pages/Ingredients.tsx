import ingredients from '../assets/Backgrounds/ingredients.jpg'
import Header from '../components/MainComponents/PagesHeader'
import { Outlet } from "react-router-dom"
export default function Ingredients() {

  return (
    <div>
      <Header title="Select recipe by ingredients" image={ingredients}/>
      <Outlet/>
    </div>
  )
}