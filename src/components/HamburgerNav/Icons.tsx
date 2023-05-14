import { FaGithub, FaTelegram } from "react-icons/fa";

export default function Icons() {
  return (
    <div className="flex justify-evenly mt-[4rem] w-full">
      <a href="https://github.com/lutsiu" target="blank">
        <FaGithub className="h-[3.5rem] w-[3.5rem] sm:h-[2.5rem] sm:w-[2.5rem]" />
      </a>
      <a href="https://t.me/lutsiu" target="blank">
        <FaTelegram className="h-[3.5rem] w-[3.5rem] sm:h-[2.5rem] sm:w-[2.5rem]" />
      </a>
    </div>
  );
}
