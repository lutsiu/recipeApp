interface Props {
  page: number
  pagesAmount: number | null;
  handleSetPage(i: number): void;
}

export default function Pagination(props: Props) {
  const pagination = Array.from({ length: props.pagesAmount as number }, (_, i) => {
    return (
      <span
        key={i}
        onClick={() => props.handleSetPage(i + 1)}
        className="w-[2rem] h-[2rem] bg-white text-black flex items-center justify-center text-lg font-semibold rounded-full cursor-pointer hover:bg-purple-400 hover:text-white duration-3000"
        style={{ backgroundColor: i + 1 === props.page ? "rgb(192 132 252)" : "" }}
      >
        {i + 1}
      </span>
    );
  });
  return (<>{pagination}</>)
}