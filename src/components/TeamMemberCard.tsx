import React, { ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Image, Form, Card} from 'react-bootstrap';
import seth from './static/images/seth_laugh.jpg';
import testpng from '../static/images/test.png';
import sethLaugh from '../static/audio/seth.mp3';

interface TeamMemberProps {
	name: string;
	title: string;
	description: string;
	thumbnailPath: string;
}

function TeamMemberCard({name, title, description, thumbnailPath}: TeamMemberProps) {
	const [thumbnail, setThumbnail] = useState('')
	const [isFlipped, setFlipped] = useState(false);
	const toggleFlipped = () => {
		setFlipped(!isFlipped);
	};

	if(thumbnail === ''){
		import(`../static/images/${thumbnailPath}`).then((module) => setThumbnail(module.default));
	}
	
	return (
		<Col lg={4} md={6} className="pb-4">
			<div className="scene">
				<div style={{paddingBottom: "133.333%", position: "relative"}} className={"card-flip" + (isFlipped ? " is-flipped" : "")} onClick={toggleFlipped}>
					<div className="card__face card__face--front">
						<Image src={thumbnail} fluid className='pb-3 w-100 darken-hover' style={{position: "absolute"}}/>
						<div className="position-absolute bottom-0 text-light w-100"style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
							<h4 className='mb-0 p-3 pb-0'>{name}</h4>
							<p className='mb-0 p-3 pt-0 pb-2'>{title}</p>
						</div>
					</div>
					<div className="card__face card__face--back secondary-bg d-flex">
						<p className='lead-lg text-center align-items-center my-auto ms-auto me-auto'>back text</p>
					</div>
				</div>

			</div>
		</Col>
	);
}

export default TeamMemberCard;