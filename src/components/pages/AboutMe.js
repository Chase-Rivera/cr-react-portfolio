import { Col, Container, Image, Row } from "react-bootstrap"
import me from '../../assets/me.jpeg'

export default function AboutMe(){
    return (
        <>
            <div className="banner">
                <h1>Welcome to my Portfolio!</h1>
            </div>
            <div className="pageview">
                <Container className="pagetext">
                    <Row>
                        <Col md={2}>
                            <div>
                                <h2>About Me!</h2>
                            </div>
                        </Col>
                        <Col md={10}>
                            <div className="pagecontent">
                                <p><Image src={me} roundedCircle className="avatar"/>
                                Howdy! My name is Chase Rivera and I am an aspiring full-stack web developer ccurrently based in Lynnwood, WA.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}