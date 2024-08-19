import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    // it can return only ONE elements, it should be nested (called) if we want more elements
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// COMPONENTS (data, logic, appearance) using functions
/* 2 rules in creating function
  1. The name should be uppercase first letter.
  2. Declare the components in the top level and never nest/write inside the declaration block
 */
function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>;
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>;
    </div>
  );
}

// React before v18
// React.render(<App />, document.getElementById("root"));

// WHAT is JSX?
/* 
- Declarative syntax to **describe** what components **look like** and **how** they work
- Components must **return** a block of JSX
- Extension of JS that allows us to **embed JS, CSS and React components into HTML**
- Each JSX element is **converted** to a React.createElement function call
- We could use React **without JSX**

JSX IS DECLARATIVE
(Review: 
Imperative - "HOW to do things"
- Manual DOM element selections and DOM traversing
- Step-by-step DOM mutations until we reached the desired UI)

DECLARATIVE - "WHAT we want"
- Describe what UI should look like using JSX, based on current data (props and state)
- This happens without manipulating DOM elements
- An **abstraction** away from DOM: **we never touch the DOM**
- Instead, we think of the UI as a **reflection of the current data**
*/
