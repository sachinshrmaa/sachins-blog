import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar'
import BlogContainer from './Blog/BlogContainer'
import Footer from './Components/Footer'
import About from "./Pages/About";
import BlogSearch from './Blog/BlogSearch'
import BlogDetail from "./Blog/BlogDetail";
import PrivacyPolicy from './Pages/Privacy'
import Bookshelf from "./Pages/Bookshelf";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={BlogContainer}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/search" component={BlogSearch}/>
        <Route exact path="/bookshelf" component={Bookshelf}/>
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/:id" component={BlogDetail}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App