import React from "react";
import axios from "axios";
// import { BannerData } from '../../../server/banners';
import SliderComponent from "./../SliderComponent";
import CategoryBanner from "./../CategoryBanner";
import "../Home.scss";

function Home() {
  const [banner, setBanner] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    axios.get("/server/banners").then(
      (res) => {
        setBanner(res.data);
      },
      (err) => {
        console.error(err);
      }
    );
    axios.get("/server/categories").then(
      (res) => {
        setCategories(res.data);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);
  return (
    <div className="body-section">
      <SliderComponent banner={banner} />
      {categories.map(
        (item) =>
          item.enabled && <CategoryBanner category={item} key={item.key} />
      )}
    </div>
  );
}

export default Home;
