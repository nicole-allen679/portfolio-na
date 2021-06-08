import React from 'react'
import Card from 'react-bootstrap/Card'

function ProjectCards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Adoptable South Florida</Card.Title>
        <Card.Text>
          Final Project at Boca Code. Web app that showcases adoptable cats in South Florida.
        </Card.Text>
        <Button href="https://adoptablesfl.web.app/" variant="dark">Demo</Button>
      </Card.Body>
    </Card>
  )
}

export default ProjectCards
