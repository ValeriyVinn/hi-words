// import React, { useState } from 'react';
// import Modal from '../../components/Modal/Modal';
// import css from './PhrasalVerbs.module.css';
// import phrasalVerbsData from '../../components/Data/PhrasalVerbsListFull.json';

// const PhrasalVerbs = () => {
//   const [filter, setFilter] = useState('');
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedVerb, setSelectedVerb] = useState(null);

//   const handleChange = event => {
//     setFilter(event.target.value.toLowerCase());
//   };

//   const openModal = verb => {
//     setSelectedVerb(verb);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedVerb(null);
//   };

//   const filteredVerbs = Object.keys(phrasalVerbsData).filter(key =>
//     key.toLowerCase().startsWith(filter)
//   );

//   const renderDefinition = definition => {
//     if (Array.isArray(definition)) {
//       return definition.map((item, index) => <div key={index}>{item}</div>);
//     } else if (typeof definition === 'object' && definition !== null) {
//       return Object.entries(definition)
//         .map(
//           ([key, value]) =>
//             `${key}: ${Array.isArray(value) ? value.join(', ') : value}`
//         )
//         .join('; ');
//     } else {
//       return definition;
//     }
//   };

//   return (
//     <div className={css.article}>
//       <div className={css.choose_a_word}>
//         <form>
//           <label className={css.filter_words}>
//             Choose a verb
//             <input
//               type="text"
//               name="filter"
//               placeholder="put on spell on verb"
//               className={css.input}
//               value={filter}
//               onChange={handleChange}
//             />
//           </label>
//         </form>
//       </div>

//       <div className={css.article}>
//         <h2>Place to learn</h2>
//       </div>

//       {filter &&
//         filteredVerbs.map(key => (
//           <button
//             key={key}
//             type="button"
//             className={css.btn_phrasal_verbs}
//             onClick={() => openModal(key)}
//           >
//             {key}
//           </button>
//         ))}

//       {isModalOpen && selectedVerb && (
//         <Modal closeModal={closeModal}>
//           <h2>{selectedVerb}</h2>
//           <button className={css.addToLearnButton}>Add to "Place to learn"</button>
//           <dl className={css.phrasalVerbsModal}>
//             {Object.entries(phrasalVerbsData[selectedVerb]).map(([dt, dd]) => (
//               <React.Fragment key={dt}>
//                 <dt>{dt}</dt>
//                 <dd>{renderDefinition(dd)}</dd>
//               </React.Fragment>
//             ))}
//           </dl>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default PhrasalVerbs;

// !-----------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import Modal from '../../components/Modal/Modal';
// import css from './PhrasalVerbs.module.css';
// import phrasalVerbsData from '../../components/Data/PhrasalVerbsListFull.json';

// const PhrasalVerbs = () => {
//   const [filter, setFilter] = useState('');
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedVerb, setSelectedVerb] = useState(null);
//   const [verbsToLearn, setVerbsToLearn] = useState([]);

//   useEffect(() => {
//     // Завантаження даних з PhrasalVerbsToLearn.json при завантаженні сторінки
//     fetch('../../components/Data/PhrasalVerbsToLearn.json')
//       .then(response => response.json())
//       .then(data => setVerbsToLearn(Object.keys(data)))
//       .catch(error => console.error('Error loading verbs to learn:', error));
//   }, []);

//   const handleChange = event => {
//     setFilter(event.target.value.toLowerCase());
//   };

//   const openModal = verb => {
//     setSelectedVerb(verb);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedVerb(null);
//   };

//   const addToLearn = () => {
//     if (!selectedVerb || verbsToLearn.includes(selectedVerb)) return;
    
//     // Оновлення JSON PhrasalVerbsToLearn.json
//     const updatedVerbsToLearn = [...verbsToLearn, selectedVerb];
//     setVerbsToLearn(updatedVerbsToLearn);

//     const updatedData = Object.fromEntries(updatedVerbsToLearn.map(verb => [verb, phrasalVerbsData[verb]]));

//     fetch('../../components/Data/PhrasalVerbsToLearn.json', {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedData)
//     })
//       .then(() => console.log('Verb added to learn successfully'))
//       .catch(error => console.error('Error saving verb to learn:', error));

//     closeModal();
//   };

//   const filteredVerbs = Object.keys(phrasalVerbsData).filter(key =>
//     key.toLowerCase().startsWith(filter)
//   );

//   const renderDefinition = definition => {
//     if (Array.isArray(definition)) {
//       return definition.map((item, index) => <div key={index}>{item}</div>);
//     } else if (typeof definition === 'object' && definition !== null) {
//       return Object.entries(definition)
//         .map(
//           ([key, value]) =>
//             `${key}: ${Array.isArray(value) ? value.join(', ') : value}`
//         )
//         .join('; ');
//     } else {
//       return definition;
//     }
//   };

