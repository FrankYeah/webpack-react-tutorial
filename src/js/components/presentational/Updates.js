import React from "react";
import PropTypes from "prop-types";
import "./css/updatesC.css";
import styled from 'styled-components';

firebase.initializeApp({
    apiKey: 'AIzaSyB8bXw1Xco2dzjTwI1RvjJsMalLXtr8gYo', 
    projectId: 'appworks-school-stylish', 
    storageBucket: 'appworks-school-stylish.appspot.com' 
});

let imgUrl = '../src/js/components/images/visual-0.jpg'
const baseURL = 'https://appworks-school-stylish.firebaseapp.com/exe/product/list';
var backKeyUrl ={
    backgroundImage: 'url(' + imgUrl + ')'
}

export default class Updates extends React.Component{
    constructor(props){
        super(props);
        this.state={ items:[], id:[] }
    }
    render (){
        return(
            <div >                
                <Products/>
            </div>
        )
    }
  }


  let testLength;
  let elementName = [];
  let elementPrice = [];
  let myName=[]
  let elementColorDiv =[];
  let elementImg = [];
  let elementAll = [];
  let storage=firebase.storage();

  class Products extends React.Component{
      constructor(props){
          super(props);
          this.state={ name:[], price:[], img:[], testName:"爸爸", element:[] }
      }

      componentDidMount(){
            fetch(baseURL)
            .then((res) => res.json())
            .then((data) => {

                for(let i=0;i<data.list.length;i++){         

                    for(let j in data.list[i].colors) {
                        elementColorDiv.push("#" +j)                  
                    }                   
                    console.log(elementColorDiv) 
                    console.log(elementColorDiv[0]) 
                    // elementColorDiv = []
                    // elementName.push(<p key={i}>{data.list[i].name}</p>)
                    // elementPrice.push(<p key={i}>{data.list[i].price}</p>)

                    elementAll.push(<div key={i} className="main-item">
                                        <a style={{textDecoration:"none", color:"black" }} href={'/product.html?id=' + data.list[i].id}   >
                                            <img className="main-img" src="../src/js/components/images/visual-3.jpg" alt="logo"></img>
                                            <div className="colors">
                                                 <div style={{backgroundColor:elementColorDiv[0] }} className="color"></div>
                                                 <div style={{backgroundColor:elementColorDiv[1] }} className="color"></div>
                                                 <div style={{backgroundColor:elementColorDiv[2] }} className="color"></div>
                                            </div>
                                            <p key={i+100}>{data.list[i].name}</p>
                                            <p key={i+1000}>TWD. {data.list[i].price}</p>
                                        </a>
                                    </div>)

                    storage.ref(data.list[i].id + '/main.jpg').getDownloadURL().then((url)=>{
                        elementImg.push(<img key={i} className="main-img" src={url} alt="logo"></img>)
                    })
                    elementColorDiv=[]
                }

                testLength = data.list.length
                // this.getAllName() 
                // this.getAllPrice()
                this.getAllelements()
                this.getAllImg()

            }        
            )            
            Promise.all([this.testTime]).then(function(){console.log('all set down')})

      }

      getAllelements(){
        this.setState(prevState => {
          return {
            element:elementAll
          }
      })
      }

      getAllImg(){
        this.setState(prevState => {
          return {
              img: elementImg
          }
      })
      }

    //   getAllName(){
    //     this.setState(prevState => {
    //       return {
    //           name: elementName
    //       }
    //   })
    //   }

    //   getAllPrice(){
    //     this.setState(prevState => {
    //       return {
    //           price: elementPrice
    //       }
    //   })
    //   }



      render(){
          console.log('rendering')

          return(
              <div >                
                  <div style={backKeyUrl} className="keyvisual"></div>
                  <main className="main-div">
                      {/* <div className="main-item">
                          <img className="main-img" src="../src/js/components/images/visual-3.jpg" alt="logo"></img>
                          <div className="colors">
                              <div  style={{backgroundColor: "red"}} className="color"></div>
                          </div>
                          <p>前開岔扭結洋裝</p>
                          <p>TWD. 799</p>
                      </div> */}

                      {this.state.element}
                  </main>
              </div>
          )
      }
  }