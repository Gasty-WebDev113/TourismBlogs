import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Blogs from './pages/Blogs'
import {BrowserRouter, Route} from 'react-router-dom'
import {Header} from './components/Header'
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />

      </BrowserRouter>
    </div>
  );
}

export default App;
