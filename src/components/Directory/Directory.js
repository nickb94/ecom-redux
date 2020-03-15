import React from "react";
import MenuItem from "../Menu-item/MenuItem";
import "./Directory.css";

class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: "hats",
                    linkUrl: "hats",
                    id: 1
                },
                {
                    title: "jackets",
                    linkUrl: "",
                    id: 2
                },
                {
                    title: "jeans",
                    linkUrl: "",
                    id: 3
                },
                {
                    title: "shoes",
                    linkUrl: "",
                    id: 4
                }
            ]
        }
    }
    render() {

        return (
            <div className="directory">
                {this.state.sections.map(({ ...otherSectionProps }, id) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory;