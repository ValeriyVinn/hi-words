import css from './InterviewJavaScript.module.css';

const InterviewJavaScript = () => {
  return (
    <div>
      <h1>Java Script Interview</h1>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>
            What data types are present in JavaScript?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              There are eight data types in JavaScript: seven primitive types
              and one complex type. The primitive types are: number, string,
              boolean, symbol, bigInt, null, and undefined. The complex type is
              an object. Objects are used for collections of data and for
              defining more complex entities. Primitive types are passed by
              value, while objects are passed by reference.
            </p>
            <p className={css.transcription}>
              ðɛr ɑr eɪt ˈdeɪtə taɪps ɪn ˈdʒɑːvəˌskrɪpt: ˈsɛvən ˈprɪmətɪv taɪps
              ənd wʌn ˈkɑmplɛks taɪp. ðə ˈprɪmətɪv taɪps ɑr: ˈnʌmbɚ, strɪŋ,
              ˈbuliən, ˈsɪmbəl, ˈbɪɡɪnt, nʌl, ənd ˌʌndɪˈfaɪnd. ðə ˈkɑmplɛks taɪp
              ɪz ən ˈɑːbdʒɛkt. ˈɑːbdʒɛkts ɑr juzd fɔr kəˈlɛkʃənz əv ˈdeɪtə ənd
              fɔr dɪˈfaɪnɪŋ mɔr ˈkɑmplɛks ˈɛntətiz. ˈprɪmətɪv taɪps ɑr ˈpæst baɪ
              ˈvælju, waɪl ˈɑːbdʒɛkts ɑr ˈpæst baɪ ˈrɛfɚəns.
            </p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>
            JavaScript has several built-in data types, which can be divided
            into two categories: primitive types and non-primitive types
            (objects). Here's a list of both:
            <ol className={css.orderedList}>
              <li>
                Primitive Types: <br />
                These are immutable data types, meaning their values cannot be
                changed after they are created.
                <ul>
                  <li>
                    Number: Represents both integer and floating-point numbers.
                    <pre className={css.code}>
                      let age = 25; <br />
                      let price = 9.99;
                    </pre>
                  </li>
                  <li>
                    String: Represents a sequence of characters (text).
                    <pre className={css.code}>let name = "Alice";</pre>
                  </li>
                  <li>
                    Boolean: Represents a logical value, either true or false.
                    <pre className={css.code}>let isOnline = true;</pre>
                  </li>
                  <li>
                    Undefined: A variable that has been declared but not
                    assigned a value.
                    <pre className={css.code}>
                      let x; <br />
                      console.log(x); // undefined
                    </pre>
                  </li>
                  <li>
                    Null: Represents an intentional absence of any object value.
                    <pre className={css.code}>let y = null;</pre>
                  </li>
                  <li>
                    Symbol: Represents a unique and immutable value, often used
                    as keys for object properties.
                    <pre className={css.code}>let uniqueID = Symbol();</pre>
                  </li>
                  <li>
                    BigInt: Represents large integers that are beyond the safe
                    range of the Number type.
                    <pre className={css.code}>
                      let bigNumber = BigInt(12345678901234567890);
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                Non-Primitive Types (Objects): <br />
                These can hold collections of values and more complex entities.
                <ul>
                  <li>
                    Object: A collection of key-value pairs (properties and
                    methods).
                    <pre className={css.code}>
                      let person = {'{'} name: "Bob", age: 30 {'}'};
                    </pre>
                  </li>
                  <li>
                    Array: A list-like object used to store multiple values.
                    <pre className={css.code}>let numbers = [1, 2, 3, 4];</pre>
                  </li>
                  <li>
                    Function: A block of code designed to perform a particular
                    task.
                    <pre className={css.code}>
                      function greet() {'{'} <br />
                      console.log("Hello!");
                      {'}'}
                    </pre>
                  </li>
                  <li>
                    Date: Used to represent dates and times.
                    <pre className={css.code}>let now = new Date(); </pre>
                  </li>
                </ul>
              </li>
            </ol>
          </dd>
        </dl>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>What is not a number in JS?</dd>

          <dt>Answer:</dt>
          <dd>
            <p>
              NaN (Not-a-Number) is a value obtained as a result of performing a
              numeric operation on a non-numeric value. Its data type is number.
              NaN is not equal to itself. Checking for NaN can be done using
              Number.isNaN.
            </p>
            <p className={css.transcription}>
              næn (ˌnɑtəˈnʌmbɚ) ɪz ə ˈvælju əbˈteɪnd æz ə rɪˈzʌlt əv pɚˈfɔrmɪŋ ə
              nuˈmɛrɪk ˌɑpəˈreɪʃən ɑn ə ˌnɑn-nuˈmɛrɪk ˈvælju. ɪts ˈdeɪtə taɪp ɪz
              ˈnʌmbɚ. næn ɪz nɑt ɪˈkwəl tə ɪtˈsɛlf. ˈtʃɛkɪŋ fɔr næn kæn bi dʌn
              ˈjuzɪŋ ˈnʌmbɚ.ɪzˈnæn.
            </p>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>
            In JavaScript, NaN stands for "Not-a-Number." It is a special value
            that represents an undefined or unrepresentable number, usually
            resulting from an invalid mathematical operation. For example,
            dividing zero by zero or trying to parse a string as a number that
            isn't numeric will return NaN.
            <h6>Examples</h6>
            <ol className={css.orderedList}>
              <li>
                Invalid mathematical operations:
                <pre className={css.code}>
                  let x; <br />
                  console.log(x); // undefined
                </pre>
              </li>
              <li>
                Trying to parse an invalid number:
                <pre className={css.code}>
                  const num = Number("hello"); // Cannot convert "hello" to a
                  number <br />
                  console.log(num); // NaN
                </pre>
              </li>
              <li>
                Multiplying a number by undefined:
                <pre className={css.code}>
                  const value = 5 * undefined; // Invalid operation <br />
                  console.log(value); // NaN
                </pre>
              </li>
              <li>
                Checking if a value is NaN:
                <pre className={css.code}>
                  const value = NaN; <br />
                  console.log(isNaN(value)); // true
                </pre>
              </li>
            </ol>
          </dd>
        </dl>

        <p>
          Just keep in mind that NaN is of type "number," even though it
          literally means "Not-a-Number."
        </p>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>
            What is the difference between null and undefined?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <p>Undefined represents the default value of:</p>
            <ol className={css.orderedList}>
              <li> A variable declared without initialization;</li>
              <li>A function that does not explicitly return a value;</li>
              <li>A non-existent property of an object.</li>
            </ol>
            <p>
              null represents the value of "no value" and is explicitly assigned
              to a variable.
            </p>
            <div className={css.transcription}>
              <p>ˌʌndɪˈfaɪnd rɛprɪˈzɛnts ðə dɪˈfɔlt ˈvælju əv:</p>
              <ol className={css.orderedList}>
                <li>ə ˈvɛriəˌbəl dɪˈklɛrd wɪˈðaʊt ˌɪnɪʃəlaɪˈzeɪʃən;</li>
                <li>ə ˈfʌŋkʃən ðæt dʌz nɑt ɪkˈsplɪsɪtli rɪˈtɝn ə ˈvælju;</li>
                <li>ə ˌnɑn-ɪgˈzɪstənt ˈprɑpɚti əv ən ˈɑbdʒɛkt.</li>
              </ol>
              <p>
                ˈnʌl rɛprɪˈzɛnts ðə ˈvælju əv "noʊ ˈvælju" ənd ɪz ɪkˈsplɪsɪtli
                əˈsaɪnd tə ə ˈvɛriəˌbəl.
              </p>
            </div>
          </dd>
          <dt>Answer (GPT):</dt>
          <dd>
            <ol className={css.orderedList}>
              <li>
                Definition
                <ul>
                  <li>
                    null: Represents the intentional absence of any object
                    value. It is explicitly assigned to indicate "no value" or
                    "empty value."
                  </li>
                  <li>
                    undefined: Indicates that a variable has been declared but
                    has not yet been assigned a value. It represents a state of
                    "not defined."
                  </li>
                </ul>
              </li>
              <li>
                Type
                <ul>
                  <li>
                    null: Its type is object (this is a historical bug in
                    JavaScript and not an actual object).
                    <pre className={css.code}>
                      console.log(typeof null); // "object"
                    </pre>
                  </li>

                  <li>
                    undefined: Its type is undefined.
                    <pre className={css.code}>
                      console.log(typeof undefined); // "undefined"
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                When They Occur
                <ul>
                  <li>
                    null: Assigned explicitly by the programmer to indicate "no
                    value."
                    <pre className={css.code}>
                      let empty = null; <br />
                      console.log(empty); // null
                    </pre>
                  </li>
                  <li>
                    undefined: Happens automatically when:
                    <ul>
                      <li>
                        A variable is declared but not assigned a value.
                        <pre className={css.code}>
                          let x; <br />
                          console.log(x); // undefined
                        </pre>
                      </li>
                      <li>
                        A function does not return a value.
                        <pre className={css.code}>
                          function doNothing()
                          <br />
                          console.log(doNothing()); // undefined
                        </pre>
                      </li>
                      <li>
                        Accessing a non-existent property on an object.
                        <pre className={css.code}>
                          let obj = ;<br />
                          console.log(obj.name); // undefined
                        </pre>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Usage
                <ul>
                  <li>
                    null: Used intentionally to denote the absence of a value or
                    "empty."
                    <pre className={css.code}>
                      let user = null; // No user is currently logged in
                    </pre>
                  </li>
                  <li>
                    undefined: Denotes a variable that has been declared but not
                    initialized, or a function property or parameter with no
                    explicit value.
                  </li>
                </ul>
              </li>
              <li>
                Equality Comparison
                <ul>
                  <li>
                    Using ==:
                    <pre className={css.code}>
                      console.log(null == undefined); // true
                    </pre>
                  </li>
                  <li>
                    Using === (strict equality):
                    <pre className={css.code}>
                      console.log(null === undefined); // false
                    </pre>
                  </li>
                </ul>
              </li>
            </ol>

            <table className={css.table}>
              <caption>Summary Table</caption>
              <thead>
                <tr>
                  <th>Feature</th>
                  <td>null</td>
                  <td>undefined</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Meaning</th>
                  <td>Explicitly "no value"</td>
                  <td>Uninitialized variable or missing value</td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>object</td>
                  <td>undefined</td>
                </tr>
                <tr>
                  <th>Assigned by</th>
                  <td>Programmer explicitly</td>
                  <td>JavaScript automatically</td>
                </tr>
              </tbody>
            </table>
          </dd>
        </dl>
      </div>
      {/* ---------------------- */}
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>What is the difference between strict and loose equality (=== and ==)?</dd>

          <dt>Answer:</dt>
          <dd>
            <p>Strict equality compares values by both data type and value. Loose equality converts values to the same type before comparing them.</p>
            <p className={css.transcription}>strɪkt ɪˈkwɑləti kəmˈpɛrz ˈvæljuz baɪ boʊθ ˈdeɪtə taɪp ænd ˈvælju. lus ɪˈkwɑləti kənˈvɝts ˈvæljuz tə ðə seɪm taɪp bɪˈfɔr kəmˈpɛrɪŋ ðɛm.</p>
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

export default InterviewJavaScript;
