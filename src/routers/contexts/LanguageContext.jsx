




import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

 export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ua');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'ru' ? 'ua' : 'ru'));
  };

  return (

    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


