import css from './InterviewNode.module.css'

const InterviewNode = () => {
  return (
    <div>
      <h1>Node Interview</h1>

      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>here will be the question</dd>

          <dt>Answer:</dt>
          <dd>
          here will be the answer
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
          <dd className={css.questionText}>here will be the question</dd>

          <dt>Answer:</dt>
          <dd>
          here will be the answer
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

export default InterviewNode;