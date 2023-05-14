import Header from '../components/MainComponents/PagesHeader';
import dinner from '../assets/Backgrounds/dinner.jpg';
import { Outlet } from "react-router-dom";
export default function Dinner() {
  return (
    <div className="w-full h-fit">
      <Header title='Prepare the yummy dinner' image={dinner} />
      <Outlet/>
    </div>
  );
}
