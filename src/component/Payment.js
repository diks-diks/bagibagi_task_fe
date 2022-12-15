import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Form,
  Modal,
} from "react-bootstrap";

const Payment = ({ userData, tripData, order, setOrder }) => {
  const [img, setImg] = useState("");
  const [popup, setPopup] = useState(false);

  const navigate = useNavigate();

  const handleUploadImage = (e) => {
    // mengambil file yang diupload pada input file
    let filesImg = e.target.files;

    // Cek file upload apakah ada ? apakah formatnya sesuai (jpeg/png) ?
    if (filesImg.length > 0) {
      if (
        filesImg[0].type === "image/png" ||
        filesImg[0].type === "image/jpeg" ||
        filesImg[0].type === "image/jpg"
      ) {
        // jika semua syarat terpenuhi, buatlah urlnya lalu simpan di object dengan key img
        let imgUrl = URL.createObjectURL(filesImg[0]);

        setImg((prevState) => {
          return { ...prevState, [e.target.name]: imgUrl };
        });
      }
    }
  };

  const handleUpdateOrder = (orderId) => {
    // mengambil nilai index dari order yang ingin diupdate
    let indexOfOrderData = order.findIndex((ordr) => ordr.orderId === orderId);
    // console.log(indexOfOrderData);

    // menyalin seluruh arr order
    let newOrder = [...order];
    // console.log(newOrder);

    // mengupdate status pada order tersebut
    newOrder[indexOfOrderData].status = "Waiting Approve";
    img[orderId]
      ? (newOrder[indexOfOrderData].img = img[orderId])
      : alert("Please upload image !");

    if (
      newOrder[indexOfOrderData].status !== "Waiting Payment" &&
      newOrder[indexOfOrderData].img !== ""
    ) {
      // kirim data array order yang sudah diupdate ke state order
      setOrder(newOrder);

      // tampilkan popup
      setPopup(true);
    }
  };

  return (
    <main
      style={{ backgroundColor: "#E5E5E5", marginTop: 100, marginBottom: 54 }}
      className="py-5 position-relative"
    >
      <Modal
        show={popup}
        centered
        backdrop="static"
        onHide={() => {
          setPopup(false);
        }}
        style={{
          display: "block",
          position: "fixed",
          top: "0",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        className="rounded-0"
      >
        <Modal.Body>
          <p className="text-center">
            Your payment will be confirmed within 2 x 24 hours
          </p>
          <p className="text-center">
            To see orders click{" "}
            <u
              className="fw-bold text-underline"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/payment");
                setPopup(false);
              }}
            >
              Here
            </u>{" "}
            thank you
          </p>
        </Modal.Body>
      </Modal>

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
                      {ordr.status === "new" && (
                        <Alert
                          variant="danger"
                          className="d-inline-block p-1 px-3"
                        >
                          Waiting Payment
                        </Alert>
                      )}
                      {ordr.status === "pending" && (
                        <Alert
                          variant="warning"
                          className="d-inline-block p-1 px-3"
                        >
                          Waiting Approve
                        </Alert>
                      )}
                      {ordr.status === "approve" && (
                        <Alert
                          variant="success"
                          className="d-inline-block p-1 px-3"
                        >
                          Approve
                        </Alert>
                      )}
                      {ordr.status === "cancel" && (
                        <Alert
                          variant="danger"
                          className="d-inline-block p-1 px-3"
                        >
                          Payment receipt rejected
                        </Alert>
                      )}
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
                  <Col
                    lg={3}
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    {ordr.img ? (
                      <Image
                        src={ordr.img}
                        alt="receipt"
                        className="border border-dark border-3 w-75"
                      />
                    ) : img[ordr.orderId] ? (
                      <Image
                        src={img[ordr.orderId]}
                        alt="receipt"
                        className="border border-dark border-3 w-75"
                      />
                    ) : (
                      <Form.Control
                        type="file"
                        size="xs"
                        name={ordr.orderId}
                        className="mt-5"
                        onChange={handleUploadImage}
                      />
                    )}
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
                  ordr.status !== "new" && ordr.status !== "cancel" && "d-none"
                }`}
              >
                <Button
                  variant="warning"
                  className="text-white m-3 fs-5 fw-bold"
                  style={{ width: 200 }}
                  onClick={() => {
                    handleUpdateOrder(ordr.orderId);
                  }}
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
