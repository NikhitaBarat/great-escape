import React from "react";
import "./footer.styles.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <div>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class=" item">
                <h2>Quick Links</h2>
                <ul>
                  <li><a href="/">About Us</a></li>
                  <li><a href="/">Your Profile</a></li>
                  <li><a href="/">Pricing</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>
              <div class=" item">
                <h2>Useful Links</h2>
                <ul>
                  <li><a href="/">Privacy Policy</a></li>
                  <li><a href="/">Terms and Conditions</a></li>
                  <li><a href="/">Disclaimer</a></li>
                  <li><a href="/">Pricing</a></li>
                </ul>
              </div>
              <div class=" item">
                <h2>Legal Terms</h2>
                <ul>
                  <li><a href="/">Payments</a></li>
                  <li><a href="/">Subscriptions</a></li>
                  <li><a href="/">Gift Cards</a></li>
                  <li><a href="/">Support</a></li>
                </ul>
              </div>
              <div class=" item text">
                <h1>Great Escape</h1>
                <p>
                  Great Escape is a travel planner website. It recommends some features which allows to plan every aspect of your trip, from transport and accommodation to booking hotels, spending time in water sports. It shows numerous booking options, price details, and provides you the option to create your own custom-made travel bucket list.
                </p>
                <div class=" item social">
                  <ul>
                    <li><a href="#"><FacebookIcon className="fab" /></a></li>
                    <li><a href="#"><PinterestIcon className="fab" /></a></li>
                    <li><a href="#"><LinkedInIcon className="fab" /></a></li>
                    <li><a href="#"><InstagramIcon className="fab" /></a></li>
                    <li><a href="#"><TwitterIcon className="fab"/></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div> <hr />
          <p class="copyright">Great Escape © 2022</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
