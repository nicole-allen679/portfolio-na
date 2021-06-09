import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProjectCards() {
  return (
    <div className="projects">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          className="cardImg"
          variant="top"
          src="/assets/adoptablesf.png"
        />
        <Card.Body>
          <Card.Title>Adoptable South Florida</Card.Title>
          <Card.Text>
            Final Project at Boca Code. Web app that showcases adoptable cats in
            South Florida. App built in React / Bootstrap on the front end and
            in Node and Express on the API. While the database is help in
            Firestore.
          </Card.Text>
          <div className="projectBtn2">
            <Button
              href="https://adoptablesfl.web.app/"
              variant="outline-dark"
            >
              Demo
            </Button>
            <br />
            <Button
              href="https://github.com/nicole-allen679/adoptablesf"
              variant="outline-dark"
            >
              GitHub
            </Button>
            <br />
            <Button
              href="https://github.com/nicole-allen679/adoptablesf-api"
              variant="outline-dark"
            >
              GitHub API
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          className="cardImg"
          variant="top"
          src="/assets/affirmations.png"
        />
        <Card.Body>
          <Card.Title>Affirmations</Card.Title>
          <Card.Text>
            Web app to post daily Affirmations with Google Authentication from
            Firebase Auth. Frontend built in React and Bootstrap.
          </Card.Text>
          <div className="projectBtn1">
            <Button href="https://affirm-na.web.app/" variant="outline-dark">
              Demo
            </Button>
            <br />
            <Button
              href="https://github.com/nicole-allen679/Affirmations"
              variant="outline-dark"
            >
              GitHub
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          className="cardImg"
          variant="top"
          src="/assets/todo-too.png"
        />
        <Card.Body>
          <Card.Title>Todo Too</Card.Title>
          <Card.Text>
            Classic To do app with an authentication twist. Front end built in
            React and AntD.
          </Card.Text>
          <Button
            className="projectBtn"
            href="https://github.com/nicole-allen679/todo-auth"
            variant="outline-dark"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          className="cardImg"
          variant="top"
          src="/assets/restaurants.png"
        />
        <Card.Body>
          <Card.Title>Jon's Restaurants</Card.Title>
          <Card.Text>
            Collaborated with Boca Code and the students in our cohort to build
            a web app that shows restaurants near Boca Code with photos and
            ratings. Built in React and Bootstrap.
          </Card.Text>
          <Button
            className="projectBtn"
            href="https://github.com/bocacode/restaurants-webapp"
            variant="outline-dark"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProjectCards
