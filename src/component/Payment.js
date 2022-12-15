import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

const Payment = ({ userData, tripData, order }) => {
  return (
    <main
      style={{ backgroundColor: "#E5E5E5", marginTop: 100, marginBottom: 54 }}
      className="py-5 position-relative"
    >
      {order.map((ordr) => {
        let trip = tripData?.filter((trip) => {
          return trip.tripId === ordr.tripId;
        })[0];
        // console.log(trip);

        let user = userData?.filter((user) => {
          return user.userId === ordr.userId;
        })[0];
        // console.log(user);

        return (
          ordr.userId === parseInt(localStorage.getItem("loginUser")) &&
          ordr.status !== "Approve" && (
            <Container className="mb-5" key={ordr.orderId}>
              <Card
                className="bg-white py-3"
                style={{ border: "2px solid rgba(108,117,125,0.7)" }}
              >
                <Row className="px-3 pb-3">
                  <Col lg={4}>
                    <Image src="/img/payment-icon.png" alt="dewe-tour" />
                  </Col>
                  <Col
                    lg={{ span: 4, offset: 4 }}
                    className="d-flex justify-content-center ps-lg-4"
                  >
                    <div
                      className="d-flex flex-column align-items-end w-75"
                      // style={{ width: "64%" }}
                    >
                      <h1>Booking</h1>
                      <h5 className="text-secondary">{ordr.bookingDate}</h5>
                    </div>
                  </Col>
                </Row>
                <Row className="px-4">
                  <Col
                    lg={5}
                    className="d-flex flex-column justify-content-between"
                  >
                    <div>
                      <h2>{trip.title}</h2>
                      <h5 className="text-secondary">{trip.location}</h5>
                    </div>
                    <div className="pb-5">
                      <Alert
                        variant={
                          ordr.status === "Waiting Payment"
                            ? "danger"
                            : "warning"
                        }
                        className="d-inline-block p-1 px-3"
                      >
                        {ordr.status}
                      </Alert>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <Row g={0}>
                      <Col lg={6} className="pb-5">
                        <h4>Date Trip</h4>
                        <h5 className="text-secondary">{trip.info.date}</h5>
                      </Col>
                      <Col lg={6} className="pb-5">
                        <h4>Duration</h4>
                        <h5 className="text-secondary">{trip.info.duration}</h5>
                      </Col>
                      <Col lg={6} className="pb-5">
                        <h4>Accomodation</h4>
                        <h5 className="text-secondary">
                          {trip.info.accomodation}
                        </h5>
                      </Col>
                      <Col lg={6} className="pb-5">
                        <h4>Transportation</h4>
                        <h5 className="text-secondary">
                          {trip.info.transportation}
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={3} className="d-flex flex-column align-items-center">
                    <Image
                      src="/img/receipt.png"
                      alt="receipt"
                      // fluid
                      className="border border-dark border-3 w-75"
                    />
                    <small className="text-secondary mt-2">
                      Upload payment proof
                    </small>
                  </Col>
                </Row>
                <Row className="fw-bold">
                  <Col lg={1} className="text-center">
                    <p className="my-0">No</p>
                  </Col>
                  <Col lg={2}>
                    <p className="my-0">FullName</p>
                  </Col>
                  <Col lg={2}>
                    <p className="my-0">Gender</p>
                  </Col>
                  <Col lg={2}>
                    <p className="my-0">Phone</p>
                  </Col>
                </Row>
                <hr
                  style={{
                    height: 3,
                    backgroundColor: "gray",
                    border: "none",
                    opacity: "25%",
                  }}
                />
                <Row>
                  <Col lg={1} className="text-center">
                    <p className="my-0 text-muted">1</p>
                  </Col>
                  <Col lg={2}>
                    <p className="my-0 text-muted">{user.fullname}</p>
                  </Col>
                  <Col lg={2}>
                    <p className="my-0 text-muted">{user.gender}</p>
                  </Col>
                  <Col lg={2}>
                    <p className="my-0 text-muted">{user.phone}</p>
                  </Col>
                  <Col lg={2} className="text-center fw-bold">
                    <p className="my-0">Qty</p>
                  </Col>
                  <Col className="text-start ps-5 fw-bold">
                    <p className="my-0">
                      <span className="px-3 me-3">:</span>
                      {ordr.qty}
                    </p>
                  </Col>
                </Row>
                <hr
                  style={{
                    height: 3,
                    backgroundColor: "gray",
                    border: "none",
                    opacity: "25%",
                  }}
                />
                <Row>
                  <Col
                    lg={{ span: 2, offset: 7 }}
                    className="text-center fw-bold"
                  >
                    <p className="my-0">Total</p>
                  </Col>
                  <Col className="text-start ps-5 fw-bold">
                    <p className="my-0 text-danger">
                      <span className="px-3 me-3 text-black">:</span>IDR. &nbsp;
                      {ordr.totalPrice.toLocaleString()}
                    </p>
                  </Col>
                </Row>
              </Card>
              <div
                className={`d-flex justify-content-end ${
                  ordr.status !== "Waiting Payment" && "d-none"
                }`}
              >
                <Button
                  variant="warning"
                  className="text-white m-3 fs-5 fw-bold"
                  style={{ width: 200 }}
                >
                  PAY
                </Button>
              </div>
            </Container>
          )
        );
      })}
    </main>
  );
};

export default Payment;
