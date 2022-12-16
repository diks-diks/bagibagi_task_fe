import { useState } from "react";
import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import { MdAttachFile, MdAddCircleOutline } from "react-icons/md";

const AddTrip = ({ setTripData }) => {
  const [input, setInput] = useState({
    title: "",
    country: "",
    accomodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    date: "",
    price: "",
    quota: "",
    desc: "",
    img: [],
  });
  const [error, setError] = useState({
    title: "",
    country: "",
    accomodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    date: "",
    price: "",
    quota: "",
    desc: "",
    img: "",
  });

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    if (e.target.name === "img") {
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

          setInput((prevState) => {
            return {
              ...prevState,
              [e.target.name]: [...prevState.img, imgUrl],
            };
          });
        }
      }
    } else if (e.target.name === "price" || e.target.name === "quota") {
      setInput((prevState) => {
        return { ...prevState, [e.target.name]: parseInt(e.target.value) };
      });
    } else {
      setInput((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value };
      });
    }
  };

  const handleAddTrip = (e) => {
    e.preventDefault();

    const newError = {
      title: "",
      country: "",
      accomodation: "",
      transportation: "",
      eat: "",
      day: "",
      night: "",
      date: "",
      price: "",
      quota: "",
      desc: "",
      img: "",
    };

    let newTrip = {
      tripId: new Date().getTime(),
      title: "",
      price: "",
      country: "",
      quota: "",
      pict: [],
      info: {
        accomodation: "",
        transportation: "",
        eat: "",
        duration: "",
        date: "",
      },
      desc: "",
    };

    // title
    newTrip.title = input.title.trim();
    if (newTrip.title === "") {
      newError.title = "Please fill out this field";
    } else {
      newError.title = "";
    }

    // price
    newTrip.price = input.price;
    if (newTrip.price === "" || isNaN(newTrip.price)) {
      newError.price = "Please fill out this field";
    } else if (newTrip.price < 0) {
      newError.price = "can't be less than 0";
    } else {
      newError.price = "";
    }

    // country
    newTrip.country = input.country.trim();
    if (newTrip.country === "") {
      newError.country = "Please fill out this field";
    } else {
      newError.country = "";
    }

    // quota
    newTrip.quota = input.quota;
    if (newTrip.quota === "" || isNaN(newTrip.quota)) {
      newError.quota = "Please fill out this field";
    } else if (newTrip.quota < 0) {
      newError.quota = "can't be less than 0";
    } else {
      newError.quota = "";
    }

    // img
    newTrip.pict = input.img;
    if (newTrip.pict.length < 4) {
      newError.img = "Please upload at least 4 image";
    } else {
      newError.img = "";
    }

    // accomodation
    newTrip.info.accomodation = input.accomodation.trim();
    if (newTrip.info.accomodation === "") {
      newError.accomodation = "Please fill out this field";
    } else {
      newError.accomodation = "";
    }

    // transportation
    newTrip.info.transportation = input.transportation.trim();
    if (newTrip.info.transportation === "") {
      newError.transportation = "Please fill out this field";
    } else {
      newError.transportation = "";
    }

    // eat
    newTrip.info.eat = input.eat.trim();
    if (newTrip.info.eat === "") {
      newError.eat = "Please fill out this field";
    } else {
      newError.eat = "";
    }

    // duration
    newTrip.info.duration = `${input.day} Day ${input.night} Night`;
    if (input.day === "") {
      newError.day = "Please fill out this field";
    } else if (parseInt(input.day) < 0) {
      newError.day = "can't be less than 0";
    } else {
      newError.day = "";
    }
    if (input.night === "") {
      newError.night = "Please fill out this field";
    } else if (parseInt(input.night) < 0) {
      newError.night = "can't be less than 0";
    } else {
      newError.night = "";
    }

    // date
    newTrip.info.date = input.date.trim();
    if (newTrip.info.date === "") {
      newError.date = "Please fill out this field";
    } else {
      newError.date = "";

      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      newTrip.info.date = newTrip.info.date.split("-");
      newTrip.info.date = `${newTrip.info.date[2]} ${
        month[newTrip.info.date[1] - 1]
      } ${newTrip.info.date[0]}`;
    }

    // desc
    newTrip.desc = input.desc.trim();
    if (newTrip.desc === "") {
      newError.desc = "Please fill out this field";
    } else {
      newError.desc = "";
    }

    // console.log(newTrip);

    // jika semua newErrornya kosong, maka kirim data trip baru tersebut
    if (
      newError.title === "" &&
      newError.country === "" &&
      newError.accomodation === "" &&
      newError.transportation === "" &&
      newError.eat === "" &&
      newError.day === "" &&
      newError.night === "" &&
      newError.date === "" &&
      newError.price === "" &&
      newError.quota === "" &&
      newError.desc === "" &&
      newError.img === ""
    ) {
      // tambahkan trip data baru
      setTripData((prevState) => {
        return [...prevState, newTrip];
      });

      // reset input
      setInput({
        title: "",
        country: "",
        accomodation: "",
        transportation: "",
        eat: "",
        day: "",
        night: "",
        date: "",
        price: "",
        quota: "",
        desc: "",
        img: [],
      });

      // reset error
      setError({
        title: "",
        country: "",
        accomodation: "",
        transportation: "",
        eat: "",
        day: "",
        night: "",
        date: "",
        price: "",
        quota: "",
        desc: "",
        img: "",
      });
    } else {
      setError(newError);
    }
  };

  console.log(input);
  console.log(error);

  return (
    <main
      style={{ backgroundColor: "#E5E5E5", marginTop: 100, marginBottom: 54 }}
      className="py-5 position-relative"
    >
      <Container>
        <h1>Add Trip</h1>
        <Form className="p-4" onSubmit={handleAddTrip}>
          {/* title trip */}
          <Form.Group className="mb-4" controlId="formTitle">
            <Form.Label className="h3 fw-bolder">Title Trip</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter Title Trip"
              value={input.title}
              onChange={handleInputChange}
            />
            {error.title && (
              <Form.Text className="text-danger">{error.title}</Form.Text>
            )}
          </Form.Group>

          {/* country */}
          <Form.Group className="mb-4" controlId="formCountry">
            <Form.Label className="h3 fw-bolder">Country</Form.Label>
            <Form.Select
              name="country"
              value={input.country}
              onChange={handleInputChange}
            >
              <option value="">Country</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Singapore">Singapore</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Australia">Australia</option>
            </Form.Select>
            {error.country && (
              <Form.Text className="text-danger">{error.country}</Form.Text>
            )}
          </Form.Group>

          {/* accomodation */}
          <Form.Group className="mb-4" controlId="formAccomodation">
            <Form.Label className="h3 fw-bolder">Accomodation</Form.Label>
            <Form.Control
              type="text"
              name="accomodation"
              placeholder="Enter Accomodation"
              value={input.accomodation}
              onChange={handleInputChange}
            />
            {error.accomodation && (
              <Form.Text className="text-danger">
                {error.accomodation}
              </Form.Text>
            )}
          </Form.Group>

          {/* transportation */}
          <Form.Group className="mb-4" controlId="formTransportation">
            <Form.Label className="h3 fw-bolder">Transportation</Form.Label>
            <Form.Control
              type="text"
              name="transportation"
              placeholder="Enter Transportation"
              value={input.transportation}
              onChange={handleInputChange}
            />
            {error.transportation && (
              <Form.Text className="text-danger">
                {error.transportation}
              </Form.Text>
            )}
          </Form.Group>

          {/* eat */}
          <Form.Group className="mb-4" controlId="formEat">
            <Form.Label className="h3 fw-bolder">Eat</Form.Label>
            <Form.Control
              type="text"
              name="eat"
              placeholder="Enter Eat"
              value={input.eat}
              onChange={handleInputChange}
            />
            {error.eat && (
              <Form.Text className="text-danger">{error.eat}</Form.Text>
            )}
          </Form.Group>

          <Form.Label className="h3 fw-bolder">Duration</Form.Label>
          <Row className="mb-4">
            <Col lg={4}>
              <Form.Group className="d-flex flex-row" controlId="formDay">
                <Form.Control
                  type="number"
                  name="day"
                  placeholder="Enter Day"
                  className="w-50 me-3"
                  value={input.day}
                  onChange={handleInputChange}
                />
                <Form.Label className="h3 fw-bolder">Day</Form.Label>
              </Form.Group>
              {error.day && (
                <Form.Text className="text-danger">{error.day}</Form.Text>
              )}
            </Col>
            <Col lg={4}>
              <Form.Group className="d-flex flex-row" controlId="formNight">
                <Form.Control
                  type="number"
                  name="night"
                  placeholder="Enter Night"
                  className="w-50 me-3"
                  value={input.night}
                  onChange={handleInputChange}
                />
                <Form.Label className="h3 fw-bolder">Night</Form.Label>
              </Form.Group>
              {error.night && (
                <Form.Text className="text-danger">{error.night}</Form.Text>
              )}
            </Col>
          </Row>

          {/* date */}
          <Form.Group className="mb-4" controlId="formDate">
            <Form.Label className="h3 fw-bolder">Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="Enter Date"
              value={input.date}
              onChange={handleInputChange}
            />
            {error.date && (
              <Form.Text className="text-danger">{error.date}</Form.Text>
            )}
          </Form.Group>

          {/* price */}
          <Form.Group className="mb-4" controlId="formPrice">
            <Form.Label className="h3 fw-bolder">Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Enter Price"
              value={input.price}
              onChange={handleInputChange}
            />
            {error.price && (
              <Form.Text className="text-danger">{error.price}</Form.Text>
            )}
          </Form.Group>

          {/* quota */}
          <Form.Group className="mb-4" controlId="formQuota">
            <Form.Label className="h3 fw-bolder">Quota</Form.Label>
            <Form.Control
              type="number"
              name="quota"
              placeholder="Enter Quota"
              value={input.quota}
              onChange={handleInputChange}
            />
            {error.quota && (
              <Form.Text className="text-danger">{error.quota}</Form.Text>
            )}
          </Form.Group>

          {/* desc */}
          <Form.Group className="mb-4" controlId="formDescription">
            <Form.Label className="h3 fw-bolder">Description</Form.Label>
            <Form.Control
              as="textarea"
              name="desc"
              placeholder="Enter Trip Description"
              style={{ height: "100px" }}
              value={input.desc}
              onChange={handleInputChange}
            />
            {error.desc && (
              <Form.Text className="text-danger">{error.desc}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="h3 fw-bolder">Image</Form.Label>
            {error.img && (
              <Form.Text className="text-danger d-block">{error.img}</Form.Text>
            )}
            <Form.Control
              type="file"
              name="img"
              id="img-addtrip"
              size="lg"
              className="d-none"
              multiple
              onChange={handleInputChange}
            />
          </Form.Group>
          {input.img.length > 0 ? (
            <div className="d-flex justify-content-start flex-wrap">
              {input.img.map((img, i) => {
                return (
                  <Image
                    src={img}
                    style={{ width: 250, height: 250, marginRight: 10 }}
                    className="my-2"
                    key={i}
                  />
                );
              })}
              <div
                className="my-2 text-warning fs-3 fw-bold border border-2 rounded-3 d-flex flex-column justify-content-center align-items-center"
                style={{
                  backgroundColor: "whitesmoke",
                  cursor: "pointer",
                  width: 250,
                  height: 250,
                }}
                onClick={() => {
                  document.getElementById("img-addtrip").click();
                }}
              >
                <MdAddCircleOutline className="fs-1" />
                <p className="p-0 m-0">Add More Image</p>
              </div>
            </div>
          ) : (
            <div
              className="py-2 px-2 text-warning fs-5 fw-bold border border-2 rounded-3 d-flex justify-content-between align-items-center d-inline-block"
              style={{
                backgroundColor: "whitesmoke",
                cursor: "pointer",
                width: "25%",
              }}
              onClick={() => {
                document.getElementById("img-addtrip").click();
              }}
            >
              <p className="p-0 m-0">Add Attachment Here</p>
              <MdAttachFile className="" />
            </div>
          )}

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

          <div className="d-flex justify-content-center mt-3">
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
