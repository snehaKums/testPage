import React from "react";
import axios from "axios";
import SliderComponent from "./../SliderComponent";
import CategoryBanner from "./../CategoryBanner";
import "../Home.scss";
import img from '../../images/products/baby/baby-dove.jpg'
import { BannerData } from '../../server/banners';
import { CategoriesData } from '../../server/categories';

function Home() {
  // const [banner, setBanner] = React.useState([]);
  // const [categories, setCategories] = React.useState([]);
  // React.useEffect(() => {
  //   axios.get("http://localhost:5000/banners").then(
  //     (res) => {
  //       setBanner(res.data);
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  //   axios.get("http://localhost:5000/categories").then(
  //     (res) => {
  //       setCategories(res.data);
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // }, []);
  return (
    <div className="body-section">
      <img src={img} />
      <SliderComponent banner={BannerData} />
      {CategoriesData.map(
        (item) =>
          item.enabled && <CategoryBanner category={item} key={item.key} />
      )}
    </div>
  );
}

export default Home;
