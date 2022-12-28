import React, {useContext} from 'react'
import {Context} from './Context'
import Image from './image'

export default function Home() {

    const {allPhotos, ChangeFav, ChangeCart} = useContext(Context)

    const Element = allPhotos.map(val => {
        return(
            <div className='image-box' key={val.id}>
                <Image id={val.id} isFav={val.isFav} isInCart={val.isInCart} image={val.image}/>
            </div>
        )
    })

    return (
        <div className='home'>
            {Element}
        </div>
    )
}