//   return (
//     <div className={css.article}>
//       <div className={css.choose_a_word}>
//         <form>
//           <label className={css.filter_words}>
//             Choose a verb
//             <input
//               type="text"
//               name="filter"
//               placeholder="put on spell on verb"
//               className={css.input}
//               value={filter}
//               onChange={handleChange}
//             />
//           </label>
//         </form>
//       </div>

//       <div className={css.article}>
//         <h2>Place to learn</h2>
//         {verbsToLearn.length > 0 &&
//           verbsToLearn.map(verb => (
//             <button key={verb} type="button" className={css.btn_phrasal_verbs}>
//               {verb}
//             </button>
//           ))}
//       </div>

//       {filter &&
//         filteredVerbs.map(key => (
//           <button
//             key={key}
//             type="button"
//             className={css.btn_phrasal_verbs}
//             onClick={() => openModal(key)}
//           >
//             {key}
//           </button>
//         ))}

//       {isModalOpen && selectedVerb && (
//         <Modal closeModal={closeModal}>
//           <h2>{selectedVerb}</h2>
//           <button className={css.addToLearnButton} onClick={addToLearn}>
//             Add to "Place to learn"
//           </button>
//           <dl className={css.phrasalVerbsModal}>
//             {Object.entries(phrasalVerbsData[selectedVerb]).map(([dt, dd]) => (
//               <React.Fragment key={dt}>
//                 <dt>{dt}</dt>
//                 <dd>{renderDefinition(dd)}</dd>
//               </React.Fragment>
//             ))}
//           </dl>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default PhrasalVerbs;

// !--------------------

// import React, { useState, useEffect } from 'react';
// import Modal from '../../components/Modal/Modal';
// import css from './PhrasalVerbs.module.css';
// import phrasalVerbsData from '../../components/Data/PhrasalVerbsListFull.json';

// const PhrasalVerbs = () => {
//   const [filter, setFilter] = useState('');
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedVerb, setSelectedVerb] = useState(null);
//   const [verbsToLearn, setVerbsToLearn] = useState([]);

//   useEffect(() => {
//     // Завантаження збережених дієслів з localStorage при завантаженні сторінки
//     const savedVerbs = JSON.parse(localStorage.getItem('verbsToLearn')) || [];
//     setVerbsToLearn(savedVerbs);
//   }, []);

//   const handleChange = event => {
//     setFilter(event.target.value.toLowerCase());
//   };

//   const openModal = verb => {
//     setSelectedVerb(verb);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedVerb(null);
//   };

//   const addToLearn = () => {
//     if (!selectedVerb || verbsToLearn.includes(selectedVerb)) return;

//     // Оновлюємо verbsToLearn і зберігаємо в localStorage
//     const updatedVerbsToLearn = [...verbsToLearn, selectedVerb];
//     setVerbsToLearn(updatedVerbsToLearn);
//     localStorage.setItem('verbsToLearn', JSON.stringify(updatedVerbsToLearn));

//     closeModal();
//   };

//   const filteredVerbs = Object.keys(phrasalVerbsData).filter(key =>
//     key.toLowerCase().startsWith(filter)
//   );

//   const renderDefinition = definition => {
//     if (Array.isArray(definition)) {
//       return definition.map((item, index) => <div key={index}>{item}</div>);
//     } else if (typeof definition === 'object' && definition !== null) {
//       return Object.entries(definition)
//         .map(
//           ([key, value]) =>
//             `${key}: ${Array.isArray(value) ? value.join(', ') : value}`
//         )
//         .join('; ');
//     } else {
//       return definition;
//     }
//   };

//   return (
//     <div className={css.article}>
//       <div className={css.choose_a_word}>
//         <form>
//           <label className={css.filter_words}>
//             Choose a verb
//             <input
//               type="text"
//               name="filter"
//               placeholder="put on spell on verb"
//               className={css.input}
//               value={filter}
//               onChange={handleChange}
//             />
//           </label>
//         </form>
//       </div>

//       <div className={css.article}>
//         <h2>Place to learn</h2>
//         {verbsToLearn.length > 0 &&
//           verbsToLearn.map(verb => (
//             <button
//               key={verb}
//               type="button"
//               className={css.btn_phrasal_verbs}
//               onClick={() => openModal(verb)} // Відкриття модального вікна по кліку
//             >
//               {verb}
//             </button>
//           ))}
//       </div>

