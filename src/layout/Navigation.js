import { Nav, Navbar, Container,NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


function Navigation(){
    return(
        <div>
            
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand>IMS</Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">    
          <NavDropdown title="Records" id="collasible-nav-dropdown">
              <LinkContainer to="/records">
                <NavDropdown.Item>Transaction History</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/records">
                <NavDropdown.Item>Supplier List</NavDropdown.Item>
              </LinkContainer>
          </NavDropdown>
          <NavDropdown title="Inventory" id="collasible-nav-dropdown">
              <LinkContainer to="/inventory">
                <NavDropdown.Item>Stockcard</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/inventory">
                <NavDropdown.Item>Print Barcodes</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/inventory">
                <NavDropdown.Item>Warehouse</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/inventory">
                <NavDropdown.Item>Inventory Map</NavDropdown.Item>
              </LinkContainer>
          </NavDropdown>
            <LinkContainer to="/analytics">
              <Nav.Link>Analytics</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/community">
              <Nav.Link>Community</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav>
          <NavDropdown title='' id="collasible-nav-dropdown">
              <LinkContainer to="/">
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </LinkContainer>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>    



        </div>

        );


}
export default Navigation;