import React, { useEffect } from "react";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_FAVORITES } from "../../utils/actions";
import "./style.css";
import { idbPromise } from "../../utils/helpers";
import { QUERY_USER } from "../../utils/queries";
import { UPDATE_BREWERIES } from "../../utils/actions";
import { useQuery } from "@apollo/client";

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  console.log(state);
  function toggleFavorites() {
    dispatch({ type: TOGGLE_FAVORITES });
  }

  const { currentFavorite } = state;

  const { loading, data } = useQuery(QUERY_USER);
  console.log(data);

  useEffect(() => {
    // if there's data to be stored
    if (data) {
      // let's store it in the global state object
      dispatch({
        type: UPDATE_BREWERIES,
        favorites: data.favorites,
      });

      // but let's also take each product and save it to IndexedDB using the helper function
      data.products.forEach((favorites) => {
        idbPromise("favorites", "put", favorites);
      });
    }
    // add else if to check if `loading` is undefined in `useQuery()` Hook
    else if (!loading) {
      // since we're offline, get all data form "products" store
      idbPromise("favorites", "get").then((favorites) => {
        // use retrieved array product data to set global state for offline browsing
        dispatch({
          type: UPDATE_BREWERIES,
          favorites: favorites,
        });
      });
    }
  }, [data, loading, dispatch]);

  function saveFavorite() {
    if (!currentFavorite) {
      return state.favorites;
    }
  }

  if (!state.favoritesOpen) {
    return (
      <div className="cart-closed" onClick={toggleFavorites}>
        <span role="img" aria-label="trash">
          ⭐️
        </span>
      </div>
    );
  }

  return (
    <div className="cart has-background-white">
      <div className="close" onClick={toggleFavorites}>
        [close]
      </div>
      <h2>Your Favorites</h2>
      {state.favorites.length ? (
        <div>
          {state.favorites.map((favorite) => (
            <CartItem key={favorite.id} _id={favorite.id} item={favorite} />
          ))}
          <div className="flex-row space-between">
            {/* {
              Auth.loggedIn() ?
                <button>
                  Checkout
                </button>
                :
                <span>(log in to save your breweries)</span>
            } */}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            👀
          </span>
          You don't have any favorites yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
