import "./CartItem.scss"
import StoreProducts from '../../data/StorePRoducts.json'
import FormatCurrency from '../FormatCurrency'
import { Button } from "react-bootstrap"
import { useShoppingCart } from "../../Context/Context"

// eslint-disable-next-line react/prop-types
const CartItem = ({id , quantity }) => {

    const {removeItems} = useShoppingCart()

    const item = StoreProducts.find((i) => i.id === id )
    if( item == null ) null

    return (
        <div className='d-flex align-items-center mb-3 '>
            <img className="cartImage" src={item.imgUrl} alt="" />
            <div className="mid flex-grow-1 ">
                <div>
                    {item.name}
                    {quantity > 1 && 
                        <span className='plusOne text-muted mx-1'>x{quantity}</span>
                    }
                </div>
                <div className='text-muted'>{FormatCurrency(item.price)}</div>
            </div>
            <div  className="right d-flex align-items-center ">
                <div>{FormatCurrency(item.price * quantity )}</div>
                <Button 
                    size="sm" className="ms-2"
                    variant="outline-danger" 
                    onClick={()=> removeItems(id)} 
                    >
                        &times;
                    </Button>
            </div>
        </div>
    )
}

export default CartItem
