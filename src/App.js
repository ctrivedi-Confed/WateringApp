import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Header from './components/Header';
import Tree from './components/Tree'
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header /> 
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}>
              <Home />
            </Route>
            <Route exact path="/tree" component={Tree}>
              <div class="card-group col-md-12">  
                <Tree 
                  imgUrl= "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg"
                  title = "Tree 1"
                  width = "300"
                  height = "300"
                />
                <Tree 
                  imgUrl= "https://www.thespruce.com/thmb/tClzdZVdo_baMV7YA_9HjggPk9k=/4169x2778/filters:fill(auto,1)/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg"
                  title = "Tree 2"
                />
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
    </>    

  );
}

export default App;
