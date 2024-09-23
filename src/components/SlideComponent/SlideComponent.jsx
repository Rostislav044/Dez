



// import React, { useState, useEffect } from 'react';
// import logo5 from '../SlideComponent/ImgSlideComponent/left.svg';
// import logo6 from '../SlideComponent/ImgSlideComponent/right.svg'; 
// import logo1 from './ImgSlideComponent/3d.jpg';
// import logo2 from './ImgSlideComponent/supermarket.jpg';
// import slide3 from './ImgSlideComponent/red.jpg';
// import slide4 from './ImgSlideComponent/shop.jpg';
// import './SlideComponent.scss'; 

// const images = [
//   { src: logo1, alt: 'Logo1', className: 'logo1' },
//   { src: logo2, alt: 'Logo2', className: 'logo2' },
//   { src: slide3, alt: 'slide3', className: 'slide3' },
//   { src: slide4, alt: 'slide4', className: 'slide4' },
// ];

// const SlideComponent = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(goToNext, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="slide-container">
//       <h1 className='slideTextH'>Проводимо обробку у всіх типах приміщень</h1>
//       <div className="slider">
//         <button onClick={goToPrevious} className="arrow left-arrow">
//           <img src={logo5} alt="Left Arrow" className="arrow-logo" />
//         </button>
//         <img src={images[currentIndex].src} alt={images[currentIndex].alt} className={images[currentIndex].className} />
//         <button onClick={goToNext} className="arrow right-arrow">
//           <img src={logo6} alt="Right Arrow" className="arrow-logo" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SlideComponent;


import React, { useState, useEffect } from 'react';
import logo5 from '../SlideComponent/ImgSlideComponent/left.svg';
import logo6 from '../SlideComponent/ImgSlideComponent/right.svg'; 
import logo1 from './ImgSlideComponent/3d.jpg';
import logo2 from './ImgSlideComponent/supermarket.jpg';
import slide3 from './ImgSlideComponent/red.jpg';
import slide4 from './ImgSlideComponent/shop.jpg';
import './SlideComponent.scss'; 

const images = [
  { src: logo1, alt: 'Logo1', className: 'logo1' },
  { src: logo2, alt: 'Logo2', className: 'logo2' },
  { src: slide3, alt: 'slide3', className: 'slide3' },
  { src: slide4, alt: 'slide4', className: 'slide4' },
];

const translations = {
  slideTextH: {
    ru: "Проводим обработку во всех типах помещений",
    ua: "Проводимо обробку у всіх типах приміщень",
  }
};

const SlideComponent = ({ currentLanguage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slide-container">
      <h1 className='slideTextH'>
        {translations.slideTextH[currentLanguage]}
      </h1>
      <div className="slider">
        <button onClick={goToPrevious} className="arrow left-arrow">
          <img src={logo5} alt="Left Arrow" className="arrow-logo" />
        </button>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className={images[currentIndex].className} />
        <button onClick={goToNext} className="arrow right-arrow">
          <img src={logo6} alt="Right Arrow" className="arrow-logo" />
        </button>
      </div>
    </div>
  );
};

export default SlideComponent;
