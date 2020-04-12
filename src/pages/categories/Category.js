import React, { useEffect } from "react";
import Directory from "../../components/Directory/Directory";
import {Footer} from "../../components/Footer/Footer"

import "./Category.css";
const Category = () => {

    useEffect(() => {

        const ScrollToTop = () => {
            window.scrollTo(0, 0);
            return null;
        };
        ScrollToTop();

    }, []);

    return (

        <div className="wrapper">
            <Directory />
            <Footer />
        </div>
    );
}

export default Category;