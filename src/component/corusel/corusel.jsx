import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import coruselImage from '../../assets/iPhone_13Banner.svg';
import Button from 'react-bootstrap/Button';


export default function Corusel() {
    return (
        <Container>
            <Carousel className='corusel_slide'>
                <Carousel.Item >
                    <img src={coruselImage} alt="corusel Image" />
                    <Carousel.Caption className='corusel_body'>
                        <h3 className='corusel_title'>The new phones are here take a look.</h3>
                        <p className='corusel_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
                        <Button className='corusel_btn' variant="outline-dark">Dark</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={coruselImage} alt="corusel Image" />
                    <Carousel.Caption className='corusel_body'>
                        <h3 className='corusel_title'>The new phones are here take a look.</h3>
                        <p className='corusel_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
                        <Button className='corusel_btn' variant="outline-dark">Dark</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={coruselImage} alt="corusel Image" />
                    <Carousel.Caption className='corusel_body'>
                        <h3 className='corusel_title'>The new phones are here take a look.</h3>
                        <p className='corusel_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
                        <Button className='corusel_btn' variant="outline-dark">Dark</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Container>
    )
}