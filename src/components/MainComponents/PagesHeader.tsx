type Props = { title: string, image: string};
export default function Header(props: Props) {
  return (
    <div
      className="w-full h-[15rem] bg-no-repeat bg-cover bg-center flex items-center justify-center px-[1.5rem]"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h1 className="uppercase  text-2xl sm:text-3xl lg:text-5xl text-center bg-emerald-500 opacity-90 p-[0.5rem] rounded-2xl font-bold">
        {props.title}
      </h1>
    </div>
  );
}
