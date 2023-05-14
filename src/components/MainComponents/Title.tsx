interface Props {
  children?: React.ReactNode;
  color: string;
}
export default function Title(props: Props) {
  return (
    <h2
      className={`font-semibold border-b-main border-b-4 text-center w-fit block mx-auto md:text-6xl text-3xl ${props.color}`}
    >
      {props.children}
    </h2>
  );
}
