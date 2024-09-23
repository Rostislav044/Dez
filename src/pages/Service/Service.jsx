


import React from 'react';
import Img1 from './ImgService/free1.png';
import Img2 from './ImgService/free2.png';
import Img3 from './ImgService/free3.png';
import Img4 from './ImgService/free4.png';
import './Service.scss';

const translations = {
    pService: {
        ru: 'Санитарная служба "Гарант"  ',
        ua: 'Санітарна служба "Гарант"  ',
    },
    serviceSpan: {
        ru: '- Гарантированное уничтожение тараканов, клопов и других насекомых!',
        ua: '- Гарантоване знищення тарганів, клопів та інших комах!',
    },
    imgText: [
        {
            ru: 'Гарантия до 12 месяцев!',
            ua: 'Гарантія до 12 місяців!',
        },
        {
            ru: 'Бесплатная консультация!',
            ua: 'Безкоштовна консультація!',
        },
        {
            ru: 'Безопасные препараты!',
            ua: 'Безпечні препарати!',
        },
        {
            ru: 'Работаем без выходных!',
            ua: 'Працюємо без вихідних!',
        }
    ]
};

const Service = ({ currentLanguage }) => {
    return (
        <>
            <p className='pService'>
                {translations.pService[currentLanguage]} <br />
                <span className='serviceSpan'>
                    {translations.serviceSpan[currentLanguage]}
                </span>
            </p>
            <div className='service-img-grid'>
                {translations.imgText.map((text, index) => (
                    <div key={index} className='grid-item'>
                        <img src={index === 0 ? Img3 : index === 1 ? Img2 : index === 2 ? Img1 : Img4} alt={`img${index + 1}`} className='grid-photo' />
                        <p>{text[currentLanguage]}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Service;
