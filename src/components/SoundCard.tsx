import React, { ChangeEvent} from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Image, Form} from 'react-bootstrap';
import seth from './static/images/seth_laugh.jpg';
import testpng from '../static/images/test.png';
import sethLaugh from '../static/audio/seth.mp3';

interface SoundCardProps {
    audioPath: string;
    thumbnailPath: string;
}

function SoundCard({audioPath, thumbnailPath}: SoundCardProps) {
	let audio = new Audio(audioPath); //new Audio('./static/audio/seth.mp3');
	const start = () => {
		//audio.loop = true;
		audio.play();
	}

	const onRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
		let rangeValue = Number(event.target.value)
		console.log(rangeValue/100);
		audio.volume = Number(event.target.value)/100
	}
	
	return (
        <Col lg={4}>
            <Button variant="primary" onClick={start} className='p-2'>
                <Image src={thumbnailPath} fluid rounded/>
            </Button>
            <Form.Range className='volume-slider' onChange={onRangeChange} value={100}/>
        </Col>
	);
}

export default SoundCard;