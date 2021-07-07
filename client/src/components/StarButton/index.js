import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_FAVORITES } from "../../utils/actions";

const StarButton = ({ favorite, onClick }) => {
  console.log(favorite);
  const { id } = favorite;
  const [state, dispatch] = useStoreContext();
  const { favorites } = state;

  //   const [favorite, setFavorite] = useState(false);
  const [hover, setHover] = useState(false);

  //   find brewery with matching id
  const breweryInCart = favorites.find((brewery) => brewery.id === id);

  const addToFavorites = () => {
    // only add brewery if not in favorites cart
    if (!breweryInCart) {
      dispatch({
        type: ADD_TO_FAVORITES,
        brewery: favorite,
      });
    }

    //   onClick();
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="favorite"
          onClick={() => {
            addToFavorites();
          }}
        />
        <FaStar
          className="star"
          color={hover || breweryInCart ? "ffc107" : "e4e5e9"}
          size={20}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </label>
    </div>
  );
};

export default StarButton;
