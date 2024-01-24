import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Topbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <label>Application</label>
        <i class="fas fa-greater-than"></i>
        <label>Dashboard</label>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="horizontalNav" style={{ display: "flex" }}>
            <div className="formControls" style={{ marginLeft: "40vw" }}>
              <Form className="col-12">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </div>

            <div className="img" style={{ marginLeft: "3vw" }}>
              <img
                src="../../Images/notification.png"
                alt="notification"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              />
              <img
                src="../../Images/profileImage.jpeg"
                alt="profile"
                style={{
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  marginLeft: "15px",
                }}
              />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
