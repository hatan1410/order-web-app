import { useState, useContext } from "react";
import { Scrollbar } from "components/scrollbar";
import { useCart } from "contexts/cart/cart.provider";
import { DrawerContext } from "contexts/drawer/drawer.provider";
import CartItem from "components/cart-item";
import Button from "components/button";
import NoItem from "./no-item";
import ArrowLeft from "assets/icons/arrow-left";
import { CURRENCY } from "helpers/constants";

export default function Cart() {
  const { dispatch } = useContext(DrawerContext);

  const { items, calculatePrice } = useCart();

  const showCheckout = () => {
    dispatch({
      type: "TOGGLE_CHECKOUT_VIEW",
      payload: {
        showCheckout: true,
      },
    });
  };

  const hideCart = () => {
    dispatch({
      type: "SLIDE_CART",
      payload: {
        open: false,
      },
    });
  };

  return (
    <div className="flex h-full w-full flex-col">
      {items.length ? (
        <>
          <div className="px-30px py-20px relative flex w-full justify-center border-b border-gray-200">
            <button
              className="top-half -mt-20px left-30px absolute flex h-10 w-auto items-center justify-center text-gray-500 transition duration-300 hover:text-gray-900 focus:outline-none"
              onClick={hideCart}
              aria-label="close"
            >
              <ArrowLeft />
            </button>

            <h2 className="text-24px m-0 font-bold">Your Basket</h2>
          </div>

          <Scrollbar className="cart-scrollbar flex-grow">
            {items.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </Scrollbar>
        </>
      ) : (
        <NoItem />
      )}

      <div className="p-30px flex flex-col">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">
            Subtotal &nbsp;
            <span className="text-13px font-normal text-gray-700">
              (Incl. VAT)
            </span>
          </span>

          <span className="text-18px font-semibold text-gray-900">
            {calculatePrice()}
            {CURRENCY}
          </span>
        </div>

        <Button
          className="big mt-20px"
          disabled={!items.length ? true : false}
          onClick={showCheckout}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
