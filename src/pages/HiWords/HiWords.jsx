import data from '../../components/Data/HiWordsData.json';
import css from './HiWords.module.css';

const HiWords = () => {
  return (
    <div className={css.container}>
      <article>
        {data.map((item, index) => (
          <div key={index} className={css.article}>
            <h1 className={css.hiWordsHeader}>{item.header}</h1>
            <h2 className={css.wordsToLearn}>{item.wordsToLearn}</h2>

            <div className={css.book}>
              <div className={css.bookPageLeft}>
                <div className={css.paragraph}>
                  {item.firstWordParagraph.map((word, i) => (
                    <table
                      key={`first-${index}-${i}`}
                      className={css.wordTable1}
                    >
                      <tbody>
                        <tr>
                          <td className={css.word}>{word}</td>
                        </tr>
                        <tr>
                          <td className={css.transcription}>
                            {item.firstTranscriptionParagraph[i]}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </div>

                <div className={css.paragraph}>
                  {item.secondWordParagraph.map((word, i) => (
                    <table
                      key={`second-${index}-${i}`}
                      className={css.wordTable2}
                    >
                      <tbody>
                        <tr>
                          <td className={css.word}>{word}</td>
                        </tr>
                        <tr>
                          <td className={css.transcription}>
                            {item.secondTranscriptionParagraph[i]}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </div>
              </div>
              <div className={css.bookPageRight}>
                <div className={css.paragraph}>
                  {item.thirdWordParagraph.map((word, i) => (
                    <table
                      key={`third-${index}-${i}`}
                      className={css.wordTable3}
                    >
                      <tbody>
                        <tr>
                          <td className={css.word}>{word}</td>
                        </tr>
                        <tr>
                          <td className={css.transcription}>
                            {item.thirdTranscriptionParagraph[i]}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </div>

                <div className={css.paragraph}>
                  {item.fourthWordParagraph.map((word, i) => (
                    <table
                      key={`fourth-${index}-${i}`}
                      className={css.wordTable4}
                    >
                      <tbody>
                        <tr>
                          <td className={css.word}>{word}</td>
                        </tr>
                        <tr>
                          <td className={css.transcription}>
                            {item.fourthTranscriptionParagraph[i]}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};

export default HiWords;
