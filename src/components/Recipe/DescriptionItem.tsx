interface Props {
  title: string;
  howMuch: string
}
export default function Description(props: Props) {

  return <div className="flex flex-col text-center">
    <span className="text-lg font-bold uppercase">{props.title}</span>
    <span className="text-base mt-[0.2rem]">{props.howMuch}</span>
  </div>
}