// import React from "react";
//  import './Section2.scss';


//  const Section2 = () => {
//     return (
//         <>
//         <p className="Section2P1"> 
//         Методи обробки :
//         </p>
//         <p className="Section2P2">
//         Холодний туман :
// <span className="Section2PSpan" > 
//     <br />
// У своїй роботі ми використовуємо кілька методів, але найефективнішим є застосування спеціальних
//  генераторів для знищення тарганів холодним туманом. Цей спосіб дозволяє ефективно позбутися 
//  небажаних сусідів у житлових будинках, на організаціях різного типу та різної площі. 
//  Він ефективніший, ніж обприскування аерозолями або спреями, оскільки частинки засобу значно 
//  менше (до 50 мікрон) і рівномірно розподіляються по поверхні.
// Холодний туман - це останнє слово в дезінсекції. Спеціальні хімічні компоненти, що входять до 
// складу дезінфекційних засобів, використовуються для генерації активної пари. Пара заповнює все 
// приміщення, проникаючи в найважчі місця і вражаючи вогнища поширення комах. Таким чином 
// досягається висока ефективність дезінфекції квартири від шкідників. Туман знищує як дорослих 
// особин, так і личинок. Безпечний у закритих приміщеннях і не ушкоджує предметів інтер'єру. 
// Зараження відбувається при контакті.
// Для утворення холодного туману використовується парогенератор, який спочатку втягує повітря, 
// змішує з дрібнодисперсними частинками інсектициду і під високим тиском випускає його через 
// форсунки. Температура повітряного потоку у разі не перевищує кімнатну. При цьому в кімнаті не
//  залишається неприємного запаху.
// </span>
//         </p>
//         <p className="Section2P2">
//         Гарячий туман:
        
//         <span className="Section2PSpan" >
//             <br />
//         Принцип роботи з гарячим туманом схожий, але завдяки підігріву частки кошти стають ще 
//         меншими, і проникають у всі доступні місця. Головним недоліком такого методу є запах, 
//         який залишається триваліший час, але в будь-якому випадку таке знищення шкідників
//         спеціалізованою службою  дуже ефективно і дозволить надовго забути про 
//         проблеми. Гаряча (до 50 градусів) пара заповнює все приміщення. Гарантовано знищуються 
//         всі гнізда шкідників. При цьому метод гарячого туману абсолютно безпечний для людини та
//          домашніх тварин. Туман не пошкоджує і залишає слідів на меблів. 
//         </span>
//         </p>
//         <p className="Section2P2">
//         Бар'єрний захист:
//         </p>
// <span className="Section2PSpan">
//  <br />
//  Додаткова гарантія обробки від шкідників. Зазвичай використовується в парі з одним із 
//  перерахованих вище методів. Периметр приміщення після проведення дезінсекції варто задуматися
//   про профілактику появи шкідниківу будинку. Є ряд простих заходів, дотримуючись яких, ви можете
//    значно знизити привабливість своєї квартири для неприємних сусідів, що обробляється 
//    спеціальним препаратом, який діє на дорослих особин і при контакті вбиває їх. 
// </span>




//         </>
//     )
//  }


//  export default  Section2;


import React from "react";
import './Section2.scss';

