import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage'; 
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#00001a",
    colour: "white",
    minHeight: "100vh",
  },
}));

function App() {
   
  const classes = useStyles()


  return (
  <BrowserRouter>
  <div className={classes.App}>
   <Header />
   
   <Route exact path="/" component={Homepage} />
   <Route path="/coins/:id" component={Coinpage} />
   
  
  </div>
  </BrowserRouter>
  );
}

export default App;