import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProduct } from "../../features/productSlice";
import { fetchCategory } from "../../features/categorySlice";
import CardProduct from "./CardProduct";
import styles from "./products.module.css";
import Basket from "./img/Basket.png";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Products = () => {
  
  const products = useSelector((state) => state.product.product);
  const category = useSelector((state) => state.category.category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCategory())

  }, [dispatch]);

  const [value, setValue] = useState("");
  const searchCards = products.filter((card) => {
    return card.name.toLowerCase().includes(value.toLowerCase());
  });



  return (
    <>
    <Header/>
    <div className={styles.things}>
      <div className={styles.things_firstText}>
        <p>Auctions & Events</p>
      </div>
      <div className={styles.things_head}>
        <div className={styles.things_head_ul}>
          <ul>
            {category.map((item, index) => {
              return (
                <Link className={styles.lin} to={`/category/${item._id}`} key={index}>
                  <li>{item.century}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className={styles.form}>
          <input type="text" onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className={styles.basket}>
          <div className={styles.basket_img}>
            <img src={Basket} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.things_list}>
        <div className={styles.things_list_things}>
          {searchCards.map((item, index) => {
              const time = new Date();
              time.setMinutes(time.getMinutes() + item.timer)
            return <CardProduct item={item} key={index} expiryTimestamp={time} />;
          })}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Products;
