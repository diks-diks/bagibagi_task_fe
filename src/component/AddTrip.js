import { Container, Form, Button, Row, Col } from "react-bootstrap";

const AddTrip = () => {
  return (
    <main
      style={{ backgroundColor: "#E5E5E5", marginTop: 100, marginBottom: 54 }}
      className="py-5 position-relative"
    >
      <Container>
        <h1>Add Trip</h1>
        <Form className="p-4">
          {/* title trip */}
          <Form.Group className="mb-4" controlId="formTitle">
            <Form.Label className="h3 fw-bolder">Title Trip</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter Title Trip"
              // value={input.fullname}
              // onChange={handleInputChange}
            />
          </Form.Group>

          {/* country */}
          <Form.Group className="mb-4" controlId="formCountry">
            <Form.Label className="h3 fw-bolder">Country</Form.Label>
            <Form.Select
              name="country"
              // value={input.country}
              // onChange={handleInputChange}
            >
              <option value="">Country</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Singapore">Singapore</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Australia">Australia</option>
            </Form.Select>
            {/* {error.gender && (
              <Form.Text className="text-danger">{error.gender}</Form.Text>
            )} */}
          </Form.Group>

          {/* accomodation */}
          <Form.Group className="mb-4" controlId="formAccomodation">
            <Form.Label className="h3 fw-bolder">Accomodation</Form.Label>
            <Form.Control
              type="text"
              name="accomodation"
              placeholder="Enter Accomodation"
              // value={input.fullname}
              // onChange={handleInputChange}
            />
          </Form.Group>

          {/* transportation */}
          <Form.Group className="mb-4" controlId="formTransportation">
            <Form.Label className="h3 fw-bolder">Transportation</Form.Label>
            <Form.Control
              type="text"
              name="transportation"
              placeholder="Enter Transportation"
              // value={input.fullname}
              // onChange={handleInputChange}
            />
          </Form.Group>

          {/* eat */}
          <Form.Group className="mb-4" controlId="formEat">
            <Form.Label className="h3 fw-bolder">Eat</Form.Label>
            <Form.Control
              type="text"
              name="eat"
              placeholder="Enter Eat"
              // value={input.fullname}
              // onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Label className="h3 fw-bolder">Duration</Form.Label>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-4 d-flex flex-row" controlId="formDay">
                <Form.Control
                  type="number"
                  name="day"
                  placeholder="Enter Day"
                  className="w-50 me-3"
                  // value={input.fullname}
                  // onChange={handleInputChange}
                />
                <Form.Label className="h3 fw-bolder">Day</Form.Label>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group
                className="mb-4 d-flex flex-row"
                controlId="formNight"
              >
                <Form.Control
                  type="number"
                  name="night"
                  placeholder="Enter Night"
                  className="w-50 me-3"
                  // value={input.fullname}
                  // onChange={handleInputChange}
                />
                <Form.Label className="h3 fw-bolder">Night</Form.Label>
              </Form.Group>
            </Col>
          </Row>

          {/* date */}
          <Form.Group className="mb-4" controlId="formDate">
            <Form.Label className="h3 fw-bolder">Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="Enter Date"
              // value={input.fullname}
              // onChange={handleInputChange}
            />
          </Form.Group>

          {/* price */}
          <Form.Group className="mb-4" controlId="formPrice">
            <Form.Label className="h3 fw-bolder">Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Enter Price"
              // value={input.fullname}
              // onChange={handleInputChange}
            />
          </Form.Group>

          {/* quota */}
          <Form.Group className="mb-4" controlId="formQuota">
            <Form.Label className="h3 fw-bolder">Quota</Form.Label>
            <Form.Control
              type="number"
              name="quota"
              placeholder="Enter Quota"
              // value={input.fullname}
              // onChange={handleInputChange}
            />
          </Form.Group>

          {/* desc */}
          <Form.Group className="mb-4" controlId="formDescription">
            <Form.Label className="h3 fw-bolder">Description</Form.Label>
            <Form.Control
              as="textarea"
              name="desc"
              placeholder="Enter Trip Description"
              style={{ height: "100px" }}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="h3 fw-bolder">Image</Form.Label>
            <Form.Control
              type="file"
              name="img"
              id="img-addtrip"
              size="lg"
              className="d-none"
            />
            <div
              className="py-2 px-2 text-warning fw-bold border border-2 rounded-3 w-25 d-flex justify-content-between align-items-center"
              style={{
                backgroundColor: "whitesmoke",
                cursor: "pointer",
              }}
              onClick={() => {
                document.getElementById("img-addtrip").click();
              }}
            >
              <p className="p-0 m-0">Attach Here</p>
              <p className="p-0 m-0">Icon</p>
            </div>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formFullname">
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
          </Form.Group> */}
          {/* 
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

          <Form.Group className="mb-3" controlId="formGender">
            <Form.Label className="h3 fw-bolder">Gender</Form.Label>
            <Form.Select
              name="gender"
              value={input.gender}
              onChange={handleInputChange}
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
            {error.gender && (
              <Form.Text className="text-danger">{error.gender}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label className="h3 fw-bolder">Phone</Form.Label>
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
          </Form.Group> */}

          <div className="d-flex justify-content-center">
            <Button
              variant="warning"
              type="submit"
              className="px-5 text-white fs-5 fw-bolder"
            >
              Add Trip
            </Button>
          </div>
        </Form>
      </Container>
    </main>
  );
};

export default AddTrip;
