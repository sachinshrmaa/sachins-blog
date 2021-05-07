import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar'
import BlogContainer from './Blog/BlogContainer'
import Footer from './Components/Footer'
import About from "./Pages/About";
import BlogSearch from './Blog/BlogSearch'
import BlogDetail from "./Blog/BlogDetail";


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={BlogContainer}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/search" component={BlogSearch}/>
        <Route exact path="/:id" component={BlogDetail}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App