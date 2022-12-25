import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid={true}>
        <Row>
          <Col md={6}>{new Date().getFullYear()} © Pruebas.</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer