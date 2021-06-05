import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function Header() {
  return (
      <>
    <Jumbotron fluid>
      <Container className="aboutMe">
        <h1>Nicole (Nikki) Allen</h1>
        <p>About me:</p>
      </Container>
    </Jumbotron>
    </>
  )
}

export default Header
