import { Button, Col, Row } from "reactstrap";

export const CountControl = ({
    decreaseFn, increaseFn
}) => {
    return (
        <Row>
            <Col>
                <Button
                className="full-width"
                onClick={decreaseFn}
                >-</Button>
            </Col>
            <Col>
                <Button
                className="full-width"
                onClick={increaseFn}
                >+</Button>
            </Col>
        </Row>
    )
}