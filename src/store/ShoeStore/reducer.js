const initialState = {
  productDetail: {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  },
  carts: [],
};

export const shoeStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_DETAIL": {
      let newState = { ...state };
      newState.productDetail = action.payload;
      return newState;
    }

    case "ADD_CART": {
      let newState = { ...state };

      const index = newState.carts.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (index === -1) {
        newState.carts.push({ ...action.payload, cartQuantity: 1 });
      } else {
        newState.carts[index].cartQuantity += 1;
      }

      return newState;
    }

    case "CHANGE_CARTSQUANTITY": {
      let newState = { ...state };

      const { payload } = action;

      //   const index = newState.carts.findIndex(
      //     (item) => item.id === payload.indexItem
      //   );

      //   if (index != -1) {
      //     newState.carts[index].cartQuantity =
      //       newState.carts[index].cartQuantity + payload.quantity || 1;
      //   }

      newState.carts = newState.carts.map((item) => {
        if (item.id != payload.indexItem) return item;
        return {
          ...item,
          cartQuantity: item.cartQuantity + payload.quantity || 1,
        };
      });

      return newState;
    }

    case "DELETE": {
      let newState = { ...state };

      newState.carts = newState.carts.filter(
        (item) => item.id != action.payload
      );

      return newState;
    }

    default:
      return state;
  }
};
