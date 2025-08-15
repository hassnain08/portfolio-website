import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/hassnain08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/syedhassnainabbas/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Portfolio designed & built by <a href="https://www.linkedin.com/in/syedhassnainabbas/" target="_blank" rel="noreferrer">Syed Hassnain Abbas.</a> </p>
    </footer>
  );
}

export default Footer;