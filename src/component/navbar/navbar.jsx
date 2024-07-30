import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logo from '../../assets/logo.svg';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar() {
    return (
        <div className="navbar">
            <Container>
                <div className='navbar_wrapper'>

                    <img className='navbar_logo' src={logo} alt="logo" />
                    <ul className="navbar_menu">
                        <li className="navbar_menu_item">
                            <a className="navbar_menu_link" href="#home">All products</a>
                        </li>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Solutions
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="navbar_menu_item">
                            <a className="navbar_menu_link" href="#home">About</a>
                        </li>
                        <li className="navbar_menu_item">
                            <a className="navbar_menu_link" href="#home">Support</a>
                        </li>
                    </ul>

                    <div className="navbar_actions">
                        <button className="navbar_actions_search"></button>
                        <button className="navbar_actions_basket"></button>
                    </div>
                </div>
            </Container>

        </div>
    )
}