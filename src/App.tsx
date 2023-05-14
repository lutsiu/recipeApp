import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import Cuisine from "./pages/Cuisine";
import Dinners from "./pages/Dinners";
import Meals from "./pages/Meals";
import Ingredients from "./pages/Ingredients";
import QueryPage from "./pages/QueryPage";
import Recipe from "./pages/Recipe";
import MainContentV2 from "./components/MainComponents/MainContentV2";
import MainContentChildV2 from "./components/MainComponents/MainContentChildV2";
import icons from "./assets/Cuisine/icons";
import images from "./assets/Ingredients/images";
import {
  DinnerElement,
  QuickAndEasyElement,
  LightFoodElement,
  MainDishesElement,
} from "./routes/Dinners";
import {
  MealsElement,
  BreakfastElement,
  SoupsElement,
  SideDishesElement,
  DrinksElement,
} from "./routes/Meals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "dinners",
        element: <Dinners />,
        children: [
          {
            index: true,
            element: <DinnerElement />,
          },
          {
            path: "quick-and-easy",
            element: <QuickAndEasyElement />,
          },
          {
            path: "light-food",
            element: <LightFoodElement />,
          },
          {
            path: "main-dishes",
            element: <MainDishesElement />,
          },
        ],
      },
      {
        path: "meals",
        element: <Meals />,
        children: [
          {
            index: true,
            element: <MealsElement />,
          },
          {
            path: "breakfasts",
            element: <BreakfastElement />,
          },
          {
            path: "soups",
            element: <SoupsElement />,
          },
          {
            path: "side-dishes",
            element: <SideDishesElement />,
          },
          {
            path: "drinks",
            element: <DrinksElement />,
          },
        ],
      },
      {
        path: "ingredients",
        element: <Ingredients />,
        children: [
          { index: true, element: <MainContentV2 images={images} /> },
          {
            path: ":ingredient",
            element: <MainContentChildV2 param="ingredient" />,
          },
        ],
      },
      {
        path: "cuisine",
        element: <Cuisine />,
        children: [
          { index: true, element: <MainContentV2 images={icons} /> },
          { path: ":cuisine", element: <MainContentChildV2 param="cuisine" /> },
        ],
      },
      { path: "query", element: <QueryPage /> },
      { path: ":recipeId", element: <Recipe /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
