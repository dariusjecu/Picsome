import React, {useEffect, useState} from 'react'
import Data from "./data"
import {nanoid} from "nanoid"

const Context = React.createContext()

function ContextProvider(props){

    const [allPhotos, setAllPhotos] = useState([])
    const [nrItems, setNrItems] = useState(0)
    
    function getPhotos(){
        setAllPhotos(() => {
            const array = Data[0].photos.map(prev => {
                return {
                    id: nanoid(),
                    image: prev.src.medium,
                    isFav: false,
                    isInCart: false,
                    price: 5.99
                }
            })
            return array
        })
    }

    function ChangeFav(id){
        const array = allPhotos.map(val => {
                if(val.id === id)
                return {
                    ...val,
                    isFav: !val.isFav
                }
                return val
        })
        setAllPhotos(array)
    }

    function ChangeCart(id){
        const array = allPhotos.map(val => {
                if(val.id === id)
                {
                    if(val.isInCart === false)
                        setNrItems(val => val+1)
                    else
                        setNrItems(val => val-1)
                    return {
                        ...val,
                        isInCart: !val.isInCart
                    }
                }
                return val
        })
        setAllPhotos(array)
    }

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <Context.Provider value={{allPhotos, nrItems, setAllPhotos, setNrItems, ChangeFav, ChangeCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}