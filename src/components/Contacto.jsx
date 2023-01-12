import { Col, Form, Row, Button } from "react-bootstrap";

let Contacto = () => {
  return (
    <>
      <Form
      action="https://formsubmit.co/ghiorzi24@gmail.com"
      method="POST"
      >
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Paula" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Ghiorzi" />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="qwerty@email.com" />
          </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" placeholder="1234 Main St" />
        </Form.Group>


        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City and Country</Form.Label>
            <Form.Control type="text" name="City and Country" placeholder="La Plata, Argentina" />
          </Form.Group>


          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" name="message" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Send it!
        </Button>
      </Form>
    </>
  );
};
export default Contacto;
