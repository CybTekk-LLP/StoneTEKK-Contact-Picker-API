import React from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from "./../Footer/Footer";
import store from "./../../store/store";

function RootLayout() {
  return (
    <>
    <Provider store={store}>
        <main>
            <Outlet/>
        </main>
        <Footer
        text={"Experimental Feature for"}
        url={"https://stonetekk.in"}
        link={"StoneTEKK.in"}
      ></Footer>
    </Provider>
    </>
  )
}

export default RootLayout