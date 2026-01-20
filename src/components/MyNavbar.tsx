import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router";

const MyNavbar: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Container id="container-navbar">
        <Row className="ms-0 me-0">
          <Col xs={12} className="text-center">
            <h3 id="title-portfolio">My-Portfolio</h3>
          </Col>
          <Col xs={12}>
            <div
              id="div-link"
              className="d-flex justify-content-around align-items-center"
            >
              <Link
                to={"/profile"}
                className={
                  location.pathname === "/profile"
                    ? "text-link-active text-decoration-none"
                    : "text-link text-decoration-none "
                }
              >
                Profilo
              </Link>

              <Link
                to={"/progetti"}
                className={
                  location.pathname === "/progetti"
                    ? "text-link-active text-decoration-none"
                    : "text-link text-decoration-none "
                }
              >
                Progetti
              </Link>

              <Link
                to={"/contatti"}
                className={
                  location.pathname === "/contatti"
                    ? "text-link-active text-decoration-none"
                    : "text-link text-decoration-none "
                }
              >
                Contatti
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyNavbar;
