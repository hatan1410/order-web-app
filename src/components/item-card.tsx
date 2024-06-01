import { CURRENCY } from "helpers/constants";
import {
  ItemCardBase,
  ItemCardImage,
  ItemCardContent,
  ItemCardPrice,
} from "./utils/theme";

export interface ItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
}

interface ItemCardProps {
  item: ItemProps;
  onClick?: (e: any) => void;
}

export default function ItemCard({ item, onClick }: ItemCardProps) {
  return (
    <div className={ItemCardBase} onClick={onClick}>
      <div className={ItemCardImage}>
        <img
          src={item.image}
          alt={"Alt " + item.name}
          sizes="(max-width: 768px) 100vw"
          className="object-cover"
        />
      </div>

      <div className={ItemCardContent}>
        <span className={ItemCardPrice}>
          {item.price}
          {CURRENCY}
        </span>
        <span className="text-13px">{item.name}</span>
      </div>
    </div>
  );
}
