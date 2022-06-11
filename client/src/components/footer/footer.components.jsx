import React from 'react'
import './footer.styles.css'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div>
      <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class=" item">
                        <h2>Services</h2>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class=" item">
                        <h2>About</h2>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class=" item text">
                        <h1>Greate Escape</h1>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                </div>
                <div class=" item social">
                  {/* <a href="#"><FacebookIcon /></a>
                  <a href="#"><InstagramIcon /></a>
                  <a href="#"><TwitterIcon /></a>
                  <a href="#"><LinkedInIcon /></a> */}
                </div>
            </div>
            <p class="copyright">Great Escape © 2022</p>

        </footer>
    </div>
    </div>
  )
}

export default Footer