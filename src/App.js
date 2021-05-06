import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar'
import BlogContainer from './Blog/BlogContainer'


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={BlogContainer}/>
      </Switch>
    </Router>
  );
}

export default App