import { Col, Dropdown, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DropdownProfile = (props) => {
  const navigate = useNavigate();

  return (
    <Dropdown className="position-relative">
      <Dropdown.Toggle
        style={{ backgroundColor: "transparent", border: "none" }}
        id="dropdown-profile"
      >
        {props.children}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ marginLeft: -85, marginTop: 10, width: 150 }}>
        <Image
          src="/img/dropdown-polygon.png"
          className="position-absolute"
          style={{ top: -12, right: 15, width: 20 }}
        />
        <Row>
          <Col lg={12}>
            <div
              className="px-3 py-2 d-flex flex-row justify-content-start align-items-center dropdown-profile-item"
              style={{ cursor: "pointer" }}
            >
              <Image src="/img/user.png" className="me-3" />
              <h5 className="m-0">Profile</h5>
            </div>
          </Col>
          <Col lg={12}>
            <div
              className="px-3 py-2 d-flex flex-row justify-content-start align-items-center dropdown-profile-item"
              style={{ cursor: "pointer" }}
            >
              <Image src="/img/bill.png" className="me-3" />
              <h5 className="m-0">Pay</h5>
            </div>
          </Col>
          <Col lg={12}>
            <div
              className="px-3 py-2 d-flex flex-row justify-content-start align-items-center dropdown-profile-item"
              style={{ cursor: "pointer" }}
              onClick={() => {
                localStorage.removeItem("isLogin");
                localStorage.removeItem("loginUser");
                navigate("/");
              }}
            >
              <Image src="/img/logout.png" className="me-3" />
              <h5 className="m-0">Logout</h5>
            </div>
          </Col>
        </Row>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownProfile;
