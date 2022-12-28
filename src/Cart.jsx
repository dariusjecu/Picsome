import React,{useContext, useState, useEffect} from 'react';
import { Context } from './Context';
import Trash from "../public/trash.png"

export default function Cart() {

    const {allPhotos, setAllPhotos, setNrItems} = useContext(Context)

    const [cartItems, setCartItems] = useState([])
    const [order, setOrder] = useState(false)

    function Ordering(){
        setOrder(true)
        setTimeout(() => {
            setOrder(false)
            OrderComplete()
        }, 2000);
    }

    function OrderComplete(){
        setCartItems([])
        setNrItems(0)
        setAllPhotos(val => val.map(el => {
                return {
                    ...el,
                    isInCart: false
                }
        }))
    }

    function RemoveItem(id){
        let array = []
        for(let i=0; i<cartItems.length;i++)
            if(cartItems[i].id != id)
                array.push(cartItems[i])
        setCartItems(array)
        setNrItems(val=>val-1)
        setAllPhotos(val => val.map(el => {
                if(el.id === id)
                        return {
                        ...el,
                        isInCart: !el.isInCart
                    }
                return el
            }))
    }

    function TotalPrice(){
        let total = 0
        cartItems.map(val => {
            total += val.price
            return val
        })
        return total.toFixed(2)
    }

    let array = []
        for(let i=0;i<allPhotos.length;i++)
            if(allPhotos[i].isInCart)
                array.push(allPhotos[i])

    useEffect(() => {
        setCartItems(array)
    },[])

    const Element = cartItems.map(val => {
        return (
            <div className='cart-el' key={val.id}>
                <div>
                    <img className='trash' src={Trash} onClick={() => RemoveItem(val.id)} />
                    <img src={val.image} />
                </div>
                <h3>${val.price}</h3>
            </div>
        )
    })

    return (
        <div className='cart'>
            <p>Your Shopping Cart</p>
            {Element}
            {cartItems.length ? <h2>Total: ${TotalPrice()} </h2> : <></>}
            {cartItems.length ? <button onClick={Ordering}>{!order ? "Place Order" : "Ordering..."}</button> : <p>The cart is empty</p>}
        </div>
    )
}