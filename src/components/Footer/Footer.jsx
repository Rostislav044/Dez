



// import React from "react";
// import Img1 from './ImgFooter/free7.jpg';
// import './Footer.scss';

// const translations = {
//     footerLogoTextSpan2: {
//         ru: 'Нам доверяют с 2012 года!',
//         ua: 'Нам довіряють з 2012 року!'
//     },
//     services: {
//         dezinsektsiya: {
//             ru: 'Услуги  дезинсекции :',
//             ua: 'Послуги з дезінсекції :'
//         },
//         dezinfektsiya: {
//             ru: 'Услуги  дезинфекции :',
//             ua: 'Послуги з дезінфекції :'
//         },
//         deratizatsiya: {
//             ru: 'Услуги  дератизации :',
//             ua: 'Послуги з дератизації :'
//         },
//         dezodoratsiya: {
//             ru: 'Услуги по дезодорации :',
//             ua: 'Послуги з дезодорації :'
//         },
//         fumigatsiya: {
//             ru: 'Услуги  фумигации :',
//             ua: 'Послуги з фумігації :'
//         }
//     },
//     serviceDetails: {
//         dezinsektsiya: {
//             ru: 'Уничтожение тараканов, постельных клопов, муравьев, блох, клещей, мух, моли, дезинсекция подвалов, уничтожение пауков, термитов, короедов.',
//             ua: 'Знищення тарганів, клопів, мурах, бліх, кліщів, мух, молі, дезінсекція підвалів, знищення павуків, термітів, короїдів.'
//         },
//         dezinfektsiya: {
//             ru: 'Борьба с грибком и плесенью, вирусами и микробами, обработка после туберкулеза, коронавируса, дезинфекция подвала.',
//             ua: 'Боротьба з грибком і цвіллю, вірусами та мікробами, обробка після туберкульозу, коронавірусу, дезінфекція підвалу.'
//         },
//         deratizatsiya: {
//             ru: 'Уничтожение мышей, крыс, кротов.',
//             ua: 'Знищення мишей, щурів, кротів.'
//         },
//         dezodoratsiya: {
//             ru: 'Удаление запахов в авто, табачного дыма, после пожара, трупного запаха, животных, после ремонта, сырости и плесени.',
//             ua: 'Видалення запахів в авто, тютюнового диму, після пожежі, трупного запаху, тварин, після ремонту, вогкості та цвілі.'
//         },
//         fumigatsiya: {
//             ru: 'Фумигация складов, зерна, зерносховищ, деревянных домов.',
//             ua: 'Фумігація складських приміщень, зерна, зерносховищ, дерев’яних будинків.'
//         }
//     }
// };

// const Footer = ({ currentLanguage }) => {
//     return (
//         <div className="footerDivContainer">
//             <div className="footerTopRow">
//                 <div className="footerDivLogo">
//                     <img src={Img1} alt="Logo" className="img1" />
//                     <p className="footerLogoText footerLogoText2">
//                         {currentLanguage === 'ru' ? 'Служба дезинфекции' : 'Служба дезінфекції'} <br />
//                         <span className="footerLogoTextSpan1">Дезинфектор</span>
//                     </p>
//                 </div>
//                 <div className="footerLogoDiv">
//                     <span className="footerLogoTextSpan2">
//                         {translations.footerLogoTextSpan2[currentLanguage]}
//                     </span>
//                 </div>
//             </div>

//             <div className="footerDivServices">
//                 <p className="footerDivServicesP">
//                     {translations.services.dezinsektsiya[currentLanguage]}
//                     <br />
//                     <span className="footerDivServicesSpan">
//                         ({translations.serviceDetails.dezinsektsiya[currentLanguage]})
//                     </span>
//                 </p>
//                 <p className="footerDivServicesP">
//                     {translations.services.dezinfektsiya[currentLanguage]}
//                     <br />
//                     <span className="footerDivServicesSpan">
//                         ({translations.serviceDetails.dezinfektsiya[currentLanguage]})
//                     </span>
//                 </p>
//                 <p className="footerDivServicesP">
//                     {translations.services.deratizatsiya[currentLanguage]}
//                     <br />
//                     <span className="footerDivServicesSpan">
//                         ({translations.serviceDetails.deratizatsiya[currentLanguage]})
//                     </span>
//                 </p>
//                 <p className="footerDivServicesP">
//                     {translations.services.dezodoratsiya[currentLanguage]}
//                     <br />
//                     <span className="footerDivServicesSpan">
//                         ({translations.serviceDetails.dezodoratsiya[currentLanguage]})
//                     </span>
//                 </p>
//                 <p className="footerDivServicesP">
//                     {translations.services.fumigatsiya[currentLanguage]}
//                     <br />
//                     <span className="footerDivServicesSpan">
//                         ({translations.serviceDetails.fumigatsiya[currentLanguage]})
//                     </span>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Footer;


