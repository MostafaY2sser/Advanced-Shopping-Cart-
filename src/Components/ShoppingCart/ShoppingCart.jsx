import {  Offcanvas } from "react-bootstrap"
import { useShoppingCart } from "../../Context/Context"
import CartItem from "../CartItem/CartItem"
import FormatCurrency from "../FormatCurrency"

// eslint-disable-next-line react/prop-types
const ShoppingCart = ( {isOpen} ) => {

    // From  Context API :-----
    const {cartItems, closeCart, getTotalPrice} = useShoppingCart()

    return (
        <>
        <Offcanvas show={isOpen}  onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                { cartItems.map((item)=> (
                        <CartItem key={item.id} {...item}/>
                    )
                ) }
                <h3 
                    className="w-100 pt-2 mt-2 text-end" 
                    style={{borderTop:"1px solid #777"}}
                >
                    Total: {FormatCurrency(getTotalPrice())}
                </h3>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}

export default ShoppingCart
