import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [state, setState] = useState({
    initial: 5000,
    monthly: 1000,
    rate: 0.05,
    month: 12,
    total: 163517.327,
    year: 10,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const handleBlur = () => {
    const [P, PMT, r, n, t] = [
      state.initial,
      state.monthly,
      state.rate,
      state.month,
      state.year,
    ];
    const total =
      P * (1 + r / n) ** (n * t) +
      PMT * (((1 + r / n) ** (n * t) - 1) / (r / n));
    setState({ ...state, total: total });
  };
  console.log(state.total.toFixed(2));
  return (
    <section className="dark:bg-bgdark h-screen">
      <Navbar />
      <div className="p-4 flex flex-col md:w-1/2 mx-auto dark:text-white text-black font-semibold font-sans space-y-4">
        <h1 className="text-2xl ">Compounding interest calculator</h1>
        <label htmlFor="initial">Initial Investment</label>
        <input
          className="p-4 dark:text-black rounded-md text-xl dark:bg-white bg-dark appearance-none"
          onBlur={handleBlur}
          value={state.initial}
          onChange={(e) => {
            setState({ ...state, initial: e.target.value });
          }}
          id="initial"
          type="number"
        />
        <label htmlFor="monthly">Reoccuring investment</label>
        <input
          className="p-4 dark:text-black rounded-md text-xl dark:bg-white bg-dark"
          onBlur={handleBlur}
          value={state.monthly}
          onChange={(e) => {
            setState({ ...state, monthly: e.target.value });
          }}
          id="monthly"
          type="number"
        />
        <label htmlFor="rate">Yearly returns</label>
        <input
          className="p-4 dark:text-black rounded-md text-xl dark:bg-white bg-dark"
          onBlur={handleBlur}
          value={state.rate}
          onChange={(e) => {
            setState({ ...state, rate: e.target.value });
          }}
          id="rate"
          type="number"
        />
        <label htmlFor="month">Frequency</label>
        <input
          className="p-4 dark:text-black rounded-md text-xl dark:bg-white bg-dark"
          onBlur={handleBlur}
          value={state.month}
          onChange={(e) => {
            setState({ ...state, month: e.target.value });
          }}
          id="month"
          type="number"
        />
        <label htmlFor="year">Years</label>
        <input
          className="p-4 dark:text-black rounded-md text-xl dark:bg-white bg-dark"
          onBlur={handleBlur}
          value={state.year}
          onChange={(e) => {
            setState({ ...state, year: e.target.value });
          }}
          id="year"
          type="number"
        />
        <button
          className="bg-dark dark:bg-white dark:text-black p-4 rounded-md"
          type="submit"
          onClick={handleBlur}
        >
          Submit
        </button>
        <h1 className="text-2xl">
          Total Investment:{" "}
          {state.total
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          after {state.year} years of investing {state.monthly} pesos for{" "}
          {state.month} {`${state.month > 1 ? "times" : "time"}`} each year
        </h1>
      </div>
    </section>
  );
}
