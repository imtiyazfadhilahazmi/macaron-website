"use client";

import { useState } from "react";

const flavours = [
  {
    name: "Raspberry",
    description: "Fruity · Tart · Sweet",
    price: 18000,
    className: "order-raspberry",
  },
  {
    name: "Chocolate",
    description: "Rich · Creamy · Deep",
    price: 18000,
    className: "order-chocolate",
  },
  {
    name: "Lemon",
    description: "Fresh · Bright · Zesty",
    price: 17000,
    className: "order-lemon",
  },
  {
    name: "Matcha",
    description: "Earthy · Soft · Smooth",
    price: 19000,
    className: "order-matcha",
  },
];

export default function OrderPage() {
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(6);

  const flavour = flavours[selected];
  const total = flavour.price * quantity;

  return (
    <main className="order-page">
      <nav className="order-navbar">
        <a href="/" className="logo">
          berry.
        </a>

        <a href="/" className="back-link">
          ← BACK HOME
        </a>
      </nav>

      <section className="order-hero">
        <div className="order-heading">
          <p className="section-label">ORDER — 01</p>

          <h1>
            BUILD
            <br />
            YOUR
            <br />
            <span>BOX.</span>
          </h1>

          <p>
            Pick a flavour, choose your quantity,
            <br />
            and make it yours.
          </p>
        </div>

        <div className={`order-preview ${flavour.className}`}>
          <div className="order-blob" />

          <div className="order-product">
            <img
              src={`/images/flavours/${flavour.name.toLowerCase()}.jpg`}
              alt={`${flavour.name} macaron`}
            />
          </div>

          <p className="preview-label">
            YOUR FLAVOUR
          </p>

          <h2>{flavour.name}</h2>
        </div>
      </section>

      <section className="order-builder">

        <div className="builder-section">
          <p className="builder-number">01</p>

          <div>
            <p className="builder-label">CHOOSE YOUR FLAVOUR</p>

            <div className="flavour-options">
              {flavours.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setSelected(index)}
                  className={`flavour-option ${
                    selected === index ? "selected" : ""
                  }`}
                >
                <span className="option-image">
                <img
                    src={`/images/flavours/${item.name.toLowerCase()}.jpg`}
                    alt=""
                />
                </span>

                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.description}</small>
                  </span>

                  <span className="option-price">
                    Rp{item.price.toLocaleString("id-ID")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="builder-section quantity-section">
          <p className="builder-number">02</p>

          <div>
            <p className="builder-label">HOW MANY?</p>

            <div className="quantity-control">
              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="order-summary">
          <div>
            <p>YOUR BOX</p>

            <h2>
              {quantity} × {flavour.name}
            </h2>
          </div>

          <div className="summary-price">
            <span>TOTAL</span>

            <strong>
              Rp{total.toLocaleString("id-ID")}
            </strong>
          </div>
        </div>

        <button className="add-box-button">
          ADD TO BOX →
        </button>

      </section>

      <footer>
        <p>berry. © 2026</p>
        <p>made for sweet moments.</p>
      </footer>
    </main>
  );
}