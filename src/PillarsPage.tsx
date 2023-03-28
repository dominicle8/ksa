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
import BannerImageMobile from './static/images/pillars-bg-xs.jpg'
import StockImage0 from './static/images/pillars-stock-0.jpeg';
import StockImage1 from './static/images/pillars-stock-1.jpeg';

function PillarsPage() {
	const ourPillars: Pillar[] = require('./static/data/pillars.json')

	return (
		<Container fluid className=''>
			<Row className="pillars-bg" style={{position: "relative"}}>
				<Image src={BannerImageMobile} className='banner-img p-0 d-md-none' style={{}}/>
				<Image src={BannerImage} className='banner-img p-0 d-none d-md-flex' style={{}}/>
				<Col lg={12} style={{position: "absolute", height: "100%"}}>
					<div className="d-flex" style={{height:"100%"}}>
						<div className="text-center banner-overlay text-center align-items-center my-auto ms-auto me-auto p-4 pt-5 pb-5">
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
			<Row className="pt-5">
				<Col md={6} className="d-flex">
					<div className="align-items-center ms-auto me-auto my-auto pillar-square">
						<h3 style={{}} className="display-6"><b>Including Partners & Families on Campus</b></h3>
						<p style={{}} className="lead">As a team with working JVs and children, we really care about the resources that Kellogg provides for our partners and families. We want to making the current resources more accessible through a dedicated JV portal, and introduce new tools that may be helpful e.g., crowd-sourced childcare board. Our partners uproot their lives and move with us to Evanston – we envision a more integrated culture where JVs fit seamlessly into Hub life.</p>
					</div>
				</Col>
				<Col md={6} className="p-0">
					<Image src={StockImage0} fluid className='w-100'/>
				</Col>
				<Col md={6} className="p-0 d-md-flex d-none">
					<Image src={StockImage1} fluid className='w-100'/>
				</Col>
				<Col md={6} className="d-flex">
					<div className="align-items-center ms-auto me-auto my-auto pillar-square">
						<h3 style={{}} className="display-6"><b>Building a Stronger Cross-cultural Community</b></h3>
						<p style={{}} className="lead">With all the cultures and faiths at Kellogg, we can learn so much from each other. We want to create a new Kellogg marquee event – a Multicultural Fair in the winter or spring (think club fair part 2, now that first years have had a chance to find their groups) where communities can showcase their traditions, beliefs, cultural clothing, food, and more. This way, we can teach each other and connect over what we value and how we celebrate in everyday life.</p>
					</div>
				</Col>
				<Col md={6} className="p-0 d-md-none">
					<Image src={StockImage1} fluid className='w-100'/>
				</Col>
			</Row>
		</Container>
	);
}

export default PillarsPage;