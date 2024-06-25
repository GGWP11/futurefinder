import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import styled from 'styled-components'
import Theme from '../Theme.js';

const Logo = styled.img`
  height: 90px;
  width: 350px;
`;

const Register = styled(Button)`
  background-color: ${props => props.theme.colors.rhythm};
  font-family: ${props => props.theme.fonts};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.rhythm};

  &:hover, &:active{
    background-color: ${props => props.theme.colors.pink} !important;
    border: ${props => props.theme.colors.pink} !important;
  }
`;

const NavBar = styled(Navbar)`
  background-color: ${props => props.theme.colors.bubbles};
`;

const NavLink = styled(Nav.Link)`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  display: flex;
  justify-content: center;
  padding: 6px 20px;
  align-items: center;
  text-decoration: none !important;

  &:hover {
    color: ${props => props.theme.colors.pink};
  }
`;

const NavDropDown = styled(NavDropdown)`
  color: ${props => props.theme.colors.black} !important;
  font-family: ${props => props.theme.fonts};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  display: flex;
  justify-content: center;
  padding: 6px 20px;
  align-items: center;
  width: 200px;

  &:hover {
    color: ${props => props.theme.colors.pink};
  }
`;

const NavDropDownItem = styled(NavDropdown.Item)`
  color: ${props => props.theme.colors.black} !important;
  font-family: ${props => props.theme.fonts};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  text-decoration: none;
  border: none;
  display: block;
  width: 100%;
  white-space: nowrap;
  padding: 4px 16px;

  &:hover {
    background-color: ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.white} !important;
  }
`;

function Header() {
    return (
      <Theme>
        <NavBar collapseOnSelect expand="lg" fixed="top">
          <Container>
            <Navbar.Brand as={Link} to='/'>
              <Logo src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                <NavLink as={Link} to='/'>Home</NavLink>
                <NavDropDown title="Services" id="collasible-nav-dropdown">
                  <NavDropDownItem as={Link} to='/analysis'>Career Path Analysis</NavDropDownItem>
                  
                  <NavDropDownItem as={Link} to='/coursePage'>
                    Upcoming Courses
                  </NavDropDownItem>
                  <NavDropDownItem as={Link} to='/professional'>
                    Chat With Professional and Group Coaching
                  </NavDropDownItem>
                  <NavDropDownItem as={Link} to='/mockCover'>
                    AI Mock Interview
                  </NavDropDownItem>
                  <NavDropDownItem href="/programPage">
                    FuturePath Partner Program
                  </NavDropDownItem>
                  <NavDropDownItem href="/Others">
                    Others...
                  </NavDropDownItem>
                </NavDropDown>

                <NavLink as={Link} to='/login'>
                  <Register>Login</Register>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </NavBar>
      </Theme>
    );
  }
  

export default Header;