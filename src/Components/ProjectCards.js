import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProjectCards() {
  return (
    <div className="projects">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/src/Assets/adoptablesf.png" />
        <Card.Body>
          <Card.Title>Adoptable South Florida</Card.Title>
          <Card.Text>
            Final Project at Boca Code. Web app that showcases adoptable cats in
            South Florida. 
          </Card.Text>
          <Button href="https://adoptablesfl.web.app/" variant="dark">
            Demo
          </Button>
          <Button
            href="https://github.com/nicole-allen679/adoptablesf"
            variant="dark"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Affirmations</Card.Title>
          <Card.Text>
            Web app to post daily Affirmations with Google Authentication from
            Firebase Auth.
          </Card.Text>
          <Button href="https://affirm-na.web.app/" variant="dark">
            Demo
          </Button>
          <Button
            href="https://github.com/nicole-allen679/Affirmations"
            variant="dark"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Todo Too</Card.Title>
          <Card.Text>Classic To do app with an authentication twist.</Card.Text>
          <Button
            href="https://github.com/nicole-allen679/todo-auth"
            variant="dark"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Jon's Restaurants</Card.Title>
          <Card.Text>
            Restaurants near Boca Code.
          </Card.Text>
          <Button
            href="https://github.com/bocacode/restaurants-webapp"
            variant="dark"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProjectCards
