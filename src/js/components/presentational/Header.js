import React from "react";
import PropTypes from "prop-types";
import "./css/headerC.css";
import styled from 'styled-components';

let imgUrl = '../src/js/components/images/search.png'
var backUrl ={
  backgroundColor:"white",
  backgroundImage: 'url(' + imgUrl + ')'
}

const UpperDiv = styled.header`
    display: flex;
    height: 80px;
    align-items: center;
    @media screen and (max-width:800px) { 
    }
`;

const UpImg = styled.img`
    width: auto;
    height: 48px;
`;

const UpNav = styled.nav`
    display:flex;
    flex:auto;
`;

const UpRight = styled.div`
    flex: none;
    width: 300px;
    margin-right: 30px;
    display: flex;
    align-items: center;
`;

const BlackDiv = styled.div`
    display: flex;
    color: #f5f5f5;
    background-color: #313538;
    height: 20px;
`;

const MediaItems = styled.div`
    display:none;
`;

export default class Header extends React.Component{
    constructor(props){
      super(props);
      this.state={}
    }
    render (){
        return(
            <div>
              
                <UpperDiv>
                    <a href="index.html" style={{textDecoration: "none"}}><UpImg src="../src/js/components/images/logo.png" alt="logo"></UpImg></a>
                    <UpNav>
                        <div className="item"><a>男裝</a></div>
                        <div className="item"><a>女裝</a></div>
                        <div className="item"><a>配件</a></div>
                    </UpNav>
                    <UpRight>
                        <div className="item form">
                            <input style={backUrl} className="search" type="text">
                            </input>  
                            
                        </div>
                        <UpImg src="../src/js/components/images/cart.png" alt="logo"></UpImg>
                        <UpImg src="../src/js/components/images/member.png" alt="logo"></UpImg>
                    </UpRight>
                </UpperDiv>
                <BlackDiv>
                    <MediaItems>男裝</MediaItems>
                    <MediaItems>女裝</MediaItems>
                    <MediaItems>配件</MediaItems>
                </BlackDiv>
                
                
            </div>
        )
    }
}



{/* <p style={testStyle, testS, {marginLeft:"40px"}}>good</p> */}