import React from "react";
import Img1 from './ImgFooter/free7.jpg';
import './Footer.scss';

const translations = {
    footerLogoTextSpan2: {
        ru: 'Нам доверяют с 2012 года!',
        ua: 'Нам довіряють з 2012 року!'
    },
    services: {
        dezinsektsiya: {
            ru: 'Услуги дезинсекции :',
            ua: 'Послуги з дезінсекції :'
        },
        dezinfektsiya: {
            ru: 'Услуги дезинфекции :',
            ua: 'Послуги з дезінфекції :'
        },
        deratizatsiya: {
            ru: 'Услуги дератизации :',
            ua: 'Послуги з дератизації :'
        },
        dezodoratsiya: {
            ru: 'Услуги по дезодорации :',
            ua: 'Послуги з дезодорації :'
        },
        fumigatsiya: {
            ru: 'Услуги фумигации :',
            ua: 'Послуги з фумігації :'
        }
    },
    serviceDetails: {
        dezinsektsiya: {
            ru: 'Уничтожение тараканов, постельных клопов, муравьев, блох, клещей, мух, моли, дезинсекция подвалов, уничтожение пауков, термитов, короедов.',
            ua: 'Знищення тарганів, клопів, мурах, бліх, кліщів, мух, молі, дезінсекція підвалів, знищення павуків, термітів, короїдів.'
        },
        dezinfektsiya: {
            ru: 'Борьба с грибком и плесенью, вирусами и микробами, обработка после туберкулеза, коронавируса, дезинфекция подвала.',
            ua: 'Боротьба з грибком і цвіллю, вірусами та мікробами, обробка після туберкульозу, коронавірусу, дезінфекція підвалу.'
        },
        deratizatsiya: {
            ru: 'Уничтожение мышей, крыс, кротов.',
            ua: 'Знищення мишей, щурів, кротів.'
        },
        dezodoratsiya: {
            ru: 'Удаление запахов в авто, табачного дыма, после пожара, трупного запаха, животных, после ремонта, сырости и плесени.',
            ua: 'Видалення запахів в авто, тютюнового диму, після пожежі, трупного запаху, тварин, після ремонту, вогкості та цвілі.'
        },
        fumigatsiya: {
            ru: 'Фумигация складов, зерна, зерносховищ, деревянных домов.',
            ua: 'Фумігація складських приміщень, зерна, зерносховищ, дерев’яних будинків.'
        }
    }
};

const Footer = ({ currentLanguage }) => {
    return (
        <div className="footerDivContainer">
            <div className="footerTopRow">
                <div className="footerDivLogo">
                    <img src={Img1} alt="Logo" className="img1" />
                    <div className="footerLogoTextContainer">
                        <p className="footerLogoText1">
                            {currentLanguage === 'ru' ? 'Санитарная служба' : 'Санітарна служба'}
                        </p>
                        <p className="footerLogoText2"> "Гарант"</p>
                    </div>
                </div>
                <div className="footerLogoDiv">
                    <span className="footerLogoTextSpan2">
                        {translations.footerLogoTextSpan2[currentLanguage]}
                    </span>
                </div>
            </div>

            <div className="footerDivServices">
                <p className="footerDivServicesP">
                    {translations.services.dezinsektsiya[currentLanguage]}
                    <br />
                    <span className="footerDivServicesSpan">
                        ({translations.serviceDetails.dezinsektsiya[currentLanguage]})
                    </span>
                </p>
                <p className="footerDivServicesP">
                    {translations.services.dezinfektsiya[currentLanguage]}
                    <br />
                    <span className="footerDivServicesSpan">
                        ({translations.serviceDetails.dezinfektsiya[currentLanguage]})
                    </span>
                </p>
                <p className="footerDivServicesP">
                    {translations.services.deratizatsiya[currentLanguage]}
                    <br />
                    <span className="footerDivServicesSpan">
                        ({translations.serviceDetails.deratizatsiya[currentLanguage]})
                    </span>
                </p>
                <p className="footerDivServicesP">
                    {translations.services.dezodoratsiya[currentLanguage]}
                    <br />
                    <span className="footerDivServicesSpan">
                        ({translations.serviceDetails.dezodoratsiya[currentLanguage]})
                    </span>
                </p>
                <p className="footerDivServicesP">
                    {translations.services.fumigatsiya[currentLanguage]}
                    <br />
                    <span className="footerDivServicesSpan">
                        ({translations.serviceDetails.fumigatsiya[currentLanguage]})
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Footer;
