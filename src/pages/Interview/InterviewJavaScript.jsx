import css from './InterviewJavaScript.module.css';

const InterviewJavaScript = () => {
  return (
    <div>
      <h1>Java Script Interview</h1>
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>
            What data types are present in JavaScript?
          </dd>

          <dt>Answer:</dt>
          <dd>
            There are eight data types. Seven primitive and one complex data
            type. Primitive types: number, string, boolean, symbol, bigInt,
            null, undefined. Complex type - object. It is used for collections
            of data and for declaring more complex entities. It is also passed
            by reference, and simple data types by value.
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
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>What is not a number in JS?</dd>

          <dt>Answer:</dt>
          <dd>
            NaN (not a number) is the value obtained as a result of performing a
            numeric operation on a non-numeric value. Its data type is number.
            NaN is not equal to itself. Checking for NaN can be done using
            Number.isNaN
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
      <div className={css.container}>
        <dl>
          <dt>Question:</dt>
          <dd className={css.questionText}>
            What is the difference between null and undefined?
          </dd>

          <dt>Answer:</dt>
          <dd>
            <ol className={css.orderedList}>
              <p>undefined represents the default value of:</p>
              <li> A variable declared without initialization;</li>
              <li>a function that does not return anything explicitly;</li>
              <li>a non-existent property of an object.</li>
            </ol>
            <p>
              null is the value of "no value". Assigned to a variable
              explicitly.
            </p>
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
                          function doNothing() {'{'}
                          {'}'} <br />
                          console.log(doNothing()); // undefined
                        </pre>
                      </li>
                      <li>
                        Accessing a non-existent property on an object.
                        <pre className={css.code}>
                          let obj = {'{'}
                          {'}'};<br />
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

export default InterviewJavaScript;
