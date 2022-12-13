import { Card, Col, Container, Row } from "react-bootstrap";

const Content = () => {
  return (
    <main
      style={{ backgroundColor: "#E5E5E5", marginBottom: 54 }}
      className="py-3"
    >
      <Container className="d-flex flex-row justify-content-evenly">
        <Card
          style={{ marginTop: -75, height: 350, width: 250 }}
          className="d-flex flex-column justify-content-center p-3"
        >
          <img
            src="./img/guarantee.png"
            alt="Guarantee"
            width={"75"}
            className="mx-auto my-2"
          />
          <h3 className="text-center">Best Price Guarantee</h3>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
            praesentium?
          </p>
        </Card>
        <Card
          style={{ marginTop: -75, height: 350, width: 250 }}
          className="d-flex flex-column justify-content-center p-3"
        >
          <img
            src="./img/heart.png"
            alt="Travelers"
            width={"75"}
            className="mx-auto my-2"
          />
          <h3 className="text-center">Travelers Love Us</h3>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
            praesentium?
          </p>
        </Card>
        <Card
          style={{ marginTop: -75, height: 350, width: 250 }}
          className="d-flex flex-column justify-content-center p-3"
        >
          <img
            src="./img/agent.png"
            alt="Agent"
            width={"75"}
            className="mx-auto my-2"
          />{" "}
          <h3 className="text-center">Best Travel Agent</h3>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
            praesentium?
          </p>
        </Card>
        <Card
          style={{ marginTop: -75, height: 350, width: 250 }}
          className="d-flex flex-column justify-content-center p-3"
        >
          <img
            src="./img/support.png"
            alt="Support"
            width={"75"}
            className="mx-auto my-2"
          />
          <h3 className="text-center">Our Dedicated Support</h3>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
            praesentium?
          </p>
        </Card>
      </Container>
      <Container>
        <h1 className="text-center my-5">Group Tour</h1>
        <Row>
          <Col lg={4} className="p-3">
            <Card className="d-flex flex-column justify-content-center p-3">
              <div id="img-group" className="position-relative">
                <Card.Img
                  variant="top"
                  src="./img/card.png"
                  className="img-fluid"
                />
                <div
                  style={{ width: 50, height: 30, top: 15 }}
                  className="bg-light position-absolute end-0 text-center d-flex flex-column justify-content-center rounded-start"
                >
                  <p className="m-0">12/15</p>
                </div>
              </div>
              <Card.Body className="p-0">
                <Card.Title>6D/4N Fun Tassie Vacation ...</Card.Title>
                <div className="d-flex justify-content-between">
                  <p className="text-warning mb-0 fw-bolder">Rp 20.000,-</p>
                  <p className="text-secondary mb-0">Indonesia</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="p-3">
            <Card className="d-flex flex-column justify-content-center p-3">
              <div id="img-group" className="position-relative">
                <Card.Img
                  variant="top"
                  src="./img/card.png"
                  className="img-fluid"
                />
                <div
                  style={{ width: 50, height: 30, top: 15 }}
                  className="bg-light position-absolute end-0 text-center d-flex flex-column justify-content-center rounded-start"
                >
                  <p className="m-0">11/15</p>
                </div>
              </div>
              <Card.Body className="p-0">
                <Card.Title>6D/4N Fun Tassie Vacation ...</Card.Title>
                <div className="d-flex justify-content-between">
                  <p className="text-warning mb-0 fw-bolder">Rp 20.000,-</p>
                  <p className="text-secondary mb-0">Indonesia</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="p-3">
            <Card className="d-flex flex-column justify-content-center p-3">
              <div id="img-group" className="position-relative">
                <Card.Img
                  variant="top"
                  src="./img/card.png"
                  className="img-fluid"
                />
                <div
                  style={{ width: 50, height: 30, top: 15 }}
                  className="bg-light position-absolute end-0 text-center d-flex flex-column justify-content-center rounded-start"
                >
                  <p className="m-0">14/15</p>
                </div>
              </div>
              <Card.Body className="p-0">
                <Card.Title>6D/4N Fun Tassie Vacation ...</Card.Title>
                <div className="d-flex justify-content-between">
                  <p className="text-warning mb-0 fw-bolder">Rp 20.000,-</p>
                  <p className="text-secondary mb-0">Indonesia</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="p-3">
            <Card className="d-flex flex-column justify-content-center p-3">
              <div id="img-group" className="position-relative">
                <Card.Img
                  variant="top"
                  src="./img/card.png"
                  className="img-fluid"
                />
                <div
                  style={{ width: 50, height: 30, top: 15 }}
                  className="bg-light position-absolute end-0 text-center d-flex flex-column justify-content-center rounded-start"
                >
                  <p className="m-0">10/15</p>
                </div>
              </div>
              <Card.Body className="p-0">
                <Card.Title>6D/4N Fun Tassie Vacation ...</Card.Title>
                <div className="d-flex justify-content-between">
                  <p className="text-warning mb-0 fw-bolder">Rp 20.000,-</p>
                  <p className="text-secondary mb-0">Indonesia</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="p-3">
            <Card className="d-flex flex-column justify-content-center p-3">
              <div id="img-group" className="position-relative">
                <Card.Img
                  variant="top"
                  src="./img/card.png"
                  className="img-fluid"
                />
                <div
                  style={{ width: 50, height: 30, top: 15 }}
                  className="bg-light position-absolute end-0 text-center d-flex flex-column justify-content-center rounded-start"
                >
                  <p className="m-0">13/15</p>
                </div>
              </div>
              <Card.Body className="p-0">
                <Card.Title>6D/4N Fun Tassie Vacation ...</Card.Title>
                <div className="d-flex justify-content-between">
                  <p className="text-warning mb-0 fw-bolder">Rp 20.000,-</p>
                  <p className="text-secondary mb-0">Indonesia</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Content;
