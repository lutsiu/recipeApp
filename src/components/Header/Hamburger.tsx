import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';
interface UI {
  showOverlay: false,
}
interface State {
  ui: UI
}
const hamburgerVariant = {
  oddSpan: {
    z: 0,
  },
  secondSpan: {
    opacity: 1,
  },
  animateFirst: {
    rotateZ: "-135deg",
    y: 10,
  },
  animateSecond: {
    opacity: 0,
  },
  animateThird: {
    rotateZ: "135deg",
    y: -10,
  },
};
export default function Hamburger() {
  const dispatch = useDispatch();
  const {showOverlay: toggle } = useSelector((state: State) => state.ui);
  const location = useLocation();
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(location.key);
  }, [location.key])

  useEffect(() => {
    dispatch(uiActions.hideHamburger());
  }, [path, dispatch]);

  const toggleAnimation = () => {
    dispatch(uiActions.toggleNav());
  }

  return (
    <div
      className="md:flex-[2] sm:flex-[1] flex-1 flex flex-col mt-[0.3rem] cursor-pointer relative"
      onClick={toggleAnimation}
    >
      <motion.span
        className="hamb-span"
        variants={hamburgerVariant}
        animate={toggle ? "animateFirst" : "oddSpan"}
        initial='oddSpan'
      ></motion.span>
      <motion.span
        className="hamb-span"
        variants={hamburgerVariant}
        animate={toggle ? "animateSecond" : "secondSpan"}
        initial='secondSpan'
      ></motion.span>
      <motion.span
        className="hamb-span"
        variants={hamburgerVariant}
        animate={toggle ? "animateThird" : "oddSpan"}
        initial='oddSpan'
      ></motion.span>

    </div>
    
  );
}
