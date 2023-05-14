interface MyProps {
  title: string, 
  img: string, 
  alt: string
}

export default function Card(props: MyProps) {
  
  return (
    <div className=" bg-emerald-500 rounded-xl flex flex-col items-center p-[1rem] max-w-[70%] first-of-type:mt-[0] lg:mt-[0] mt-[3rem]">
      <img src={props.img} alt={props.alt} className="2xl:w-[15rem] lg:w-[12rem] md:w-[15rem] md:h-[15rem] 2xl:h-[15rem] lg:h-[12rem] inline-block "/>
      <p className="text-center lg:text-3xl text-xl mt-[3rem] sm:text-3xl">{props.title}</p>
    </div>
  );
}