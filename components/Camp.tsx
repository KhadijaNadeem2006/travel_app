 "use client";

import Image from "next/image";
import "./Camp.css";

const Camp = () => {
  return (
    <section className="camp-section">

      <div className="camp-slider">

        {/* First Camp Image */}
        <div className="camp-card">
          <Image
            src="/img 1.jpg"
            alt="Mountain camping area"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 75vw"
            className="camp-image"
          />

          <div className="camp-location">
            <Image
              src="/folded-map.svg"
              alt="Map"
              width={24}
              height={24}
            />
            <span>Putuk Truno Camp Area</span>
          </div>

          <div className="camp-people">
            <div className="camp-avatars">
              <Image
                src="/person-1.png"
                alt="Camper"
                width={38}
                height={38}
              />
              <Image
                src="/person-2.png"
                alt="Camper"
                width={38}
                height={38}
              />
              <Image
                src="/person-3.png"
                alt="Camper"
                width={38}
                height={38}
              />
              <Image
                src="/person-4.png"
                alt="Camper"
                width={38}
                height={38}
              />
            </div>

            <span>50+ Joined</span>
          </div>
        </div>

        {/* Second Camp Image */}
        <div className="camp-card">
          <Image
            src="/img-2.png"
            alt="Beautiful camping destination"
            fill
            sizes="(max-width: 768px) 90vw, 75vw"
            className="camp-image"
          />

          <div className="camp-location">
            <Image
              src="/folded-map.svg"
              alt="Map"
              width={24}
              height={24}
            />
            <span>Mountain Camping</span>
          </div>

          <div className="camp-people">
            <div className="camp-avatars">
              <Image
                src="/person-1.png"
                alt="Camper"
                width={38}
                height={38}
              />
              <Image
                src="/person-2.png"
                alt="Camper"
                width={38}
                height={38}
              />
              <Image
                src="/person-3.png"
                alt="Camper"
                width={38}
                height={38}
              />
              <Image
                src="/person-4.png"
                alt="Camper"
                width={38}
                height={38}
              />
            </div>

            <span>30+ Joined</span>
          </div>
        </div>

      </div>

      {/* Green Box - Only Below First Image */}
      <div className="camp-info">
        <div className="camp-info-heading">
          <Image
            src="/quote.svg"
            alt="Quote"
            width={32}
            height={32}
          />

          <h2>Feeling Lost And Not Knowing The Way?</h2>
        </div>

        <p>
          Starting from the anxiety of the unknown, a journey through
          beautiful nature can help you discover new experiences,
          peaceful places, and unforgettable memories.
        </p>
      </div>

    </section>
  );
};

export default Camp;