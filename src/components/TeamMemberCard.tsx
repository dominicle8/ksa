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
	import(`../static/images/${thumbnailPath}`).then((module) => setThumbnail(module.default));
	return (
		<Col lg={4} md={6}>
			<div style={{paddingBottom: "103%", position: "relative"}}>
				
					<Image src={thumbnail} fluid className='pb-3' style={{position: "absolute"}}/>
			</div>
			<h4 className='mb-0'>{name} - {title}</h4>
			<p>{description}</p>
		</Col>
	);
}

export default TeamMemberCard;