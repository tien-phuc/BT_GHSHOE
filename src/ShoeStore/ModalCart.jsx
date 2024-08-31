import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

export const ModalCart = () => {
  const { carts } = useSelector((state) => state.shoeStoreReducer);

  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="modal fade"
        id="modalCart"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Giỏ Hàng
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>
                          <img
                            src={item.image}
                            alt=""
                            style={{ width: 80, height: 80 }}
                          />
                        </td>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            <button
                              onClick={() => {
                                dispatch({
                                  type: "CHANGE_CARTSQUANTITY",
                                  payload: {
                                    indexItem: item.id,
                                    quantity: -1,
                                  },
                                });
                              }}
                              className={cn("btn btn-outline-dark", {
                                disabled: item.cartQuantity === 1,
                              })}
                            >
                              -
                            </button>
                            <span>{item.cartQuantity}</span>
                            <button
                              onClick={() => {
                                dispatch({
                                  type: "CHANGE_CARTSQUANTITY",
                                  payload: {
                                    indexItem: item.id,
                                    quantity: 1,
                                  },
                                });
                              }}
                              className="btn btn-outline-dark"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${item.cartQuantity * item.price}</td>
                        <td
                          className="text-danger fw-bold fs-5"
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            dispatch({
                              type: "DELETE",
                              payload: item.id,
                            });
                          }}
                        >
                          X
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
