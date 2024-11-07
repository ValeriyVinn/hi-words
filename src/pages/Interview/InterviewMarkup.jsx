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
          <p>The &lt;!DOCTYPE html&gt; declaration is essential because it tells the web browser which version of HTML the document is written in. Here are the main reasons for using it:</p>
          <ol className={css.orderedList}>
            <li><b>Standards Mode vs. Quirks Mode:</b> Specifying a DOCTYPE ensures that the browser renders the page in "standards mode." Without it, the browser may use "quirks mode," where it applies old, inconsistent rules for layout and styling to maintain compatibility with older web pages. Standards mode allows the page to follow modern HTML and CSS rules consistently across different browsers.</li>
            <li><b>Browser Consistency:</b> The DOCTYPE declaration helps ensure consistent behavior and appearance across different browsers. Modern browsers use the DOCTYPE to decide how to interpret the code, and they may ignore or alter some styles if the DOCTYPE is missing or incorrect.</li>
            <li><b>HTML5 Declaration Simplicity:</b> In HTML5, &lt;!DOCTYPE&nbsp;html&gt; is all that’s needed to declare the document type. Previous versions of HTML required more complex DOCTYPEs that indicated specific versions (e.g., XHTML 1.0 Transitional). HTML5 simplified this with a single, short declaration that promotes compatibility and reduces confusion.</li>
          </ol>
          <p>Without a DOCTYPE, browser behavior can become unpredictable, making it harder to design web pages that look and work well everywhere.</p>
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
          <p>If you omit the &lt;!DOCTYPE html&gt; declaration at the beginning of an HTML document, most browsers will switch to what’s known as "quirks mode" rather than "standards mode." Here’s what can happen if you don't specify DOCTYPE:</p>
          <ol className={css.orderedList}>
            <li><b>Quirks Mode Rendering:</b> In quirks mode, the browser tries to mimic old, non-standard behaviors from earlier versions of HTML. This often results in inconsistent page layout, as browsers apply different, outdated rendering rules to maintain compatibility with older sites.</li>
            <li><b>Inconsistent CSS Behavior:</b> Certain CSS properties, especially related to layout and positioning, may behave differently in quirks mode. For example, box models, margin calculations, and alignment can render incorrectly, leading to layout issues across browsers.</li>
            <li><b>JavaScript Compatibility Issues:</b> Some JavaScript functions might work differently in quirks mode. For instance, methods that interact with document structure or styling may not behave as expected, making it harder to maintain and debug the code.</li>
            <li><b>Unexpected Display on Modern Browsers:</b> Without a DOCTYPE, modern browsers might not interpret the page according to HTML5 standards, potentially causing issues with newer HTML and CSS features.</li>
            <li><b>Reduced Accessibility and SEO Impact:</b> Pages rendered in quirks mode might not meet modern accessibility standards or best practices, which could negatively impact usability and search engine optimization.</li>
          </ol>
          <p>In summary, omitting the DOCTYPE can lead to inconsistent and unpredictable results, making it much harder to design web pages that display correctly across different devices and browsers.</p>
          </dd>
        </dl>

  
      </div>
      <div className={css.container}></div>
      <div className={css.container}></div>)


    </div>
  );
};

export default InterviewMarkup;