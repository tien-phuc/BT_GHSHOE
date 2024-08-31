import React from "react";
import { useSelector } from "react-redux";

export const ModalProductDetail = () => {
  const { productDetail } = useSelector((state) => state.shoeStoreReducer);
  console.log("productDetail: ", productDetail);

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Chi Tiết Sản Phẩm
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src={productDetail.image}
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <p className="fs-2 fw-bold">{productDetail.name}</p>
                  <p>${productDetail.price}</p>
                  <p>{productDetail.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
