import { Col, Container, Row, Button, Image} from 'react-bootstrap';
import { TeamMember } from './DTO/team-member';
import { Link } from 'react-router-dom'

function InitiativesPage() {
	let teamMembers: TeamMember[] = require('./static/data/team-members.json')
	teamMembers = teamMembers.filter(x => x.title !== "President" && x.title !== "EVP of Diversity, Equity, & Inclusion")

	return (
		<Container fluid className='d-flex'>
			<Row className="pt-5 pb-3 initiatives-body align-items-center ms-auto me-auto">
				<Col md={12} className="d-flex pb-2" style={{}}>
					<div className="">
						<h3 style={{}} className="display-6"><b>EVP of Diversity, Equity, & Inclusion</b></h3>
						{
							<ul>
								<li style={{}} className="lead">View EVP of Diversity, Equity, & Inclusion initiatives <Link to="/dei" style={{fontWeight: "bold"}}>here</Link>.</li>
							</ul>
						}
					</div>
				</Col>
				{
					teamMembers.map((teamMember,i) =>
						<Col md={12} className="d-flex pb-2" style={{}} key={i}>
							<div className="">
								<h3 style={{}} className="display-6"><b>{teamMember.title}</b></h3>
								<ul>
								{
									teamMember.initiatives?.map((iniative, j) =>
										<li style={{}} className="lead" key={j}>{iniative}</li>
									)
								}

								</ul>
							</div>
						</Col>
					)
				}
			</Row>
		</Container>
	);
}

export default InitiativesPage;