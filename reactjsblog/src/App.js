import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import NewPost from "./NewPost.jsx";
import PostPage from "./PostPage.jsx";
import About from "./About.jsx";
import Missing from "./Missing.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Footer />
    </div>
  );
}

export default App;
