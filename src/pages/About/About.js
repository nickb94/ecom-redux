import React from "react"
import {Footer} from "../../components/Footer/Footer" 

import "./About.css"
const About = () => {

    React.useEffect(()=>{

        const ScrollToTop = () => {
            window.scrollTo(0, 0);
            return null;
          };
          ScrollToTop();

    },[]);

    return(
        <div className="page_wrapper">
            <div className="inner_box">
                <div className="heading">
                    About
                </div>
                <div className="about_content">
                    This is an ambitious project to mimic an online buying webapp.
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;