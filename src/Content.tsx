import { Col, Container, Row, Button, Image} from 'react-bootstrap';
import DividedText from './components/DividedText';
import TeamMemberCard from './components/TeamMemberCard';
import { TeamMember } from './DTO/team-member';
import Feedback from './Feedback';
import OurValues from './OurValues';
import { KeyInitiatives } from './static/data/key-initiatives';
import GroupImage from './static/images/group.jpeg'

function Content() {
	const teamMembers: TeamMember[] = require('./static/data/team-members.json')

	return (
		<Container fluid className=''>
			<Row className="gradient-bg pb-5 pt-4">
				<Col lg={9}>
					<Image src={GroupImage} fluid className='w-100' style={{}}/>
				</Col>
				<Col lg={3} className="d-lg-flex justify-content-center align-items-center d-none">
					<div>
					{
						teamMembers.map((teamMember, i) => 
							<div key={i}>
								<h5 className="text-center mb-0"><b>{teamMember.name}</b></h5>
								<p className="text-center" style={{fontWeight: "lighter"}}>{teamMember.title}</p>
							</div>
						)
					}
					</div>
				</Col>
				<Col>
					<Row className="d-flex justify-content-center align-items-center pt-4 d-lg-none">
							{
								teamMembers.map((teamMember, i) => 
									<Col xs={6} sm={4} key={i} className='p-2'>
										<h5 className="text-center mb-0"><b>{teamMember.name}</b></h5>
										<p className="text-center mb-1" style={{fontWeight: "lighter"}}>{teamMember.title}</p>
									</Col>
								)
							}
					</Row>
				</Col>
			</Row>
			<OurValues/>
			{/*
			<Row className="primary-bg p-5">
				<Col>
					<p className="lead text-end banner-text" style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</Col>
			</Row>
			*/}
			<Row className="p-5" id="team">
				<h1 className="display-6">Our Team</h1>
				{
					teamMembers.map((teamMember, i) => <TeamMemberCard key={i} name={teamMember.name} title={teamMember.title} description={teamMember.description} thumbnailPath={teamMember.thumbnailPath}/>)
				}
			</Row>
			{/*
			<Row className="p-3">
				<Col lg={12} className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/mAyAqWxNvFk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
				</Col>
			</Row>
			<Row>
				<h2>Key Initiatives</h2>
			</Row>
			<DividedText textArray={KeyInitiatives}/>
			*/}
		</Container>
	);
}

export default Content;