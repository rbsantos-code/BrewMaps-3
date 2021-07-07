import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_FAVORITES } from "../../utils/actions";

const CartItem = ({ item }) => {
    const [state, dispatch] = useStoreContext();

    const removeFromFavorites = () => {
        // only add brewery if not in favorites cart
          dispatch({
            type: REMOVE_FROM_FAVORITES,
            id: item.id,
          });

    
        //   onClick();
      };

  return (
    <div className="flex-row">
      <div>
      </div>
      <div>
        <div>
            <a target="_blank" href={item.website_url}>{item.name}</a>
                </div>
        <div>
          <span onClick={removeFromFavorites}
            role="img"
            aria-label="trash"
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;