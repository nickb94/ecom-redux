import React from "react"
import { Link } from "react-router-dom";

import "./Footer.css"

export const Footer = () => {

    return(
        <div className="footer_wrapper">
            <div className="column_one">
                <div>
                <div>
                    <Link to="/about">
                    About
                    </Link>
                    </div>
                <div>Team</div>
                <div>Contact Us</div>
                <div>Blogs</div>
                <div>Careers</div>
                </div>
            </div>
            <div className="column_two"></div>
            <div className="column_three">
            <div>
                <div>Shop By Categories</div>
                <div>Shop Hats</div>
                <div>Shop Jeans</div>
                <div>Shop Jackets</div>
                <div>Shop Sneakers</div>
                </div>
            </div>
            <div className="column_four"></div>
            <div className="column_five"></div>
        </div>
    )
}

