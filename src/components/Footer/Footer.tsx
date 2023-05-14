import { FaTelegram, FaGithub} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-gray-100 w-full h-[15rem] p-[4rem] text-black">
      <h2 className="text-center text-3xl">Lutsiu Recipe</h2>
      <div className="flex gap-[3rem] mx-auto w-fit mt-[2rem]">
        <a href="https://t.me/lutsiu">
          <FaTelegram className="w-[3rem] h-[3rem] hover:text-gray-600 duration-500"/>
        </a>
        <a href="https://github.com/lutsiu">
          <FaGithub className="w-[3rem] h-[3rem] hover:text-gray-600 duration-500"/>
        </a>
      </div>
    </div>
  );
}
