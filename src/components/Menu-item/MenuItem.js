import React from "react";
import "./MenuItem.css";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, history, linkUrl, match }) => {

    return (
        <div className="menu-item" onClick={() =>
            history.push(match.url + "/"+ linkUrl)}>
            <div className="content">
                <h1 className="title">{title}</h1>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);