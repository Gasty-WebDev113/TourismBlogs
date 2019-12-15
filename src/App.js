import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Blogs from './pages/Blogs'
import CreateBlogs from './pages/CreateBlogs'
import LoginAndSing from './pages/LoginAndSing'
import NotRegistered from './pages/NotRegistered'
import {BlogPage} from './pages/BlogPage'
import {UserPage} from './pages/UserPage'
import {Header} from './components/Header'
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom'
import Context from "./Context";
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:id" component={BlogPage} />
          <Route exact path="/user/:id" component={UserPage}/>


          <Context.Consumer>
            {
              (value)=>
              
              value.Auth
                 ? <Switch>
                  <Route exact path="/create" component={CreateBlogs} />
                  <Route exact path="/login" component={LoginAndSing}>
                    <Redirect to="/"/>
                  </Route>
                </Switch>
                :
                <Switch>
                  <Route exact path="/create" component={NotRegistered} />
                  <Route exact path="/login" component={LoginAndSing} />
                </Switch>
            }
          </Context.Consumer>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
