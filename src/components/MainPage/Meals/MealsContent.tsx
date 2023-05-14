import breakfast from "../../../assets/MainPage/Meals/breakfast.png";
import drink from "../../../assets/MainPage/Meals/drink.png";
import soup from "../../../assets/MainPage/Meals/soup.png";
import sideDish from "../../../assets/MainPage/Meals/side-dish.png";
import Card from "./Card";
import useGetMealsInfo from "../../../hooks/useGetMealsInfo";
import oval from "../../../assets/Loader/oval.svg";
import Button from "../../MainComponents/Button";
interface Props {
  query?: string;
  link?: string;
}
interface Recipe {
  id: number;
  title: string;
  image: string;
}
export default function AllCategories(props: Props) {
  let content: React.ReactElement = (
    <>
      <Card link="meals/breakfasts" img={breakfast} title="Breakfasts" />
      <Card link="meals/soups" img={soup} title="Soups" />
      <Card link="meals/side-dishes" img={sideDish} title="Side dishes" />
      <Card link="meals/drinks" img={drink} title="Drinks" />
    </>
  );
  const { data: query, isLoading } = useGetMealsInfo('complexSearch', 8, false, props.query as string);

  switch (props.query) {
    case "breakfasts":
      content = (
        <>
          {query?.map((recipe: Recipe) => {
            return (
              <Card
                key={recipe.id}
                link={`${recipe.id}`}
                img={recipe.image}
                title={recipe.title}
              />
            );
          })}
        </>
      );
      break;
    case "soups":
      content = (
        <>
          {query?.map((recipe: Recipe) => {
            return (
              <Card
                key={recipe.id}
                link={`${recipe.id}`}
                img={recipe.image}
                title={recipe.title}
              />
            );
          })}
        </>
      );
      break;
    case "side dish":
      content = (
        <>
          {query?.map((recipe: Recipe) => {
            return (
              <Card
                key={recipe.id}
                link={`${recipe.id}`}
                img={recipe.image}
                title={recipe.title}
              />
            );
          })}
        </>
      );
      break;
    case "drinks":
      content = (
        <>
          {query?.map((recipe: Recipe) => {
            return (
              <Card
                key={recipe.id}
                link={`${recipe.id}`}
                img={recipe.image}
                title={recipe.title}
              />
            );
          })}
        </>
      );
      break;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center  gap-[2rem] flex-wrap sm:justify-center">
        {!isLoading && content}
        {isLoading && (
          <img src={oval} alt="spinner" className="w-[4rem] h-[4rem]" />
        )}
      </div>
      {!isLoading && props.query && (
        <div className="self-center">
          <Button link={true} class="emerald" href={`meals/${props.link}`}>
            {`View all ${props.link}`}
          </Button>
        </div>
      )}
    </div>
  );
}
