import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import "../../assets/scss/ContactStyle.scss"


function Header() {

    return (

        <div className='transparent-form'>
            <Form>
                <Row>
                    
                    <Col xs={12} md={5}>
                    <InputGroup hasValidation>
                        <div className='col-md-10' style={{ margin: "40px" }}>
                            <Form.Control className='transparent-input' placeholder='Nombres y apellidos' required  isInvalid/>
                            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>                        </div>
                        <div className='col-md-10' style={{ margin: "40px" }}>
                            <Form.Control className='transparent-input' placeholder="Email"  required  isInvalid/>
                            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback> 
                        </div>
                        <div className='col-md-10' style={{ margin: "40px" }}>
                            <Form.Control className='transparent-input' placeholder="Empresa/Oranismo" required  isInvalid/>
                            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback> 
                        </div>
                        <div className='col-md-10' style={{ margin: "40px" }}>
                            <Form.Control className='transparent-input' placeholder="Pais" required  isInvalid/>
                            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback> 
                        </div>
                        </InputGroup>
                    </Col>
                    <Col xs={12} md={5}>
                        <div className='col-md-8' style={{ justifyContent: "space-between", margin: "30px" }}>
                            <Form.Control className='transparent-input' placeholder="Teléfono" />
                            <Form.Group controlId="exampleForm.ControlTextarea1" style={{ justifyContent: "space-between", marginTop: "40px" }}>
                                <Form.Label style={{ color: "white" }}>Mensaje:</Form.Label>
                                <Form.Control className='transparent-input' style={{ border: "1px solid white" }} as="textarea" rows={3} />
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <Button variant="outline-light" className="boton1" type="submit" style={{ justifyContent: "space-between", marginTop: "40px", fontSize: "11px" }}>
                                    Enviar
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>

    )
}

export default Header