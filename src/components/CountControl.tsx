import React from "react";
import { Button, Col, Row } from "reactstrap";

interface ICountControlProps{
    decreaseFn: () => void
    increaseFn: () => void
}

export const CountControl = (props: ICountControlProps) => {
    const { decreaseFn, increaseFn } = props

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