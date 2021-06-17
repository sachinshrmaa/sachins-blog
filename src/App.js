import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar'
import BlogContainer from './Blog/BlogContainer'
import Footer from './Components/Footer'
import About from "./Pages/About";
import BlogSearch from './Blog/BlogSearch'
import BlogDetail from "./Blog/BlogDetail";
import PrivacyPolicy from './Pages/Privacy'
import Bookshelf from "./Pages/Bookshelf";
import Projects from "./Pages/Projects";
import Archive from "./Pages/Archive";
import Newsletter from "./Pages/JoinNewsletter";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={BlogContainer}/>
        <Route exact path="/newsletter" component={Newsletter} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/search" component={BlogSearch}/>
        <Route exact path="/bookshelf" component={Bookshelf}/>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/:id/:id" component={BlogDetail}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App