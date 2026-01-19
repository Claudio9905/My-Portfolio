import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const Intro: React.FC = () => {
  const [loaderIntro, setLoaderIntro] = useState(true);
  const navigate = useNavigate();

  console.log("Caricamento pagina in corso...");
  setTimeout(() => {
    setLoaderIntro(false);
    console.log("Caricamento Portfolio completato");
  }, 5000);

  return (
    <>
      {loaderIntro && (
        <Container
          id="intro"
          className="d-flex justify-content-center align-items-center"
        >
          <Row>
            <Col>
              <div className="terminal-loader">
                <div className="terminal-header">
                  <div className="terminal-title">Status</div>
                  <div className="terminal-controls">
                    <div className="control close"></div>
                    <div className="control minimize"></div>
                    <div className="control maximize"></div>
                  </div>
                </div>
                <div className="text">Loading...</div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {loaderIntro === false && navigate("/profile")}
    </>
  );
};

export default Intro;
