import { FormEvent, SyntheticEvent, useRef, useState } from 'react';
import { Col, Container, Row, Button, Form} from 'react-bootstrap';
import DividedText from './components/DividedText';
import TeamMemberCard from './components/TeamMemberCard';
import { Pillar } from './DTO/pillar';
import { TeamMember } from './DTO/team-member';
import { KeyInitiatives } from './static/data/key-initiatives';

function Feedback() {
	const feedbackText = useRef<HTMLTextAreaElement>(null);
	const [isSubmitted, setSubmitted] = useState(false);
	const toggleSubmitted = () => {
		setSubmitted(!isSubmitted);
	};
	const onSubmit = async (event: FormEvent) => {
		event.preventDefault();
		console.log(feedbackText.current?.value);
		var target = "https://ksa.zerokelvin.club/feedback";
		if(feedbackText.current?.value){
			await fetch(target, {
				method: "POST",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({feedback: feedbackText.current?.value})
			});
			toggleSubmitted();
		}
	}

	return (
		<Row className="gradient-bg p-5" id="feedback">
			<Col sm={12}>
				<h1 className="display-6">Talk to Us</h1>
			</Col>
			<Col md={4}>
				<p className="lead" style={{fontFamily:"PT Serif"}}>We want to hear from you on what suggestions you’d like to see in your community so we can Konnect Kellogg together</p>
			</Col>
			<Col md={8}>
				<Form action="" method="POST" role="form" onSubmit={onSubmit}>
					<div style={{position: "relative"}}>
						<Form.Group controlId="formFeedback">
							<Form.Control as="textarea" placeholder="" rows={12} style={{}} maxLength={40000} ref={feedbackText} disabled={isSubmitted} />
						</Form.Group>
						<Button variant="warning" type="submit" className="mt-3 float-end" style={{}} defaultValue="This is a test" disabled={isSubmitted}>
							Submit
						</Button>
						<div style={{visibility: isSubmitted ? "visible" : "hidden"}}>
							<div className="overlay"style={{borderRadius:".375rem"}}/>
							<div className="text-overlay-wrapper">
								<h1 className="text-overlay">Thank you for your thoughts!</h1>
							</div>
						</div>
					</div>
				</Form>
			</Col>
		</Row>
	);
}

export default Feedback;