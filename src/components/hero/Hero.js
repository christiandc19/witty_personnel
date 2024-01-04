import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

import "./Hero.css";

const Hero = () => {
  return (
    <>
<figure>

	<div class="imagesContainer">

  <div className="hero-caption">

    <Zoom duration={1000}>
      <h1>LIVE <span>SOBER.</span> </h1>
    </Zoom>
    <Zoom duration={3000}>
    <h1>HEAL <span>STRONGER.</span></h1>
    </Zoom>

    <Zoom duration={4000}>
    <h2>Safety. Structure. Support. Healing</h2>
    </Zoom>

    <Zoom duration={5000}>
    <p>Transitional sober housing focused on healing and long-term recovery.
</p>
    </Zoom>

    <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
          <Link to="/contact">
            <div className="hero-btn">
              <button>CALL US</button>
            </div>
          </Link>
      </LinkRoll>

  </div>


		<div class="imageDiv image1">
    </div>
		<div class="imageDiv image2 fadeInClass"></div>
	</div>
</figure>
    </>
  );
};

export default Hero;
