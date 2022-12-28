import React, {useContext, useState} from 'react'
import {Context} from './Context'
import Fav from "../public/favorite.png"
import FavPressed from "../public/favorite-pressed.png"
import Cart from "../public/cart.png"
import Checked from "../public/check.png"

export default function Image(props) {

    const {ChangeCart, ChangeFav} = useContext(Context)

    const [hover, setHover] = useState(false)

    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover||props.isFav||props.isInCart ? <img className='icon' src={!props.isFav ? Fav : FavPressed} onClick={() => {ChangeFav(props.id)}} /> : <></>}
            {hover||props.isInCart||props.isFav ? <img className="icon cart" src={!props.isInCart ? Cart : Checked} onClick={() => ChangeCart(props.id)} /> : <></>}
            <img src={props.image} />
        </div>
    )
}