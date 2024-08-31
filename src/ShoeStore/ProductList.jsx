import React from "react";
import { ProductItem } from "./ProductItem";

export const ProductList = (props) => {
  console.log("props: ", props);
  const { data } = props;
  return (
    <div className="container">
      <div className="row">
        {data.map((shoe) => {
          return (
            <div className="col-4 mt-3" key={shoe.id}>
              <ProductItem shoe={shoe} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
