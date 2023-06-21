import Image from "next/image";
import BlogPost from "./components/blogs/BlogPost";
import FilteredProducts from "./components/FilterProducts/FilteredProducts";
import Header from "./components/header/Header";
import HeaderCategory from "./components/header/HeaderCategory";
import ProductCat from "./components/header/ProductCat";
import styles from "./page.module.css";
import ImageSlider from "./utils/ImgSlider";
import ScrollTop from "./utils/ScroolTop";

export default function Home({ children }) {
  return (
    <main>
      <Header />
      <HeaderCategory />
      <ProductCat></ProductCat>
      <FilteredProducts />
      <ImageSlider/>
     <BlogPost/>
     <ScrollTop/>
      {children}
    </main>
  );
}
