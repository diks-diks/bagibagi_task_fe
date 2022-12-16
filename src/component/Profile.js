import { useRef } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Alert,
  Form,
} from "react-bootstrap";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { QRCodeSVG } from "qrcode.react";

const Profile = ({ order, tripData, userData, setUserData }) => {
  const user = useRef(
    userData?.filter((user) => {
      return user.userId === parseInt(localStorage.getItem("loginUser"));
    })[0]
  );

  const handleUploadImage = (e) => {
    // mengambil file yang diupload pada input file
    let filesImg = e.target.files;

    let imgUrl;
    // Cek file upload apakah ada ? apakah formatnya sesuai (jpeg/png) ?
    if (filesImg.length > 0) {
      if (
        filesImg[0].type === "image/png" ||
        filesImg[0].type === "image/jpeg" ||
        filesImg[0].type === "image/jpg"
      ) {
        // jika semua syarat terpenuhi, buatlah urlnya lalu simpan di object dengan key img
        imgUrl = URL.createObjectURL(filesImg[0]);
      }
    }

    // mengambil nilai index dari user yang ingin diupdate
    let indexOfUserData = userData.findIndex(
      (user) => user.userId === parseInt(localStorage.getItem("loginUser"))
    );
    // console.log(indexOfUserData);

    // ambil data user, dan update img pada user terkait
    let newUserData = [...userData];
    newUserData[indexOfUserData].img = imgUrl;

    // kirim data array user yang sudah diupdate menjadi value dari state userData
    setUserData(newUserData);
  };

  return (
    <main
      style={{ backgroundColor: "#E5E5E5", marginTop: 100, marginBottom: 54 }}
      className="py-5 position-relative"
    >
      <Container>
        <Card className="w-75 mx-auto px-4 py-3">
          <Row>
            <Col lg={7}>
              <h1>Personal Info</h1>
              <div className="d-flex flex-column mt-4">
                <div className="d-flex flex-row align-items-center my-1">
                  <IoPersonCircleSharp className="display-2 text-secondary me-3" />
                  <div>
                    <h5 className="m-0">{user.current.fullname}</h5>
                    <p className="text-secondary m-0">Fullname</p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center my-1">
                  <MdEmail className="display-2 text-secondary me-3" />
                  <div>
                    <h5 className="m-0">{user.current.email}</h5>
                    <p className="text-secondary m-0">Email</p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center my-1">
                  <MdPhone className="display-2 text-secondary me-3" />
                  <div>
                    <h5 className="m-0">{user.current.phone}</h5>
                    <p className="text-secondary m-0">Mobile phone</p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center my-1">
                  <MdLocationOn className="display-2 text-secondary me-3" />
                  <div>
                    <h5 className="m-0">{user.current.address}</h5>
                    <p className="text-secondary m-0">Address</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} className="pt-3">
              <Form.Control
                id="uploadImage"
                type="file"
                size="xs"
                className="mt-5 d-none"
                onChange={handleUploadImage}
              />
              {user.current.img ? (
                <Image src={user.current.img} alt="profile" className="w-100" />
              ) : (
                <Image
                  src="/img/profile-undefined.png"
                  alt="profile"
                  className="w-100"
                />
              )}
              <Button
                variant="warning"
                className="text-white w-100 my-2 fs-4"
                onClick={() => {
                  document.getElementById("uploadImage").click();
                }}
              >
                Change Photo Profile
              </Button>
            </Col>
          </Row>
        </Card>

        <h1 className="mt-5">History</h1>
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
            ordr.status === "approve" && (
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
                          <h5 className="text-secondary">
                            {trip.info.duration}
                          </h5>
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
                      {/* <Image
                        src={ordr.img}
                        alt="receipt"
                        className="border border-dark border-3 w-75"
                      /> */}
                      <QRCodeSVG value={ordr.orderId} />,
                      <h1 className="mt-2">{ordr.orderId.toUpperCase()}</h1>
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
                        <span className="px-3 me-3 text-black">:</span>IDR.
                        &nbsp;
                        {ordr.totalPrice.toLocaleString()}
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Container>
            )
          );
        })}
      </Container>
    </main>
  );
};

export default Profile;
