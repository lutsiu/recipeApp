import { useParams } from "react-router-dom";
import Query from "./Query";
import { Link } from "react-router-dom";
interface Props {
  param: string;
}

export default function IngredientsChild(props: Props) {
  let query = "";
  const params = useParams();

  if (props.param === "ingredient" && params.ingredient) {
    query = params.ingredient;
  }
  if (props.param === "cuisine" && params.cuisine) {
    query = params.cuisine;
  }

  return (
    <div>
      <h2 className="uppercase font-bold text-3xl sm:text-4xl lg:text-5xl text-center mt-[3rem]">{`${query} recipes`}</h2>
      <Query query={query} />
      <div className="flex items-center w-fit mx-auto gap-[1rem] mb-[2rem]">
        <Link className="text-3xl hover:scale-110 duration-500 hover:underline" to="../">{`Check all ${
          params.ingredient ? "ingrediens" : "cuisines"
        }`}</Link>
      </div>
    </div>
  );
}
