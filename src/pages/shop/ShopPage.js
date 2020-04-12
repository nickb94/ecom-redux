import React from "react";
import { SHOP_DATA } from "./shopData";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import {Footer} from "../../components/Footer/Footer"

import "./ShopPage.css";

class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    componentDidMount() {

        const ScrollToTop = () => {
            window.scrollTo(0, 0);
            return null;
        };
        ScrollToTop();

    }

    render() {

        const { collections } = this.state;

        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
                <Footer />
            </div>
        );
    }
}

export default ShopPage;