import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';

import '../../App.css';

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <img src={logo} alt="logo" />
                        <p className="footer_text">
                            Sign up for texts to be notified about our best offers on the perfect gifts.
                        </p>
                    </Col>
                    <Col>
                        <ul className="footer_menu">
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    <b>All products</b>
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Phones
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Watch
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Tablet
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Laptops
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="footer_menu">
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    <b>Company</b>
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    About
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Supports
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="footer_menu">
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    <b>Support</b>
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Style Guide
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Licensing
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Change Log
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="footer_menu">
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    <b>Follow Us</b>
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Instagram
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Facebook
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    LinkedIn
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#" className="footer_item_link">
                                    Youtube
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className="footer_bottom">
                    <div className="footer_bottom_div">
                        <p className="footer_bottom_div_text">
                            Made By:
                        </p>
                        <a href="#" className="footer_bottom_div_link">
                            Azwedo
                            <img src={arrow} alt="arrow" className="footer_bottom_div_link_image" />
                        </a>
                    </div>
                    <div className="footer_bottom_div">
                        <p className="footer_bottom_div_text">
                            Powered by:
                        </p>
                        <a href="#" className="footer_bottom_div_link">
                            Webflow
                            <img src={arrow} alt="arrow" className="footer_bottom_div_link_image" />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}