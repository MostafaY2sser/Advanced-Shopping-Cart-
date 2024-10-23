import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from  "react" ;
import ShoppingCartTwo from './../Components/ShoppingCart/ShoppingCart';
import StoreProducts  from '../data/StorePRoducts.json'

const ShoppingCart = createContext({}) ;

// InaialValue To CartItems Store in LocalStorage :-----
const intialCartItems = localStorage.getItem("shopping-cart")
    ? JSON.parse(localStorage.getItem("shopping-cart"))
    : [] ;

// eslint-disable-next-line react/prop-types
const ContextPovider = ({children}) => {

// Items in Shopping Cart :-----
    const [ cartItems , serCartItems  ] = useState(intialCartItems)

// Open and Close Shopping Cart :-----
    const [ isOpen , setIsOpen ] = useState(false)

    // To Save Data in LocalStorage
    useEffect(()=> {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems))
    }, [cartItems])

// Function To Open Shopping Cart :-----
    const openCart = () => {
        setIsOpen(true)
    }

// Function To Close Shopping Cart :-----
    const closeCart = () => {
        setIsOpen(false)
    }

// functon To Get Quantity Of Items :-----
    const getItemQuanatity = (id) => {
        const item = cartItems.find((item)=> item.id === id)
            return item ? item.quantity : 0
    }

// Function To Increase Items :-----
    const increaseItems = (id) => {
        serCartItems ((currentItems) => {
            if ( currentItems.find((item)=> item.id === id ) == null ) {
                return [  ...currentItems , { id ,  quantity : 1 }]
            }
            else {
                return currentItems.map((item)=> {
                    if ( item.id === id ){
                        return {...item ,  quantity : item.quantity + 1 }
                    }
                    else return item
                })
            }
        }) 
    }

// Function To Decrease Items :-----
    const decreaseItems = (id) => {
        serCartItems( (currentItems) => {
            if ( currentItems.find((item) => item.id === id )?.quantity === 1 ){
                return currentItems.filter((item) => item.id !== id )
            } else {
                return currentItems.map((item)=> {
                    if( item.id === id ){
                        return { ...item , quantity :item.quantity - 1 }
                    }
                    else return item
                })
            }
        })
    }

// Function To Remove Items :-----
    const removeItems = (id) =>{
        serCartItems((currentItems) => currentItems.filter((item)=> item.id !== id))
    }

// Function To Calculate Total Number Of Items :-----
    const getTotalItems = () => {
        return cartItems.reduce((total , item) => total + item.quantity, 0);
    }

// Function To Calculate Total Price Of Items :-----
    const getTotalPrice = () => {
        return  cartItems.reduce((total , cartItem)=>  {
            const item = StoreProducts.find((i)=> i.id === cartItem.id);
            return total + ( item?.price || 0 )  * cartItem.quantity
        },0);
    }

    return (
        <ShoppingCart.Provider  
            value={{ 
                cartItems ,
                getItemQuanatity,
                increaseItems,
                decreaseItems,
                removeItems,
                openCart,
                closeCart,
                getTotalItems,
                getTotalPrice,
            }}>
            {children}
            <ShoppingCartTwo isOpen={isOpen}/>
        </ShoppingCart.Provider>
    )
}

export default ContextPovider

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCart = () => {
    return useContext(ShoppingCart)
}



