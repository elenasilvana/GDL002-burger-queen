import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Principal from './components/principal';
import SelectUser from './components/selectuser';
import Button from './components/button';
import LogoBG from './components/logoBG';

class App extends Component {
  //pantalla nameselect
   render(){
    return (
      <React.Fragment>
       <SelectUser />
       <div>
       <h1>Selecciona tu nombre</h1>
       </div>
       <div>
          <LogoBG />
         <Button name="Otro"/>
       </div>
      </React.Fragment>
    );   
  }

  /* 
  //pantalla Home
   render(){
    return (
      <React.Fragment>
       <Home />
       <LogoBG />
       <div>
         <Button name="Tomar Orden"/>
         <Button name="Entregar Orden"/>
       </div>
      </React.Fragment>
    );   
  }
  */

  /* //pantalla Principal  
  render(){
    return (
      <React.Fragment>
       <Principal />
       <LogoBG />
       <div>
         <Button name="Cocina"/>
         <Button name="Mesero"/>
         <Button name="Administrador"/>
       </div>
      </React.Fragment>
    );   
  }
  */
}

export default App;
//<Button name="Mostrar Modal" action={showModal} extraClassName="shadow" />