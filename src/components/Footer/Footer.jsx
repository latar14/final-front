import React from "react";
import styles from "./footer.module.css";
import telegramLogo from '../../images/telegram-icon.png'
import instagramLogo from '../../images/instagram-icon.png'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.firstFooter}>
        <div className={styles.firstFooterContent}>
          <label>LOCATIONS & CONTACT</label>
          <div>
            <p> 7 G N Trosheva</p>
            <p>Grozny</p>
            <p>Chechnya</p>
            <p>auctionbyintocode11@gmail.com</p>
          </div>
        </div>
        <div className={styles.firstFooterContent}>
          <label>POPULAR PAGES</label>
          <div>
            <p>About Us</p>
            <p>Specialist Departments</p>
            <p>Auction Results</p>
            <p>Services</p>
          </div>
        </div>
        <div className={styles.firstFooterContent}>
          <label>SERVICES</label>
          <div>
            <p>Private Sales</p>
            <p>Open Sales</p>
            <p>Sign In</p>
            <p>Create account</p>
          </div>
        </div>
        <div className={styles.firstFooterContentImages}>
          <label>STAY CONNECTED</label>
          <div>
            <p>Our Telegram:</p>
            <a href='/' title="Go to our telegram page"><img className={styles.footerLogo} src={telegramLogo} alt="Telegram" /></a>
            <p>Out Instagram:</p>
            <a href='/' title="Go to our instagram page"><img className={styles.footerLogo} src={instagramLogo} alt="Instagram"></img></a>
          </div>
        </div>
      </div>
      <div className={styles.secondFooter}>
        <ul>
          <li> Conditions of Sale </li>
          <li> - </li>
          <li> Privacy & Security </li>
          <li> - </li>
          <li> Website Terms of Use </li>
          <li> - </li>
          <li>Copyright © 2022 Lyon & Turnbull.</li>
          <li>All Rights Reserved</li>
        </ul>
        <h3>Powered by Go Auction</h3>
      </div>
    </div>
  );
};

export default Footer;
