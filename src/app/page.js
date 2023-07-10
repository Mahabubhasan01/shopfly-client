import BlogPost from "./components/blogs/BlogPost";
import FilteredProducts from "./components/FilterProducts/FilteredProducts";
import Header from "./components/header/Header";
import HeaderCategory from "./components/header/HeaderCategory";
import ScrollTop from "./utils/ScroolTop";
import Arrival from "../app/components/newarrival/Arrival";
export default function Home({ children }) {
  return (
    <main>
      <Header />
      <HeaderCategory />
      <Arrival />
      <FilteredProducts />
      <BlogPost />
      <ScrollTop />
      {children}
    </main>
  );
}
