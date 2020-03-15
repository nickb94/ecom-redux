import React, { useEffect } from "react";
import "./Category.css";
import Directory from "../../components/Directory/Directory";

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
        </div>
    );
}

export default Category;