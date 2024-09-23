
// import React, { useContext } from 'react';
// import Header from '../../components/Header/Header';
// import Main from '../../components/Main/Main';
// import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
// import SlideComponent from '../../components/SlideComponent/SlideComponent';
// import useLang from '../../hooks/LengHook.jsx';
// import './PagesHome.scss';
// import Service from '../Service/Service.jsx';
// import Section from '../../components/Section/Section.jsx';
// import Section2 from '../../components/Section2/Section2.jsx';
// import Reviews from '../../components/Reviews/Reviews.jsx';
// import Footer from '../../components/Footer/Footer.jsx';
// import FormConsultation from '../../components/FormConsultation/FormConsultation.jsx';
// const PagesHome = () => {
//   const { language, toggleLanguage } = useLang();

//   return (
//     <div className='divBodyPagesHome'>
//       <Header currentLanguage={language} onLanguageToggle={toggleLanguage} />
//       {/* <FormConsultation currentLanguage={language} /> */}
//       <FormConsultation currentLanguage={language} onClose={() => {/* Функция закрытия формы */} } />

//       <Main currentLanguage={language} />
//       <BurgerMenu currentLanguage={language}  />
//       <SlideComponent currentLanguage={language} />
//       <Service currentLanguage={language}/>
//       <Section currentLanguage={language}/>
//       <Section2 currentLanguage={language}/>
//       <Reviews/>
//       <Footer currentLanguage={language}/>
//     </div>
//   );
// };

// export default PagesHome;


import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import SlideComponent from '../../components/SlideComponent/SlideComponent';
import useLang from '../../hooks/LengHook.jsx';
import './PagesHome.scss';
import Service from '../Service/Service.jsx';
import Section from '../../components/Section/Section.jsx';
import Section2 from '../../components/Section2/Section2.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import FormConsultation from '../../components/FormConsultation/FormConsultation.jsx';

const PagesHome = () => {
  const { language, toggleLanguage } = useLang();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleConsultationClick = () => {
    setIsFormVisible(true);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
  };

  return (
    <div className='divBodyPagesHome'>
      <Header
        currentLanguage={language}
        onLanguageToggle={toggleLanguage}
        onConsultationClick={handleConsultationClick}
      />
      {isFormVisible && <FormConsultation currentLanguage={language} onClose={handleFormClose} />}
      <Main currentLanguage={language} />
      <BurgerMenu currentLanguage={language} />
      <SlideComponent currentLanguage={language} />
      <Service currentLanguage={language} />
      <Section currentLanguage={language} />
      <Section2 currentLanguage={language} />
      <Reviews currentLanguage={language} />
      <Footer currentLanguage={language} />
    </div>
  );
};

export default PagesHome;

