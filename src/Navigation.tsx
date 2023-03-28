import { Image, Nav, Navbar, NavDropdown, NavItem, Offcanvas} from 'react-bootstrap';
import SlackLogo from './static/images/slack-mark-white.svg'
import InstagramLogo from './static/images/Instagram_Glyph_White.svg'
import InstagramLogoGold from './static/images/Instagram_Glyph_gold.svg'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { MouseEvent, MouseEventHandler, useEffect, useRef, useState } from 'react';

function Navigation() {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const showDropdown = () => {
		setShow(true);
	}
	const hideDropdown = () => {
		setShow(false);
	}

	const onClick = (ev : MouseEvent<HTMLElement>) => {
		console.log("click")
		let element = ev.target as HTMLElement;
		if(element.id === "basic-nav-dropdown"){
			navigate('/#pillars');
		}
		if(!isMobile){
			setShow(false);
		} else {
		}
	}
	const forceNavigation = () => {
		navigate('/#team');
	}

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
	
	const handleResize = () => {
		if (window.innerWidth < 768) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize)
	})

	return (
		<Navbar sticky="top" collapseOnSelect expand="md" className='ps-3 pe-3 primary-bg navbar-dark' style={{zIndex: "9000"}}>
			<Nav className="me-auto d-flex flex-row d-md-none">
				{/* <Nav.Link style={{fontFamily:"feeling_passionate", pointerEvents:"none"}}>Join Us</Nav.Link>*/}
				<LinkContainer to="/">
					<Nav.Link href="/" className="navbar-header">
						KONNECTING KELLOGG
					</Nav.Link>
				</LinkContainer>
				<Nav.Link href="https://www.instagram.com/konnectingkellogg/" className="ps-3 pe-2 d-flex" target="_blank">
					<Image src={InstagramLogo} style={{width: "20px"}} className="darken-hover"/>
				</Nav.Link>
				<Nav.Link href="https://app.slack.com/client/T0AUF6SQ7/C050CDUJDEY" className="p-0 d-flex" target="_blank">
					<Image src={SlackLogo} style={{width: "40px"}} className="darken-hover"/>
				</Nav.Link>
			</Nav>
			<Navbar.Toggle className="" aria-controls="navbar-nav" />
			<Navbar.Offcanvas id="navbar-nav" placement="end">
				<Offcanvas.Header closeButton className="pb-0">
					<Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
						Konnecting Kellogg
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body style={{}} className="">
					<Nav className="ma-auto">
						<NavDropdown title="Our Pillars" id="basic-nav-dropdown" show={show || isMobile} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} onClick={onClick}>
							<LinkContainer to="/pillars">
								<NavDropdown.Item>Overview</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/dei">
								<NavDropdown.Item>DEI @ Kellogg</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
						<Link className='navbar-item-padding navbar-hover navbar-hover nav-link' to="/#team" onClick={forceNavigation}>Our Team</Link>
						<Nav.Link href="#feedback" className="navbar-hover">Your Thoughts</Nav.Link>
					</Nav>
					<Nav className="ms-auto me-auto d-none d-md-flex flex-row">
						<LinkContainer to="/" className="">
							<Nav.Link className="navbar-header">
								KONNECTING KELLOGG
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Offcanvas.Body>

			</Navbar.Offcanvas>
			<Nav className="ms-auto flex-row d-none d-md-flex">
				{/* <Nav.Link style={{fontFamily:"feeling_passionate", pointerEvents:"none"}}>Join Us</Nav.Link>*/}
				<Nav.Link href="https://www.instagram.com/konnectingkellogg/" className="ps-3 pe-3 d-flex" target="_blank">
					<Image src={InstagramLogo} style={{width: "20px"}} className="darken-hover"/>
				</Nav.Link>
				<Nav.Link href="https://app.slack.com/client/T0AUF6SQ7/C050CDUJDEY" className="p-0 d-flex" target="_blank">
					<Image src={SlackLogo} style={{width: "40px"}} className="darken-hover"/>
				</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default Navigation;