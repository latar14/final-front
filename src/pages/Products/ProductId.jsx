import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../features/productSlice";
import { fetchCategory } from "../../features/categorySlice";
import CardProduct from "./CardProduct";
import { useParams } from "react-router-dom";

const ProductId = () => {
  const products = useSelector((state) => state.product.product);
  const category = useSelector((state) => state.category.category);
  const { id } = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCategory())

  }, [dispatch]);

  const search = products.filter((card) => {
    return card.category == id;
  });


  return (
 
        <div>
          {search.map((item, index) => {
            return <CardProduct item={item} key={index} />;
          })}
        </div>
   
  );
};

export default ProductId;
