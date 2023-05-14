import cuisine from '../assets/Backgrounds/cuisine.jpg';
import Header from '../components/MainComponents/PagesHeader';
import { Outlet } from 'react-router-dom';
export default function Cuisine() {

  return (
    <div>
      <Header title='Select recipe by cuisine' image={cuisine}/>
      <Outlet/>
    </div>
  )
}