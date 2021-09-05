import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import QuotesContainer from "./QuotesContainer";
import DidYouKnow from "./DidYouKnow";
import ContactMe from "./ContactMe";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quotes">
          <QuotesContainer />
        </Route>
        <Route exact path="/did-you-know">
          <DidYouKnow />
        </Route>
        <Route exact path="/contact-me">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
