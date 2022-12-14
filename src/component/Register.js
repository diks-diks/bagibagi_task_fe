import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const Register = ({ registerForm, setRegisterForm, userData, setUserData }) => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  // fungsi untuk menghandle saat terjadi perubahan pada input form
  const handleInputChange = (e) => {
    setInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // fungsi untuk menghandle saat form di-submit
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setUserData((prevState) => {
      return [...prevState, input];
    });
    setInput({
      fullname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    });
  };

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

      <Form className="p-4" onSubmit={handleSubmitForm}>
        <Form.Group className="mb-3" controlId="formFullname">
          <Form.Label className="h3 fw-bolder">Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            placeholder="Enter Full Name"
            value={input.fullname}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="h3 fw-bolder">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={input.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label className="h3 fw-bolder">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label className="h3 fw-bolder">phone</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={input.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label className="h3 fw-bolder">Address</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            placeholder="Enter Your Address"
            style={{ height: "100px" }}
            onChange={handleInputChange}
            value={input.address}
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
