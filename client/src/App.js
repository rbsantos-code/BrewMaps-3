
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



const httpLink = createHttpLink({
  uri: "/graphql",
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
              <Route exact path="/Nav" component={Nav} />
              <Route exact path="/Login" component={Login} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
