export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="logo">
          berry.
        </a>

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#collection">COLLECTION</a>
          <a href="#order">ORDER</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">A LITTLE SOMETHING SWEET</p>

          <h1>
            RASPBERRY
            <br />
            MACARON
          </h1>

          <p className="hero-description">
            Soft, sweet and a little bit unexpected.
            <br />
            Made for your sweetest moments.
          </p>

          <a href="#collection" className="hero-button">
            EXPLORE FLAVOURS →
          </a>
        </div>

        <div className="hero-art">
          <div className="pink-blob" />

          <img
            src="/images/raspberry-macaron.jpg"
            alt="Raspberry macaron"
            className="hero-macaron"
          />

          <div className="berry berry-one">●</div>
          <div className="berry berry-two">●</div>
          <div className="berry berry-three">●</div>
        </div>

        <div className="new-text">
          NEW
        </div>
      </section>

      {/* INTRO */}
      <section id="about" className="intro">
        <p className="section-label">01 — ABOUT</p>

        <h2>
          SWEETNESS,
          <br />
          WITH PERSONALITY.
        </h2>

        <p className="intro-text">
          Tiny handmade treats with bold flavours, playful colours
          and just enough sweetness to make an ordinary day feel special.
        </p>
      </section>

      {/* COLLECTION PLACEHOLDER */}
      <section id="collection" className="collection">
        <p className="section-label">02 — COLLECTION</p>

        <h2>COMING SOON.</h2>
      </section>

      {/* ORDER PLACEHOLDER */}
      <section id="order" className="order">
        <p className="section-label">03 — ORDER</p>

        <h2>
          SOMETHING
          <br />
          SWEET?
        </h2>

        <a href="#" className="hero-button">
          ORDER NOW →
        </a>
      </section>

      <footer>
        <p>berry. © 2026</p>
        <p>made for sweet moments.</p>
      </footer>
    </main>
  );
}