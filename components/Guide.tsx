 
import Image from "next/image";
import "./Guide.css";

const Guide = () => {
  return (
    <section className="guide-section">
      <div className="guide-content">

        <div className="guide-left">
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="guide-camp-icon"
          />

          <p className="guide-small-title">
            WE ARE HERE FOR YOU
          </p>

          <h2>
            Guide You to Easy Path
          </h2>
        </div>

        <div className="guide-right">
          <p className="guide-description">
            Only with the hilink application you will no longer get lost and
            get lost again, because we already support offline maps when there
            is no internet connection in the field.
          </p>
        </div>

      </div>

      <div className="guide-boat">
        <Image
          src="/boat.png"
          alt="Boat"
          width={1440}
          height={580}
          priority
        />

        <div className="guide-info-box">

          <div className="guide-meter">
            <Image
              src="/meter.svg"
              alt="meter"
              width={16}
              height={158}
            />
          </div>

          <div className="guide-info-content">

            <div className="guide-info-row">
              <p>Destination</p>
              <span>48 min</span>
            </div>

            <h3>Aguas Calientes</h3>

            <p className="guide-start">
              Start track
            </p>

            <h4>Wonorejo Pasuruan</h4>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;

