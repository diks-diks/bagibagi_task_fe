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
  const [error, setError] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  // fungsi untuk menghandle saat terjadi perubahan pada input form
  const handleInputChange = (e) => {
    setInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value.trim() };
    });
  };

  // fungsi untuk menghandle saat form di-submit
  const handleSubmitForm = (e) => {
    e.preventDefault();

    // Validasi Fullname
    if (input.fullname === "") {
      setError((prevState) => {
        return { ...prevState, fullname: "Fullname must be fill !" };
      });
    } else if (/\W/.test(input.fullname)) {
      setError((prevState) => {
        return {
          ...prevState,
          fullname: "Only accept alphanumeric character !",
        };
      });
    } else {
      setError((prevState) => {
        return {
          ...prevState,
          fullname: "",
        };
      });
    }

    // Validasi Email
    if (input.email === "") {
      setError((prevState) => {
        return { ...prevState, email: "Email must be fill !" };
      });
    }

    // Validasi Password
    if (input.password === "") {
      setError((prevState) => {
        return {
          ...prevState,
          password: "Password harus diisi !",
        };
      });
    } else if (/[A-Z]/.test(input.password) === false) {
      setError((prevState) => {
        return {
          ...prevState,
          password:
            "Password harus berupa kombinasi huruf besar, huruf kecil, dan angka !",
        };
      });
    } else if (/[a-z]/.test(input.password) === false) {
      setError((prevState) => {
        return {
          ...prevState,
          password:
            "Password harus berupa kombinasi huruf besar, huruf kecil, dan angka !",
        };
      });
    } else if (/[0-9]/.test(input.password) === false) {
      setError((prevState) => {
        return {
          ...prevState,
          password:
            "Password harus berupa kombinasi huruf besar, huruf kecil, dan angka !",
        };
      });
    }

    // Validasi Phone
    if (input.phone === "") {
      setError((prevState) => {
        return { ...prevState, phone: "Phone must be fill !" };
      });
    }

    // Validasi Address
    if (input.address === "") {
      setError((prevState) => {
        return { ...prevState, address: "Address must be fill !" };
      });
    }

    // console.log(input);
    // console.log(error);

    if (
      error.fullname === "" &&
      error.email === "" &&
      error.password === "" &&
      error.phone === "" &&
      error.address === ""
    ) {
      if (
        userData.some((item) => {
          return item.email === input.email;
        })
      ) {
        alert("Email sudah digunakan, silahkan login !");
      } else {
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
      }
    }
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
          {error.fullname && (
            <Form.Text className="text-danger">{error.fullname}</Form.Text>
          )}
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
          {error.email && (
            <Form.Text className="text-danger">{error.email}</Form.Text>
          )}
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
          {error.password && (
            <Form.Text className="text-danger">{error.password}</Form.Text>
          )}
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
          {error.phone && (
            <Form.Text className="text-danger">{error.phone}</Form.Text>
          )}
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
          {error.address && (
            <Form.Text className="text-danger">{error.address}</Form.Text>
          )}
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
