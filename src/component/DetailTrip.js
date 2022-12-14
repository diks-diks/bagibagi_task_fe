import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import { useEffect, useState } from "react";

const DetailTrip = ({ data }) => {
  const idTrip = useParams().idTrip;

  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    setTotalPrice(price * counter);
  }, [price, counter]);

  return (
    <main
      style={{ backgroundColor: "#E5E5E5", marginTop: 100, marginBottom: 54 }}
      className="py-5 position-relative"
    >
      <img
        src="/img/hibiscus.png"
        alt="Bunga"
        style={{ top: -75 }}
        className="position-absolute end-0"
      />
      <img
        src="/img/palm.png"
        alt="Rumput"
        style={{ top: "30%" }}
        className="position-absolute start-0"
      />
      {data.tripDest.map((el, i) => {
        price === null && el.id === idTrip && setPrice(el.price);
        return (
          el.id === idTrip && (
            <Container key={i}>
              <h1 className="display-4 fw-bold">{el.title}</h1>
              <h3 className="text-secondary">{el.location}</h3>
              <Row>
                <Col xs={12} className="py-2">
                  <img
                    src={el.pict[0]}
                    alt="Card 1"
                    className="img-fluid w-100 rounded"
                    style={{ height: 500, objectFit: "cover" }}
                  />
                </Col>
                <Col lg={4} className="py-2">
                  <img
                    src={el.pict[1]}
                    alt="Card 2"
                    className="img-fluid w-100 rounded"
                    style={{ height: 250, objectFit: "cover" }}
                  />
                </Col>
                <Col lg={4} className="py-2">
                  <img
                    src={el.pict[2]}
                    alt="Card 3"
                    className="img-fluid w-100 rounded"
                    style={{ height: 250, objectFit: "cover" }}
                  />
                </Col>
                <Col lg={4} className="py-2">
                  <div className="position-relative">
                    <img
                      src={el.pict[3]}
                      alt="Card 4"
                      className="img-fluid w-100 rounded"
                      style={{ height: 250, objectFit: "cover" }}
                    />
                    <div
                      className={`position-absolute top-0 w-100 h-100 text-white d-flex justify-content-center align-items-center ${
                        el.pict.length <= 4 && "d-none"
                      }`}
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                    >
                      <h1>+{el.pict.length - 4}</h1>
                    </div>
                  </div>
                </Col>
              </Row>

              <h4 className="mt-5">Information Trip</h4>
              <div className="d-flex flex-row justify-content-between">
                <div>
                  <small className="text-secondary">Accomodation</small>
                  <h4 className="d-flex align-items-end">
                    <img
                      src="/img/hotel.png"
                      alt=""
                      className="img-fluid me-2"
                    />
                    {el.info.accomodation}
                  </h4>
                </div>
                <div>
                  <small className="text-secondary">Transportation</small>
                  <h4 className="d-flex align-items-end">
                    <img
                      src="/img/plane.png"
                      alt=""
                      className="img-fluid me-2"
                    />
                    {el.info.transportation}
                  </h4>
                </div>
                <div>
                  <small className="text-secondary">Eat</small>
                  <h4 className="d-flex align-items-end">
                    <img
                      src="/img/meal.png"
                      alt=""
                      className="img-fluid me-2"
                    />
                    {el.info.eat}
                  </h4>
                </div>
                <div>
                  <small className="text-secondary">Duration</small>
                  <h4 className="d-flex align-items-end">
                    <img
                      src="/img/time.png"
                      alt=""
                      className="img-fluid me-2"
                    />
                    {el.info.duration}
                  </h4>
                </div>
                <div>
                  <small className="text-secondary">Date Trip</small>
                  <h4 className="d-flex align-items-end">
                    <img
                      src="/img/calendar.png"
                      alt=""
                      className="img-fluid me-2"
                    />
                    {el.info.date}
                  </h4>
                </div>
              </div>

              <h4 className="mt-5">Description</h4>
              <p style={{ textAlign: "justify" }}>{el.desc}</p>

              <div className="d-flex justify-content-between mt-5">
                <div>
                  <h1 className="d-inline-block text-warning">
                    IDR. {el.price.toLocaleString()}
                  </h1>
                  <h1 className="d-inline-block text-black">&nbsp;/ Person</h1>
                </div>
                <div
                  id="counter"
                  className="d-flex justify-content-center align-items-center"
                >
                  <Button
                    variant="warning"
                    className="text-white rounded-4 fs-3 d-flex flex-column p-2"
                    onClick={() => {
                      setCounter((prevState) => {
                        return prevState > 1 ? prevState - 1 : 1;
                      });
                    }}
                  >
                    <BsDashLg />
                  </Button>
                  <h1
                    className="d-inline-block text-center"
                    style={{ width: 150 }}
                  >
                    {counter}
                  </h1>
                  <Button
                    variant="warning"
                    className="text-white rounded-4 fs-3 d-flex flex-column p-2"
                    onClick={() => {
                      setCounter((prevState) => {
                        return prevState + 1;
                      });
                    }}
                  >
                    <BsPlusLg />
                  </Button>
                </div>
              </div>

              <hr className="text-secondary" />
              <div className="d-flex justify-content-between">
                <div>
                  <h1 className="d-inline-block text-black fw-bold">Total :</h1>
                </div>
                <div>
                  <h1 className="d-inline-block text-warning fw-bold">
                    IDR. {totalPrice?.toLocaleString()}
                  </h1>
                </div>
              </div>
              <hr className="text-secondary" />
              <div className="d-flex justify-content-end">
                <Button
                  variant="warning"
                  className="text-white fs-3 fw-bolder rounded-3 px-5"
                >
                  BOOK NOW
                </Button>
              </div>
            </Container>
          )
        );
      })}
    </main>
  );
};

export default DetailTrip;
