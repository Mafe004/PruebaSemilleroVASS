import { Button, Card } from "react-bootstrap";

function ImageTwo() {

    return (
        <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./Images/imagen2.jpg" />
                <Card.Body>
                    <Card.Title>Surf internet </Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ImageTwo