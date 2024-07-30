import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import popuri from '../../assets/popuri2.svg';
import '../../App.css';

let buttons = ['iPhone', 'Charger', 'Gift', 'Google Pixel 3', 'Keyboard', '13 Pro Max', 'iPhone 12', 'Laptop', 'Mobile',]

export default function Search() {
    return (
        <Container className="search-container">
            <div className="search">
                <h1 className="product_title">
                    Looking for anything else?
                </h1>
                <Form.Control
                    type="text"
                    id="searchInput"
                    placeholder='Search keyword'
                />
                <div className="search_buttons">
                    {buttons.map(button => {
                        return (
                            <Button className='search_btn' variant="outline-secondary">{button}</Button>
                        )
                    })}
                </div>

                <div className='search_last_row'>
                    <div className='search_col'>
                        <h1 className="search_title">
                            Never miss a thing
                        </h1>
                        <p className="search_text">
                            Sign up for texts to be notified about our best offers on the perfect gifts.
                        </p>
                        <div className='search_image_div'>

                            <img src={popuri} alt="popuri" />
                        </div>
                        <InputGroup className="mb-3 search_input">
                            <Form.Control
                                placeholder="Your email"
                                aria-label="Recipient's username"
                                className='search_input_item'
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </Container>
    )
}
