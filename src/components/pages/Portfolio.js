import { Col, Container, Row } from "react-bootstrap"
import Project from "../Project"

const projectData = [
    {
        "title": "P6MRDb",
        "tech": "HTML / CSS / Bulma / Javascript / jQuery",
        "deployed": "https://rsimer.github.io/P6MRDb/",
        "github": "https://github.com/Chase-Rivera/P6MRDb",
        "img": "P6MRDb project"
    },
    {
        "title": "Facility Management",
        "tech": "Handlebars / Javascript / Node.js / Express.js / MySQL / Bootstrap / Sequelize / Moment",
        "deployed": "https://dn-fac-mgmt.herokuapp.com/login",
        "github": "https://github.com/Chase-Rivera/Facility_Management",
        "img": "facilitymanagement project"
    },
    {
        "title": "Bar Hoppers",
        "tech": "MERN stack / JWT / Javascript / CSS / GraphQL",
        "deployed": "https://dn-bar-hoppers.herokuapp.com/",
        "github": "https://github.com/Chase-Rivera/bar-hoppers",
        "img": "barhoppers project"
    },
    {
        "title": "JS Code Quiz",
        "tech": "Javascript / HTML / CSS",
        "deployed": "https://chase-rivera.github.io/JS-code-quiz/",
        "github": "https://github.com/Chase-Rivera/JS-code-quiz",
        "img": "jsquiz project"
    },
    {
        "title": "Employee Tracker",
        "tech": "Node.js / Inquirer / MySQL",
        "deployed": "N/A",
        "github": "https://github.com/Chase-Rivera/employee-tracker",
        "img": "emptrack project"
    },
    {
        "title": "Workout Tracker",
        "tech": "MongoDB / Mongoose / Express.js",
        "deployed": "https://cr-workout-tracker.herokuapp.com/",
        "github": "https://github.com/Chase-Rivera/workout-tracker",
        "img": "fittrack project"
    },
]

export default function Portfolio() {
    return (
        <div>
        <div className="banner">
            <h1>My Portfolio!</h1>
        </div>
        <div className="pageview">
            <Container className="pagetext">
                <Row>
                    <Col md={2}>
                        <h2>Projects</h2>
                    </Col>
                    <Col md={10}>
                        <div className="pagecontent">
                            <Row xs={1} md={2}>
                                {projectData.map((project) => (
                                    <Project
                                    title={project.title}
                                    tech={project.tech}
                                    deployed={project.deployed}
                                    github={project.github}
                                    img={project.img}
                                    key={project.title}/>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
       </div>                             
    )
};