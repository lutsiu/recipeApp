import { Link } from 'react-router-dom';

interface Props {
  images: {link: string, img:string}[]
}

export default function Main(props:Props) {

  return (
    <div>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 bg-black sm:gap-x-[0.5rem] lg:gap-x-[1.5rem] gap-y-[4rem] w-full px-[1rem] sm:px-[2rem] py-[3.5rem] justify-items-center'>
        {props.images.map((img, i) => {
          return <Link key={i} to={img.link} className='w-[75%] h-[15rem] bg-white rounded-3xl p-[1rem] 2xl:p-[2rem] opacity-90 hover:scale-110 hover:bg-main-hover duration-500'>
            <img src={img.img} alt={img.link} className='w-full h-full'/>
          </Link> 
        })}
      </div>
    </div>
  )
}