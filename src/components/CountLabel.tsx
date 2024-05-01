import React from "react";
import { Col, Row } from "reactstrap";

interface ICountLabelProps{
    count: number
}

export const CountLabel = (props: ICountLabelProps) => {
    const { count } = props

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