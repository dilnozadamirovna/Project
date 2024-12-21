import React from 'react'
import Navbar from '../Navbar/Navbar'
import backgroundImage from './img1.png'
import './Header.css'
import { useNavigate } from 'react-router-dom'
export default function Header() {
   const navigate = useNavigate();

   const handleNavigate =() => {
    navigate('/trip');
   }
  const appStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      };

    return (
    <div style={appStyle}>
<Navbar />
<div className='head2'>
   <div className='text'>
    <h1 className='h11'>ПУТЕШЕСТВУЙ</h1>
    <h1 className='h12'>вместис</h1>
    <h1 className='h13'>PEROTRAVEL</h1>
   </div> 
   <div className='icon1'>
   <a href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAbNJREFUSEvtlt11wjAMhaW8FCdL0EkKk1AmKUwCmzSbNB0iMX2xWvnYHMVRfimHF/wITj7r3is5CA9a+CAuPMF3Ud5auwGANQCUxpiKIXeV2lr7jkQfAQqEuDfGnO8CZljm3BshvqfyEdHRFMXhX8E/dX0ixCipahkhbo0x5c3gIOXuzzsGylUR4hGJTvLHVZ5frZ3tMQclc26nSekrITq7LItQeaBqleev8SCTwWlQFC25yj0AVKHSlgrS31Gph4IiwfGlrAYSfWoGTwJPCUp4eRlapBqC8l7pb6tia+1ak6hvosiEjkFZfulvCm41ex+Qw/NSFOylX8H7VnqVZ8tVnm/l751whdPHacNjLi4fntiHHlrXB0TkvYMr9XdKuHzrOIDvOHEi4dI0HKK0f9UDSFtmt5N84xyoFqzRirXjh8R35vCA1p1gLQLPrTYN42KpL03zFa+5sVDx/1qwllZ8BXNowLkNIvJFITvgeiYtWEvB5CsRV1xoQe7lDjydWLdITX1VKMFTg7WoYh6t8btJ8zgMFS99n7+LwFMCFT7uQE659LnJ9/EU4Jw9T/ActW7a+wuqxvUfPNfgxwAAAABJRU5ErkJggg=="/> </a>
  <a href="/"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZ1JREFUSEvtVVtywjAMlPhpnByi4SZwkpKTlJ4EepLmJs0lgtsfBGLioChyHjNM+WjyxQjZa6131whP+vBJuLAA/xnz/5hq730O5/Ou5Xq1qpxzR8l9r4f/NPq4PLZfS7Wv6z0ivksgQtw658pQ897vkOighUCIa+dcJes/p9MXAGxkLUnTFu8O7P0GibhZfmWSplsBnDc9uTpgB9g6IBIdX7KsCOskMG/K03ROqaf+resDId6vBAD0xNa0uqejaotufdLIlbQTW9MS0YfLsr1kqQvsPU/9reiuCLEIdz0EzIKy1idputa66PnYovJKf3vXQ8ARijsC7d2xEpCeGgJdEeDiOulbTx8GxVHgxoOWbSoi+lwBvGpxxXJW2meU6tBg0TY3yLUwo+LSKWUIZS42xMAHHwlvh0oPnD3KRStcuD5qJ2ucWExayRXyWUevBT7pWWz8yXHaicoALlNpAJzzgK11y/RJwI3Sb68XIrJtxrLajl9hr8nA0ufN75DppX6Z2oOq3JfP7Gzg2bKOLFiAH8Xk6D4L1aMUParhAqweES5HBDPGAAAAAElFTkSuQmCC"/></a>
  <a href="/"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAi1JREFUSEvNl79uE0EQxmc2RW7XafIGNk14gzRI2BIVCJEi1Nh9CjoiKAgSUiQqCvqEGpog0qSJIxpegSr3Ene7J6z90Jo7687e++Nz5HgbS9bu/vb7ZnZ2jumeBt8TlzYbrLXups5kv6VGSSnHTVwsVTyFWTtk5sdE1G+yWW5OCOCr7HROytZ5wVrrPgPXS8J800Mwj3wueMEmjm+JqNbWhgcLA6V683MXwEkUnYF52HBTr0oiCvPhYeB8u9MZ5ScvgFdUO1Nn4tiFKsuNBdU+MGrUThOHhMiyt8vA+zQ0eXA+XNXguqQC8MGXqbkb4A7gbHajkCNgHuSTrKC4CpxBkyR5aCeTlyzEI7KWWIhfYP4WBMEfHUUnzOzgC6MteBwoNTDG7BHwhYAnhZ2BK9raOgLwl4Ez371vBZ6p1fodgI8+Rcz8dlvK0zLV7cD/i8C5iaJLYn5aknw/AqVelIWrLXiaGCaOfxLRsxLwRaDUgdZ6mNpdjEab5JpZHcfHIDr1ga21b9TOzqc7tdpdEVf2jDEPyNrPRPR8LrkuIMRrKWVYVoBaWe0gWdnTWvcYOGSi/bTS/EaSfJe7u+Eq18lVIVdx/C9NxVNXBXWbgbnnHMk2ni8gVeBsTcjA2ApxM/3D2i4zv6p7zQKlCixfrc4X9xUeqcLS+keizrI2J2n0LLqCn3Yf620EnKI7hC/X+mTwtTd783FM29tG1q/c3rZJomXWbPaXxDJKms79B+uJZS7jQsbPAAAAAElFTkSuQmCC"/></a>
   </div>
</div>
<button className='blue' onClick={handleNavigate}>К экскурсиям <span  >→</span></button>
    </div>
  )
}
