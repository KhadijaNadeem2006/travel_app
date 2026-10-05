 import Image from "next/image";
import "./GetApp.css";

const GetApp = () => {
  return (
    <section className="getapp-section">
      <div className="getapp-box">

        {/* BACKGROUND PATTERN */}
        <div className="getapp-pattern"></div>

        {/* LEFT CONTENT */}
        <div className="getapp-content">
          <h2>
            Get For
            <br />
            Free Now!
          </h2>

          <p>
            Available on iOS and android, download now!
          </p>

          <div className="getapp-buttons">

            {/* APPLE BUTTON */}
            <button className="download-btn">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.7 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.7 1.1 8.9.8 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.9-.7s1.8.7 2.9.7c1.2 0 1.9-1.1 2.7-2.2.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.1-.8-2.1-3.1zm-2.3-6.8c.6-.8 1-1.9.9-2.9-.9 0-2 .6-2.7 1.3-.6.7-1.1 1.8-1 2.8 1 .1 2-.5 2.8-1.2z" />
              </svg>

              <span>Download App</span>
            </button>

            {/* GOOGLE PLAY BUTTON */}
            <button className="download-btn dark-btn">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M3 2.5v19l11-9.5L3 2.5z"
                  fill="currentColor"
                />
              </svg>

              <span>Download App</span>
            </button>

          </div>
        </div>

        {/* PHONES */}
        <div className="getapp-phones">

          {/* BACK PHONE */}
          <Image
            src="/phone.png"
            alt="phone"
            width={350}
            height={700}
            className="getapp-phone back-phone"
          />

          {/* FRONT PHONE */}
          <Image
            src="/phone.png"
            alt="phone"
            width={350}
            height={700}
            className="getapp-phone front-phone"
          />

        </div>

      </div>
    </section>
  );
};

export default GetApp;