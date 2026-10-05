 import Image from "next/image";
import { FEATURES } from "@/constants";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">

      {/* LEFT SIDE - PHONE */}
      <div className="features-phone">
        <Image
          src="/phone.png"
          alt="phone"
          width={400}
          height={800}
          className="phone-image"
        />
      </div>

      {/* RIGHT SIDE - CONTENT */}
      <div className="features-content">

        {/* CAMP ICON */}
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="features-camp-icon"
        />

        <h2>Our Features</h2>

        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.title}>

              <div className="feature-icon">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Features;