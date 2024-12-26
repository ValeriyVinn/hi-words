import css from './InterviewReact.module.css';

const InterviewReact = () => {
  return (
    <div>
      <h1>React Interview</h1>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>
            Why do you need Virtual DOM in React?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The Virtual DOM is a programming concept where a "virtual"
              representation of the user interface is stored in memory and
              synchronized with the "real" DOM using a library such as ReactDOM.
              This technique enhances client-side performance by avoiding direct
              manipulation of the DOM and instead using a lightweight JavaScript
              object that mimics the DOM tree.
            </p>
            <p className={css.transcription}>
              ðə ˈvɝːtʃuəl ˈdiː-ˈoʊ-ˈɛm ɪz ə ˈproʊˌɡræmɪŋ ˈkɑnsɛpt wɛr ə
              "ˈvɝːtʃuəl" ˌrɛprɪˈzɛnˌteɪʃən əv ðə ˈjuzɚ ˌɪntɚˈfeɪs ɪz stɔrd ɪn
              ˈmɛmɚi ənd ˈsɪŋkrəˌnaɪzd wɪð ðə "riːl" ˈdiː-ˈoʊ-ˈɛm ˈjuzɪŋ ə
              ˈlaɪˌbrɛri sʌtʃ æz ˈriːæktˈdiː-ˈoʊ-ˈɛm. ðɪs tɛkˈnik ɪnˈhænsɪz
              ˈklaɪənt-saɪd pɚˈfɔrməns baɪ əˈvɔɪdɪŋ daɪˈrɛkt ˌmænɪˈpjuːləˌʃən əv
              ðə ˈdiː-ˈoʊ-ˈɛm ənd ɪnˈstɛd ˈjuzɪŋ ə ˈlaɪtˌweɪt ˈdʒævəˌskrɪpt
              ˈɑbdʒɛkt ðæt ˈmɪmɪks ðə ˈdiː-ˈoʊ-ˈɛm triː.
            </p>
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
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>
            What is the difference between virtual DOM and shadow DOM?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The Virtual DOM is a complete representation of a real DOM tree in
              the form of a JavaScript object. Its most important feature is
              grouping changes and performing a single render instead of
              multiple smaller ones. The Shadow DOM is a native browser
              implementation that allows you to create an isolated DOM. Inside
              the Shadow DOM, a separate "subdocument" is created, to which you
              can apply styles that are shielded from external influences.
            </p>
            <p className={css.transcription}>
              ðə ˈvɝːtʃuəl ˈdiː-ˈoʊ-ˈɛm ɪz ə kəmˈpliːt ˌrɛprɪˌzɛnˈteɪʃən əv ə
              riːl ˈdiː-ˈoʊ-ˈɛm triː ɪn ðə fɔrm əv ə ˈdʒævəˌskrɪpt ˈɑbdʒɛkt. ɪts
              moʊst ɪmˈpɔrtənt ˈfiːtʃɚ ɪz ˈɡruːpɪŋ ˈtʃeɪndʒəz ənd pɚˈfɔrmɪŋ ə
              ˈsɪŋɡəl ˈrɛndɚ ˪ɪnˈstɛd əv ˈmʌltəpəl ˈsmɔlɚ wʌnz. ðə ˈʃædoʊ
              ˈdiː-ˈoʊ-ˈɛm ɪz ə ˈneɪtɪv ˈbraʊzɚ ˌɪmpləˌmɛntˈteɪʃən ðæt əˈlaʊz ju
              tə kriˈeɪt ən ˈaɪsəˌleɪtɪd ˈdiː-ˈoʊ-ˈɛm. ɪnˈsaɪd ðə ˈʃædoʊ
              ˈdiː-ˈoʊ-ˈɛm, ə ˈsɛprɪt "ˈsʌbˌdɑkjʊmɛnt" ɪz kriˈeɪtɪd, tə wɪtʃ ju
              kən əˈplaɪ ˈstaɪlz ðæt ɑr ˈʃildɪd frəm ɪkˈstɝːnəl ˈɪnfluənsɪz.
            </p>
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
                <b>Purpose</b>
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
                <b>Implementation</b>
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
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>
            What is the difference between state and props?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              Props are passed to a component from outside, while the state
              represents the internal state of the component.
            </p>
            <p className={css.transcription}>
              prɑps ɑr pæst tə ə kəmˈpɑnənt frəm ˌaʊtˈsaɪd, waɪl ðə steɪt
              ˌrɛprɪˈzɛnts ði ˌɪnˈtɝːnəl steɪt əv ðə kəmˈpɑnənt.
            </p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>
            <p>
              In React, state and props are two fundamental concepts used to
              manage and share data in a component-based architecture. Here's a
              breakdown of each:
            </p>
            <ol className={css.unorderedList}>
              <li>
                <h4>Props</h4>
                <h5>Definition:</h5>
                <p>
                  Props (short for "properties") are read-only inputs passed
                  from a parent component to a child component.
                </p>
                <h5>Key Features:</h5>
                <ul>
                  <li>
                    <b>Immutable:</b> Props cannot be modified by the receiving
                    component.
                  </li>
                  <li>
                    <b>Parent-to-Child Data Flow:</b> Props allow parent
                    components to pass data or functions down to child
                    components.
                  </li>
                  <li>
                    <b>Used for Customization:</b> They customize the behavior
                    or appearance of a child component.
                  </li>
                  <li>
                    <b>Accessed in Functional Components:</b> props are accessed
                    directly via function arguments. In class components,
                    this.props is used.
                  </li>
                </ul>
                <h5>Example:</h5>
                <pre className={css.code}>
                  <code>
                    {'function Greeting(props) {\n'}
                    {'  return <h1>Hello, {props.name}!</h1>;\n'}
                    {'}\n\n'}
                    {'function App() {\n'}
                    {'  return <Greeting name="Alice" />;\n'}
                    {'}'}
                  </code>
                </pre>
                <p>Here, the name prop is passed from App to Greeting.</p>
              </li>
              <li>
                <h4>State</h4>
                <h5>Definition:</h5>
                <p>
                  State is a local, mutable data structure that is managed
                  within a component.
                </p>
                <h5>Key Features:</h5>
                <ul>
                  <li>
                    <b>Mutable:</b> State can be updated using the setState
                    function (class components) or the useState hook (functional
                    components).
                  </li>
                  <li>
                    <b>Component-Specific:</b> State is tied to the component
                    it’s defined in, but it can be shared through lifting state
                    up or using context.
                  </li>
                  <li>
                    <b>Triggers Re-Renders:</b> When the state changes, React
                    re-renders the component to reflect the updated state.
                  </li>
                </ul>
                <h5>Example (Functional Component):</h5>
                <pre className={css.code}>
                  <code>
                    {"import React, { useState } from 'react';\n\n"}
                    {'function Counter() {\n'}
                    {'  const [count, setCount] = useState(0);\n\n'}
                    {'  return (\n'}
                    {'    <div>\n'}
                    {'      <p>Count: {count}</p>\n'}
                    {
                      '      <button onClick={() => setCount(count + 1)}>Increase</button>\n'
                    }
                    {'    </div>\n'}
                    {'  );\n'}
                    {'}\n'}
                  </code>
                </pre>

                <p>
                  Here, count is stateful data managed by the Counter component.
                </p>
              </li>
            </ol>
            <h4>Key Differences</h4>
            <table>
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Props</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Mutable</th>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <th>Scope</th>
                  <td>Passed from parent to child</td>
                  <td>Local to the component</td>
                </tr>
                <tr>
                  <th>Usage</th>
                  <td> To pass data or behavior</td>
                  <td>To manage dynamic data</td>
                </tr>
                <tr>
                  <th>Ownership</th>
                  <td>Controlled by parent</td>
                  <td>Controlled by the component</td>
                </tr>
                <tr>
                  <th>Triggers Re-Renders</th>
                  <td>No (directly)</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
            <h4>Combined Use Case</h4>
            <p>
              Often, props and state are used together. For instance, you might
              pass a function (defined using state in the parent) as a prop to a
              child component:
            </p>
            <pre className={css.code}>
              <code>
                {'function App() {\n'}
                {
                  '  const [message, setMessage] = useState("Hello, World!");\n\n'
                }
                {'  return (\n'}
                {'    <div>\n'}
                {'      <MessageDisplay message={message} />\n'}
                {
                  '      <button onClick={() => setMessage("Hi, React!")}>Change Message</button>\n'
                }
                {'    </div>\n'}
                {' );\n\n'}
                {'function MessageDisplay(props) {\n'}
                {'  return <h2>{props.message}</h2>;\n'}
                {'}\n'}
              </code>
            </pre>
            <p>Here:</p>
            <ul>
              <li>
                message is <b>state</b> in App.
              </li>
              <li>
                It is passed as a <b>prop</b> to MessageDisplay.
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>here will be the question</dd>

          <dt>Answer:</dt>
          <dd>
            <p>here will be the answer</p>
            <p className={css.transcription}>here will be the transcription</p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>here will be the answer</dd>
        </dl>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>here will be the question</dd>

          <dt>Answer:</dt>
          <dd>
            <p>here will be the answer</p>
            <p className={css.transcription}>here will be the transcription</p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>here will be the answer</dd>
        </dl>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>here will be the question</dd>

          <dt>Answer:</dt>
          <dd>
            <p>here will be the answer</p>
            <p className={css.transcription}>here will be the transcription</p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>here will be the answer</dd>
        </dl>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>here will be the question</dd>

          <dt>Answer:</dt>
          <dd>
            <p>here will be the answer</p>
            <p className={css.transcription}>here will be the transcription</p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>here will be the answer</dd>
        </dl>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>here will be the question</dd>

          <dt>Answer:</dt>
          <dd>
            <p>here will be the answer</p>
            <p className={css.transcription}>here will be the transcription</p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>here will be the answer</dd>
        </dl>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>here will be the question</dd>

          <dt>Answer:</dt>
          <dd>
            <p>here will be the answer</p>
            <p className={css.transcription}>here will be the transcription</p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>here will be the answer</dd>
        </dl>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>here will be the question</dd>

          <dt>Answer:</dt>
          <dd>
            <p>here will be the answer</p>
            <p className={css.transcription}>here will be the transcription</p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>here will be the answer</dd>
        </dl>
      </div>
      {/* ---------------------- */})
    </div>
  );
};

export default InterviewReact;
