import React, {  useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Vortex } from "react-loader-spinner";

import { fetchProduct } from "../../features/productSlice";
import { fetchCategory } from "../../features/categorySlice";
import CardProduct from "./CardProduct";
import styles from "./products.module.css";
import Basket from "./img/Basket.png";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Products = React.memo(() => {
  const { id } = useParams();

  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) =>
    state.product.product.filter((one) => {
      if (!id) {
        return true;
      }
      return one.category === id;
    })
  );

  const category = useSelector((state) => state.category.category);
    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCategory());
  }, [dispatch]);

  const [value, setValue] = useState("");

  const searchCards = products.filter((card) => {
    return card.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <Header />
      <div className={styles.things}>
        <div className={styles.things_firstText}>
          <p>Forthcoming Auctions</p>
        </div>
        <div className={styles.things_head}>
          <div className={styles.things_head_ul}>
            <ul>
              <Link to={`/products`}>
                <li>All</li>
              </Link>
              {category.map((item, index) => {
                return (
                  <Link
                    className={styles.lin}
                    to={`/products/category/${item._id}`}
                    key={index}
                  >
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
        {loading === true ? (
          <div className={styles.loader_content}>
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['#daa520', '#a52a2a','#daa520', '#a52a2a', '#a52a2a', '#daa520' ]}
            />
            <p></p>
          </div>
        ) : (
          <div className={styles.things_list}>
            <div className={styles.things_list_things}>
              {searchCards.map((item, index) => {
                const time = new Date();
                time.setMinutes(time.getMinutes() + item.timer);
                return (
                  <CardProduct item={item} key={index} expiryTimestamp={time} />
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
});

export default Products;
