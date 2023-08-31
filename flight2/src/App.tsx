import "../src/scss/app.scss";
import scss from '../src/scss/app.scss'
import {createContext, useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FullTicket from "./Pages/FullTicket";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound"
// import Cart from "./Pages/Cart";
import React from "react";



const Cart = React.lazy(() => import('./Pages/Cart'))





function App() {


    return (

        <div className="wrapper">

            <Header />
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='cart'
                           element={
                        <React.Suspense fallback={<div>Идет загрузка... </div>}>
                            <Cart/>
                        </React.Suspense>
                    }
                           />
                    <Route path='/ticket/:id' element={<FullTicket/>}/>

                </Routes>
            </div>

        </div>
    );


}

export default App;
















