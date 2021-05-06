import React from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'


import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import BlogContainer from './Blog/BlogContainer'
import BlogDetail from './Blog/BlogDetail'
import BlogSearch from './Blog/BlogSearch'
import PrivacyPolicy from './Components/PrivacyPolicy'
import About from './Components/About'


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>  
        
        <Route exact path="/" component={BlogContainer} />
        <Route exact path="/search" component={BlogSearch} />
        <Route exact path="/about" component={About} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/:id"  component={BlogDetail} />
        
      </Switch>
      <Footer />
    </Router>

    
  )
}

export default App