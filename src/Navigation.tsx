import { Image, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import SlackLogo from './static/images/slack-mark-white.svg'
import InstagramLogo from './static/images/Instagram_Glyph_White.svg'

function Navigation() {
	return (
		<Navbar sticky="top" collapseOnSelect expand="sm" className='ps-3 pe-3 primary-bg navbar-dark'>
			<Nav className="me-auto d-flex flex-row d-sm-none">
				<Nav.Link style={{fontFamily:"feeling_passionate", pointerEvents:"none"}}>Join Us</Nav.Link>
				<Nav.Link href="https://www.instagram.com/konnectingkellogg/" className="ps-3 pe-2 d-flex" target="_blank">
					<Image src={InstagramLogo} style={{width: "20px"}} className="darken-hover"/>
				</Nav.Link>
				<Nav.Link href="" className="p-0 d-flex">
					<Image src={SlackLogo} style={{width: "40px"}} className="darken-hover"/>
				</Nav.Link>
			</Nav>
			<Navbar.Toggle className="" aria-controls="navbar-nav" />
			<Navbar.Offcanvas id="navbar-nav"  placement="end">
				<Offcanvas.Header closeButton className="pb-0">
					<Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
						Konnecting Kellogg
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav className="ma-auto">
						<Nav.Link href="#pillars">Our Pillars</Nav.Link>
						<Nav.Link href="#team" className="navbar-item-padding">Our Team</Nav.Link>
						<Nav.Link href="#feedback">Your Thoughts</Nav.Link>
					</Nav>
				</Offcanvas.Body>
			</Navbar.Offcanvas>
			<Nav className="ms-auto flex-row d-none d-sm-flex">
				<Nav.Link style={{fontFamily:"feeling_passionate", pointerEvents:"none"}}>Join Us</Nav.Link>
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