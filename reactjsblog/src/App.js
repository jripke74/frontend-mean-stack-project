import { Route, Switch } from "react-router-dom";

import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import NewPost from "./NewPost.jsx";
import PostPage from "./PostPage.jsx";
import EditPost from "./EditPost.jsx";
import About from "./About.jsx";
import Missing from "./Missing.jsx";
import { DataProvider } from "./context/DataContext.js";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="ReactJS Blog" />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={NewPost} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/about" component={About} />
          <Route path="*" component={Missing} />
        </Switch>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
