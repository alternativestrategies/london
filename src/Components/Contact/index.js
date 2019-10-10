import React from 'react';
import {Form, Col, Button, Container, Row} from 'react-bootstrap';

const Contact = () => {
    return (
<Container>
<Row>   
  <Col md={6} className='mx-auto'>
  <h2 className="text-center pb-4 form-headline">Contact Us!</h2>
  <Form className="form" >
  <Form.Row>
    <Form.Group as={Col} controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" />
    </Form.Group>

    <Form.Group as={Col} controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  />
  </Form.Group>

{/* textarea for comments */}
  <Form.Group controlId="message">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="6" />
  </Form.Group>

<div className="text-center">
<Button variant="primary" type="submit" >
    Submit
  </Button>
</div>
  
</Form>

          </Col>
        </Row>
      </Container>
 
    );
}

export default Contact;