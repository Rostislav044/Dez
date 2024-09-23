
import React from 'react';
import foto1 from '../Main/ImgMain/pexels.jpg';
import './Main.scss';

const Main = ({ currentLanguage }) => {
  const translateObj = {
    main: {
      sectionMainText: {
        ru: "Уничтожение тараканов, клопов и других насекомых!",
        ua: "Знищення тарганів, клопів та інших комах!"
      },
      slogan: {
        ru: "Избавим от вредителей с гарантией!",
        ua: "Позбавимо від шкідників із гарантією!"
      }
    }
  };

  return (
    <main>
      <section>
        <hr />
        <h3 className='sectionMainText'>
          {translateObj.main.sectionMainText[currentLanguage]}
        </h3>
        <p className='slogan'>
          {translateObj.main.slogan[currentLanguage]}
        </p>
        <div className='sectionDivImg' >
        <img src={foto1} alt="foto1" className='sectionImg'/>
        </div>
      </section>
    </main>
  );
}

export default Main;
