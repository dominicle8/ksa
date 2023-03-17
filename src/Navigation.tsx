import { Image, Nav, Navbar} from 'react-bootstrap';
import SlackLogo from './static/images/slack-mark-white.svg'
import InstagramLogo from './static/images/Instagram_Glyph_White.svg'

function Navigation() {
	return (
		<Navbar sticky="top" collapseOnSelect expand="sm" className='ps-3 pe-3 primary-bg navbar-dark'>
			<Nav className="me-auto d-flex flex-row d-sm-none">
				<Nav.Link href="#join" style={{fontFamily:"feeling_passionate"}}>Join Us</Nav.Link>
				<Nav.Link href="https://www.instagram.com/konnectingkellogg/" className="ps-3 pe-2 d-flex" target="_blank">
					<Image src={InstagramLogo} style={{width: "20px"}} className="darken-hover"/>
				</Nav.Link>
				<Nav.Link href="" className="p-0 d-flex">
					<Image src={SlackLogo} style={{width: "40px"}} className="darken-hover"/>
				</Nav.Link>
			</Nav>
			<Navbar.Toggle className="" aria-controls="navbar-nav" />
			<Navbar.Collapse id="navbar-nav">
				<Nav className="ma-auto">
					<Nav.Link href="#pillars">Our Pillars</Nav.Link>
					<Nav.Link href="#team" className="navbar-item-padding">Our Team</Nav.Link>
					<Nav.Link href="#feedback">Your Thoughts</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			<Nav className="ms-auto flex-row d-none d-sm-flex">
				<Nav.Link href="#join" style={{fontFamily:"feeling_passionate"}}>Join Us</Nav.Link>
				<Nav.Link href="https://www.instagram.com/konnectingkellogg/" className="ps-3 pe-3 d-flex" target="_blank">
					<Image src={InstagramLogo} style={{width: "20px"}} className="darken-hover"/>
				</Nav.Link>
				<Nav.Link href="#home" className="p-0 d-flex">
					<Image src={SlackLogo} style={{width: "40px"}} className="darken-hover"/>
				</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default Navigation;