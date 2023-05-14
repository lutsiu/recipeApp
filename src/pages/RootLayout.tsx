import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import HamburgerNav from "../components/HamburgerNav/HamburgerNav";
import Footer from '../components/Footer/Footer';
import useResize from "../hooks/useResize";
export default function RootLayout() {
  const width = useResize();

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      {width < 992 && <HamburgerNav/>}
      <main className="min-w-full flex flex-col bg-black text-[4rem] relative max-w-full mt-[5rem] md:mt-[7rem]">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
