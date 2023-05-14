interface Props {
  ings?: { original: string }[];
  steps?: { number: number; step: string }[];
  firstStep?: string;
}

export default function Ingredients(props: Props) {
  return (
    <div className="mt-[1rem]">
      <h3 className="text-2xl md:text-4xl font-bold uppercase text-center">{props.ings ? 'Ingredients:' : 'Steps:'}</h3>
      <ul className="mt-[2rem] ml-[1.3rem]">
        {props.ings &&
          props.ings.map((ing, i) => {
            return (
              <li key={i} className="text-xl md:text-2xl list-disc mb-[0.7rem]">
                {ing.original}
              </li>
            );
          })}
        {props.firstStep && (
          <li className="text-xl md:text-2xl list-disc mb-[0.7rem]">{props.firstStep}</li>
        )}
        {props.steps &&
          props.steps.map((step, i) => {
            return (
              <li key={i} className="text-xl md:text-2xl list-disc mb-[0.7rem]">
                {step.step}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
