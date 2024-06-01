import Counter from "./counter";
import { CURRENCY } from "helpers/constants";
import { useCart } from "contexts/cart/cart.provider";
import {
  CartItemBase,
  CartItemImage,
  CartItemContent,
  CartItemName,
  CartItemSinglePrice,
  CartItemTotalWrapper,
  CartItemTotalPrice,
} from "./utils/theme";

type CartItemProps = {
  item: any;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { addItem, removeItem } = useCart();

  return (
    <div className={CartItemBase}>
      <div className={CartItemImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.name} />
      </div>

      <div className={CartItemContent}>
        <span className={CartItemName}>{item.name}</span>
        <span className={CartItemSinglePrice}>
          Unit Price &nbsp;
          {item.price}
          {CURRENCY}
        </span>

        <div className={CartItemTotalWrapper}>
          <Counter
            value={item.quantity}
            onIncrement={() => addItem(item)}
            onDecrement={() => removeItem(item)}
          />

          <span className={CartItemTotalPrice}>
            {((item.price / 1000) * item.quantity).toFixed(3)}
            {CURRENCY}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
