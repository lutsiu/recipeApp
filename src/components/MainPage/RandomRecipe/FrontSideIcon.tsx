interface Props {
  icon: JSX.Element;
  title: string;
  number: number
}
export default function FrontSideIcon(props: Props) {

  return (
    <div className="flex flex-col items-center flex-wrap">
      <span className="flex gap-[0.4rem]">
        {props.icon}
        <span className="text-lg sm:text-2xl">{props.number}</span>
      </span>
      <span className="text-lg sm:text-2xl">{props.title}</span>
    </div>
  )
}