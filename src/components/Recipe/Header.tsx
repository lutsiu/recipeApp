import styles from "../../components/Recipe/style.module.scss";
interface Props {
  title: string;
  image: string;
}

export default function Header(props: Props) {
  return (
    <div
      className={`${styles.recipeImage}  recipe-image w-full h-[20rem] bg-no-repeat z-20 bg-cover relative bg-center`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h1
        className="font-bold text-2xl  md:text-4xl lg:text-5xl text-center py-[1rem] z-20 box-decoration-clone w-[60%] lg:w-[45%] bg-emerald-400 opacity-90 rounded-3xl absolute  top-2/4 left-[50%]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {props.title}
      </h1>
    </div>
  );
}
