import React, { ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Image, Form, Card} from 'react-bootstrap';
import seth from './static/images/seth_laugh.jpg';
import testpng from '../static/images/test.png';
import sethLaugh from '../static/audio/seth.mp3';
import { Pillar } from '../DTO/pillar';

interface PillarPartProps {
	pillar: Pillar
}

function PillarPart({pillar}: PillarPartProps) {
	const [thumbnail, setThumbnail] = useState('')

	if(thumbnail === ''){
		import(`../static/images/${pillar.thumbnailPath}`).then((module) => setThumbnail(module.default));
	}
	
	return (
		<Row className="pt-5 pb-3">
			<Col md={4} className="d-flex">
				<div className="text-center my-auto ms-auto me-auto">
					<Image src={thumbnail} fluid className='w-50' style={{}}/>
				</div>
			</Col>
			<Col md={8} className="p-3">
				<h3 style={{}} className="display-6"><b>{pillar.name}</b></h3>
				{
					pillar.body.map((body, j) => 
						<p style={{}} className="lead mb-3">{body}</p>
					)
				}
			</Col>
		</Row>
	);
}

export default PillarPart;