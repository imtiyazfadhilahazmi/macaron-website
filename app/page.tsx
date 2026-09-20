import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

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

        <div className="hero-side-text">
          SWEET
          <br />
          LITTLE
          <br />
          THINGS
        </div>
      </section>

      {/* INTRO */}
      <section id="about" className="about">
        <div className="about-top">
          <p className="section-label">01 — ABOUT</p>

          <p className="about-small">
            HANDMADE WITH A LITTLE
            <br />
            EXTRA PERSONALITY.
          </p>
        </div>

        <div className="about-main">
          <h2>
            SWEETNESS
            <br />
            DOESN'T HAVE
            <br />
            TO BE
            <span>SERIOUS.</span>
          </h2>

          <div className="about-sticker">
            <span>✦</span>
            <p>
              MADE
              <br />
              FOR
              <br />
              SWEET
              <br />
              MOMENTS
            </p>
          </div>
        </div>

        <div className="about-bottom">
          <p>
            A tiny dessert.
            <br />
            A bright colour.
            <br />
            A little surprise.
          </p>

          <p>
            That's <strong>berry.</strong>
          </p>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span>MADE WITH LOVE ✦</span>
          <span>SWEET LITTLE THINGS ✦</span>
          <span>MADE WITH LOVE ✦</span>
          <span>SWEET LITTLE THINGS ✦</span>
        </div>
      </div>

      {/* COLLECTION PLACEHOLDER */}
      <section id="collection" className="collection">
        <div className="collection-heading">
          <p className="section-label">02 — COLLECTION</p>

          <h2>
            PICK YOUR
            <br />
            SWEETNESS.
          </h2>

          <p className="collection-intro">
            Four little flavours, each with its own personality.
          </p>
        </div>

        <div className="flavour-grid">

          <div className="flavour-visual">
            <img
              src="/images/flavours/raspberry.jpg"
              alt="Raspberry macaron"
            />
          </div>

          <div className="flavour-visual">
            <img
              src="/images/flavours/chocolate.jpg"
              alt="Chocolate macaron"
            />
          </div>

          <div className="flavour-visual">
            <img
              src="/images/flavours/lemon.jpg"
              alt="Lemon macaron"
            />
          </div>

          <div className="flavour-visual">
            <img
              src="/images/flavours/matcha.jpg"
              alt="Matcha macaron"
            />
          </div>

        </div>
      </section>

      {/* ORDER PLACEHOLDER */}
      <section id="order" className="order">
        <p className="section-label">03 — ORDER</p>

        <h2>
          SOMETHING
          <br />
          SWEET?
        </h2>

        <a href="/order" className="hero-button">
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