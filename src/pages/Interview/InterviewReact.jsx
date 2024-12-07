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
          <dd>
            <p>
              The Virtual DOM is a core concept in React that optimizes how the
              UI updates, making React apps faster and more efficient. Here’s
              why it's essential:
            </p>
            <ol className={css.orderedList}>
              <li>
                <b>Efficient Rendering:</b> The Virtual DOM is a lightweight
                copy of the real DOM, and React uses it to "preview" changes
                before applying them to the actual DOM. Because direct updates
                to the DOM are slow and computationally expensive, the Virtual
                DOM allows React to perform updates quickly and efficiently.
              </li>
              <li>
                <b>Reconciliation Process:</b> React uses a process called
                reconciliation, where it compares the current Virtual DOM with
                the previous one to detect what has changed. React then updates
                only the parts of the actual DOM that have changed, rather than
                re-rendering the entire UI. This is called diffing, and it
                minimizes unnecessary reflows and repaints in the browser,
                improving performance.
              </li>
              <li>
                <b>Declarative UI:</b> React’s declarative approach allows
                developers to describe what the UI should look like in any
                state. React manages updates in the Virtual DOM based on changes
                in the application state, reducing the need for developers to
                manage complex DOM manipulation.
              </li>
              <li>
                <b>Cross-Platform Consistency:</b> The Virtual DOM abstraction
                allows React to work on different platforms (e.g., mobile with
                React Native) while handling UI updates in a uniform, efficient
                way.
              </li>
              <li>
                <b>Improved Developer Experience:</b> By focusing on the
                application state and letting React handle the UI rendering,
                developers can build interactive and dynamic UIs with simpler
                code, while React efficiently handles the underlying DOM
                updates.
              </li>
            </ol>
            <p>
              In short, the Virtual DOM allows React to make precise and minimal
              updates to the actual DOM, optimizing performance, ensuring
              smoother user interactions, and reducing the complexity of DOM
              manipulation for developers.
            </p>
          </dd>
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
          <dd>
            <p>
              The Virtual DOM and Shadow DOM are both technologies used to
              improve the efficiency and structure of web applications, but they
              serve different purposes and operate in distinct ways.
            </p>
            <ol className={css.orderedList}>
              <li>
                {' '}
                <b>Purpose</b>{' '}
              </li>
              <ul>
                <li>
                  <b>Virtual DOM:</b> This is a concept specific to libraries
                  like React. It acts as a lightweight copy of the actual DOM
                  and is used to optimize and manage UI updates. React uses it
                  to detect changes and update only the necessary parts of the
                  DOM, improving performance by minimizing direct DOM
                  manipulation.
                </li>
                <li>
                  <b>Shadow DOM:</b> This is a web standard provided by
                  browsers. It’s part of the Web Components API and is used to
                  encapsulate the internal structure and styling of a web
                  component, preventing it from interfering with the global
                  scope of the page. This allows for better modularity and
                  isolation of components.
                </li>
              </ul>
              <li>
                {' '}
                <b>Implementation</b>{' '}
              </li>
              <ul>
                <li>
                  <b>Virtual DOM:</b> Exists only in memory and is never
                  directly rendered by the browser. It’s a JavaScript object
                  representing the UI, which React uses to compare changes and
                  decide what needs to be updated in the actual DOM.
                </li>
                <li>
                  <b>Shadow DOM:</b> Is an actual part of the browser’s DOM and
                  is rendered by it. When a component uses a Shadow DOM, it
                  creates a separate subtree in the DOM that is scoped to that
                  component, isolating its styles and markup.
                </li>
              </ul>
              <li>
                <b>Usage</b>
              </li>
              <ul>
                <li>
                  <b>Virtual DOM:</b> Primarily used by libraries and frameworks
                  like React. Its primary goal is performance optimization for
                  frequent UI updates.
                </li>
                <li>
                  <b>Shadow DOM:</b> Used in Web Components, such as custom
                  elements, allowing developers to create reusable, encapsulated
                  HTML elements with scoped styles. This means the component’s
                  styles and structure won’t affect or be affected by other
                  parts of the page.
                </li>
              </ul>
              <li>
                <b>Scope and Encapsulation</b>
              </li>
              <ul>
                <li>
                  <b>Virtual DOM:</b> Does not provide encapsulation; it’s a
                  representation of the UI that helps manage updates. React uses
                  it to batch updates efficiently but doesn’t encapsulate styles
                  or markup.
                </li>
                <li>
                  <b>Shadow DOM:</b> Provides style and DOM encapsulation, so
                  styles inside a shadow root don’t leak out to the rest of the
                  page, and external styles don’t affect it. This isolation is
                  key for reusable and consistent custom elements.
                </li>
              </ul>
              <li>
                <b>Browser Support</b>
              </li>
              <ul>
                <li>
                  <b>Virtual DOM:</b> Exists purely in JavaScript as a concept,
                  so it doesn’t depend on browser support—it’s entirely managed
                  by the framework (e.g., React).
                </li>
                <li>
                  <b>Shadow DOM:</b> Is a browser feature, and support is
                  provided natively by most modern browsers as part of the Web
                  Components standard.
                </li>
              </ul>
            </ol>
            <h4>Summary:</h4>
            <ul className={css.unorderedList}>
              <li>
                <b>Virtual DOM:</b> Optimizes UI updates by minimizing DOM
                manipulations; used by React to track changes and apply them
                efficiently.
              </li>
              <li>
                <b>Shadow DOM:</b> Provides encapsulation for custom elements,
                ensuring their styles and structure are isolated from the rest
                of the page; part of Web Components.
              </li>
            </ul>
            <p>
              In essence, the Virtual DOM is a tool for efficient UI rendering,
              while the Shadow DOM is a tool for component encapsulation and
              isolation. They can be used together in applications, but they
              serve different functions.
            </p>
          </dd>
        </dl>
      </div>
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>here will be the question</dd>

          <dt>Answer:</dt>
          <dd>here will be the answer</dd>
          <dt>Answer (GPT):</dt>
          <dd>here will be the answer</dd>
        </dl>
      </div>
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>here will be the question</dd>

          <dt>Answer:</dt>
          <dd>here will be the answer</dd>
          <dt>Answer (GPT):</dt>
          <dd>here will be the answer</dd>
        </dl>
      </div>
      )
    </div>
  );
};

export default InterviewReact;
