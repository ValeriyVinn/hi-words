import css from './InterviewMarkup.module.css'

const InterviewMarkup = () => {
  return (
    <div>
      <h1>Markup Interview</h1>

      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>Why do you need to specify DOCTYPE?</dd>

          <dt>Answer:</dt>
          <dd>
          DOCTYPE specifies the type of the current document. This is necessary for the browser to understand how to interpret the current web page, since HTML exists in several versions.
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>
          here will be the answer
          </dd>
        </dl>
      </div>
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>What happens if you don't specify DOCTYPE at the beginning of the document?</dd>

          <dt>Answer:</dt>
          <dd>
          The browser will try to display the page in compatibility mode (quirks mode). This may cause the page to display differently in different browsers.
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>
          here will be the answer
          </dd>
        </dl>

  
      </div>
      <div className={css.container}></div>
      <div className={css.container}></div>)


    </div>
  );
};

export default InterviewMarkup;