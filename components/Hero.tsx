 import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-content">

        <div className="hero-tag">
          <span>🏕️</span>
        </div>

        <h1>
          Putuk Truno
          <br />
          Camp Area
        </h1>

        <p className="hero-description">
          We want to be on each of your journeys
          seeking the satisfaction of seeing the
          untouched nature. We can help you on an
          adventure around the world in just one app.
        </p>

        <div className="hero-rating">
          <span className="stars">★★★★★</span>
          <span>4.8</span>
          <span className="reviews">(2.5k Reviews)</span>
        </div>

        <div className="hero-buttons">
          <button className="hero-button">
            Download App
          </button>

          <button className="hero-secondary-button">
            We are work
          </button>
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="hero-right">

        {/* LOCATION */}
        <div className="hero-location">
          <span>📍</span>

          <div>
            <h3>Location</h3>
            <p>Aguadulce, Panama</p>
          </div>
        </div>


        {/* IMAGE */}
        <div className="hero-image">
          <Image
            src="/pattern.png"
            alt="Camping Adventure"
            width={600}
            height={600}
            priority
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;