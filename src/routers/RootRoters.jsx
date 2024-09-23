




// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import PagesHome from '../pages/PagesHome/PagesHome';
// import PagesDisinsection from '../pages/PagesAboutUs/PagesDisinsection';
// import PagesPrices from '../pages/PagesPrices/PagesPrices';

// const RootRouters = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<PagesHome />} />
//       <Route path="/PagesDisinsection" element={<PagesDisinsection />} />
//       <Route path="/PagesPrices" element={<PagesPrices />} />
//       {/* Добавьте дополнительные маршруты здесь, если необходимо */}
//     </Routes>
//   );
// };

// export default RootRouters;






// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PagesHome from '../pages/PagesHome/PagesHome';
// import PagesDisinsection from '../pages/PagesAboutUs/PagesDisinsection';
// import PagesPrices from '../pages/PagesPrices/PagesPrices';

// const RootRouters = () => {
//   // Определите базовый путь
//   const basename = import.meta.env.DEV ? "/" : "/Dez";

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<PagesHome />} />
//         <Route path="/PagesDisinsection" element={<PagesDisinsection />} />
//         <Route path="/PagesPrices" element={<PagesPrices />} />
//         {/* Добавьте дополнительные маршруты здесь, если необходимо */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default RootRouters;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PagesHome from '../pages/PagesHome/PagesHome';
import PagesDisinsection from '../pages/PagesAboutUs/PagesDisinsection';
import PagesPrices from '../pages/PagesPrices/PagesPrices';

const RootRouters = () => {
  return (
    <Routes>
      {/* <Route path="/Dez/" element={<PagesHome />} /> */}
      <Route path="/" element={<div>Home</div> } />
      <Route path="/PagesDisinsection" element={<PagesDisinsection />} />
      <Route path="/PagesPrices" element={<PagesPrices />} />
      {/* Добавьте дополнительные маршруты здесь, если необходимо */}
    </Routes>
  );
};

export default RootRouters;
