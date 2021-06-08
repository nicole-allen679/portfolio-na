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
          Welcome to my portfolio! I am a Full-Stack Software Developer excited
          to show off my skills in the Tech Industry. I come with an extensive
          background in finance, production management, and customer service.
          Thank you for visiting!
        </p>
        <div className="buttons">
          <Button variant="dark" href="/nallen_resume_2021.pdf">
            Resume
          </Button>
          <Button variant="dark" href="https://github.com/nicole-allen679">
            GitHub
          </Button>
          <Button
            variant="dark"
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
