import MainContent from "../components/MainComponents/MainContent";
import MainContentChild from "../components/MainComponents/MainContentChild";
import { navLinks } from "../data/navLinks";

export const MealsElement = function () {
  return <MainContent title="Meals" query="meals" links={navLinks.meals} />;
};

export const BreakfastElement = function () {
  return (
    <MainContentChild
      title="Meals"
      query="breakfast"
      links={[
        { link: "../", title: "Meals" },
        { link: "../soups", title: "Soups" },
        { link: "../side-dishes", title: "Side dishes" },
        { link: "../drinks", title: "Drinks" },
      ]}
    />
  );
};
export const SoupsElement = function () {
  return (
    <MainContentChild
      title="Soups"
      query="soups"
      links={[
        { link: "../", title: "Meals" },
        { link: "../breakfasts", title: "Breakfasts" },
        { link: "../side-dishes", title: "Side dishes" },
        { link: "../drinks", title: "Drinks" },
      ]}
    />
  );
};
export const SideDishesElement = function () {
  return (
    <MainContentChild
      title="Meals"
      query="side dish"
      links={[
        { link: "../", title: "Meals" },
        { link: "../breakfasts", title: "Breakfast" },
        { link: "../soups", title: "Soups" },
        { link: "../drinks", title: "Drinks" },
      ]}
    />
  );
};

export const DrinksElement = function () {
  return (
    <MainContentChild
      title="Meals"
      query="drink"
      links={[
        { link: "../", title: "Meals" },
        { link: "../breakfasts", title: "Breakfast" },
        { link: "../soups", title: "Soups" },
        { link: "../side-dishes", title: "Side dishes" },
      ]}
    />
  );
};