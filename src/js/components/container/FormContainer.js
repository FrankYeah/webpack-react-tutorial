import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../presentational/Header";
import Updates from "../presentational/Updates";
import Footer from "../presentational/Footer";
// import './styleA.css';

class FormContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render (){
     return(
      <div >        
          <Header/>      
          <Updates/>
          <Footer />    
      </div>

     )
  }
}

export default FormContainer;
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;