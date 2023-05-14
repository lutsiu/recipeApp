import Header from "../components/MainComponents/PagesHeader"
import meals from '../assets/Backgrounds/meals.jpg';
import { Outlet } from "react-router-dom"

export default function Meals() {

  return (
    <div>
      <Header title="Choose the best meals" image={meals} />
      <Outlet/>
    </div>
  )
}