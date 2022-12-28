import React,{useContext} from 'react'
import {Link, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Cart from "./Cart"
import { Context } from './Context'

export default function App(){

    const {nrItems} = useContext(Context)

    return (
        <div className='container'>
            <header>
                <Link to="/">Pic Some</Link>
                <Link to="/cart">
                    <div className='shopping-cart'>
                        <img src="../public/cart.png" />
                        {nrItems>0 ? <p>{nrItems}</p> : <></>}
                    </div>
                </Link>
            </header>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
    )
}