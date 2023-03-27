import { Col, Container, Row, Button} from 'react-bootstrap';
import DividedText from './components/DividedText';
import TeamMemberCard from './components/TeamMemberCard';
import { Pillar } from './DTO/pillar';
import { TeamMember } from './DTO/team-member';
import { KeyInitiatives } from './static/data/key-initiatives';

function OurValues() {
	const n = 3;
	const ourPillars: Pillar[] = require('./static/data/pillars.json')
	return (
		<Row className="grey-bg p-5" id="pillars">
			<Col sm={12}>
				<h1 className="display-6">Our Pillars</h1>
			</Col>
			{
				ourPillars.map((pillar, i) => 
					<Col md={4} className="p-3" key={i}>
						<div style={{width: "100%", backgroundColor:"white"}} className="ratio ratio-1x1">
								<div style={{color:"black"}} className="d-flex justify-content-center align-items-center pillar-container">
									<div className="text-center">
										<h3 style={{}} className="display-6"><b>{pillar.name}</b></h3>
										<p style={{}} className="lead">{pillar.description}</p>
									</div>
								</div>
						</div>
					</Col>
				)
			}
		</Row>
	);
}

export default OurValues;