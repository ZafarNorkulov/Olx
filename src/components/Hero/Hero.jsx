import React, { useState } from "react";
import "./Hero.scss";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom'
const Hero = () => {
  const [searchTitle, setSearchTitle] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value)
    if (e.target.value.length > 2) {
      fetch(`https://api.escuelajs/api/v1/products/?title=${e.target.value}`)
        .then(res => res.json())
        .then(data => setSearchTitle(data))
    } else {
      setSearchTitle([])
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    return navigate(`/search/${search}`)
  }

  return (
    <div className="hero">
      <form onSubmit={handleSubmit} >
        <ul className="hero__list">
          <li className="hero__search">
            <FiSearch className="hero__search--icon" />
            <input
              type="search"
              className="hero__search--input"
              placeholder="1 100 188 e'lonlar yoningizda"
              onChange={handleSearch}
            />
            {
              searchTitle.length > 3 ?
                <div className='search-suggestions'>
                  {

                    searchTitle.map(searchItem =>
                      <Link to={`/singleproduct/${searchItem.id}`} key={searchItem.id} className="transarent-link search-result-item">
                        <p>{searchItem.title}</p>
                      </Link>
                    )
                  }
                </div> : <></>
            }
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
            <button type="submit" className="hero__search--btn">
              Qidiruv
              <FiSearch className="hero__btn--icon" />
            </button>
          </li>
        </ul>
      </form>

    </div>
  );
};

export default Hero;
