import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <section className="dark:bg-bgdark  min-h-screen">
      <Navbar />
      {children}
    </section>
  );
};

export default Layout;
