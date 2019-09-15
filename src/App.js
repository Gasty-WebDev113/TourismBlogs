import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Blogs from './pages/Blogs'
import CreateBlogs from './pages/CreateBlogs'
import {BlogPage} from './pages/BlogPage'
import {BrowserRouter, Route} from 'react-router-dom'
import {Header} from './components/Header'
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/create" component={CreateBlogs} />
          <Route exact path="/blogs/:id" component={BlogPage} />
          
      </BrowserRouter>
    </div>
  );
}

export default App;
