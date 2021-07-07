import {
  UPDATE_BREWERIES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  CLEAR_FAVORITES,
  TOGGLE_FAVORITES,
} from "./actions";
import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is "UPDATE_BREWERIES"
    // return a new state obj with updated breweries array
    case UPDATE_BREWERIES:
      // return new obj with copy of state arg
      return {
        ...state,
        // new array with action.products value spread across it
        breweries: [...action.breweries],
      };
    //   if action type value is "UPDATE_CATEGORIES"
    // return a new state obj with updated categories array

    case ADD_TO_FAVORITES:
      console.log("ADDING STATE", state);
      console.log("ACTIONNN", action);
      return {
        ...state,
        // users immediately view cart with newly added item if not already open
        favoritesOpen: true,
        // add action.breweries to end of array
        favorites: [...state.favorites, action.brewery],
      };

    case REMOVE_FROM_FAVORITES:
      console.log("REMOVING STATE", state);
      console.log("ACTIONNN", action);
      // only keep items that don't match _id of item removed
      let newState = state.favorites.filter((brewery) => {
        return brewery.id !== action.brewery.id;
      });
      console.log("NEW STATEEEE", newState);

      return {
        ...state,
        //   set favoritesOpen to false when array is empty
        favoritesOpen: newState.length > 0,
        favorites: newState,
      };

    case CLEAR_FAVORITES:
      return {
        ...state,
        favoritesOpen: false,
        favorites: [],
      };

    case TOGGLE_FAVORITES:
      return {
        ...state,
        favoritesOpen: !state.favoritesOpen,
      };

    // if it's none of these action types
    // do not update state at all, keep things the same
    default:
      return state;
  }
};

// initialize global state obj, provide with functionality to update state
// automatically run it through our custom reducer()
export function useBreweryReducer(initialState) {
  // useReducer() Hook is for managing greater levels of state
  // compared to useState(), which is for form field values and button click status
  return useReducer(reducer, initialState);
}
