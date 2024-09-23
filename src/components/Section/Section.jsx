


// import React, { useState, useEffect } from "react";
// import Img1 from './ImgSection/covid-2.jpg';
// import Img2 from './ImgSection/papik-2.jpg';
// import Img3 from './ImgSection/pexels.jpg';
// import Img4 from './ImgSection/unr.jpg';
// import Img5 from './ImgSection/left.svg';
// import Img6 from './ImgSection/right.svg';
// import './Section.scss';

// const images = [Img1, Img2, Img3, Img4];

// const translations = {
//     sectionTitle: {
//         ru: 'Как проводится обработка от вредителей:',
//         ua: 'Як проводиться обробка від шкідників:'
//     },
//     sectionP: {
//         ru: 'Перед обработкой необходимо подготовить помещение:',
//         ua: 'Перед обробкою доведеться підготувати приміщення:'
//     },
//     sectionList: [
//         {
//             ru: 'убрать в другое место еду, посуду;',
//             ua: 'прибрати до іншого місця їжу, посуд.'
//         },
//         {
//             ru: 'если что-то переместить невозможно - накрыть плотным материалом и герметично это упаковать;',
//             ua: 'якщо перемістити щось неможливо - накрити щільним матеріалом і герметично це запакувати;'
//         },
//         {
//             ru: 'протереть все поверхности, вымыть пол, избавиться от мусора;',
//             ua: 'протерти всі поверхні, вимити підлогу, позбутися сміття;'
//         },
//         {
//             ru: 'плотно закрыть все окна;',
//             ua: 'щільно закрити усі вікна;'
//         },
//         {
//             ru: 'вынести все живые растения (токсины инсектицида могут быть для них смертельными);',
//             ua: 'винести всі живі рослини (токсини інсектициду для них можуть бути смертельними);'
//         },
//         {
//             ru: 'вывести из комнаты, где проводится обработка, домашних животных и людей.',
//             ua: 'вивести з кімнати, де проводиться обробка, домашніх тварин та людей.'
//         }
//     ],
//     finalP: {
//         ru: 'По возможности следует выполнить небольшой ремонт: закрыть или хотя бы заклеить щели — так, чтобы вредители не могли выбраться из помещения, которое обрабатывается.',
//         ua: 'По можливості слід виконати невеликий ремонт: закрити або хоча б заклеїти щілини - так, щоб шкідники не могли вибратися з приміщення, що обробляється.'
//     }
// };

// const Section = ({ currentLanguage }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
//         }, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     const handlePrev = () => {
//         setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
//     };

//     const handleNext = () => {
//         setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
//     };

//     return (
//         <>
//             <p className="sectionTitle">
//                 {translations.sectionTitle[currentLanguage]}
//             </p>
//             <p className="sectionP">
//                 {translations.sectionP[currentLanguage]}
//             </p>
//             <ul className="sectionList">
//                 {translations.sectionList.map((item, index) => (
//                     <li key={index}>{item[currentLanguage]}</li>
//                 ))}
//             </ul>
//             <p className="sectionP">
//                 <span className="highlight-text">
//                     {translations.finalP[currentLanguage].split(':')[0]}:
//                     <br />
//                     {/* <br /> */}
//                 </span>
//                 {translations.finalP[currentLanguage].split(':')[1]}
//             </p>
//             <div className="slider">
//                 <button className="prev" onClick={handlePrev}>
//                     <img src={Img5} alt="Left Arrow" className="arrow-logo" />
//                 </button>
//                 <img src={images[currentIndex]} alt={`Img${currentIndex + 1}`} className="imgSection" />
//                 <button className="next" onClick={handleNext}>
//                     <img src={Img6} alt="Right Arrow" className="arrow-logo" />
//                 </button>
//             </div>
//         </>
//     );
// };

// export default Section;


import React, { useState, useEffect } from "react";
import Img1 from './ImgSection/covid-2.jpg';
import Img2 from './ImgSection/papik-2.jpg';
import Img3 from './ImgSection/pexels.jpg';
import Img4 from './ImgSection/unr.jpg';
import Img5 from './ImgSection/left.svg';
import Img6 from './ImgSection/right.svg';
import './Section.scss';

const images = [Img1, Img2, Img3, Img4];

const translations = {
    sectionTitle: {
        ru: 'Как проводится обработка от вредителей:',
        ua: 'Як проводиться обробка від шкідників:'
    },
    sectionP: {
        ru: 'Перед обработкой необходимо подготовить помещение:',
        ua: 'Перед обробкою доведеться підготувати приміщення:'
    },
    sectionList: [
        {
            ru: 'убрать в другое место еду, посуду;',
            ua: 'прибрати до іншого місця їжу, посуд.'
        },
        {
            ru: 'если что-то переместить невозможно - накрыть плотным материалом и герметично это упаковать;',
            ua: 'якщо перемістити щось неможливо - накрити щільним матеріалом і герметично це запакувати;'
        },
        {
            ru: 'протереть все поверхности, вымыть пол, избавиться от мусора;',
            ua: 'протерти всі поверхні, вимити підлогу, позбутися сміття;'
        },
        {
            ru: 'плотно закрыть все окна;',
            ua: 'щільно закрити усі вікна;'
        },
        {
            ru: 'вынести все живые растения (токсины инсектицида могут быть для них смертельными);',
            ua: 'винести всі живі рослини (токсини інсектициду для них можуть бути смертельними);'
        },
        {
            ru: 'вывести из комнаты, где проводится обработка, домашних животных и людей.',
            ua: 'вивести з кімнати, де проводиться обробка, домашніх тварин та людей.'
        }
    ],
    finalP: {
        ru: 'По возможности следует выполнить небольшой ремонт: закрыть или хотя бы заклеить щели — так, чтобы вредители не могли выбраться из помещения, которое обрабатывается.',
        ua: 'По можливості слід виконати невеликий ремонт: закрити або хоча б заклеїти щілини - так, щоб шкідники не могли вибратися з приміщення, що обробляється.'
    }
};

const Section = ({ currentLanguage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    return (
        <>
            <p className="sectionTitle">
                {translations.sectionTitle[currentLanguage]}
            </p>
            <p className="sectionP">
                {translations.sectionP[currentLanguage]}
            </p>
            <ul className="sectionList">
                {translations.sectionList.map((item, index) => (
                    <li key={index}>{item[currentLanguage]}</li>
                ))}
            </ul>
            <p className="sectionP finalP-class">
                <span className="highlight-text">
                    {translations.finalP[currentLanguage].split(':')[0]}:
                    <br />
                </span>
                {translations.finalP[currentLanguage].split(':')[1]}
            </p>
            <div className="slider">
                <button className="prev" onClick={handlePrev}>
                    <img src={Img5} alt="Left Arrow" className="arrow-logo" />
                </button>
                <img src={images[currentIndex]} alt={`Img${currentIndex + 1}`} className="imgSection" />
                <button className="next" onClick={handleNext}>
                    <img src={Img6} alt="Right Arrow" className="arrow-logo" />
                </button>
            </div>
        </>
    );
};

export default Section;
