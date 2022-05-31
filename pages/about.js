import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <Layout>
      <div className="dark:text-white  mx-auto md:w-1/2 space-y-2 p-4 h-screen">
        <h1 className="text-2xl">About this project</h1>
        <p className="text-lg">
          This project is a simple interest calculator that can be used to
          calculate the total amount of money you will have after a certain
          period of time.
        </p>
        <p>
          <span className="font-semibold">Initial Investment</span> is the
          amount you initially invest.
        </p>
        <p>
          <span className="font-semibold">Reoccuring Investment</span> is the
          amount you invest in a regular basis. This is usually a monthly,
          quarterly, or yearly investment.
        </p>
        <p>
          <span className="font-semibold">Yearly Returns</span> inputed in
          decimal value. This is the theoritical yearly returns you will have in
          your investment. The average annualize return of the S&P500 is 10.67%.
        </p>
        <p>
          <span className="font-semibold">Frequency</span> is the number of
          times you invest each year. Input 12 if you invest monthly, 4 if you
          do quarterly, and 1 if you do yearly.
        </p>
        <p>
          <span className="font-semibold">Years</span> is the number of years
          you want to invest.
        </p>
      </div>
    </Layout>
  );
};

export default About;
