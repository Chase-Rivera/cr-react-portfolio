import { Col, Container, Form, Row } from "react-bootstrap";

export function Contact() {

    return (
        <>
            <div className="banner">
                <h1>Contact</h1>
            </div>
            <div className="pageview">
                <Container className="pagetext">
                    <Row>
                        <Col md={2}>
                            <h2>Contact Me Here!</h2>
                        </Col>
                        <Col md={10}>
                            <div className="pagecontent">
                                <Container>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="nameform">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Your name"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="emailform">
                                            <Form.Label>E-mail</Form.Label>
                                            <Form.Control type="email" placeholder="Your e-mail"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="textform">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={6} placeholder="Your message here"></Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}