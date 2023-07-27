import { Col, Container, Row } from "react-bootstrap";
import CardModel from "./CardModel";
import "../../assets/scss/AnimationB1Style.scss"
import { useState } from "react";

function AnimationBody1() {
    const TextCircle: String = " WHAT WE DO - WHAT WE DO - WHAT WE DO - WHAT WE DO - "
    // Estado para controlar si se muestra el video
    const [showVideo, setShowVideo] = useState(false);

    // Función para mostrar el video
    const showVideoOnHover = () => {
        setShowVideo(true);
    };

    // Función para ocultar el video
    const hideVideoOnLeave = () => {
        setShowVideo(false);
    };

    return (
        <div >
            <div >
                <Row className="TextStyle" style={{ width: "100vw", background: "black" }}>
                    <Col className="box" onMouseEnter={showVideoOnHover} // Mostrar el video al entrar
                        onMouseLeave={hideVideoOnLeave}  >
                        <CardModel text={"Brand"} />
                    </Col><Col className="box" onMouseEnter={showVideoOnHover} 
                        onMouseLeave={hideVideoOnLeave} >
                        <CardModel text={"Product"} />
                    </Col><Col className="box" onMouseEnter={showVideoOnHover} 
                        onMouseLeave={hideVideoOnLeave} >
                        <CardModel text={"Motion"} />
                    </Col> <Col  className="box"
            style={{
              position: "relative",
              overflow: "hidden",
              zIndex: "1",
            }}>
                        {showVideo && (
                            <video
                                loop
                                autoPlay
                                muted
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                }}
                            >
                                <source src="./Images/VideoCol.mp4" type="video/mp4" />
                            </video>

                        )} 
                        <Container>
                        <Container
                        className="CircleSpin"
                            fluid style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh',
                                marginTop: '-35px',
                            }}
                        >
                            {!showVideo? Array.from(TextCircle).map((char, charKey) => (
                                <Container
                                    style={{
                                        fontSize: "10px",
                                        position: "absolute",
                                        transform: `rotate(${(charKey + 1) * 7}deg) `,
                                        height: "80px", width: "0",
                                        textAlign: "center",
                                        transformOrigin: "bottom center"
                                    }}
                                    className="span" key={charKey}>{char}</Container>
                            )): null}
                        </Container>
                        </Container> 
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default AnimationBody1