const translations = {
    sectionTitle1: {
        ru: 'Методы обработки:',
        ua: 'Методи обробки:'
    },
    sectionTitle2: {
        ru: 'Холодный туман:',
        ua: 'Холодний туман:'
    },
    sectionText1: {
        ru: `В своей работе мы используем несколько методов, но самым эффективным является
            применение специальных генераторов для уничтожения тараканов холодным туманом. 
            Этот способ позволяет эффективно избавиться от нежелательных соседей в жилых 
            домах, на предприятиях различного типа и различной площади. Он эффективнее, чем 
            опрыскивание аэрозолями или спреями, поскольку частицы средства значительно меньше 
            (до 50 микрон) и равномерно распределяются по поверхности.
            Холодный туман — это последнее слово в дезинсекции. Специальные химические компоненты, 
            входящие в состав дезинфицирующих средств, используются для генерации активного пара. 
            Пар заполняет все помещение, проникая в самые труднодоступные места и поражая очаги 
            распространения насекомых. Таким образом достигается высокая эффективность 
            дезинфекции квартиры от вредителей. Туман уничтожает как взрослых особей, так и личинок. 
            Безопасен в закрытых помещениях и не повреждает предметы интерьера. Заражение происходит при контакте.
            Для образования холодного тумана используется парогенератор, который сначала втягивает воздух, 
            смешивает с мелкодисперсными частицами инсектицида и под высоким давлением выпускает его 
            через форсунки. Температура воздушного потока при этом не превышает комнатную. При этом в 
            комнате не остается неприятного запаха.`,
        ua: `У своїй роботі ми використовуємо кілька методів, але найефективнішим є застосування спеціальних
            генераторів для знищення тарганів холодним туманом. Цей спосіб дозволяє ефективно позбутися 
            небажаних сусідів у житлових будинках, на організаціях різного типу та різної площі. 
            Він ефективніший, ніж обприскування аерозолями або спреями, оскільки частинки засобу значно 
            менше (до 50 мікрон) і рівномірно розподіляються по поверхні.
            Холодний туман - це останнє слово в дезінсекції. Спеціальні хімічні компоненти, що входять до 
            складу дезінфекційних засобів, використовуються для генерації активної пари. Пара заповнює все 
            приміщення, проникаючи в найважчі місця і вражаючи вогнища поширення комах. Таким чином 
            досягається висока ефективність дезінфекції квартири від шкідників. Туман знищує як дорослих 
            особин, так і личинок. Безпечний у закритих приміщеннях і не ушкоджує предметів інтер'єру. 
            Зараження відбувається при контакті.
            Для утворення холодного туману використовується парогенератор, який спочатку втягує повітря, 
            змішує з дрібнодисперсними частинками інсектициду і під високим тиском випускає його через 
            форсунки. Температура повітряного потоку у разі не перевищує кімнатну. При цьому в кімнаті не
            залишається неприємного запаху.`
    },
    sectionTitle3: {
        ru: 'Горячий туман:',
        ua: 'Гарячий туман:'
    },
    sectionText2: {
        ru: `Принцип работы с горячим туманом схож, но благодаря подогреву частицы средства 
            становятся еще меньше и проникают во все доступные места. Главным недостатком этого метода 
            является запах, который остается на более длительное время, но в любом случае такое уничтожение 
            вредителей специализированной службой очень эффективно и позволит надолго забыть о проблеме. 
            Горячий (до 50 градусов) пар заполняет все помещение. Гарантированно уничтожаются все гнезда 
            вредителей. При этом метод горячего тумана абсолютно безопасен для человека и домашних животных. 
            Туман не повреждает и не оставляет следов на мебели.`,
        ua: `Принцип роботи з гарячим туманом схожий, але завдяки підігріву частки кошти стають ще 
            меншими, і проникають у всі доступні місця. Головним недоліком такого методу є запах, 
            який залишається триваліший час, але в будь-якому випадку таке знищення шкідників
            спеціалізованою службою  дуже ефективно і дозволить надовго забути про 
            проблеми. Гаряча (до 50 градусів) пара заповнює все приміщення. Гарантовано знищуються 
            всі гнізда шкідників. При цьому метод гарячого туману абсолютно безпечний для людини та
            домашніх тварин. Туман не пошкоджує і не залишає слідів на меблів.`
    },
    sectionTitle4: {
        ru: 'Барьерная защита:',
        ua: 'Бар\'єрний захист:'
    },
    sectionText3:  {
        ru: `Дополнительная гарантия обработки от вредителей. Обычно используется в паре с одним из 
            перечисленных выше методов. Периметр помещения после проведения дезинсекции обрабатывается 
            специальным препаратом, который действует на взрослых особей и при контакте убивает их. 
            После дезинсекции стоит задуматься о профилактике появления вредителей в доме. Есть ряд 
            простых мер, соблюдая которые, вы сможете значительно снизить привлекательность своего 
            жилья для неприятных соседей.`,
        ua: `Додаткова гарантія обробки від шкідників. Зазвичай використовується в парі з одним із 
            перерахованих вище методів. Периметр приміщення після проведення дезінсекції обробляється 
            спеціальним препаратом, який діє на дорослих особин і при контакті вбиває їх. Після 
            дезінсекції варто задуматися про профілактику появи шкідників у будинку. Є ряд простих 
            заходів, дотримуючись яких, ви можете значно знизити привабливість своєї квартири для 
            неприємних сусідів.`
    }
};

const Section2 = ({ currentLanguage }) => {
    return (
        <>
            <p className="Section2P1">
                {translations.sectionTitle1[currentLanguage]}
            </p>
            {/* <br /> */}
            <p className="Section2P2">
                {translations.sectionTitle2[currentLanguage]}
                {/* <br /> */}
                <span className="Section2PSpan">
                    <br />
                    {translations.sectionText1[currentLanguage]}
                </span>
            </p>
            <p className="Section2P2">
                {translations.sectionTitle3[currentLanguage]}
                {/* <br /> */}
                <span className="Section2PSpan">
                    <br />
                    {translations.sectionText2[currentLanguage]}
                </span>
            </p>
            <p className="Section2P2">
                {translations.sectionTitle4[currentLanguage]}
                {/* <br /> */}
                <span className="Section2PSpan">
                    <br />
                    {translations.sectionText3[currentLanguage]}
                </span>
            </p>
        </>
    );
};

export default Section2;
