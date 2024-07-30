import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import book from '../../assets/book.svg'
import arrow from '../../assets/arrow.svg'
import '../../App.css';

export default function Ideas() {
    return (
        <Container>
            <div className="ideas">
                <h1 className="product_title">
                    Ideas have a place here
                </h1>
                <p className="product_text">
                    Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
                </p>

                <Row>
                    <Col xs={12} md={6}>
                        <img src={book} alt="book" />
                    </Col>

                    <Col xs={12} md={6}>
                        <p className="ideas_text">
                            We Make It Easy To Find The Great Design Talent, Easier...
                        </p>
                        <p className="ideas_text">
                            Road Design Handbook For The International Road...
                        </p>
                        <p className="ideas_text">
                            The Best Kept Secrets About Creative People
                        </p>
                        <p className="ideas_text">
                            We Make It Easy To Find The Great Design Talent, Easier...
                        </p>
                    </Col>
                </Row>
                <div className='ideas_link_div'>

                    <a href="#" className="ideas_link">
                        See all
                        <img src={arrow} alt="arrow" />
                    </a>
                </div>
            </div>
        </Container>
    )
}
