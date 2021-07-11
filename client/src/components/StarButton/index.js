import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../../utils/actions";

const StarButton = ({ favorite, saveHandler, removeHandler }) => {
//   console.log(favorite);
  const { id } = favorite;
  const [state, dispatch] = useStoreContext();
  const { favorites } = state;

  //   const [favorite, setFavorite] = useState(false);
  const [hover, setHover] = useState(false);

  //   find brewery with matching id
  const breweryInCart = favorites.find((brewery) => brewery.id === id);

  const addToFavorites = () => {
      dispatch({
        type: ADD_TO_FAVORITES,
        brewery: favorite,
      });
  };

  const removeFromFavorites = () => {
    dispatch({
        type: REMOVE_FROM_FAVORITES,
        id: favorite.id,
    });
  }

  const buttonClicked = (e) => {
    if (!breweryInCart) {
        addToFavorites();
        saveHandler(e);
    } else {
      console.log("trying to remove");
        removeFromFavorites();
        removeHandler(e);
    }
  }

  return (
    <div>
      <label>
        <input
          type="radio"
          name="favorite"
          value={favorite.id}
          onClick={(e) => {
            buttonClicked(e);
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
