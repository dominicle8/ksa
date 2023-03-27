import { Col, Container, Row, Button, Image} from 'react-bootstrap';
import DividedText from './components/DividedText';
import PillarPart from './components/PillarPart';
import TeamMemberCard from './components/TeamMemberCard';
import { Pillar } from './DTO/pillar';
import { TeamMember } from './DTO/team-member';
import Feedback from './Feedback';
import OurValues from './OurValues';
import { KeyInitiatives } from './static/data/key-initiatives';
import GroupImage from './static/images/group.jpeg'
import BannerImage from './static/images/pillars-bg.jpg'

function PillarsPage() {
	const ourPillars: Pillar[] = require('./static/data/pillars.json')

	return (
		<Container fluid className=''>
			<Row className="pillars-bg" style={{position: "relative"}}>
				<Image src={BannerImage} className='banner-img p-0' style={{}}/>
				<Col lg={12} style={{position: "absolute", height: "100%"}}>
					<div className="d-flex" style={{height:"100%"}}>
						<div className="text-center banner-overlay text-center align-items-center my-auto ms-auto me-auto p-4 pt-5 pb-5" style={{width: "50%"}}>
							<h3 style={{}} className="display-6"><b>Our Pillars</b></h3>
							<p style={{}} className="lead">Our pillars guide us in connecting communities to create a more meaningful and enriching student experience for everyone</p>
						</div>
					</div>
				</Col>
			</Row>
			{
				ourPillars.map((pillar, i) => 
					<PillarPart pillar={pillar} key={i}/>
				)
			}
		</Container>
	);
}

export default PillarsPage;