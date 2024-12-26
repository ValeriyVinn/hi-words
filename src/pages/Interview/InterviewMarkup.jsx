import css from './InterviewMarkup.module.css';

const InterviewMarkup = () => {
  return (
    <div>
      <h1>Markup Interview</h1>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>
            Why do you need to specify DOCTYPE?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The DOCTYPE specifies the type of the current document. It is
              necessary for the browser to understand how to interpret the
              current web page because HTML exists in several versions.
            </p>
            <p className={css.transcription}>
              ðə ˈdaʊkˌtaɪp ˈspɛsəˌfaɪz ðə taɪp əv ðə ˈkɝːrənt ˈdɑːkjəmənt. ɪt
              ɪz ˈnɛsəˌsɛri fɔr ðə ˈbraʊzɚ tu ˌʌndɚˈstænd haʊ tə ˌɪntɚˈprɪt ðə
              ˈkɝːrənt wɛb peɪdʒ bɪˈkəz ˌeɪtʃ-ti-ɛm-ˈɛl ɪɡˈzɪsts ɪn ˈsɛvrəl
              ˈvɝːʒənz.
            </p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>
            <p>
              The &lt;!DOCTYPE html&gt; declaration is essential because it
              tells the web browser which version of HTML the document is
              written in. Here are the main reasons for using it:
            </p>
            <ol className={css.orderedList}>
              <li>
                <b>Standards Mode vs. Quirks Mode:</b> Specifying a DOCTYPE
                ensures that the browser renders the page in "standards mode."
                Without it, the browser may use "quirks mode," where it applies
                old, inconsistent rules for layout and styling to maintain
                compatibility with older web pages. Standards mode allows the
                page to follow modern HTML and CSS rules consistently across
                different browsers.
              </li>
              <li>
                <b>Browser Consistency:</b> The DOCTYPE declaration helps ensure
                consistent behavior and appearance across different browsers.
                Modern browsers use the DOCTYPE to decide how to interpret the
                code, and they may ignore or alter some styles if the DOCTYPE is
                missing or incorrect.
              </li>
              <li>
                <b>HTML5 Declaration Simplicity:</b> In HTML5,
                &lt;!DOCTYPE&nbsp;html&gt; is all that’s needed to declare the
                document type. Previous versions of HTML required more complex
                DOCTYPEs that indicated specific versions (e.g., XHTML 1.0
                Transitional). HTML5 simplified this with a single, short
                declaration that promotes compatibility and reduces confusion.
              </li>
            </ol>
            <p>
              Without a DOCTYPE, browser behavior can become unpredictable,
              making it harder to design web pages that look and work well
              everywhere.
            </p>
          </dd>
        </dl>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>
            What happens if you don't specify DOCTYPE at the beginning of the
            document?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The browser will attempt to display the page in compatibility mode
              (quirks mode). This might cause the page to render differently in
              various browsers.
            </p>
            <p className={css.transcription}>
              ðə ˈbraʊzɚ wɪl əˈtɛmpt tə dɪˈspleɪ ðə peɪdʒ ɪn kəmˌpætəˈbɪləti
              moʊd (kwɝːks moʊd). ðɪs maɪt kɔz ðə peɪdʒ tə ˈrɛndɚ ˈdɪfrəntli ɪn
              ˈvɛriəs ˈbraʊzɚz.
            </p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>
            <p>
              If you omit the &lt;!DOCTYPE html&gt; declaration at the beginning
              of an HTML document, most browsers will switch to what’s known as
              "quirks mode" rather than "standards mode." Here’s what can happen
              if you don't specify DOCTYPE:
            </p>
            <ol className={css.orderedList}>
              <li>
                <b>Quirks Mode Rendering:</b> In quirks mode, the browser tries
                to mimic old, non-standard behaviors from earlier versions of
                HTML. This often results in inconsistent page layout, as
                browsers apply different, outdated rendering rules to maintain
                compatibility with older sites.
              </li>
              <li>
                <b>Inconsistent CSS Behavior:</b> Certain CSS properties,
                especially related to layout and positioning, may behave
                differently in quirks mode. For example, box models, margin
                calculations, and alignment can render incorrectly, leading to
                layout issues across browsers.
              </li>
              <li>
                <b>JavaScript Compatibility Issues:</b> Some JavaScript
                functions might work differently in quirks mode. For instance,
                methods that interact with document structure or styling may not
                behave as expected, making it harder to maintain and debug the
                code.
              </li>
              <li>
                <b>Unexpected Display on Modern Browsers:</b> Without a DOCTYPE,
                modern browsers might not interpret the page according to HTML5
                standards, potentially causing issues with newer HTML and CSS
                features.
              </li>
              <li>
                <b>Reduced Accessibility and SEO Impact:</b> Pages rendered in
                quirks mode might not meet modern accessibility standards or
                best practices, which could negatively impact usability and
                search engine optimization.
              </li>
            </ol>
            <p>
              In summary, omitting the DOCTYPE can lead to inconsistent and
              unpredictable results, making it much harder to design web pages
              that display correctly across different devices and browsers.
            </p>
          </dd>
        </dl>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>Why are meta tags needed?</dd>

          <dt>Answer:</dt>
          <p>          Meta tags are elements that provide search engines with additional information about a webpage. For example, search engines refer to meta tags to retrieve a description of the site, keywords, and other data. Meta tags for a site are placed inside the &lt;head&gt; section.</p>
          <p className={css.transcription}>ˈmɛtə ˌtæɡz ɑːr ˈɛləmənts ðæt prəˈvaɪd ˈsɝːtʃ ˌɛndʒənz wɪð əˈdɪʃənəl ˌɪnfɚˈmeɪʃən əˈbaʊt ə ˈwɛbˌpeɪdʒ. fɔr ɪɡˈzæmpəl, ˈsɝːtʃ ˌɛndʒənz rəˈfɝː tə ˈmɛtə ˌtæɡz tə rəˈtriːv ə dəˈskrɪpʃən əv ðə saɪt, ˈkiˌwɝːdz, ənd ˈʌðɚ ˈdeɪtə. ˈmɛtə ˌtæɡz fɔr ə saɪt ɑːr pleɪst ɪnˈsaɪd ðə &lt;hɛd&gt; ˈsɛkʃən.</p>
          <dd>

          </dd>
          <dt>Answer (GPT):</dt>
          <dd>
            Meta tags are essential elements in the &lt;head&gt; section of an
            HTML document. They provide metadata—information about the
            webpage—that is not displayed directly on the page but is crucial
            for search engines, browsers, and other web services. Here are the
            key reasons why meta tags are needed:
            <ol className={css.orderedList}>
              <li>
                SEO (Search Engine Optimization):
                <p>
                  Search engines like Google use meta tags to understand the
                  content and purpose of your page.
                </p>
              </li>
              <ul>
                <li>
                  The &lt;meta name="description"&gt; tag provides a brief
                  summary that may appear in search results.
                </li>
                <li>
                  Keywords in meta tags (e.g., &lt;meta name="keywords"&gt;) can
                  suggest relevant terms, though they are less important now
                  than content quality.
                </li>
              </ul>

              <li>User Experience:</li>
              <ul>
                <li>
                  The meta description helps users decide whether to click on a
                  search result by showing a concise summary of the page
                  content.
                </li>
                <li>
                  Tags like &lt;meta name="viewport"&gt; improve how a page
                  appears on different devices, enhancing responsiveness and
                  readability.
                </li>
              </ul>

              <li> Social Media Integration:</li>
              <ul>
                <li>
                  Tags like Open Graph (og:) and Twitter Cards ensure that links
                  shared on social media platforms look appealing with proper
                  titles, descriptions, and images.
                </li>
                <pre className={css.code}>
                  &lt;meta property="og:title" content="Example Title"&gt;
                  <br />
                  &lt;meta property="og:description" content="Example
                  Description"&gt;
                  <br />
                  &lt;meta property="og:image" content="image_url.jpg"&gt;
                </pre>
              </ul>
              <li>Accessibility and Compatibility:</li>
              <ul>
                <li>
                  Tags like &lt;meta charset="UTF-8"&gt; specify character
                  encoding to ensure text renders correctly.
                </li>
                <li>
                  &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
                  helps with compatibility in older Internet Explorer versions.
                </li>
              </ul>

              <li>Preventing Issues:</li>
              <ul>
                <li>
                  Prevent duplicate content penalties: The &lt;meta
                  name="robots" content="noindex"&gt; tag tells search engines
                  not to index certain pages.
                </li>
                <li>
                  Avoid security issues: Content-Security-Policy (CSP) meta tags
                  define allowed resources to prevent attacks like XSS.
                </li>
              </ul>
              <li>Faster Loading and Targeting:</li>
              <ul>
                <li>
                  By defining the viewport and initial scale, meta tags help
                  with faster loading on mobile devices.
                </li>
                <li>
                  They provide contextual information for geographic or
                  language-specific targeting.
                </li>
              </ul>
              <p>
                In summary, meta tags are vital for making your website more
                discoverable, functional, and user-friendly. They serve as a
                bridge between your content, search engines, and users.
              </p>
            </ol>
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
    </div>
  );
};

export default InterviewMarkup;
