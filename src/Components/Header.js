import React from 'react'
import Button from 'react-bootstrap/Button'

function Header() {
  return (
    <div className="header">
      <div className="photoContainer">
        <img
          className="photo"
          src="/headshot.png"
          alt="girl with arms crossed smirking"
        />
      </div>
      <div className="about">
        <h1>Nicole (Nikki) Allen</h1>
        <span>Full-Stack Software Developer</span>
        <p>
          Welcome to my portfolio! I am a Full-Stack Software Developer having the time of my life
          showing off my skills in the Tech Industry. I come with an extensive
          background in finance, production management, and customer service.
          But, I have found my true calling in Software Development. 
        </p>
        <div className="buttons">
          <Button className="btn" variant="outline-dark" href="/assets/Nicole Allen Resume.pdf" >
            Resume
          </Button>
          <Button variant="outline-dark" href="https://github.com/nicole-allen679">
            GitHub
          </Button>
          <Button
            variant="outline-dark"
            href="https://www.linkedin.com/in/nicole-allen-37736b20b"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
