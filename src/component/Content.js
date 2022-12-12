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
              <Card.Img
                variant="top"
                src="./img/card.png"
                className="img-fluid"
              />
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
              <Card.Img
                variant="top"
                src="./img/card.png"
                className="img-fluid"
              />
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
              <Card.Img
                variant="top"
                src="./img/card.png"
                className="img-fluid"
              />
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
              <Card.Img
                variant="top"
                src="./img/card.png"
                className="img-fluid"
              />
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
              <Card.Img
                variant="top"
                src="./img/card.png"
                className="img-fluid"
              />
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
