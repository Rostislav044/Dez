

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../BurgerMenu/JpgBurgerMenu/Tick.svg';
import './BurgerMenu.scss';

function BurgerMenu({ currentLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveMenu(null);
    }
  };

  const handleCloseMenu = () => {
    setActiveMenu(null); // Закрываем подменю
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const translations = {
    disinsection: {
      ru: "Дезинсекция",
      ua: "Дезінсекція"
    },
    disinfection: {
      ru: "Дезинфекция",
      ua: "Дезінфекція"
    },
    deratization: {
      ru: "Дератизация",
      ua: "Дератизація"
    },
    dezodoration: {
      ru: "Дезодорация",
      ua: "Дезодорація"
    },
    fymigaz: {
      ru: "Фумигация",
      ua: "Фумігація"
    },
    pricing: {
      ru: "Стоимость услуг",
      ua: "Вартість послуг"
    },
    contact: {
      ru: "Контакты",
      ua: "Контакти"
    }
  };

  const getSubMenuItems = (menu) => {
    const withLogo = (text) => (
      <>
        <img src={logo1} alt="logo" className="menu-logo" />
        {text}
      </>
    );

    switch (menu) {
      case 'disinsection':
        return [
          withLogo(currentLanguage === 'ua' ? 'Знищення тарганів.' : 'Уничтожение тараканов.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення клопів.' : 'Уничтожение клопов.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення мурах.' : 'Уничтожение муравьев.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення бліх.' : 'Уничтожение блох.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення кліщів.' : 'Уничтожение клещей.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення мух.' : 'Уничтожение мух.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення молі.' : 'Уничтожение моли.'),
          withLogo(currentLanguage === 'ua' ? 'Дезінсекція підвалів.' : 'Дезинсекция подвалов.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення павуків.' : 'Уничтожение пауков.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення термітів.' : 'Уничтожение термитов.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення короїда.' : 'Уничтожение короедов.')
        ];
      case 'disinfection':
        return [
          withLogo(currentLanguage === 'ua' ? 'Боротьба з грибком та цвіллю.' : 'Борьба с грибком и плесенью.'),
          withLogo(currentLanguage === 'ua' ? 'Боротьба з вірусами та мікробами.' : 'Борьба с вирусами и микробами.'),
          withLogo(currentLanguage === 'ua' ? 'Обробка після туберкульозу.' : 'Обработка после туберкулеза.'),
          withLogo(currentLanguage === 'ua' ? 'Обробка від коронавірусу.' : 'Обработка от коронавируса.'),
          withLogo(currentLanguage === 'ua' ? 'Дезінфекція підвалу.' : 'Дезинфекция подвала.')
        ];
      case 'deratization':
        return [
          withLogo(currentLanguage === 'ua' ? 'Знищення мишей.' : 'Уничтожение мышей.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення щурів.' : 'Уничтожение крыс.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення кротів.' : 'Уничтожение кротов.')
        ];
      case 'dezodoration':
        return [
          withLogo(currentLanguage === 'ua' ? 'Запах в авто.' : 'Запах в автомобиле.'),
          withLogo(currentLanguage === 'ua' ? 'Запах тютюну, прокуренності.' : 'Запах табака, прокуренности.'),
          withLogo(currentLanguage === 'ua' ? 'Запах після пожежі.' : 'Запах после пожара.'),
          withLogo(currentLanguage === 'ua' ? 'Трупний запах.' : 'Трупный запах.'),
          withLogo(currentLanguage === 'ua' ? 'Запах тварин.' : 'Запах животных.'),
          withLogo(currentLanguage === 'ua' ? 'Запах після ремонту.' : 'Запах после ремонта.'),
          withLogo(currentLanguage === 'ua' ? 'Запах вогкості, грибка.' : 'Запах сырости, плесени.')
        ];
      case 'fymigaz':
        return [
          withLogo(currentLanguage === 'ua' ? 'Фумігація складов.' : 'Фумигация складов.'),
          withLogo(currentLanguage === 'ua' ? 'Фумігація зерна, зерносховищ.' : 'Фумигация зерна, зернохранилищ.'),
          withLogo(currentLanguage === 'ua' ? 'Фумігація дерев’яних будинків.' : 'Фумигация деревянных домов.')
        ];
      case 'pricing':
        return [
          currentLanguage === 'ua' ? 'Позбавимо від шкідників із гарантією!' : 'Избавим от вредителей с гарантией!',
          <>
            <img src={logo1} alt="logo" className="menu-logo" />
            {currentLanguage === 'ua' ? 'Вартість обробки для квартир ' : 'Стоимость обработки для квартир '}
            <span className="red-text1">
            {currentLanguage === 'ua' ? 'від:' : 'от:'}
              </span>
            <span className="red-text">1500 грн.</span>
          </>,
          <>
            <img src={logo1} alt="logo" className="menu-logo" />
            {currentLanguage === 'ua' ? 'Вартість обробки для підприємств ' : 'Стоимость обработки для предприятий '}
            <span className="red-text1">
            {currentLanguage === 'ua' ? 'від:' : 'от:'}
              </span>
            <span className="red-text">2500 грн.</span>
          </>,
          <>
            <img src={logo1} alt="logo" className="menu-logo" />
            {currentLanguage === 'ua' ? 'Вартість обробки земельних ділянок ' : 'Стоимость обработки земельных участков '}
            <span className="red-text1">
            {currentLanguage === 'ua' ? 'від:' : 'от:'}
              </span>
            <span className="red-text">2000 грн.</span>
          </>
        ];
      case 'contact':
        return [
          withLogo(currentLanguage === 'ua' ? 'Контакти Подменю 1' : 'Контакты Подменю 1'),
          withLogo(currentLanguage === 'ua' ? 'Контакти Подменю 2' : 'Контакты Подменю 2'),
          withLogo(currentLanguage === 'ua' ? 'Контакти Подменю 3' : 'Контакты Подменю 3')
        ];
      default:
        return [];
    }
  };

  return (
    <div className="burger-menu" ref={menuRef}>
      <div className="burger-icon" onClick={handleToggle}>
        <span className='burger-menu_span'>
          {currentLanguage === 'ua' ? 'Наші послуги' : 'Наши услуги'}
        </span>
        <span className="burger-symbol">☰</span>
      </div>
      <hr />
      {isOpen && (
        <ul className="menu-items">
          <li onClick={() => handleMenuClick('disinsection')}>
            <a href="#services">{translations.disinsection[currentLanguage]}</a>
          </li>
          <li onClick={() => handleMenuClick('disinfection')}>
            <a href="#services">{translations.disinfection[currentLanguage]}</a>
          </li>
          <li onClick={() => handleMenuClick('deratization')}>
            <a href="#services">{translations.deratization[currentLanguage]}</a>
          </li>
          <li onClick={() => handleMenuClick('dezodoration')}>
            <a href="#services">{translations.dezodoration[currentLanguage]}</a>
          </li>
          <li onClick={() => handleMenuClick('fymigaz')}>
            <a href="#services">{translations.fymigaz[currentLanguage]}</a>
          </li>
          <li onClick={() => handleMenuClick('pricing')}>
            <a href="#services">{translations.pricing[currentLanguage]}</a>
          </li>
          <li onClick={() => handleMenuClick('contact')}>
            <a href="#contact">{translations.contact[currentLanguage]}</a>
          </li>
        </ul>
      )}
      {activeMenu && (
        <div className="sub-menu-container">
          <button className="close-button" onClick={handleCloseMenu}>&times;</button>
          <ul className={`sub-menu ${activeMenu === 'disinsection' ? 'two-columns' : ''}`}>
            {getSubMenuItems(activeMenu).map((item, index) => (
              <li key={index} className={activeMenu === 'disinfection' ? 'li2' : ''}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;


