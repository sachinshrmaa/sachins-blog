
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar'
import BlogContainer from './Blog/BlogContainer'
import Footer from './Components/Footer'
import About from "./Pages/About";
import BlogSearch from './Blog/BlogSearch'
import BlogDetail from "./Blog/BlogDetail";
import PrivacyPolicy from './Pages/Privacy'
import Bookshelf from "./Pages/Bookshelf";
import Course from "./Pages/Course";


const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
            <Route exact path='/' element={<BlogContainer />} />
            <Route exact path='/search' element={<BlogSearch />} />
            <Route exact path='/bookshelf' element={<Bookshelf />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/course' element={<Course />} />
            <Route exact path='/privacy' element={<PrivacyPolicy />} />
            <Route exact path='/:id' element={<BlogDetail />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App