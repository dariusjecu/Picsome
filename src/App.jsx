import React,{useContext} from 'react'
import {Link, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Cart from "./Cart"
import { Context } from './Context'
import Img from "../public/cart.png"

export default function App(){

    const {nrItems} = useContext(Context)

    return (
        <div className='container'>
            <header>
                <Link to="/Picsome">Pic Some</Link>
                <Link to="Picsome/cart">
                    <div className='shopping-cart'>
                        <img src={Img} />
                        {nrItems>0 ? <p>{nrItems}</p> : <></>}
                    </div>
                </Link>
            </header>
            <Routes>
                <Route exact path="/Picsome" element={<Home/>}/>
                <Route path="Picsome/cart" element={<Cart/>}/>
            </Routes>
        </div>
    )
}