import { Col, Container, Row } from "react-bootstrap";
import fotoProfilo from "../assets/La Foto.jpeg";
const Profilo: React.FC = () => {
  return (
    <>
      <Container id="container-profile">
        <Row id="row1-profile">
          <Col xs={5} md={4} lg={3}>
            <div>
              <img
                src={fotoProfilo}
                alt="Foto Profilo"
                className="img-fluid"
                id="img-profile"
              />
            </div>
          </Col>
          <Col
            id="col-profileMain"
            xs={7}
            md={8}
            lg={9}
            className="d-flex flex-column"
          >
            <div className="div-nameSurname">
              <h1 id="title-nameSurname">
                Claudio <br /> Postiglione
              </h1>
            </div>
            <div id="div-positionRole">
              <h6 id="title-positionRole">Junior Full Stack Developer</h6>
            </div>
            <div id="div-età">
              <h6 id="title-età"> 26 anni</h6>
            </div>
            <div id="div-location">
              <h6 id="title-location">San Giorgio a Cremano, Napoli, Italia</h6>
            </div>
            <div id="div-img-logo-tech"></div>
          </Col>
        </Row>
        <Row id="row2-profile">
          <Col xs={12} className="d-flex flex-column col-info">
            <div className="div-info d-flex flex-column ">
              <h4 id="title-info">Info</h4>
              <p id="p-info">
                Ciao a tutti, mi chiamo Claudio, sono uno Junior Full-Stack
                Developer con conoscenze Front-End (HTML, CSS, BOOTSTRAP,
                JAVASCRIPT, TYPESCRIPT, REACT) e Back-End (JAVA, JAVA OOP, JPA,
                DB RELAZIONALI, POSTGRES, SPRING). Mi piace creare applicazione
                web che siano facili da usare (user-friendly) con interfacce
                creative e intuitive.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profilo;
