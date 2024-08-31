import React from "react";
import { ProductList } from "./ProductList";
import data from "./data.json";
import { ModalProductDetail } from "./ModalProductDetail";
import { useSelector, useDispatch } from "react-redux";
import { ModalCart } from "./ModalCart";

export const ShoeStore = () => {
  const shoeStoreReducer = useSelector((state) => {
    state.shoeStoreReducer;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="fw-bold text-danger text-center p-5">Cửa Hàng Giày</h1>
      <ProductList data={data} />
      <ModalProductDetail />
      <ModalCart />
    </div>
  );
};
