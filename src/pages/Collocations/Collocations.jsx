// import React, { useState, useEffect } from 'react';
// import CollocationData from '../../components/Data/CollocationData.json'
// import css from './Colocations.module.css';

// const Collocations = () => {
//   const [openAccordions, setOpenAccordions] = useState([]);
//   useEffect(() => {
//     const savedState = CollocationData.map(
//       (_, i) => localStorage.getItem(`accordion-${i}`) === 'true'
//     );
//     setOpenAccordions(savedState);
//   }, []);

//   const toggleAccordion = index => {
//     const updatedAccordions = [...openAccordions];
//     updatedAccordions[index] = !openAccordions[index];

//     // Збереження стану в localStorage
//     localStorage.setItem(`accordion-${index}`, updatedAccordions[index]);

//     setOpenAccordions(updatedAccordions);
//   };

//   return (
//     <div className={css.article}>
//       <h1>Collocations</h1>

//       <div className={css.article}>
//         <h2>Take</h2>
//         <p>to click the button to start reading</p>

//         <div className={css.flex}>
//           <ul className={css.orderedList}>
//             <li>
//               <button className={css.collocationButton}>
//                 Take action
//                 <span className={css.tooltiptext}>
//                   to do something to solve a problem
//                 </span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take a break
//                 <span className={css.tooltiptext}>
//                   to stop working for a short period of time
//                 </span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take care
//                 <span className={css.tooltiptext}>
//                   to be careful or look after someone/something
//                 </span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take responsibility
//                 <span className={css.tooltiptext}>
//                   to accept being in charge of something
//                 </span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take part
//                 <span className={css.tooltiptext}>
//                   to participate in something
//                 </span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take a chance
//                 <span className={css.tooltiptext}>to risk something</span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take a seat<span className={css.tooltiptext}>to sit down</span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take notes
//                 <span className={css.tooltiptext}>
//                   to write down important information
//                 </span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take a shower
//                 <span className={css.tooltiptext}>
//                   to clean yourself by washing
//                 </span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take a trip
//                 <span className={css.tooltiptext}>to go on a journey</span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take time
//                 <span className={css.tooltiptext}>
//                   to spend time on something
//                 </span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take into account
//                 <span className={css.tooltiptext}>to consider something</span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take a look
//                 <span className={css.tooltiptext}>
//                   to examine or check something
//                 </span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take advantage
//                 <span className={css.tooltiptext}>
//                   to make use of something for your benefit
//                 </span>
//               </button>
//             </li>
//             <li>
//               <button className={css.collocationButton}>
//                 Take a turn
//                 <span className={css.tooltiptext}>
//                   to switch or alternate in doing something
//                 </span>
//               </button>
//             </li>
//           </ul>
//           <div className={css.articleToRead}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collocations;

// import React, { useState, useEffect } from 'react';
// import CollocationData from '../../components/Data/CollocationData.json';
// import css from './Colocations.module.css';

// const Collocations = () => {
//   const [openAccordions, setOpenAccordions] = useState({});

//   useEffect(() => {
//     // Ініціалізація стану з localStorage для кожного аккордеона
//     const savedState = {};
//     Object.keys(CollocationData).forEach(key => {
//       savedState[key] = localStorage.getItem(`accordion-${key}`) === 'true';
//     });
//     setOpenAccordions(savedState);
//   }, []);

//   const toggleAccordion = key => {
//     const updatedAccordions = {
//       ...openAccordions,
//       [key]: !openAccordions[key],
//     };

//     // Збереження стану в localStorage
//     localStorage.setItem(`accordion-${key}`, updatedAccordions[key]);

//     setOpenAccordions(updatedAccordions);
//   };

//   return (
//     <div className={css.article}>
//       <h1>Collocations</h1>

//       {Object.entries(CollocationData).map(([key, data]) => (
//         <div className={css.article}>
//           <h2 onClick={() => toggleAccordion(key)}>
//             {key.charAt(0).toUpperCase() + key.slice(1)}
//           </h2>
//           <p>to click the button to start reading</p>
//           {openAccordions[key] && (
//             <div className={css.flex}>
//               <ul className={css.orderedList}>
//                 {data.buttons.map((button, index) => (
//                   <li key={index}>
//                     <button className={css.collocationButton}>
//                       {button.text}
//                       <span className={css.tooltiptext}>{button.tooltip}</span>
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//               <div className={css.articleToRead}></div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Collocations;


// import React, { useState, useEffect } from 'react';
// import CollocationData from '../../components/Data/CollocationData.json';
// import css from './Colocations.module.css';

// const Collocations = () => {
//   const [openAccordions, setOpenAccordions] = useState({});

//   useEffect(() => {
//     const savedState = {};
//     Object.keys(CollocationData).forEach(key => {
//       savedState[key] = localStorage.getItem(`accordion-${key}`) === 'true';
//     });
//     setOpenAccordions(savedState);
//   }, []);

