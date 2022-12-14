import { Button, Modal, Form } from "react-bootstrap";

const Register = ({ registerForm, setRegisterForm }) => {
  return (
    <Modal
      show={registerForm}
      centered
      onHide={() => {
        setRegisterForm(false);
      }}
      style={{
        display: "block",
        position: "fixed",
        top: "0",
        width: "100%",
        height: "100vh",
        // backgroundColor: "rgba(255,255,255,0.5)",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      className="rounded-0"
    >
      <img
        src="/img/hibiscus-modals.png"
        alt="Bunga"
        className="position-absolute top-0 end-0 rounded-top"
      />
      <img
        src="/img/palm-modals.png"
        alt="Rumput"
        className="position-absolute top-0 start-0 rounded-top"
      />
      <Modal.Title className="display-5 fw-bold mx-auto p-4">
        Register
      </Modal.Title>

      <Form className="p-4">
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label htmlFor="fullname" className="h3 fw-bolder">
            Full Name
          </Form.Label>
          <Form.Control
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter Full Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label htmlFor="email" className="h3 fw-bolder">
            Email
          </Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label htmlFor="password" className="h3 fw-bolder">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label htmlFor="phone" className="h3 fw-bolder">
            phone
          </Form.Label>
          <Form.Control
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter Your Phone Number"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label htmlFor="address" className="h3 fw-bolder">
            Address
          </Form.Label>
          <Form.Control
            as="textarea"
            id="address"
            name="address"
            placeholder="Enter Your Address"
            style={{ height: "100px" }}
          />
        </Form.Group>

        <Button
          variant="warning"
          type="submit"
          className="w-100 text-white fs-4 fw-bolder"
        >
          Register
        </Button>
      </Form>
    </Modal>
  );
};

export default Register;
