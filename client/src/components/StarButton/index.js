import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarButton = () => {
  const [favorite, setFavorite] = useState(false);
  const [hover, setHover] = useState(false);
  const favState = true;
  return (
    <div>
      <label>
        <input
          type="radio"
          name="favorite"
          value={favState}
          onClick={() => setFavorite(favState)}
        />
        <FaStar
          className="star"
          color={(hover || favorite) ? "ffc107" : "e4e5e9"}
          size={20}
          onMouseEnter={() => setHover(favState)}
          onMouseLeave={() => setHover(false)}
        />
      </label>
    </div>
  );
};

export default StarButton;
