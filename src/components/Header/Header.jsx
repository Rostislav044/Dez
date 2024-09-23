


import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import Logotip2 from './ImgHeader/free7.jpg';
import logoTelefon from './ImgHeader/free_phone.png';
import logoTelegtam from './ImgHeader/free_telegram.png';
import logoViber from './ImgHeader/free_viber.png';
import logoEmail from './ImgHeader/free_email.png';
import logoLeft2 from './ImgHeader/free6.jpg';
import logo3 from './ImgHeader/angle.svg';
import './Header.scss';

const translations = {
  ua: {
    header: {
      title: "Санітарна служба",
      subtitle: "\"Гарант\"",
      buttonText: "Безкоштовна консультація,<br /> розрахунок вартості."
    }
  },
  ru: {
    header: {
      title: "Санитарная служба",
      subtitle: "\"Гарант\"",
      buttonText: "Бесплатная консультация,<br /> расчёт стоимости."
    }
  }
};

const Header = ({ onLanguageToggle, currentLanguage, onConsultationClick }) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  const [showLanguageOptions, setShowLanguageOptions] = React.useState(false);

  // const handleBack = () => {
  //   navigate(-1);
  // };

  const toggleLanguageOptions = () => {
    setShowLanguageOptions(prevState => !prevState);
  };

  const handleLanguageChange = (language) => {
    onLanguageToggle(language);
    setShowLanguageOptions(false);
  };

  const { title, subtitle, buttonText } = translations[currentLanguage].header;

  return (
    <>
      <div className='headerLogoContacts'>
        <div className='divLogotip'>
          <div className='linkHom'>
            <img src={Logotip2} alt="logotip" className='logotip2' />
            <p className='logoText'>
              {title} <br />
              <span className='LogoTextSpan'> {subtitle} </span>
            </p>
          </div>
          <div className='logoleftHom'>
            {/* {location.pathname !== '/' && (
              <img src={logoLeft2} alt="logoLeft" className='logoleftHomJpg' onClick={handleBack} />
            )} */}

            <button className='btnConsultation' onClick={onConsultationClick}>
              <p className='btnConsultationP' dangerouslySetInnerHTML={{ __html: buttonText }} />
            </button>

            <div className='lang-container'>
              <button onClick={toggleLanguageOptions} className='lang'>
                <span>{currentLanguage === 'ua' ? 'ua' : 'ru'}</span>
                <img src={logo3} alt="angle" className='lang-icon' />
              </button>
              {showLanguageOptions && (
                <div className='language-options'>
                  <button onClick={() => handleLanguageChange(currentLanguage === 'ua' ? 'ru' : 'ua')}>
                    {currentLanguage === 'ua' ? 'ru' : 'ua'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='logotel'>
          <a href="tel:+380123456789" className='aLogoTel'>
            <img src={logoTelefon} alt="logoTelefon" className='logoTelefon' />
            <p className="header__phone_p">+380988560505</p>
          </a>
          <div className='logoDiv3'>
            <a href="https://t.me/Rostislav_044">
              <img src={logoTelegtam} alt="logoTelegram" className='logoTelegram' />
            </a>
            <a href="viber://chat?number=+380988560505">
              <img src={logoViber} alt="logoViber" className='logoViber' />
            </a>
            <a href="mailto:0988560505r@@gmail.com">
              <img src={logoEmail} alt="logoEmail" className='logoEmail' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
