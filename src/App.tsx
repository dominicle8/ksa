import React, { ChangeEvent} from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Image, Form, Accordion, Carousel, NavDropdown, Nav, Navbar} from 'react-bootstrap';
import seth from './static/images/seth_laugh.jpg';
import testpng from './static/images/test.png';
import sethLaugh from './static/audio/seth.mp3';
import SoundCard from './components/SoundCard';
import TeamMemberCard from './components/TeamMemberCard';
import { TeamMember } from './DTO/team-member';
import { KeyInitiatives } from './static/data/key-initiatives';
import DividedText from './components/DividedText';
import SlackLogo from './static/images/slack-mark-white.svg'

function App() {
	let audio = new Audio(sethLaugh); //new Audio('./static/audio/seth.mp3');
	const teamMembers: TeamMember[] = require('./static/data/team-members.json')

	const start = () => {
		//audio.loop = true;
		audio.play();
	}

	return (
		<Container fluid className='p-3'>
			<Navbar bg="dark" variant="dark" className="sticky-top" collapseOnSelect expand="sm">
				<Navbar.Brand href="#home">Konnecting Kellogg</Navbar.Brand>
				<Navbar.Toggle className="float-start" aria-controls="navbar-nav" />
				<Navbar.Collapse id="navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#team">Team</Nav.Link>
						<Nav.Link href="#vision">Vision</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Nav className="ms-auto">
					<Nav.Link href="#home" className="p-0">
						<Image src={SlackLogo} style={{width: "40px"}}/>
					</Nav.Link>
				</Nav>
			</Navbar>
			<Row style={{backgroundColor:"black", height: "100px"}}>

			</Row>
			<Col lg={6}>
				<h2 className="display-5">Jajajajaja Soundboard</h2>
			</Col>
			<Row className="p-5">
				<h1 className="display-6">Our Team</h1>
				{
					teamMembers.map((teamMember, i) => <TeamMemberCard key={i} name={teamMember.name} title={teamMember.title} description={teamMember.description} thumbnailPath={teamMember.thumbnailPath}/>)
				}
			</Row>
			<Row className="p-3">
				<Col lg={12} className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/mAyAqWxNvFk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
				</Col>
			</Row>
			<Row>
				<h2>Key Initiatives</h2>
			</Row>
			<DividedText textArray={KeyInitiatives}/>
			<Row>
				<Col className='d-grid gap-2'>
					<Button variant='primary' size='lg' className='mr-1'>Hello</Button>
				</Col>
				<Col>
					<Button variant='primary' size='lg' className='mr-1'>Hello</Button>
				</Col>
				<Col>
					<Button variant='primary' className='mr-1'>Hellooo</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
