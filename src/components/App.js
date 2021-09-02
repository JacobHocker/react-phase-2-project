import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import QuotesContainer from "./QuotesContainer";
import DidYouKnow from "./DidYouKnow";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <QuotesContainer />
      <DidYouKnow />
    </div>
  );
}

export default App;
