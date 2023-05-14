import MainContent from "../components/MainComponents/MainContent";
import MainContentChild from "../components/MainComponents/MainContentChild";
import { navLinks } from "../data/navLinks";

export const DinnerElement = function () {
  return (
    <MainContent
      title="Dinner recipes"
      query="dinner"
      links={navLinks.dinners}
    />
  );
};

export const QuickAndEasyElement = function () {
  return (
    <MainContentChild
      title="Dinner recipes"
      query="quick"
      links={[
        { link: "../", title: "Dinners" },
        { link: "../light-food", title: "Light food" },
        { link: "../main-dishes", title: "Main dishes" },
      ]}
    />
  );
};
export const LightFoodElement = function () {
  return (
    <MainContentChild
      title="Dinner recipes"
      query="light"
      links={[
        { link: "../", title: "Dinners" },
        { link: "../quick-and-easy", title: "Quick and easy" },
        { link: "../main-dishes", title: "Main dishes" },
      ]}
    />
  );
};
export const MainDishesElement = function () {
  return (
    <MainContentChild
      title="Dinner recipes"
      query="main dish"
      links={[
        { link: "../", title: "Dinners" },
        { link: "../light-food", title: "Light food" },
        { link: "../quick-and-easy", title: "Quick and easy" },
      ]}
    />
  );
};
