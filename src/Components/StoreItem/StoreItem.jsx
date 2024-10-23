import './StoreItem.scss';
import { Button, Card } from 'react-bootstrap';
import FormatCurrency from "../FormatCurrency"
import { useShoppingCart } from '../../Context/Context';

// eslint-disable-next-line react/prop-types
const StoreItem = ( { id , name , price , imgUrl }) => {

    // From  Context API :-----
    const {getItemQuanatity, increaseItems, decreaseItems, removeItems} = useShoppingCart()

    const guantity = getItemQuanatity(id) ;

    return (
        <Card className='h-100'>
            <Card.Img className='cardImg' variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Text className='d-flex align-items-center justify-content-between'>
                    <span className='name fs-4'>{name}</span>
                    <span className='text-muted fs-5'>{FormatCurrency(price)}</span>
                </Card.Text>
                <div className='mt-auto'>
                    { guantity === 0 
                    ? <Button onClick={()=> increaseItems(id)} className='w-100'>
                        Add to Cart
                    </Button> 
                    : <div className='d-flex align-items-center flex-column ' >
                        <div className='d-flex align-items-center justify-content-around mb-3'>
                            <Button 
                                className='mx-3 fw-bolder'
                                onClick={()=> decreaseItems(id)}
                            >
                                -
                            </Button>
                            <span className='fs-4'>{guantity} in Cart</span>
                            <Button  
                                className='mx-3  fw-bolder'
                                onClick={()=> increaseItems(id)}
                            >
                                +
                            </Button>
                        </div>
                        <Button 
                            className='bg-danger border-0' 
                            onClick={()=> removeItems(id)}
                        >
                            Remove
                        </Button>
                    </div>
                    }
                </div>
            </Card.Body>
    </Card>
    )
}

export default StoreItem
