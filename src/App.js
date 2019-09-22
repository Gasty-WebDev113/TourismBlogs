import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Blogs from './pages/Blogs'
import CreateBlogs from './pages/CreateBlogs'
import LoginAndSing from './pages/LoginAndSing'
import {BlogPage} from './pages/BlogPage'
import {Header} from './components/Header'
import {BrowserRouter, Route} from 'react-router-dom'

 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/create" component={CreateBlogs} />
          <Route exact path="/blogs/:id" component={BlogPage} />
          <Route exact path="/login" component={LoginAndSing} />
          
      </BrowserRouter>
    </div>
  );
}

export default App;