//   const toggleAccordion = key => {
//     const updatedAccordions = {
//       ...openAccordions,
//       [key]: !openAccordions[key],
//     };
//     localStorage.setItem(`accordion-${key}`, updatedAccordions[key]);
//     setOpenAccordions(updatedAccordions);
//   };

//   return (
//     <div className={css.article}>
//       <h1>Collocations</h1>

//       {Object.entries(CollocationData).map(([key, data]) => (
//         <div key={key} className={css.article}>
//           <h2 onClick={() => toggleAccordion(key)}>
//             {key.charAt(0).toUpperCase() + key.slice(1)}
//           </h2>
//           <p>to click the button to start reading</p>
//           {openAccordions[key] && (
//             <div className={css.flex}>
//               <ul className={css.orderedList}>
//                 {data.buttons.map((button, index) => (
//                   <li key={`${key}-${index}`}>
//                     <button className={css.collocationButton}>
//                       {button.text}
//                       <span className={css.tooltiptext}>{button.tooltip}</span>
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//               <div className={css.articleToRead}></div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Collocations;


// import React, { useState, useEffect } from 'react';
// import CollocationData from '../../components/Data/CollocationData.json';
// import css from './Colocations.module.css';

// const Collocations = () => {
//   const [openAccordions, setOpenAccordions] = useState({});

//   useEffect(() => {
//     // Ініціалізація стану з localStorage для кожного аккордеона
//     const savedState = {};
//     Object.keys(CollocationData).forEach(key => {
//       savedState[key] = localStorage.getItem(`accordion-${key}`) === 'true';
//     });
//     setOpenAccordions(savedState);
//   }, []);

//   const toggleAccordion = key => {
//     const updatedAccordions = {
//       ...openAccordions,
//       [key]: !openAccordions[key],
//     };

//     // Оновлюємо стан аккордеона та зберігаємо його в localStorage
//     setOpenAccordions(updatedAccordions);
//     localStorage.setItem(`accordion-${key}`, updatedAccordions[key]);
//   };

//   return (
//     <div className={css.article}>
//       <h1>Collocations</h1>

//       {Object.entries(CollocationData).map(([key, data]) => (
//         <div key={key} className={css.articleAccordeon}>
//           <p className={css.accordeonButton} onClick={() => toggleAccordion(key)}>
//             {key.charAt(0).toUpperCase() + key.slice(1)}
//           </p>
//           {openAccordions[key] && (
//             <div className={css.flex}>
//               <ul className={css.orderedList}>
//                 {data.buttons.map((button, index) => (
//                   <li key={`${key}-${index}`}>
//                     <button className={css.collocationButton}>
//                       {button.text}
//                       <span className={css.tooltiptext}>{button.tooltip}</span>
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//               <div className={css.articleToRead}></div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Collocations;


import React, { useState, useEffect } from 'react';
import CollocationData from '../../components/Data/CollocationData.json';
import css from './Colocations.module.css';

const Collocations = () => {
  const [openAccordions, setOpenAccordions] = useState({});

  useEffect(() => {
    // Ініціалізація стану з localStorage для кожного аккордеона
    const savedState = {};
    Object.keys(CollocationData).forEach(key => {
      savedState[key] = localStorage.getItem(`accordion-${key}`) === 'true';
    });
    setOpenAccordions(savedState);
  }, []);

  const toggleAccordion = key => {
    const updatedAccordions = {
      ...openAccordions,
      [key]: !openAccordions[key],
    };

    // Оновлюємо стан аккордеона та зберігаємо його в localStorage
    setOpenAccordions(updatedAccordions);
    localStorage.setItem(`accordion-${key}`, updatedAccordions[key]);
  };

  const handleSearch = text => {
    const encodedText = encodeURIComponent(text); // Екранування тексту для URL
    const queryUrl = `https://www.google.com/search?lr=lang_en&hl=uk&tbo=p&tbm=bks&q=%22${encodedText}%22&tbs=,bkv:e,bkt:b&num=20`;
    window.open(queryUrl, '_blank'); // Відкриваємо посилання в новій вкладці
  };

  return (
    <div className={css.article}>
      <h1>Collocations</h1>

      {Object.entries(CollocationData).map(([key, data]) => (
        <div key={key} className={css.articleAccordeon}>
          <p className={css.accordeonButton} onClick={() => toggleAccordion(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </p>
          {openAccordions[key] && (
            <div className={css.flex}>
              <ul className={css.orderedList}>
                {data.buttons.map((button, index) => (
                  <li key={`${key}-${index}`}>
                    <button
                      className={css.collocationButton}
                      onClick={() => handleSearch(button.text)} // Виклик handleSearch при натисканні
                    >
                      {button.text}
                      <span className={css.tooltiptext}>{button.tooltip}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Collocations;

