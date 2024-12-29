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
          <p>
            Meta tags are elements that provide search engines with additional
            information about a webpage. For example, search engines refer to
            meta tags to retrieve a description of the site, keywords, and other
            data. Meta tags for a site are placed inside the &lt;head&gt;
            section.
          </p>
          <p className={css.transcription}>
            ˈmɛtə ˌtæɡz ɑːr ˈɛləmənts ðæt prəˈvaɪd ˈsɝːtʃ ˌɛndʒənz wɪð əˈdɪʃənəl
            ˌɪnfɚˈmeɪʃən əˈbaʊt ə ˈwɛbˌpeɪdʒ. fɔr ɪɡˈzæmpəl, ˈsɝːtʃ ˌɛndʒənz
            rəˈfɝː tə ˈmɛtə ˌtæɡz tə rəˈtriːv ə dəˈskrɪpʃən əv ðə saɪt,
            ˈkiˌwɝːdz, ənd ˈʌðɚ ˈdeɪtə. ˈmɛtə ˌtæɡz fɔr ə saɪt ɑːr pleɪst
            ɪnˈsaɪd ðə &lt;hɛd&gt; ˈsɛkʃən.
          </p>
          <dd></dd>
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
          <dd className={css.questionText}>
            What is the difference between a block element and an inline
            element?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              Block elements are the basis used for page layout. Such an element
              is a rectangle that by default takes up the entire available width
              of the page, and the height of the element depends on its content.
              Such an element always starts on a new line. A block element can
              contain other block and inline elements. Examples of block
              elements: &lt;div&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;ol&gt;,
              &lt;h1&gt; Unlike a block element, an inline element does not move
              to a new line, but is located on the same line as the previous
              element. The width of an inline element depends on its content.
              Block elements cannot be nested within inline elements. Examples
              of inline elements: &lt;a&gt;, &lt;span&gt;, &lt;strong&gt;,
              &lt;em&gt;, &lt;img&gt;
            </p>
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
          <dd className={css.questionText}>
            Why might some characters appear as squares?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              This may occur because some browsers may not support certain
              operating system characters. The encoding may also be different.
              Or the required font with icons is not connected.
            </p>
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
          <dd className={css.questionText}>
            What types of headings are there in HTML?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              HTML supports six different types of headings. These headings are
              distinguished by their font size, starting with the largest. h1 is
              the largest heading. h6 is the smallest heading. There should only
              be 1 h1 on a page.
            </p>
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
          <dd className={css.questionText}>What is semantic layout?</dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              This layout is focused on structuring HTML documents. It uses tags
              that divide the code into logical blocks, which clearly show their
              role and content in the page structure. Semantic layout differs
              from block layout only in the elements used in structuring the
              page. In block layout, only the div element is used, while in
              semantic layout, in addition to div, many other tags are used,
              such as: header, main, section, footer, nav, aside.
            </p>
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
          <dd className={css.questionText}>What is HTML document flow?</dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The flow of an HTML document is the order in which elements are
              displayed on the page. In the usual way, all blocks are displayed
              in the order in which they are written inside the HTML document.
              The flow can be changed using CSS rules, for example, using
              position: absolute.
            </p>
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
          <dd className={css.questionText}>
            How to connect JavaScript to a page?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The first way is to insert the script into the script block. The
              second way is to include the script by adding a link to the
              JavaScript file. It is advisable to include all scripts at the end
              of the body block.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between &lt;script&gt;,
            &lt;script&nbsp;async&gt; and &lt;script&nbsp;defer&gt;?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              1 - When the browser loads the HTML and reaches the &lt;script&gt;
              tag, it pauses building the DOM. It should load and execute the
              script first, and then process the rest of the page. <br />
              2 - The defer attribute tells the browser that it should continue
              to process the page and load the script in the background, and
              then run that script when the page has loaded. <br />3 - The async
              attribute tells the browser that it should continue to process the
              page and load the script in the background, and then run that
              script once it has loaded.
            </p>
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
          <dd className={css.questionText}>How do I add CSS to a page?</dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The first way is to describe the selectors and their values
              ​​inside the style tag. The second way is to connect the styles by
              adding a link to an external css file, using the link tag, which
              is located inside the head block. The third way is to add inline
              styles for each individual element, using the style attribute.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between reset.css and normalize.css?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              <b>reset.css</b>- resets all styles to zero so that you can start
              styling the site from scratch. <b>normalize.css</b> - brings the
              original styles to a single state, across all browsers.
            </p>
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
          <dd className={css.questionText}>What is critical CSS?</dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              Critical CSS are styles that are required to render the first
              visible part of the page. For instant rendering, critical CSS is
              embedded in the HTML, all other styles are loaded asynchronously
              in a separate file.
            </p>
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
          <dd className={css.questionText}>
            What is the specificity of CSS selectors?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              This is the way browsers determine which CSS property values ​​are
              most relevant to an element and will therefore be applied.
              Specificity is the weight given to a particular CSS rule. Inline
              styles have the highest weight. Then ID selector styles. Tag
              selectors and also the * selector have the lowest weight.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between a pseudo-class and a pseudo-element
            in CSS?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              Pseudoclasses describe a specific state of an element. For
              example, the state of a button being pressed. Pseudoelements
              correspond to virtual elements. For example, you want to highlight
              the first letter in a string.
            </p>
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
          <dd className={css.questionText}>What is the CSS block model?</dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              Each block has a rectangular content area in the center, padding
              around the content, a border around the content, and a margin
              outside the content.
            </p>
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
          <dd className={css.questionText}>
            What does the box-sizing property do?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The box-sizing property determines how the total width and height
              of an element are calculated. It has 2 behaviors: - content-box is
              the default behavior. If you set an element to 100 pixels wide,
              its content will be 100 pixels wide, and the width of the borders
              and padding will be added to the final width during rendering,
              making the element 100 pixels wider. - border-box tells the
              browser to consider any borders and padding in the values
              ​​specified in the element's width and height. If you set an
              element to 100 pixels wide, those 100 pixels will include the
              borders and padding, and the content will be compressed to make
              room for them. This usually makes it easier to work with element
              sizes.
            </p>
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
          <dd className={css.questionText}>
            What types of positioning of elements on a page do you know?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              There are 5 types of positioning: <br />
              - static - standard positioning; <br />
              - relative - positioning relative to itself; <br />
              - absolute - positioning relative to its nearest relative
              positioned ancestor, if any; <br />
              - fixed - positioning relative to the viewport <br />- sticky -
              sticky positioning, which can change its value from relative to
              fixed when scrolling the page.
            </p>
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
          <dd className={css.questionText}>
            What does the z-index property do?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              This property determines the position of the element and the
              elements below it along the z-axis. In the case of overlapping
              elements, this value determines the order in which they are
              stacked. In general, elements with a higher z-index overlap
              elements with a lower z-index. This property only works for
              elements that have position set to absolute, fixed, or relative.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between px, em, rem?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              <b>px</b> - pixel, this is the most basic, absolute and ultimate
              unit of measurement; <br />
              <b>em</b> - unit of measurement relative to the current font size;
              <br />
              <b>rem</b> - unit of measurement relative to the font size of the
              &lt;html&gt; element.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between rubber, adaptive, and responsive
            layout?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              In rubber layout, blocks change width depending on the size of the
              browser window. Adaptive layout is implemented using @media rules.
              This allows you to display a different layout for each individual
              screen size. Any change in the window size occurs in jerks, after
              reaching one of the specified breakpoints. Responsive layout is a
              combination of rubber and adaptive layout. It is the most
              difficult to implement. But the result is the most acceptable.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between visibility:hidden and display:none?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              <b>visibility:hidden</b> leaves the element in the normal flow of
              the page, and it still takes up space. <b>display:none</b> removes
              the element from the normal flow of the page, allowing other
              elements to fill its space.
            </p>
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
          <dd className={css.questionText}>
            Why do I need the @supports rule?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The @supports rule allows you to check whether the browser
              supports a particular feature and, based on this, create a set of
              style rules.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between Progressive Enhancement and Graceful
            Degradation?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              Progressive enhancement is when the core functionality of an
              application works the same way across browsers, and something
              extra is added for newer browsers. This works well with
              technologies that are not yet widely supported but could be
              useful. The @supports directive is used to implement this
              approach. Gradual degradation is when the code is first written
              for the newest browsers using the latest technologies, but the
              application still needs to be supported by older browsers. With
              this approach, the interface is simplified or degraded gradually,
              but it is still usable.
            </p>
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
          <dd className={css.questionText}>What are repaint and reflow?</dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              When a page loads, if it is not empty, at least one reflow and one
              repaint are always executed. Further, these events occur in the
              following cases: - <br />
              1 - part of the display tree needs to be recalculated, i.e. some
              node has changed its width, height or coordinates. The reflow
              event is called. - <br />2 - as a result of the changes, part of
              the displayed content must be updated. This primarily concerns
              style properties: background color, etc. The repaint event is
              called. If reflow is called, repaint is necessarily called after
              it. But the reverse is false: repaint can be called regardless of
              reflow.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between cookie, sessionStorage and
            localStorage?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              <b>localStorage</b>
              : - stores data indefinitely. - is cleared only by JavaScript or
              clearing the browser cache. - stores data up to 5 MB. - is not
              supported by older browsers, such as IE 7 and below. - works
              according to the domain restriction rule (same origin policy).
              <br />
              <b>sessionStorage</b> : - stores data while the current tab
              session lasts. - each tab has its own sessionStorage. - stores
              data up to 5 MB. - is not supported by older browsers, such as IE
              7 and below. <br />
              <b>cookie</b> : - stores data transmitted to the server via
              headers. - have a data retention period. - data volume from 4 KB
              to 32 KB. - cookies can be protected, in which case their content
              cannot be obtained on the client side. This is important for
              authentication when storing user tokens.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between a relative and an absolute path?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              <b>Absolute</b> addresses must begin with a protocol (usually
              http://) and include the site name. <b>Relative</b> links are
              referenced from the root of the site or current document. (/path)
            </p>
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
          <dd className={css.questionText}>
            What is the difference between a tag and an element?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              Tags are used to mark the beginning and end of the content of an
              HTML element. An element consists of tags and content.
            </p>
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
          <dd className={css.questionText}>
            When to use &lt;button&gt; and when &lt;a&gt;?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              <b>A button</b> is a functional element, that is, an element that
              is responsible for performing a certain function after clicking on
              it. <b>A link</b> is a navigation element, that is, an element
              that is responsible for the relationship between sections of a web
              resource (or different resources) with each other.
            </p>
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
          <dd className={css.questionText}>
            Why is the type attribute needed on a button?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              Type defines the type of button, which determines its behavior on
              the form. The different types of buttons look the same, but each
              button has its own function. There are 3 types: button, reset, and
              submit. The default is submit.
            </p>
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
          <dd className={css.questionText}>
            Why is the &lt;base&gt; tag needed?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The &lt;base&gt; tag is intended for documents that use relative
              addresses and these documents can be moved to another directory
              without losing the link. The browser looks for the &lt;base&gt;
              tag, determines the full address of the document, and loads it
              correctly. The &lt;base&gt; tag is also used to specify the target
              window for all links on the current page.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between checkbox and radio?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              <b>radio</b> - creates a toggle between options and allows you to
              select only one of them. <b>checkbox</b>- is used in a form to
              select multiple values.
            </p>
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
          <dd className={css.questionText}>
            What is style inheritance in CSS?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              When an element is styled, some of its properties can be inherited
              by its children and descendants. For example, if you set a text
              color for body, all children and descendants will inherit it.
            </p>
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
          <dd className={css.questionText}>What is cascading in CSS?</dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              Cascading is a CSS feature that allows the browser to determine
              which property values ​​will be applied to an element when a
              property conflict occurs. A property conflict occurs when multiple
              rules are defined for an element that have selectors of the same
              specificity and contain the same properties, but with different
              values.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between content and decorative images?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              Content images are used to convey useful information to users. To
              add a content image to a page, the &lt;img&gt; tag is used in the
              markup. For such images, you must fill in the alt attribute, which
              describes what is depicted in the image. Decorative images are
              used exclusively for design. Such images do not carry useful
              information for the user. Decorative images should be implemented
              using CSS.
            </p>
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
          <dd className={css.questionText}>
            Why don't &lt;img&gt; and &lt;input&gt; have ::before, ::after
            pseudo-elements?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The ::before and ::after pseudo-elements only produce results for
              elements that have content. &lt;img&gt; and &lt;input&gt; have no
              content.
            </p>
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
          <dd className={css.questionText}>
            What is the calc function in CSS for?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              The calc function allows you to calculate the value of CSS
              properties as they are defined. It takes as a parameter a
              mathematical expression, the result of which can be used as the
              value of the CSS property.
            </p>
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
          <dd className={css.questionText}>
            What is a flex container and a flex element?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              A flex container establishes a new flexible formatting context for
              its contents. A flex container is an element that has the display:
              flex or display: inline-flex property set. A flex element is any
              child element of a flex container.
            </p>
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
          <dd className={css.questionText}>What is a flex axis?</dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              Flexbox defines the concept of a primary and secondary axis. Flex
              elements are always placed along a primary axis. The primary axis
              can be positioned horizontally or vertically. Initially, the
              primary axis is positioned horizontally with the elements oriented
              from right to left. The direction of the primary axis can be
              changed using the flex-direction property.
            </p>
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
          <dd className={css.questionText}>
            What are the differences between mobile first and desktop first
            approaches?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              <b>Mobile first</b> is focused on narrow screens. This is an
              approach where styles are applied to mobile devices first.
              Extended styles and other overrides for large screens are then
              added to the stylesheet via media queries. <b>Desktop first</b> is
              focused on wide screens. This is an approach where styles are
              applied to large devices first. Extended styles and overrides for
              smaller screens are then added to the stylesheet via media
              queries.
            </p>
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
          <dd className={css.questionText}>
            What are the advantages of svg over png or jpeg?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              1 - Unlike raster graphics, SVG does not lose quality when scaled.
              <br />2 - The browser does not need to request the image from the
              server, as it draws it itself, therefore, performance increases.
              <br />
              3 - Using CSS/JS, you can change the parameters of the graphics on
              the site, for example, background, transparency or borders. SVG
              can also be animated. <br />4 - SVG objects weigh much less than
              raster images.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between rgb, rgba and hex?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              <b>rgb</b> - is the mixing of red, green and blue in a percentage
              or numerical ratio to obtain the desired color. <b>rgba</b>- is
              the same rgb only with an alpha channel, which sets the level of
              opacity (0 - transparent, 1 - opaque). <b>hex</b>- this
              description of the color is based on the 16-digit number notation.
            </p>
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
          <dd className={css.questionText}>
            What is the difference between linear and radial gradients?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              <b>A linear gradient</b> is created using two or more colors with
              a specified direction of distribution. If no direction is
              specified, the default is top-to-bottom. <b>A radial gradient</b>
              differs from a linear gradient in that the colors radiate from the
              center of the gradient and spread outward evenly, forming a
              circle.
            </p>
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
