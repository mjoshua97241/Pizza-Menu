import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    // "className" in JSX Rules
    <div className="container">
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
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  // Adding styling
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* Conditional Operator */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} /> //key is unique (you can use name)
          ))}
        </ul>
      )} */}
      {/* Ternary Operator */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later 🙂 </p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10} //for the number you must enclosed it with the JS mode "{}"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //destructuring props
  console.log(pizzaObj);

  if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>;<span>{pizzaObj.price + 3}</span>;
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("Wer're currently open!");
  // else alert("Sorry we're closed");

  // Conditional Rendering with Multiple Returns
  // if (!isOpen) return <p>CLOSED</p>;

  // Ternary Operator
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  <div className="order">
    <p>
      We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
      online.
    </p>
    <button className="btn">Order</button>
  </div>;
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

SEPARATION OF CONCERNS? YES
- one technology per file (traditional way)

  Evolution
  Rise of interactive SPAs -> JS is in charge of HTML -> Logic and UI are tightly coupled -> Why keep them separated? -> React Components + JSX

  Component
    - Data
    - Logic
    - Appearance

  ONE COMPONENT PER FILE
    Each component is concerned with one piece of the UI
    - Question
    - Menu
    - Filters
    - Player

PROPS {}
  - HOW we passed data BETWEEN components (from parent to child components)
  - a.k.a. communication channel
  - you can pass through any data (arrays, objects, numbers or etc)
  - FUNDAMENTAL things on the react

  PROPS ARE **READ-ONLY!**
  ☝ Props are read-only, they are **immutable**! This is one of React's strict rules.
    
  ☝ If you need to mutate props, you actually **need state**

    WHY?
      👉 Mutating props would affect parent, creating **side effects** (not pure). React is pure functions.
      👉 Components have to be **pure functions** in terms of props and state
      👉 This allows React to optimize apps, avoid bugs, make apps predictable

  - Data
    - Props - data coming from the **outside**, and can **only** be updated by the **parent component**
    - State - internal data that can be update by the **component's logic**
  - Logic
  - Appearance

  ONE-WAY DATA FLOW
    - from parents to children (top to bottom) and never to opposite direction

    WHY?
    👉 ...makes applications more predictable and easier to understand
    👉 ...makes applications easier to debug, as we have more control over the data
    👉 ...is more performant

RULES OF JSX RULES

  General JSX Rules

  👉 JSX works essentially like HTML, but we can enter "Javascript mode" by using {} (for text or attributes)

  👉 We can place JavaScript expressions inside {}. Examples: reference variables, create arrays or objects,[].map(), ternary operator

  👉 Statements are **not allowed** (if/else, for, switch)

  👉 JSX produces a JS expression
    const el = <h1>Hello React!</h1>
    const el = React.createElement("h1", null, "Hello React!");
    1. We can place **other pieces of JSX** inside {}
    2. We can write JSX **anywhere** inside a component (in if/else, assign to variables, pass it into functions)

  👉 A piece of JSX can only have **one root element**. If you need more, use <React.Fragment> (or the short <>)

RENDERING LISTS
  - we have an array and create ONE component for each element of the array. Instead of doing it manually, we want to do it all at once dynamically.

CONDITIONAL RENDERING
  👉 **Ternary Operator** - use this when you need to return some piece of JSX based on a condition. We can use it ALL the time.

  👉IF/ELSE - if we want something that is **nothing** (null)

EXTRACTING JSX INTO A NEW COMPONENT
  - We should use **props**

DESTRUCTURING PROPS
  - use curly braces "{}" 

REACT FRAGMENT "<></>"
  - lets us GROUP more than one elements (i.e. "<p></p>", "<ul></ul>") without leaving any trace in a HTML Tree (DOM)

*/
