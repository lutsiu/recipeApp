import DescriptionItem from "./DescriptionItem";

interface Props {
  readyInMinutes: number;
  servings: number;
  vegan: boolean;
  ings:string ;
}

export default function Description(props: Props) {
  return (
    <div className="bg-violet-600 flex flex-col items-center sm:flex-row gap-[2rem] justify-center md:justify-between flex-wrap mt-[1rem] p-[1rem]">
      <DescriptionItem
        title="Prep Time:"
        howMuch={`${props.readyInMinutes} mins`}
      />
      <DescriptionItem title="Servings:" howMuch={props.servings.toString()} />
      <DescriptionItem title="Vegan:" howMuch={props.vegan ? "Yes" : "No"} />
      <DescriptionItem
        title="Ingreds:"
        howMuch={props.ings}
      />
    </div>
  );
}
