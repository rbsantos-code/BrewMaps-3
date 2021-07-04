import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ApolloProvider makes Graph API requests available to entire app
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./components/Home";
import aboutpage from "./pages/about";
import { StoreProvider } from "./utils/GlobalState";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Login from "./components/Login";
import "./App.css";
import Social from "./components/Social";
import SignUp from "./components/SignUp";
import NoMatch from './pages/noMatch';
import Blog from './pages/blog';
import User from './components/User';
import Contact from './components/Contact';
import SinglePost from './components/SinglePost';



const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* All components between <StoreProvider> are children */}
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={aboutpage} />
              <Route exact path="/nav" component={Nav} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/social" component={Social} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/user" component={User} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/post/:id" component={SinglePost} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
