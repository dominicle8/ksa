import React, { ChangeEvent, useState} from 'react';
import plus from '../static/images/plus.svg';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Image, Form, Card} from 'react-bootstrap';

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
						<div className="position-absolute bottom-0 text-light w-100"style={{backgroundColor: "rgba(0, 0, 0, 0.5)", pointerEvents:"none"}}>
							<h4 className='mb-0 p-3 pb-0'>{name}</h4>
							<p className='mb-0 p-3 pt-0 pb-2'>{title}</p>
							<Image src={plus} className='position-absolute' style={{bottom: "1.5rem", right: "10px"}}/>
						</div>
					</div>
					<div className="card__face card__face--back secondary-bg d-flex h-100 w-100" style={{overflow: "scroll", overflowX: "hidden", overflowY: "auto"}}>
						<p className='lead text-center align-items-center my-auto ms-auto me-auto p-3'>{description}</p>
					</div>
				</div>

			</div>
		</Col>
	);
}

export default TeamMemberCard;