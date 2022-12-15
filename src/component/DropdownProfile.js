import { Col, Dropdown, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { GoListOrdered } from "react-icons/go";
import { FaRoute } from "react-icons/fa";
import { TbFileDollar, TbLogout } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";

const DropdownProfile = (props) => {
  const navigate = useNavigate();
  const user = useRef(
    props.userData?.filter((user) => {
      return user.userId === parseInt(localStorage.getItem("loginUser"));
    })[0]
  );

  return (
    <Dropdown className="position-relative" autoClose>
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
        {user.current.role === "admin" ? (
          <Row>
            <Col lg={12}>
              <div
                className="px-3 py-2 d-flex flex-row justify-content-start align-items-center dropdown-profile-item"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/transactions");
                  let drtoggle = document.getElementById("dropdown-profile");
                  drtoggle.click();
                }}
              >
                <GoListOrdered className="me-3 fs-3 text-warning" />
                <h5 className="m-0">Trx</h5>
              </div>
            </Col>
            <Col lg={12}>
              <div
                className="px-3 py-2 d-flex flex-row justify-content-start align-items-center dropdown-profile-item"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                  let drtoggle = document.getElementById("dropdown-profile");
                  drtoggle.click();
                }}
              >
                <FaRoute className="me-3 fs-3 text-success" />
                <h5 className="m-0">Trip</h5>
              </div>
            </Col>
            <Col lg={12}>
              <hr
                style={{
                  height: 2,
                  backgroundColor: "gray",
                  border: "none",
                  opacity: "25%",
                }}
              />
              <div
                className="px-3 py-2 d-flex flex-row justify-content-start align-items-center dropdown-profile-item"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  localStorage.removeItem("isLogin");
                  localStorage.removeItem("loginUser");
                  navigate("/");
                }}
              >
                <TbLogout class="me-3 fs-3 text-danger" />
                <h5 className="m-0">Logout</h5>
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col lg={12}>
              <div
                className="px-3 py-2 d-flex flex-row justify-content-start align-items-center dropdown-profile-item"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/profile");
                  let drtoggle = document.getElementById("dropdown-profile");
                  drtoggle.click();
                }}
              >
                <BsPersonCircle class="me-3 fs-3 text-warning" />
                <h5 className="m-0">Profile</h5>
              </div>
            </Col>
            <Col lg={12}>
              <div
                className="px-3 py-2 d-flex flex-row justify-content-start align-items-center dropdown-profile-item"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/payment");
                  let drtoggle = document.getElementById("dropdown-profile");
                  drtoggle.click();
                }}
              >
                <TbFileDollar class="me-3 fs-3 text-success" />
                <h5 className="m-0">Pay</h5>
              </div>
            </Col>
            <Col lg={12}>
              <hr
                style={{
                  height: 2,
                  backgroundColor: "gray",
                  border: "none",
                  opacity: "25%",
                }}
              />
              <div
                className="px-3 py-2 d-flex flex-row justify-content-start align-items-center dropdown-profile-item"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  localStorage.removeItem("isLogin");
                  localStorage.removeItem("loginUser");
                  navigate("/");
                }}
              >
                <TbLogout class="me-3 fs-3 text-danger" />
                <h5 className="m-0">Logout</h5>
              </div>
            </Col>
          </Row>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownProfile;
