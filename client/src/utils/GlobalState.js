// createContext instantiates new Context obj (container to hold gobal state data)
// useContext Hook allows to use state created from createContext fx
import React, { createContext, useContext } from "react";
import { useBreweryReducer } from "./reducers";

// create new Context obj
const StoreContext = createContext();
// every Context obj has a Provider and Consumer
// wrap app in Provider to make state data passed into it as a prop available to all other components
// Consumer grabs and uses data that Provider holds
const { Provider } = StoreContext;

// value passes in more data for state if we need
// ...props handles any other props the user needs
const StoreProvider = ({ value = [], ...props }) => {
  // instantiate global state
  // useBreweryReducer wraps around useReducer
  // and returns state (most up to date version of GSO)
  // and dispatch (fx to update our state)
  // dispatch looks for action obj passed in as arg
  const [state, dispatch] = useBreweryReducer({
    breweries: [],
    favorites: [],
    favoritesOpen: false,
    categories: [],
    currentCategory: "",
  });
  console.log(state);
  //   return StoreContext's <Provider>
  // dispatch fx provided as data for the value prop
  // ...props needed for <Provider> to render children
  return <Provider value={[state, dispatch]} {...props} />;
};

// when executed from within a component, receive [state, dispatch] data managed by StoreProvider
const useStoreContext = () => {
    // any component that has access to StoreProvider can use any data in global state container
    //  or update it using dispatch fx
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };