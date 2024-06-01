import React from "react";
import Layout from "../../containers/layout/layout";
import { Product } from "../../models/Product";
import Products from "containers/products";
import { CartProvider } from "contexts/cart/cart.provider";
import { DrawerProvider } from "contexts/drawer/drawer.provider";

const products: Product[] = [
  {
    image:
      "https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_e6168b6a38ec45d2b4854d2708b5d542_large.png",
    name: "Cà Phê Sữa Đá",
    price: 29000,
    id: "asdas",
  },
  {
    image:
      "https://product.hstatic.net/1000075078/product/cappuccino_621532_f42ec557eda145b5958374ca67e65ff2_large.jpg",
    name: "Cappuccino Nóng",
    price: 55000,
    id: "sdgsdf",
  },
  {
    image:
      "https://product.hstatic.net/1000075078/product/classic-cold-brew_791256_d4d8388a3d724f879845680c0239ff68_large.jpg",
    name: "Americano Đá",
    price: 40000,
    id: "asdasd",
  },
  {
    image:
      "https://product.hstatic.net/1000075078/product/1639377904_bac-siu_525b9fa5055b41f183088c8e479a9472_large.jpg",
    name: "Bạc xỉu",
    price: 29000,
    id: "gvdas",
  },
  {
    image:
      "https://product.hstatic.net/1000075078/product/1697450388_tx-latte_ef8fdb94fb2a4691b0cc909188b77829.jpg",
    name: "Trà xanh Latte",
    price: 45000,
    id: "asdasa",
  },
  {
    image:
      "https://product.hstatic.net/1000075078/product/1709004168_vai-xuan-1_743d7966f0d54bccaa588389c17edb6c.jpg",
    name: "Oolong Tứ Quý Vải",
    price: 49000,
    id: "sdgsdfrghsd",
  },
  {
    image:
      "https://product.hstatic.net/1000075078/product/hong-tra-sua-nong_941687_9df07ba13d084c5c8d2dd780c14af4d4.jpg",
    name: "Hồng Trà Sữa Nóng",
    price: 55555,
    id: "asdasdfas",
  },
  {
    image:
      "https://product.hstatic.net/1000075078/product/chocolatenong_949029_826f20e85d5b48b4b5a6443c9a44321f_large.jpg",
    name: "Chocolate Nóng",
    price: 55000,
    id: "gvdaseqwe",
  },
];

const HomePage: React.FC = () => {
  return (
    <DrawerProvider>
      <CartProvider>
        <Layout>
          <Products items={products} />
        </Layout>
      </CartProvider>
    </DrawerProvider>
  );
};

export default HomePage;
