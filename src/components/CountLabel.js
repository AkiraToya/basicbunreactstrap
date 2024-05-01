import { Col, Row } from "reactstrap";

export const CountLabel = ({count}) => {
    return (
        <Row>
            <Col style={{
                fontSize: "1.5em"
            }}>
                Count: {count}
            </Col>
        </Row>
    )
}