import { Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/scss/NavigationStyle.scss";
function Navigation() {

  return (

    <Navbar className='navbar' >

      <Nav className="mr-auto">
        <Navbar.Brand href="#home"><img src="./Images/VASS_600X600.png" alt="Logo" style={{width:"50px"}}/></Navbar.Brand>
      </Nav>
      <Nav>
        <Nav.Link href="#home">Casos de éxito</Nav.Link>
        <Nav.Link href="#features">Mercados</Nav.Link>
        <Nav.Link href="#pricing">Países</Nav.Link>
        <Nav.Link href="#pricing">Sacios VASS</Nav.Link>
        <Nav.Link href="#pricing">Cómo lo hacemos</Nav.Link>
        <Nav.Link href="#pricing">Insights</Nav.Link>
        <Nav.Link href="#pricing">Noticias</Nav.Link>
        <Nav.Link href="#pricing">Países</Nav.Link>
        <Nav.Link href="#pricing">VASS Research</Nav.Link>
        <Nav.Link href="#pricing">EN</Nav.Link>
        <BsSearch/>
        <Nav.Link href="#pricing">Talento</Nav.Link>
      </Nav>
    </Navbar>

  )
}

export default Navigation