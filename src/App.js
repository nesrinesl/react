import "./App.css";
import {
  Button,
  Card,
  Carousel,
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { GiPistolGun } from "react-icons/gi";
import { PiHeartFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { GrAmazon } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      {/*++++++++++++++++++NAVBAR+++++++++++++++++*/}
      <Navbar fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{ color: "red" }} href="#home">
            <GiPistolGun style={{ fontSize: 70 }} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{ color: "gold", fontSize: 20 }} href="#home">
              HOME
            </Nav.Link>
            <Nav.Link style={{ color: "gold", fontSize: 20 }} href="#features">
              SERVICES
            </Nav.Link>
            <Nav.Link style={{ color: "gold", fontSize: 20 }} href="#pricing">
              CONTACT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/*+++++++++++++TITLE+++++++*/}
      <div id="first">
        <h6
          style={{
            textAlign: "center",
            color: "red",
            fontSize: 60,
            marginTop: 90,
          }}
        >
          HUNTpRO
        </h6>
        <h1
          style={{
            color: "red",
            fontSize: 50,
            fontFamily: "fantasy",
            marginTop: 50,
          }}
        >
          Equip Yourself for Adventure
        </h1>
        <p style={{ textAlign: "center", color: "gold", margin: 30 }}>
          {""}
          HuntPro is your ultimate gun destination, offering a wide selection
          <br></br>of the best firearms for all your needs. <br></br>Explore our
          extensive collection and find the perfect gun for you at HuntPro.
        </p>
      </div>
      {/*+++++++++++++++++++++CARD1+++++++++++++++++++++++*/}
      <div id="cards">
        <Card id="card" style={{ width: "18rem" }}>
          <Card.Img
            style={{ height: 250 }}
            variant="top"
            src="https://images.unsplash.com/photo-1580865767741-37cd59206d74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjB8fHxlbnwwfHx8fHw%3D"
          />
          <Card.Body id="cardbody">
            <Card.Title id="cardtitle">Firearm Sales </Card.Title>
            <Card.Text className="cardtext">
              Explore our wide range of high-quality firearms for sale.
            </Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a href="https://www.ubuy.tn/en/">
                {" "}
                <Button>buy</Button>{" "}
              </a>
              <PiHeartFill style={{ color: "red", fontSize: 30 }} />
            </div>
          </Card.Body>
        </Card>
        {/*+++++++++++++++++++++CARD2+++++++++++++++++++++++*/}
        <Card id="card" style={{ width: "18rem" }}>
          <Card.Img
            style={{ height: 250 }}
            variant="top"
            src="https://images.unsplash.com/photo-1621967457140-261889ee1941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxndW5zfGVufDB8fDB8fHww"
          />
          <Card.Body id="cardbody">
            <Card.Title id="cardtitle">Shooting Range</Card.Title>
            <Card.Text className="cardtext">
              Experience the thrill of shooting in a safe and controlled
              environment.
            </Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a href="https://www.ubuy.tn/en/">
                {" "}
                <Button>buy</Button>{" "}
              </a>
              <PiHeartFill style={{ color: "red", fontSize: 30 }} />
            </div>
          </Card.Body>
        </Card>
        {/*+++++++++++++++++++++CARD3+++++++++++++++++++++++*/}
        <Card id="card" style={{ width: "18rem" }}>
          <Card.Img
            style={{ height: 250 }}
            variant="top"
            src="https://images.unsplash.com/photo-1551485913-b5dbedb723bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTF8fHxlbnwwfHx8fHw%3D"
          />
          <Card.Body id="cardbody">
            <Card.Title id="cardtitle">Gun Accessories</Card.Title>
            <Card.Text className="cardtext">
              Explore a range of accessories to enhance your shooting
              experience.
            </Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a href="https://www.ubuy.tn/en/">
                {" "}
                <Button>buy</Button>{" "}
              </a>
              <PiHeartFill style={{ color: "red", fontSize: 30 }} />
            </div>
          </Card.Body>
        </Card>
        {/*+++++++++++++++++++++CARD4+++++++++++++++++++++++*/}
        <Card id="card" style={{ width: "18rem" }}>
          <Card.Img
            style={{ height: 250 }}
            variant="top"
            src="https://images.unsplash.com/photo-1585589197566-b482772f8831?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd1bnN8ZW58MHx8MHx8fDA%3Ds"
          />
          <Card.Body id="cardbody">
            <Card.Title id="cardtitle">Firearm Training</Card.Title>
            <Card.Text className="cardtext">
              Get expert guidance and hone your shooting skills with our
              professional trainers.
            </Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a href="https://www.ubuy.tn/en/">
                {" "}
                <Button>buy</Button>{" "}
              </a>
              <PiHeartFill style={{ color: "red", fontSize: 30 }} />
            </div>
          </Card.Body>
        </Card>
      </div>
      <Container id="introducing">
        <p
          style={{
            color: "black",
            fontSize: 25,
            textAlign: "center",
            margin: 90,
            fontWeightight: 500,
          }}
        >
          Introducing huntpro, your premier destination for all things guns.
          <br></br>
          Located in Manouba, Tunis Governorate, we specialize in providing
          top-quality firearms and accessories to hunters, sport shooters, and
          enthusiasts alike. With our extensive selection, knowledgeable staff,
          and commitment to customer satisfaction, we are dedicated to helping
          you find the perfect firearm for your needs. Whether you're a seasoned
          pro or just starting out, trust huntpro to equip you with the tools
          you need for a successful and enjoyable shooting experience. Elevate
          your shooting game with huntpro today.
        </p>
      </Container>
      {/*+++++++++++++++++++++++COROUSELS+++++++++++++++++*/}
      <Container id="CAROUSEL">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              style={{ width: 1000, height: 900 }}
              className="d-block w-100"
              src="https://www.outdoorlife.com/uploads/2022/06/06/TJD05435-scaled.jpg?auto=webp&width=1440&height=960.1875"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: 1000, height: 900 }}
              className="d-block w-100"
              src="https://images.squarespace-cdn.com/content/v1/5f9709e108549926c69a3a9e/1603806037995-6Q6JQR0759ZW0OJ30B8H/MG_9602.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: 1000, height: 900 }}
              className="d-block w-100"
              src="https://ktohunting.com/wp-content/uploads/2021/01/rifle-for-deer-hunting.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      {/*++++++++++++++++++++++++CONTACT +++++++++++++++++++++*/}
      <div
        id="contactus"
        style={{
          backgroundColor: "black",
        }}
      >
        {/*-------inside--------*/}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <div
            id="cont"
            style={{ display: "flex", color: "white", flexDirection: "column" }}
          >
            <h1 style={{ color: "gold" }}>Contact Us Now</h1>
            <p style={{ fontSize: 20, textAlign: "center" }}>
              Fill out the form below to get in touch with us. We are here{" "}
              <br></br> to answer any questions <br></br> you may have and
              provide you with the best service possible.
            </p>
          </div>
          <div id="form">
            <label style={{ color: "red", fontSize: 20 }}>
              NAME:
              <br></br>
              <input name="firstName" placeholder="your name " />
            </label>
            <br></br>
            <label style={{ color: "red", fontSize: 20 }}>
              YOUR EMAIL:
              <br></br>
              <input name="email" id="email" placeholder="@gmail.com" />
            </label>

            <hr style={{ color: "red" }} />
            <div id="bt">
              <Button variant="outline-warning">RESET</Button>{" "}
              <Button variant="outline-success">SUBMIT</Button>{" "}
            </div>
            <hr style={{ color: "red" }} />
            <p
              style={{
                color: "gold",
                display: "flex",
                flexDirection: "column",
                fontSize: 20,
              }}
            >
              Are you enjoying it?:
              <label style={{ color: "white" }}>
                <input
                  type="radio"
                  name="myRadio"
                  value="option1"
                  defaultChecked={true}
                />
                YES
              </label>
              <label style={{ color: "white" }}>
                <input type="radio" name="myRadio" value="optionon2" />
                NO
              </label>
            </p>
          </div>
        </div>
      </div>

      {/*---------------------LOCAL-------------------*/}
      <div
        id="map"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25554.871771890026!2d10.057060480575416!3d36.809917083236975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd326a6997b651%3A0xae1949b938bf5487!2sManouba!5e0!3m2!1sen!2stn!4v1701041519036!5m2!1sen!2stn"
          width="800"
          height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div id="location">
          <h2 style={{ color: "red" }}>Discover Our Location</h2>
          <p style={{ color: "gold" }}>
            Explore the precise details of our physical address on the map below
          </p>
          <p style={{ color: "white" }}>"MANOUBA,Tunis"</p>
        </div>
      </div>

      {/*++++++++++++ for more information +++++++++++++++++++++*/}
      <div
        id="last "
        style={{
          backgroundColor: "rgb(203, 203, 129)",
          height: 100,
          marginBottom: 0,
        }}
      >
        <div id="icons">
          {" "}
          <FaInstagram id="i" />
          <FaFacebookSquare id="i" />
          <GrAmazon id="i" />
        </div>
      </div>
    </div>
  );
}

export default App;
