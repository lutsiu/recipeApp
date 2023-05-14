
import SearchBar from "../Icons/SearchBar";
import useResize from "../../hooks/useResize";


export default function Icons() {
  const width = useResize();

  
  return (
    <div className="2xl:flex-[3] xl:flex-[4] lg:flex-[3] md:flex-[4] sm:flex-[3] flex-1 lg:pl-[2 rem] flex flex-row  sm:justify-center justify-end">
      {width > 576 && <SearchBar/>}
    </div>
  );
}
