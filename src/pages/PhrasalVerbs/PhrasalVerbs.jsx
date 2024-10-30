import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import css from './PhrasalVerbs.module.css';
import phrasalVerbsData from '../../components/Data/PhrasalVerbsListFull.json';

const PhrasalVerbs = () => {
  const [filter, setFilter] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVerb, setSelectedVerb] = useState(null);

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

  // const renderDefinition = (definition) => {
  //   if (Array.isArray(definition)) {
  //     return definition.map((item, index) => <div key={index}>{item}</div>);
  //   } else if (typeof definition === 'object') {
  //     return Object.entries(definition).map(([key, value]) => (
  //       <div key={key}>
  //         {key}: {Array.isArray(value) ? value.map((item, i) => <div key={i}>{item}</div>) : value}
  //       </div>
  //     ));
  //   } else {
  //     return <div>{definition}</div>;
  //   }
  // };

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
        <h2>Place to learn</h2>
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
          <button className={css.addToLearnButton}>Add to "Place to learn"</button>
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
