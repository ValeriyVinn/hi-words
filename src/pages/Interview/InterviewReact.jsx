import css from './InterviewReact.module.css';

const InterviewReact = () => {
  return (
    <div>
      <h1>React Interview</h1>
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>
            Why do you need Virtual DOM in React?
          </dd>

          <dt>Answer:</dt>
          <dd>
            Virtual DOM is a programming concept in which a "virtual"
            representation of the user interface is stored in memory and
            synchronized with the "real" DOM ​​using a library such as ReactDOM.
            This technique improves client-side performance by avoiding direct
            manipulation of the DOM by using a lightweight JavaScript object
            that mimics the DOM tree.
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>here will be the answer</dd>
        </dl>
      </div>
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>
            What is the difference between virtual DOM and shadow DOM?
          </dd>

          <dt>Answer:</dt>
          <dd>
            Virtual DOM - a complete representation of a real DOM tree in the
            form of a JavaScript object. Its most important feature is grouping
            changes and performing a single rendering instead of many small
            ones. Shadow DOM is a native implementation in the browser that
            allows you to create your own, isolated, DOM. Inside the Shadow DOM,
            a separate "subdocument" is created, to which you can apply your
            styles, shielded from the influence of the external environment.
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>here will be the answer</dd>
        </dl>
      </div>
      <div className={css.container}></div>
      <div className={css.container}></div>)
    </div>
  );
};

export default InterviewReact;
