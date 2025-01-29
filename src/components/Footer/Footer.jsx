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
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAVpJREFUSEvtVtsNwkAMSycBNoFJgEmASYBJYBMYhbpqqtQ4faAKPuj9VPR8ceJzUgr70Sp+xGsz8deU/2+pl2a2C1o/zexC2jMG2wqH953xotRHMzsQ0cbM7uEdEjsLI6zqBOLWrTy7JmzDF4kBAjgukILcF6oABs+4mFglCPX2figSIxiq4Sy5amDilSAWE6tqWxh2tZK7lWnJojAxqKr2VJ9rVGJiVP0gGWEeSOR33UWcnUdiraX6WEkZ77qLWEnMV1UloIhV1sC6XIoYimyFP94kVuaKUqh7guTX0oALYS7RYWlh3Rt127DDM4LsPRszNVcMkEk+CXnfR0INFUXsrlXDJfpjUMUOysakmlw+n3n0vpH3VezBs1Hp+3GAZOQwJ1oLz1F/fTwg2qZvVmfjt2mvoRWz6fDbHY/hUlVBC+TcFc1n9hPisa6W+Jl4EhmHBJmlHqLSJJgX0JhJHxXCSKsAAAAASUVORK5CYII=" alt="VK" />
              </a>
            </li>
            <li>
              <a href="/instagram">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAblJREFUSEvNl7EuREEUhr99EzS8gUaCREWEghq9Qkco2EQiUSn0qGkIjQbReAUV76Fg/2TOZtydmTt3drO702x2MzPf+f8558xsixGN1oi4jD14wjljnymjXnNcTCkWZBuYBxZyNvPmfAM3ne8nsXUxsEAvDWGh6QpgpxN4jwsx8BeQY2tObIJPVieGwFfO4pxNYyoF84/n2invzg+B+1Hrq9NRGbxHdQj8WyPVEsfOTUdy7I7GB/gCasF1SdWOZKpVgAIQRKOaI4t+klUVp8AGnQE2gTkHeAdugU8XlOChUQSWrVo4DVwCS5Wdn4Fd4AdQcobqvghsao+A04iiQ+AsoboIrCagkngCliPgB2DNqQ01nyKwLXoEViLge2Dd9QDZXR1FYLP6wNkZYu8D54O22upwCrgAVitkqd1zpRRrQEWKxbG2p767Acw6+Adw56C6jYrKSUWviGM9OHXVpaDaTwFbc+l5gaTAFowWq67fvA61lXGb/WtWoV7tN/eI+MY/1/Zq7VhnWWOqlx/dtSHFsluqh/4QUFSDgjd++hh86I+96jnKgVzr+37eliRR9pqx/yeRrSR34h/wNmcf6GENxQAAAABJRU5ErkJggg==" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="/facebook">
                <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAPdJREFUSEvtV9ENglAMPDbRSdRJdBPdRJ1EN9FN1EteSa0PQqEvIKEJCR/Q467XvlJhpKhGwsWkgFcAeEXG3SbLMX5FIqZcTwBrndcCbwHcCgAz5Q5AzfzvgSnlNTHivfjkrNQLZ/xTvwRmyxYO/JVQMSwOrH1CiQ8fg26U3PItoYzpUiaUYE0JnIuiwGxFSjw/YJlCdLQOPWrJPLSdmtrHynsCcIzs467A1miDzSVTimR4f1Gs6GiRe29OucHAWlLbTvN1tbBeGC811h3Q2k7swYdj5/KYi2O2HrG5LdOz3jKRntdNJ1On9dZBuP+jk/qT6E/D8eYbiZ5ZH2Ps4QkAAAAASUVORK5CYII=" alt="Facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
