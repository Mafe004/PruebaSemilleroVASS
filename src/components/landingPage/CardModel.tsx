import { Container } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import "../../assets/scss/AnimationB1Style.scss"



const CardModel = ({ text }: { text: string }) => {
    return (
        <div >
            <Container style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {text}
                <div className="IconChange">
                <BsArrowRightCircle  />
                </div>
            </Container>
        </div>
    );
}
export default CardModel