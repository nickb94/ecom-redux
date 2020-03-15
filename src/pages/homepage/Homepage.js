import React, { useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {

    useEffect(()=>{

        const ScrollToTop = () => {
            window.scrollTo(0, 0);
            return null;
          };
          ScrollToTop();

    },[]);

    return (

        <div className="home-wrapper">

            <div className="full">
                
            </div>
            <div className="banner-ad">
                <div className="banner-text-l">
                    <div className="bold-text">Deals under $10</div>
                    <div>Get just what you want at a super low price</div>
                    <Link to="/shop" >
                        <div className="button-shop">Shop Now</div>
                    </Link>
                </div>

                <div className="banner-text-r"></div>
            </div>
            <div className="category-section">
                <div className="div-one"></div>
                <div className="div-two"></div>
                <div className="div-three"></div>
            </div>

        </div>
    );
}

export default Homepage;