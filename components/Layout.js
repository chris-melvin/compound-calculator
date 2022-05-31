import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <section className="dark:bg-bgdark ">
      <Navbar />
      {children}
    </section>
  );
};

export default Layout;
