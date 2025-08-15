import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import me1 from '../assets/images/me.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={me1} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hassnain08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/syedhassnainabbas/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Syed Hassnain Abbas</h1>
          <p>FAST - 5th Semester.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/hassnain08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/syedhassnainabbas/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
