import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProduct } from "../../features/productSlice";
import CardProduct from "./CardProduct";
import styles from "./products.module.css";
import Basket from "./img/Basket.png";

const Products = () => {
  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const [value, setValue] = useState("");
  const searchCards = products.filter((card) => {
    return card.name.toLowerCase().includes(value.toLowerCase());
  });
  console.log(products)


  return (
    <div className={styles.things}>
      <div className={styles.things_firstText}>
        <p>Все предстоящие аукционы</p>
      </div>
      <div className={styles.things_head}>
        <div className={styles.things_head_ul}>
          <ul>
            <li>XVIII</li>
            <li>XIX</li>
            <li>XX</li>
            <li>XXI</li>
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
            return <CardProduct item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
