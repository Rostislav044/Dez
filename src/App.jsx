




// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';


// import RootRoters from './routers/RootRoters.jsx';
// import './App.css';

// function App() {
//   return (
//     <div>
//   <RootRoters />
// </div>

    
//   );
// }

// export default App;



import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PagesDisinsection from './pages/PagesAboutUs/PagesDisinsection';
import PagesHome from './pages/PagesHome/PagesHome.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


import RootRoters from './routers/RootRoters.jsx';




const App = () => {
  const [language, setLanguage] = useState('ru');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'ru' ? 'ua' : 'ru'));
  };

  return (
    <div>
      {/* <Header onLanguageToggle={toggleLanguage} currentLanguage={language} />
      <Main currentLanguage={language} />
      <PagesDisinsection currentLanguage={language} /> */}
      {/* <RootRoters /> */}
      <PagesHome/>
    </div>
  );
};

export default App;




