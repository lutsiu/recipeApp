import { useEffect, useState } from "react";
import API_KEY from "../store/key";
import { HTTPS } from "../store/key";
import { RecipeType } from "../pages/Recipe";
export default function useGetMealsInfo(
  mainParametr?: string,
  number?: number,
  random?: boolean,
  query?: string,
  search?: boolean,
  id?: number
) {
  const [data, setData] = useState<[] | null>(null);
  const [recipe, setRecipe] = useState<RecipeType | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const NUMBER = number;

  useEffect(() => {
    async function fetchInfo(): Promise<void> {
      setIsLoading(true);
      try {
        let res: Response;
        if (query || search) {
          res = await fetch(
            `${HTTPS}/${mainParametr}?query=${query}&number=${NUMBER}&apiKey=${API_KEY}`
          );
        } else if (random) {
          res = await fetch(
            `${HTTPS}/${mainParametr}?random&number=${NUMBER}&apiKey=${API_KEY}`
          );
        } else if (id) {
          res = await fetch(`${HTTPS}${id}/information?apiKey=${API_KEY}`);
        } else {
          throw new Error("No values were used");
        }

        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        random && setData(data.recipes);
        query && setData(data.results);

        id && setRecipe(data);
      } catch (err) {
        ("");
      }
      setIsLoading(false);
    }
    fetchInfo();
  }, [query, NUMBER, mainParametr, random, search, id]);

  return { data, isLoading, recipe };
}
