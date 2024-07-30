import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import iWatch from '../../assets/iWatchBest.svg';
import popuri from '../../assets/popuriBest.svg';
import mac from '../../assets/macBest.svg';
import '../../App.css';



export default function BestProducts() {
    return (
        <Container>
            <div className="best">
                <h1 className="product_title">
                    See the best around here
                </h1>
                <p className="product_text">
                    Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
                </p>

                <Row className='best_row'>
                    <Col className='best_row_card'>
                        <p className="best_card_title">
                            Smart light bulb pack
                        </p>
                        <p className="best_card_text">
                            Latest and gratest
                        </p>
                        <div className='best_btn_div'>
                            <Button className='best_btn' variant="outline-dark">Explore</Button>
                        </div>
                        <img className='best_card_image' src={iWatch} alt="iWatch" />
                    </Col>


                    <Col className='best_row_card'>
                        <p className="best_card_title">
                            Smart light bulb pack
                        </p>
                        <p className="best_card_text">
                            Best selling
                        </p>
                        <div className='best_btn_div'>
                            <Button className='best_btn' variant="outline-dark">Explore</Button>
                        </div>
                        <img className='best_card_image' src={popuri} alt="iWatch" />
                    </Col>


                    <Col className='best_row_card'>
                        <p className="best_card_title">
                            Smart light bulb pack
                        </p>
                        <p className="best_card_text">
                            Every product
                        </p>
                        <div className='best_btn_div'>
                            <Button className='best_btn' variant="outline-dark">Explore</Button>
                        </div>
                        <img className='best_card_image' src={mac} alt="iWatch" />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}