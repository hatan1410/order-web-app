import Header from "./header";
import Footer from "./footer";
import { CartDrawer } from "containers/drawer/drawer";
import React from "react";

const Layout = (props) => (
  <main
    className="relative min-h-screen flex-grow"
    style={{
      minHeight: "-webkit-fill-available",
      WebkitOverflowScrolling: "touch",
      ...props.style,
    }}
  >
    <Header />
    <div className="flex h-full min-h-screen w-full flex-grow flex-col">
      <div className="pt-90px pb-50px md:px-35px flex-auto px-3">
        {props.children}
      </div>
      <Footer />
    </div>
    <CartDrawer />
  </main>
);

export default Layout;
