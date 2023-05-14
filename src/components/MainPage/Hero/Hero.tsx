import bg from '../../../assets/Backgrounds/bg.jpg';
export default function Hero() {
  return (
    <div className="flex flex-col flex-[1] items-center text-centerbg-center bg-no-repeat bg-cover py-[2rem]" style={{backgroundImage: `url(${bg})`}}>
      <div className="flex flex-col bg-emerald-500 opacity-90 rounded-lg p-[0.5rem]">
        <h2 className="font-black text-5xl uppercase text-center">Simple,</h2>
        <h2 className="font-black text-5xl text-center  uppercase mt-[0.5rem] sm:mt-[1rem]">
          but useful website
        </h2>
      </div>
      <p className="text-xl mt-[3rem]  sm:max-w-[60%] bg-emerald-500 opacity-90 p-[0.7rem] sm:p-[0.4rem] rounded-lg text-center">
        You want to bake a cake for your granny's birthday? Maybe create some
        masterpiece together with your girlfriend? Or maybe to surprise your
        friends with some tasty pizza? Search recipes and check it:)
      </p>
    </div>
  );
}
