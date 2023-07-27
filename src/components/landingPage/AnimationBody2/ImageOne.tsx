import { Button, Card } from "react-bootstrap";

function ImageOne() {

    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./Images/Imagen1.jpg" />
                <Card.Body>
                    <Card.Title>NewLimit</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ImageOne