import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import macBook from '../../assets/macBook.svg';
import iWatch from '../../assets/iWatch.svg';
import iPhone from '../../assets/iPhone3.svg';
import mini from '../../assets/mini.svg';



export default function Hero() {
    return (
        <Container>
            <div className="hero">
                <h1 className="hero_title">
                    Shop our latest offers and categories
                </h1>
                <p className="hero_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="hero_row">
                    <Row className='hero_row_main'>
                        <Col className='main_col'>
                            <a className='hero_card_link first_card' href='#'>
                                <div className="hero_row_main_card">
                                    <img src={macBook} alt="macBook" />
                                    <p className="hero_row_main_card_title">
                                        Laptops
                                    </p>
                                    <p className="hero_row_main_card_text">
                                        True Laptop Solution
                                    </p>
                                </div>
                            </a>

                            <a className='hero_card_link second_card' href='#'>
                                <div className="hero_row_main_card_second">
                                    <img className='second_image' src={iWatch} alt="macBook" />
                                    <div className='card_content'>

                                        <p className="hero_row_main_card_title second_title">
                                            Watch
                                        </p>
                                        <p className="hero_row_main_card_text second_text">
                                            Not just stylisht
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col className='second_card_col'>
                            <a href='#' className="hero_row_second_col">
                                <img src={iPhone} alt="iPhone" className="hero_row_second_col_image" />
                                <div className="hero_row_second_col_content">
                                    <p className="hero_row_second_col_content_title">
                                        Phones
                                    </p>
                                    <p className="hero_row_second_col_content_text">
                                        Your day to day life
                                    </p>
                                </div>
                            </a>
                        </Col>

                        <Col className='third_card_col'>
                            <a href='#' className="hero_row_third_col">

                                <div className="hero_row_third_col_content">
                                    <p className="hero_row_second_col_content_title">
                                        Tablet
                                    </p>
                                    <p className="hero_row_second_col_content_text">
                                        Empower your work
                                    </p>
                                </div>

                                <img src={mini} alt="iPhone" className="hero_row_third_col_image" />
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}