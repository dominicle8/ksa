import React, { ChangeEvent, useState} from 'react';
import { Col, Container, Row, Image, Form, Card} from 'react-bootstrap';
import { text } from 'stream/consumers';

interface DividedTextProps {
	textArray: string[];
}

function DividedText({textArray}: DividedTextProps) {
	return (
		<Row>
			{
				textArray.map((text, i) =>
					<Col key={i} md={4} className={(i < textArray.length - 1 ? "border-end" : "") + " d-flex d-none d-sm-block"}>
						<p className="text-center align-items-center m-0 p-1 my-auto">
							{text}
						</p>
					</Col>
				)
			}
			{
				textArray.map((text, i) =>
					<Col key={i} sm={12} className="d-sm-none">
						<p className="text-center m-0 p-1">
							{text}
						</p>
						<hr className={(i < textArray.length - 1 ? "" : "d-none") + " mt-1 mb-1"} style={{ width:"75%", margin: "auto"}}/>
					</Col>
				)
			}
		</Row>
	);
}

export default DividedText;