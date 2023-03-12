import React from "react";
import "./Hero.scss";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Container } from "../../Utils/Components";
const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <ul className="hero__list">
          <li className="hero__search">
            <FiSearch className="hero__search--icon" />
            <input
              type="search"
              className="hero__search--input"
              placeholder="1 100 188 e'lonlar yoningizda"
            />
          </li>
          <li className="hero__text">
            <HiOutlineLocationMarker className="hero__text--icon" />
            <input
              type="text"
              className="hero__text--input"
              placeholder="Butun Uzbekistan"
            />
          </li>
          <li className="hero__btn">
            <button className="hero__search--btn">
              Qidiruv
              <FiSearch className="hero__btn--icon" />
            </button>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Hero;
