import  StorePoducts from '../../data/StorePRoducts.json' 
import StoreItem from '../../Components/StoreItem/StoreItem'
import { Row, Col } from 'react-bootstrap';

const StorePage = () => {
    return (
        <>
        <h1 className='mb-4'>Store</h1>
        <Row  xs={1} md={3}  lg={4} className="g-3">
            { StorePoducts.map( (item , index) => {
                return (
                    <Col key={index}>
                        <StoreItem  {...item}/>
                    </Col>
                )
            })}
        </Row>
        </>
    )
}

export default StorePage