//       {filter &&
//         filteredVerbs.map(key => (
//           <button
//             key={key}
//             type="button"
//             className={css.btn_phrasal_verbs}
//             onClick={() => openModal(key)}
//           >
//             {key}
//           </button>
//         ))}

//       {isModalOpen && selectedVerb && (
//         <Modal closeModal={closeModal}>
//           <h2>{selectedVerb}</h2>
//           <button className={css.addToLearnButton} onClick={addToLearn}>
//             Add to "Place to learn"
//           </button>
//           <dl className={css.phrasalVerbsModal}>
//             {Object.entries(phrasalVerbsData[selectedVerb]).map(([dt, dd]) => (
//               <React.Fragment key={dt}>
//                 <dt>{dt}</dt>
//                 <dd>{renderDefinition(dd)}</dd>
//               </React.Fragment>
//             ))}
//           </dl>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default PhrasalVerbs;



import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import css from './PhrasalVerbs.module.css';
import phrasalVerbsData from '../../components/Data/PhrasalVerbsListFull.json';

const PhrasalVerbs = () => {
  const [filter, setFilter] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVerb, setSelectedVerb] = useState(null);
  const [verbsToLearn, setVerbsToLearn] = useState([]);

  useEffect(() => {
    // Завантаження збережених дієслів з localStorage при завантаженні сторінки
    const savedVerbs = JSON.parse(localStorage.getItem('verbsToLearn')) || [];
    setVerbsToLearn(savedVerbs);
  }, []);

  const handleChange = event => {
    setFilter(event.target.value.toLowerCase());
  };

  const openModal = verb => {
    setSelectedVerb(verb);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVerb(null);
  };

  const addToLearn = () => {
    if (!selectedVerb || verbsToLearn.includes(selectedVerb)) return;

    const updatedVerbsToLearn = [...verbsToLearn, selectedVerb];
    setVerbsToLearn(updatedVerbsToLearn);
    localStorage.setItem('verbsToLearn', JSON.stringify(updatedVerbsToLearn));
    closeModal();
  };

  const removeFromLearn = () => {
    const updatedVerbsToLearn = verbsToLearn.filter(verb => verb !== selectedVerb);
    setVerbsToLearn(updatedVerbsToLearn);
    localStorage.setItem('verbsToLearn', JSON.stringify(updatedVerbsToLearn));
    closeModal();
  };

  const filteredVerbs = Object.keys(phrasalVerbsData).filter(key =>
    key.toLowerCase().startsWith(filter)
  );

  const renderDefinition = definition => {
    if (Array.isArray(definition)) {
      return definition.map((item, index) => <div key={index}>{item}</div>);
    } else if (typeof definition === 'object' && definition !== null) {
      return Object.entries(definition)
        .map(
          ([key, value]) =>
            `${key}: ${Array.isArray(value) ? value.join(', ') : value}`
        )
        .join('; ');
    } else {
      return definition;
    }
  };

  return (
    <div className={css.article}>
      <div className={css.choose_a_word}>
        <form>
          <label className={css.filter_words}>
            Choose a verb
            <input
              type="text"
              name="filter"
              placeholder="put on spell on verb"
              className={css.input}
              value={filter}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>

      <div className={css.article}>
        <h2 className={css.pleaceToLearnHeader}>Place to learn</h2>
        {verbsToLearn.length > 0 &&
          verbsToLearn.map(verb => (
            <button
              key={verb}
              type="button"
              className={css.btn_phrasal_verbs}
              onClick={() => openModal(verb)}
            >
              {verb}
            </button>
          ))}
      </div>

      {filter &&
        filteredVerbs.map(key => (
          <button
            key={key}
            type="button"
            className={css.btn_phrasal_verbs}
            onClick={() => openModal(key)}
          >
            {key}
          </button>
        ))}

      {isModalOpen && selectedVerb && (
        <Modal closeModal={closeModal}>
          <h2>{selectedVerb}</h2>
          {verbsToLearn.includes(selectedVerb) ? (
            <button className={css.addToLearnButton} onClick={removeFromLearn}>
              Remove from "Place to learn"
            </button>
          ) : (
            <button className={css.addToLearnButton} onClick={addToLearn}>
              Add to "Place to learn"
            </button>
          )}
          <dl className={css.phrasalVerbsModal}>
            {Object.entries(phrasalVerbsData[selectedVerb]).map(([dt, dd]) => (
              <React.Fragment key={dt}>
                <dt>{dt}</dt>
                <dd>{renderDefinition(dd)}</dd>
              </React.Fragment>
            ))}
          </dl>
        </Modal>
      )}
    </div>
  );
};

export default PhrasalVerbs;
