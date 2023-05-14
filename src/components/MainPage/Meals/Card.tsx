import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
interface Props {
  img: string;
  title: string;
  link: string;
}
export default function Card(props: Props) {
  const [bgCover, setBgCover] = useState(false);
  /* const classes = {
    notCover: "flex flex-col md:w-[33%] lg:w-[20%] items-center bg-rose-300 rounded-3xl px-[1rem] md:max-h-[30rem] max-h-[15rem] w-[15rem]",
    cover: ''
  } */

  useEffect(() => {
    if (props.img.includes('https')) {
      setBgCover(prevValue => !prevValue);

    }
  }, [props.img]);
  
  return (
    <Link to={props.link} className={`flex flex-col gap-[1rem] md:w-[33%] lg:w-[20%] pb-[1rem] items-center bg-slate-500 text-white rounded-3xl px-[${bgCover ? '0' : '1rem'}] md:max-h-[30rem] max-h-[15rem] w-[15rem] overflow-hidden box-border duration-500 hover:scale-105`}>
      <img src={props.img} alt={props.title} className={bgCover ? "md:max-h-[75%] min-h-[75%] w-full" : "h-[85%]"}/>
      <span className={`lg:text-xl text-xl text-center ${bgCover ? 'mt-[0.5rem] mx-[1rem]' : ''}`}>{props.title}</span>
    </Link>
  );
}
