import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

import "./Hero.css";

const Hero = () => {
  return (
    <>
<figure>

	<div class="imagesContainer">

  <div className="hero-caption">

    <Fade left>
    <h1>LIVE <span>SOBER.</span> </h1>
    </Fade>
    <Fade right>
    <h1>HEAL <span>STRONGER.</span></h1>
    </Fade>

    <Fade left>
    <h2>Safety. Structure. Support. Healing</h2>
    </Fade>

    <Fade right>
    <p>Transitional sober housing focused on healing and long-term recovery.
</p>
    </Fade>

    <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
          <Link to="/contact">
                <button>Call Us</button>
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
