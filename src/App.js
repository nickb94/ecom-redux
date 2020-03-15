import React, { useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";

import './App.css';

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Checkout from "./pages/checkout/Checkout";
import Header from "./components/Header/Header";
import Category from "./pages/categories/Category";
import Registration from "./pages/Registration/Registration";


const App = (props) => {

  var unsubscribefromAuth = useRef(null);

  useEffect(() => {

    unsubscribefromAuth.current = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

      } else {
        props.setCurrentUser(userAuth);
      }

      // createUserProfileDocument(userAuth);

      // console.log(createUserProfileDocument())
    });

    return () => {
      unsubscribefromAuth.current();
    }

  }, [])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/categories" component={Category} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/signin" render={() => props.currentUser ? <Redirect to="/" /> : <Registration />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({

  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => {

  return ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  })
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectedComponent(App);
