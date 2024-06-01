import { useContext } from "react";
import PhoneIcon from "assets/icons/phone";
import CartIcon from "assets/icons/cart-icon";
import Logo from "assets/icons/logo";
import { DrawerContext } from "contexts/drawer/drawer.provider";
import { useCart } from "contexts/cart/cart.provider";
import { Link } from "react-router-dom";

export default function Header() {
  const { dispatch }: any = useContext(DrawerContext);
  const { itemsCount } = useCart();

  const showMenu = () => {
    dispatch({
      type: "OPEN_MENU",
      payload: {
        menu: true,
      },
    });
  };

  const showCart = () => {
    dispatch({
      type: "SLIDE_CART",
      payload: {
        open: true,
      },
    });
    dispatch({
      type: "TOGGLE_CART_VIEW",
      payload: {
        showCart: true,
      },
    });
  };

  return (
    <header className="shadow-mobile body-font h-90px lg:shadow-header pr-20px md:pr-30px lg:pr-40px fixed z-20 flex w-full items-center bg-white text-gray-700">
      <button
        aria-label="Menu"
        className="menuBtn w-50px lg:w-90px flex h-full flex-shrink-0 flex-col items-center justify-center outline-none focus:outline-none"
        onClick={showMenu}
      >
        <span className="menuIcon">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </span>
      </button>

      <Link to="/" className="mx-auto hidden lg:mr-10 lg:flex">
        <span className="sr-only">Medsy</span>
        <Logo width="110px" id="medsy-header-logo" />
      </Link>

      <div className="ml-10px mr-20px w-full lg:ml-auto lg:mr-10 lg:flex lg:justify-center"></div>

      <div className="mr-10 hidden flex-shrink-0 items-center text-gray-900 lg:flex">
        <PhoneIcon />
        <span className="text-14px ml-3 text-base font-semibold">
          0914 247 572
        </span>
      </div>

      <button
        className="relative flex h-auto flex-shrink-0 items-center justify-center focus:outline-none"
        onClick={showCart}
        aria-label="cart-button"
      >
        <CartIcon width="20px" height="20px" />
        <span
          className="w-18px h-18px absolute flex items-center justify-center rounded-full bg-gray-900 text-white"
          style={{ fontSize: "10px", top: "-10px", right: "-10px" }}
        >
          {itemsCount}
        </span>
      </button>
    </header>
  );
}
