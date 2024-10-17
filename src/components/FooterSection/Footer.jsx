import React from 'react'
import "../FooterSection/Footer.scss"
import { LogoFooter } from '../SVGs/svgs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
<section class="footer">

  <a href='/' className="footer-logo">

  <LogoFooter/>
  </a>
  <div className="footer-info">
    <div className="left">
      <p className="address"> G07 Al Masaood Tower, <span> Riggat Al Buteen, Deira, Dubai, United Arab Emirates.</span>  </p>
      <div className="contact">
        <div className="email">
          <p>Email</p>
          <p className='email-address'>info@mjtourism.com</p>
        </div>

        <div className="phone">
          <p>Phone</p>
          <p className='phone-number'>+97143966691</p>
        </div>
      </div>
    </div>
    <div className="right">
      <p className='text-bold'>Start your dream trip with us <br /> today</p>
      <div class="contact">
          <button class="primary-btn contact-button">
          <FontAwesomeIcon icon={faWhatsapp} style={{ width: '20px', height: '20px' }} />

            +971524478011</button>
        </div>
    </div>
  </div>

  <div className="border-bottom"></div>
  <div className="copyright">
    <div className="left">
      <p className="copyright-text">© 2024 <span>MJdream</span> Alrights Reserved.</p>
    </div>
    <div className="right">
    <FontAwesomeIcon icon={faXTwitter} className='footer-icon'/>
    <FontAwesomeIcon icon={faLinkedin} className='footer-icon'/>
    <FontAwesomeIcon icon={faInstagram} className='footer-icon'/>
    </div>
  </div>
</section>
  )
}

export default Footer