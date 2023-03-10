import React from "react";
import "./Hero.scss";
import { Container } from "../../Utils/Components";
const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <ul className="hero__list">
          <li className="hero__search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              className="hero__search--input"
              placeholder="1 100 188 e'lonlar yoningizda"
            />
          </li>
          <li className="hero__text">
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" className="hero__text--input" />
          </li>
          <li className="hero__btn">
            <button className="hero__search--btn">
              Qidiruv
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Hero;
