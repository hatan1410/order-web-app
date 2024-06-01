import React, { useState, useContext } from "react";
import { Scrollbar } from "components/scrollbar";
import Button from "components/button";
import { CURRENCY } from "helpers/constants";
import { useCart } from "contexts/cart/cart.provider";
import { DrawerContext } from "contexts/drawer/drawer.provider";
import ArrowLeft from "assets/icons/arrow-left";
import Counter from "components/counter";

export default function ProductDetails() {
  const [visibility, setVisibility] = useState(false);
  const { addItem, getItem, removeItem } = useCart();
  const { state, dispatch } = useContext(DrawerContext);

  const count = getItem(state.item.id)?.quantity;

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const hideDetails = () => {
    dispatch({
      type: "TOGGLE_PRODUCT_DETAIL",
      payload: {
        showDetails: false,
      },
    });

    dispatch({
      type: "SLIDE_CART",
      payload: {
        open: false,
      },
    });
  };

  const addToCart = () => {
    addItem(state.item);
    dispatch({
      type: "TOGGLE_CART_VIEW",
      payload: {
        showCart: true,
      },
    });
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="px-30px py-20px relative flex w-full justify-center">
        <button
          className="top-half -mt-20px left-30px absolute flex h-10 w-auto items-center justify-center text-gray-500 transition duration-300 hover:text-gray-900 focus:outline-none"
          onClick={hideDetails}
          aria-label="close"
        >
          <ArrowLeft />
        </button>

        <h2 className="text-24px m-0 font-bold">Details</h2>
      </div>

      <Scrollbar className="details-scrollbar flex-grow">
        <div className="p-30px flex flex-col pt-0">
          <div className="h-360px mb-30px relative flex w-full items-center justify-center overflow-hidden rounded">
            <img
              className="object-cover"
              src={state.item.image}
              alt={`${state.item.name}-img`}
              sizes="(max-width: 768px) 100vw"
            />
          </div>

          <div className="mb-4 flex flex-col items-start">
            <span className="mb-2 font-semibold text-gray-900">
              {state.item.price}
              {CURRENCY}
            </span>
            <span className="mb-3">{state.item.name}</span>
            <p className="mb-5 flex items-center">
              <span className=" text-11px capitalize text-gray-500">
                {state.item.type}
              </span>
            </p>

            {visibility === true ? (
              <p className="my-5">{state.item.description}</p>
            ) : (
              ""
            )}

            {state.item.description && (
              <button
                className="text-11px mt-2 font-semibold text-gray-800 focus:outline-none"
                onClick={toggleVisibility}
                aria-label="details"
              >
                {visibility === true ? "Less Details" : "More Details"}
              </button>
            )}
          </div>
        </div>
      </Scrollbar>

      <div className="p-30px flex flex-col">
        {count > 0 ? (
          <Counter
            value={count}
            className="big ml-auto w-full"
            size="big"
            onIncrement={() => {
              addItem(state.item);
            }}
            onDecrement={() => removeItem(state.item)}
          />
        ) : (
          <Button className="big w-full" onClick={addToCart}>
            Add To Cart
          </Button>
        )}
      </div>
    </div>
  );
}
