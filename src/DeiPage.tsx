import { Col, Container, Row, Button, Image, Nav, Tab, NavDropdown} from 'react-bootstrap';
import DividedText from './components/DividedText';
import PillarPart from './components/PillarPart';
import TeamMemberCard from './components/TeamMemberCard';
import { Pillar } from './DTO/pillar';
import { TeamMember } from './DTO/team-member';
import Feedback from './Feedback';
import OurValues from './OurValues';
import { KeyInitiatives } from './static/data/key-initiatives';
import GroupImage from './static/images/group.jpeg'
import BannerImage from './static/images/dei.jpeg'
import BannerImageMobile from './static/images/dei-xs.jpeg'
import { useEffect, useRef, useState, MouseEvent } from 'react';
import  ScrollSpy from 'bootstrap/js/dist/scrollspy'

interface DeiSection {
	id : string,
	displayName : string,
	subSections? : DeiSection[]
}

function DeiPage() {
	let scrollSpy = ScrollSpy;
	let sections : DeiSection[] = [
		{
			id: "ongoing-activities",
			displayName: "Ongoing Activities"
		},
		{
			id: "new-initiates",
			displayName: "New Initiatives",
			subSections: [
				{
					id: "women",
					displayName: "Women"
				},
				{
					id: "int-students",
					displayName: "International Students and Globel Awareness"
				},
				{
					id: "bipoc-students",
					displayName: "BIPOC Students"
				},
				{
					id: "lgbtq-students",
					displayName: "LGBTQIA+ Students"
				},
				{
					id: "first-gen-students",
					displayName: "First-Generation and/or Low-Income Identifying Students"
				},
				{
					id: "disc-dei",
					displayName: "Furthering Inclusion"
				},
				{
					id: "cross-collab",
					displayName: "Cross Collaboration Across Student Groups"
				},
				{
					id: "inc-students",
					displayName: "Incoming Students"
				},
			]
		}
	];

	useEffect(() => {
		const scrollSpyElement = document.querySelector('[data-bs-spy="scroll"]');
		if(scrollSpyElement != null) {
			scrollSpy.getInstance(scrollSpyElement)?.refresh();
		}
	});
	
	const scrollOverride = (ev: MouseEvent<HTMLElement>) => {
		let element = ev.target as HTMLElement;
		let id = element.getAttribute("href")?.replace("#", "");
		if(id != null){
			let target = document.getElementById(id);
			if (target) {
				let yOffset = 85;
				const y = target?.getBoundingClientRect().top + window.scrollY - yOffset;
				window.scrollTo({top: y, behavior: 'smooth'});
			}
		}
	}

	return (
		<Container fluid className=''>
			<Row className="dei-bg" style={{position: "relative"}}>
				<Image src={BannerImageMobile} className='banner-img p-0 d-md-none' style={{}}/>
				<Image src={BannerImage} className='banner-img p-0 d-none d-md-flex' style={{}}/>
				<Col lg={12} style={{position: "absolute", height: "100%"}}>
					<div className="d-flex" style={{height:"100%"}}>
						<div className="text-center banner-overlay align-items-center my-auto ms-auto me-auto p-4 pt-5 pb-5">
							<h3 style={{}} className="display-6"><b>DEI at Kellogg</b></h3>
							<p style={{}} className="lead">Weaving Diversity, Equity, Inclusion, and Belonging into every aspect of the Kellogg Experience</p>
						</div>
					</div>
				</Col>
			</Row>
		<Row className="pt-5 pb-5" >
				<Col md={4}>
					<Nav id="dei" className="flex-column sticky-top table-of-contents align-items-center" style={{}}>
						<Nav.Item>
						{
							sections.map((section, i) => 
								<Nav.Item>
									<Nav.Link href={`#${section.id}`} onClick={scrollOverride}>
										{section.displayName}
									</Nav.Link>
									<Nav.Item className="ps-3">
										{
											section.subSections?.map((subSection, j) =>
												<Nav.Item>
													<Nav.Link href={`#${subSection.id}`} onClick={scrollOverride}>
														{subSection.displayName}
													</Nav.Link>
												</Nav.Item>
											)
										}
									</Nav.Item>
								</Nav.Item>
							)
						}
						</Nav.Item>
					</Nav>
				</Col>
				<Col md={8} className="dei-body" >
					<div id="ongoing-activities" style={{}} className="scroller-margin">
					<h3 style={{}} className="display-6"><b>Ongoing Activities</b></h3>
					<ul style={{fontSize:"1.25em"}}>
						<li>VP of DEI includes overseeing <i>Allyship Council, ENGAGE Dinners, Hear My Story, Common Ground Retreat, (NEW 2022-2023) DEI Task Force, OneKellogg Podcast</i>, and anything and everything revolving around DEI in academics, personal, professional, and admissions.</li>
						<ul>
							<li>Ensure all committees have open communication with one another, are aware of ongoing initiatives, and work together across their platforms by <u>creating the role of 2nd Year Director for each board</u>, with the additional responsibilities of helping the VP of DEI</li>
							<li>In addition to the goal of highlighting students' stories through the OneKellogg Podcast, <u>work with Allyship Council, Affinity and Regional Groups, and Professional Groups to use OneKellogg Podcast for their branded weeks</u> to further enhance a lens of understanding of our diverse student body and their stories.</li>
							<li>Revamp Allyship Section Chair as <u>Affinity and Regional Club Section Ambassador</u>.</li>
							<ul>
								<li>This role was trialed in Fall 2022 and had low interest due to lack of understanding of the role and responsibilities.</li>
								<li>Revamp marketing and understanding of role as anyone who is interested in helping promote inclusion and belonging through open student attendance at Affinity and Regional Club Events.</li>
								<li>Involve Ambassadors in Allyship Council meetings with Affinity and Regional Club Leadership to discuss strategies and initiatives for involving students interested in joining and learning more about clubs and communities they wouldn't normally join.</li>
							</ul>
							<li>Create an <u>all-affinity allyship channel, newsletter, and shared calendar</u> to ensure there’s full awareness about affinity group events, intentionally avoid overlap, and support each other’s initiatives.</li>
						</ul>
					</ul>
					</div>
					<h3 style={{}} className="display-6" id="new-initiates"><b>New Initiatives</b></h3>
					<ul style={{fontSize:"1.25em"}}>
						<li id="women">Women
							<ul>
								<li>Kellogg has done great work at reaching equality of genders within our classes, but women are still facing obstacles during their Kellogg experience.</li>
								<li>Ensure equal distribution of project management and administrative activities for group projects in classes</li>
								<ul>
									<li>Action(s):</li>
									<ul>
										<li><u>Work with WBA to create a charter template</u> at the start of each class to ensure all parties in a group are fulfilling their duties as group members.</li>
										<li><u>Implement a mid-point peer review</u> to address inequities in groups and work with professors to address groups needing action.</li>
									</ul>
								</ul>
							</ul>
						</li>
						<li id="int-students" className="pt-4">International Students and Global Awareness
						<ul>
							<li>Our international student peers have found themselves in extremely life changing experiences by moving to a new country with limited networks and support systems in an effort to further their careers, grow personally, and connect with the diverse student body at Kellogg. Yet, some of our international student communities face the challenge of feeling left out of the social experience and local culture.</li>
							<li>This is probably the most diverse environment students will ever experience and we need to take full advantage.</li>
							<ul>
								<li>Action(s):</li>
								<ul>
									<li>Work with VP of Social, VP of Global Affairs, and student groups to add a requirement for any <u>Kellogg sponsored social events to include a global lens</u> whether through international music inclusion or global cultural awareness.</li>
									<li>Work with CIM committee and VP of Global Affairs to <u>add a global inclusion component</u> into the programming, encouraging discussion and empathetic listening of our international students' experiences and backgrounds.</li>
									<li>Work with Kellogg Administration, Faculty, VP of Academics, and VP of Global Affairs to <u>review case studies, reading materials, and assignments</u> to ensure learnings are equally distributed across US and international business contexts and applications.</li>
								</ul>
							</ul>
						</ul>
						</li>
						<li id="bipoc-students" className="pt-4">BIPOC Students
							<ul>
								<li>Work with Affinity Club Admissions teams and Admissions to evaluate current strategies for recruiting, accepting, and having BIPOC students matriculating to Kellogg, ensuring every step of the process considers systemic barriers these populations face and supports them throughout their application journey.</li>
								<ul>
									<li>Diversity Preview Day, Women Preview Day, Marketing, Testing Requirements, Application Fee Waivers, Application Reviews and Interview Prep</li>
								</ul>
								<li>Work with VP of Careers and VP of Professional and Personal Development to increase participation of CMC surveys, identify roadblocks BIPOC students face throughout the recruiting process (playing catch-up, limited networks, cultural differences affecting coffee chats and networking events), and implement additional support systems</li>
							</ul>
						</li>
						<li id="lgbtq-students" className="pt-4">LGBTQIA+ Students
							<ul>
								<li>Now more than ever, the LGBTQIA+ and P@K community should receive full support from the student body and Kellogg.</li>
								<ul>
									<li>Action(s):</li>
									<ul>
										<li>Work closely with P@K Exec and administration to ensure commitments from previous quarters are followed through, including hiring more DEI faculty & inviting guest speakers, and continuing to support the community by condemning any form of discrimination.</li>
									</ul>
								</ul>
							</ul>
						</li>
						<li id="first-gen-students" className="pt-4">First-Generation and/or Low-Income Identifying Students
							<ul>
								<li>The DEI Task force was recently launched in 2022-2023 to help identify the needs of BIPOC and First-Gen Students at Kellogg.</li>
								<ul>
									<li>Action(s):</li>
									<ul>
										<li>Work with DEI-Task force and administration to address the needs of First-Generation Students e.g., community building, mental health support, personal finance, risk taking, and alumni connections.</li>
										<li>Work with administration on addressing the financial barriers that limit students from experiencing the full Kellogg experience (marquee events, experiential classes, etc.)</li>
									</ul>
								</ul>
							</ul>
						</li>
						<li id="disc-dei" className="pt-4">Furthering Inclusion
							<ul>
								<li>With the amount of diversity across the Kellogg's communities, we need to ensure there is inclusion and belonging throughout.</li>
								<ul>
									<li>Action(s):</li>
									<ul>
										<li>Work with administration to lay the groundwork for including a DEI class in the core curriculum.</li>
									</ul>
								</ul>
							</ul>
						</li>
						<li id="cross-collab" className="pt-4">Cross Collaboration Across Student Groups
							<ul>
								<li>Collaboration across affinity and regional groups allows for student groups to come together and find commonalities in their shared experiences, while also providing the space to open discussions about differences to shed light on them through a lens of understanding and empathy.</li>
								<ul>
									<li>Action(s):</li>
									<ul>
										<li>Work with <u>Allyship Council and Affinity and Regional group leaders</u> to facilitate more cross-collaboration across student groups, identify man-power to take charge of events, combine financial resources, enhance personal and professional networks.</li>
									</ul>
								</ul>
								<li>Collaboration across affinity, regional, and professional groups also has the benefits of combined communities, networks, and monetary resources.</li>
								<ul>
									<li>Action(s):</li>
									<ul>
										<li>Work with the VP of Professional and Personal Development to facilitate <u>collaboration across professional and affinity and regional clubs </u> to source different alumni and industry speakers that would benefit the greater Kellogg student body. </li>
									</ul>
								</ul>
							</ul>
						</li>
						<li id="inc-students" className="pt-4">Incoming Students
							<ul>
								<li>Set forth <u>guidelines and best practices for clubs to proactively reach out to incoming students</u>, building out the communities they’re excited for sooner and getting ahead of the information overload curve.</li>
								<li>Work with KWEST Exec, DAK Exec, and CIM Exec to review guidelines for ensuring <u>diversity and inclusion is at the forefront of programming</u> and that there are systems in place for accountability and anonymously providing feedback on DEI during these onboarding events.</li>
							</ul>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default DeiPage;