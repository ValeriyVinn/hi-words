import React, { useState, useEffect } from 'react';
import CollocationData from '../../components/Data/CollocationData.json';
import AudioPlayer from 'components/AudioPlayer/AudioPlayer';
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
    const queryUrl = `https://www.google.com/search?hl=uk&tbo=p&tbm=bks&q=%22${encodedText}%22+inpublisher:Dorling+inpublisher:Kindersley&num=10`
    window.open(queryUrl, '_blank');; // Відкриваємо посилання в новій вкладці
  };

  return (
    <div className={css.article}>
      <h1>Collocations</h1>
      <AudioPlayer />
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



