interface NavLink {
  title: string,
  link: string
}
interface NavLinks {
  dinners: NavLink[],
  meals: NavLink[],
  ingredients: NavLink[],
  cuisine: NavLink[],
}
export const navLinks: NavLinks = {
  dinners: [
    { title: "Quick & easy", link: "quick-and-easy" },
    { title: "Light food", link: "light-food" },
    { title: "Main dishes", link: "main-dishes" },
  ],
  meals: [
    { title: "Breakfasts", link: "breakfasts" },
      { title: "Soups", link: "soups" },
      { title: "Side dishes", link: "side-dishes" },
      { title: "Drinks", link: "drinks" },
  ],
  ingredients: [
    { title: "Chicken", link: "chicken" },
      { title: "Beef", link: "beef" },
      { title: "Pasta", link: "pasta" },
      { title: "Seafood", link: "seafood" },
  ],
  cuisine: [
    { title: "Japanese", link: "japanese" },
    { title: "Greek", link: "greek" },
    { title: "French", link: "french" },
    { title: "Italian", link: "italian" },
  ]
};

