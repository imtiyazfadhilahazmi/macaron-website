"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const {
    items,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <main className="cart-page">
      <nav className="cart-navbar">
        <Link href="/" className="logo">
          berry.
        </Link>

        <Link href="/order" className="back-link">
          ← ADD MORE
        </Link>
      </nav>

      <section className="cart-content">
        <p className="section-label">
          YOUR BOX — {totalItems} ITEMS
        </p>

        <h1>
          SWEET
          <br />
          <span>STUFF.</span>
        </h1>

        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your box is still empty.</p>

            <Link href="/order" className="cart-cta">
              PICK YOUR FLAVOURS →
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.name}>
                  <div>
                    <h2>{item.name}</h2>
                    <p>
                      {item.quantity} × Rp
                      {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>

                  <div className="cart-item-right">
                    <strong>
                      Rp
                      {(item.price * item.quantity).toLocaleString(
                        "id-ID"
                      )}
                    </strong>

                    <button
                      onClick={() => removeItem(item.name)}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <span>TOTAL</span>

              <strong>
                Rp{totalPrice.toLocaleString("id-ID")}
              </strong>
            </div>

            <div className="cart-actions">
              <button
                className="clear-button"
                onClick={clearCart}
              >
                CLEAR BOX
              </button>

              <button className="checkout-button">
                CHECKOUT →
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}