import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const ProductItem = (props) => {
  const { shoe } = props;

  const { productDetail } = useSelector((state) => state.shoeStoreReducer);

  const dispatch = useDispatch();
  return (
    <div className="card">
      <img className="img-fluid" src={shoe.image} alt="..." />
      <div className="card-body">
        <p>{shoe.name}</p>
        <p>{shoe.price}</p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              dispatch({
                type: "SHOW_DETAIL",
                payload: shoe,
              });
            }}
          >
            Xem chi tiết giày
          </button>

          <button
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#modalCart"
            onClick={() => {
              dispatch({
                type: "ADD_CART",
                payload: shoe,
              });
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};
