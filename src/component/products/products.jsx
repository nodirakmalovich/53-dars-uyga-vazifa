import data from '../../data/data';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../../App.css';



export default function Products() {
    return (
        <Container>
            <div className="product">
                <h1 className="product_title">
                    Save on our most selled items.
                </h1>
                <p className="product_text">
                    Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
                </p>

                <Row className='product_row'>

                    {data.map(product => (
                        <Card className='product_row_card' style={{ width: '18rem' }} key={product.id}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Card.Text>
                                    {product.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>

            </div>
        </Container>
    )
}
