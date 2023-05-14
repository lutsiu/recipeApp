import useGetMealsInfo from "../../hooks/useGetMealsInfo";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useResize from "../../hooks/useResize";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Pagination from "./Pagination";
import foodCover from "../../assets/foodCover.png";
import useLazy from "../../hooks/useLazy";
interface Data {
  image: string;
  title: string;
  id: number;
}

interface Props {
  query?: string;
  navigateByPath?: boolean;
  navigateBySearch?: boolean;
}

export default function Query(props: Props) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const location = useLocation();
  const width = useResize();
  const [page, setPage] = useState(1);
  const [pagesAmount, setPagesAmount] = useState<number | null>(null);
  const isVisible = useLazy(imageRef.current);
  const navigate = useNavigate();
  let PAGES = 8;

  let query = props.query;

  if (props.navigateBySearch) {
    query = location.search.replace("?q=", "") || "";
  }
  if (props.navigateByPath) {
    query = location.pathname.replace("/", "");
  }

  if (width < 992 && width > 767) {
    PAGES = 9;
  }

  const { data,  }: { data: Data[] | null;} =
    useGetMealsInfo("complexSearch", 50, false, query, true);

  const recipes = data?.filter(
    (_, i) => i < PAGES * page && i >= PAGES * page - PAGES
  );


  useEffect(() => {
    if (data) {
      setPagesAmount(Math.ceil(data.length / PAGES));
    }
  }, [data, PAGES, navigate]);

  console.log(isVisible);

  return (
    <>
      { (
        <div className="mt-[1rem] p-[2rem]">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.5rem] 2xl:gap-[2rem] place-content-center justify-items-center">
            {recipes &&
              recipes.map((recipe, i) => {
                return (
                  <Link
                    to={`../../${recipe.id}`}
                    key={i + recipe.id}
                    className="bg-gray-100 duration-500 hover:bg-gray-300 hover:scale-105 text-black w-full  h-[23rem] lg:pb-[1rem] pb-[2rem] justify-start flex flex-col cursor-pointer gap-0 rounded-3xl overflow-hidden"
                  >
                    <img
                      src={recipe.image || foodCover}
                      alt={recipe.title}
                      className="h-[65%] object-cover"
                      loading="lazy"
                      ref={imageRef}
                      style={{filter: isVisible ? 'none': 'blur(20px)'}}
                    />
                    <span className="sm:text-xl text-2xl font-bold text-center mx-[1rem] mt-[1.7rem] h-[30%]">
                      {recipe.title
                        .split(" ")
                        .filter((_, i) => i < 6)
                        .join(" ")}
                    </span>
                  </Link>
                );
              })}
          </div>
          <div className="w-fit mx-auto mt-[2rem] h-[5rem] items-center flex flex-row gap-[1rem] flex-wrap justify-center">
            {page > 1 && (
              <FaChevronLeft
                onClick={() => setPage((prev) => prev - 1)}
                className="text-white cursor-pointer hover:text-purple-400 w-[1.5rem] h-[1.5rem] duration-500"
              />
            )}
            {
              <Pagination
                page={page}
                pagesAmount={pagesAmount}
                handleSetPage={setPage}
              />
            }
            {pagesAmount && page < pagesAmount && (
              <FaChevronRight
                onClick={() => setPage((prev) => prev + 1)}
                className="text-white cursor-pointer hover:text-purple-400 w-[1.5rem] h-[1.5rem] duration-500"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
