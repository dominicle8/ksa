import { Col, Container, Row, Button, Form} from 'react-bootstrap';
import DividedText from './components/DividedText';
import TeamMemberCard from './components/TeamMemberCard';
import { Pillar } from './DTO/pillar';
import { TeamMember } from './DTO/team-member';
import { KeyInitiatives } from './static/data/key-initiatives';

function Feedback() {
	return (
		<Row className="gradient-bg p-5" id="feedback">
			<Col sm={12}>
				<h1 className="display-6">Talk to Us</h1>
			</Col>
			<Col md={4}>
				<p className="lead" style={{fontFamily:"PT Serif"}}>We want to hear from you on what suggestions you’d like to see in your community so we can Konnect Kellogg together</p>
			</Col>
			<Col md={8}>
				<Form>
					<Form.Group controlId="formFeedback">
						<Form.Control as="textarea" placeholder="" rows={12} style={{}}/>
					</Form.Group>
					<Button variant="warning" className="mt-3 float-end" style={{}}>
						Submit
					</Button>
					{/*
					<Button variant="primary" type="" className="mt-3 float-end" style={{}}>
						Submit
					</Button>
					*/}
				</Form>
			</Col>
		</Row>
	);
}

export default Feedback;