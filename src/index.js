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
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = []
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
        {numPizzas > 0 ? (
          <>
            <p>Authentic Italian Pizza!!!</p>
            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza 
                  pizzaObj={pizza}
                  key={pizza.name}
                />
              ))}
            </ul>
          </>
        ) : <p>We are still working on our menu! Please come by later :D </p>}
    </main>
  );
}

function Pizza({pizzaObj}) {

  //if(pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'Sold Out!!' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

//? Also I can write this component like this:
//? function Pizza({pizzaObj}) {
//?  const { name, ingredients, price, photoName, soldOut } = pizzaObj;

//?   if (soldOut) return <p>Sold Out!!</p>;

//?   return (
//?     <li className="pizza">
//?       <img src={photoName} alt={name} />
//?       <div>
//?         <h3>{name}</h3>
//?         <p>{ingredients}</p>
//?         <span>{price + 3}</span>
//?       </div>
//?     </li>
//?   );
//? }

function Footer() {
  const hour = new Date().getHours();
  const openHour = 13;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if(!isOpen) 
  // return (
  //   <p>
  //     WE ARE CLOSED !!
  //   </p>
  // )

  return (
    <footer>
      {isOpen ? (
        <Order
          openHour={openHour}
          closeHour={closeHour}
        />
      ) : (
        <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00!! </p>
      )}
    </footer>
  );
}

//I wrote it with a different way from Jonas, it is like we do it at work.
const Order = ({closeHour, openHour}) => {
  return (
    <div className="order">
      <p>We are open from {openHour}:00 to {closeHour}:00! Come visit us or order online.</p>
      <button 
        className="btn"
        >
          Order
      </button>
    </div>
  )
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
