import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui";

export default function useShowOptions(detail: object, title?: string) {

  const dispatch = useDispatch();
  const handleDetails = () => {
    dispatch(uiActions.toggleNavOptions());
    dispatch(uiActions.toggleNavOptionDetails());
    dispatch(uiActions.showDetails({optionTitle: title, detail: detail}));
  };
  return {handleDetails};
}
