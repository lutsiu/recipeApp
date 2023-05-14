
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Options from "./Options";
import { navLinks } from "../../data/navLinks";

interface UI {
  showHamburgerNav: boolean;
  showOptions: boolean;
  showOptionDetails: boolean;
}
interface State {
  ui: UI;
}

export default function HamburgerNav() {
  const { showHamburgerNav } = useSelector((state: State) => state.ui);

  const Variant = {
    hidden: {
      x: -1000,
      transition: {
        type: "tween",
        duration: 0.6,
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className=" min-h-full md:w-[50%] bg-main opacity-90 fixed top-[5rem] md:top-[7rem] z-50 p-[2rem] w-full"
      variants={Variant}
      initial={!showHamburgerNav && "hidden"}
      animate={showHamburgerNav ? "visible" : "hidden"}
    >
      <Options
        options={[
          { title: "dinners", details: navLinks["dinners"] },
          { title: "meals", details: navLinks["meals"] },
          { title: "ingredients", details: navLinks["ingredients"] },
          { title: "cuisine", details: navLinks["cuisine"] },

        ]}
      />
    </motion.div>
  );
}
