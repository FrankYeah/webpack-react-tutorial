import React from "react";
import PropTypes from "prop-types";
import "./css/footerC.css";

export default class Footer extends React.Component{
    render (){
        return(
            <div className="down-footer">
                <div className="down-view">
                    <div className="down-link">
                         <div className="link-item">關於 stylish</div>
                         <div className="link-item">服務條款</div>
                         <div className="link-item">隱私政策</div>
                    </div>
                    <div className="down-link">
                         <div className="link-item">聯絡我們</div>
                         <div className="link-item">FAQ</div>
                    </div>
                    <div className="down-media">
                         <img src="../src/js/components/images/line.png" alt="logo"></img>
                         <img src="../src/js/components/images/twitter.png" alt="logo"></img>
                         <img src="../src/js/components/images/facebook.png" alt="logo"></img>
                    </div>
                    <div className="copyright">
			              © 2018. All rights reserved.
		        	</div>
                </div>
            </div>
        )
    }
}