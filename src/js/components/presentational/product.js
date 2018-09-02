import React from "react";
import PropTypes from "prop-types";
import "./css/updatesC.css";
import styled from 'styled-components';

firebase.initializeApp({
    apiKey: 'AIzaSyB8bXw1Xco2dzjTwI1RvjJsMalLXtr8gYo', 
    projectId: 'appworks-school-stylish', 
    storageBucket: 'appworks-school-stylish.appspot.com' 
});

const baseURL = 'https://appworks-school-stylish.firebaseapp.com/exe/product/list';


export default class Updates extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render (){
        return(
            <div >                
                <Products/>
            </div>
        )
    }
  }

  let storage=firebase.storage();

  class Products extends React.Component{
      constructor(props){
          super(props);
          this.state={  }
      }
      render(){
          return(
              <div >                
              </div>
          )
      }
  }