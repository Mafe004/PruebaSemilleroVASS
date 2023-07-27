
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import "../../assets/scss/HeaderStyle.scss";

function Header() {

  return (
    <div className='header-container'>
      <div className='background-image'></div>
      <Container >
        <div className='Header-text'>CONTACTO</div>
        
      </Container>
      <div className='additional-text'>
      <Row>
          <Col className='md-2'>
            <div className='h6'>EMPECEMOS HACERLO SENCILLO</div>
          </Col>
          <Col>
            <div className='p'>| Nos emociona impulsar tu transformacion digital</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header