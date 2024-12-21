 import React from 'react';
import './Footer.css';
import logo from "./logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} />
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/excursions">Экскурсии</a></li>
            <li><a href="/cabinet">Личный кабинет</a></li>
          </ul>
        </div>

        <div className="footer-contacts">
          <ul>
            <li>
              <i className="fa fa-whatsapp"></i> +7 964 944 18 74
            </li>
            <li>
              <i className="fa fa-paper-plane"></i> +7 918 919 98 28
            </li>
            <li>
              <i className="fa fa-telegram"></i> Телеграм-бот PeroTravel
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <ul>
            <li>
              <a href="mailto:office@perotravel.ru">
                <i className="fa fa-envelope"></i> office@perotravel.ru
              </a>
            </li>
            <li>
              <a href="/vk">
                <img src="/path/to/vk-icon.png" alt="VK" />
              </a>
            </li>
            <li>
              <a href="/instagram">
                <img src="/path/to/instagram-icon.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="/facebook">
                <img src="/path/to/facebook-icon.png" alt="Facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
