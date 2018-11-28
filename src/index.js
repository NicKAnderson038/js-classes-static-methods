import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>JS Classes showing static methods abilities</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const numbers = [5, 6, 2, 3, 7];
// const max = Math.max.apply(null, numbers);
const max = Math.max(null, ...numbers);
console.log(`%c ${max}`, "color:pink;font-weight:bold;font-style:italic;");

const env = "dev";

class Logger {
  constructor() {
    this.exampleTwo = "required a new object to read";
  }
  /**
   * Log messages to console for environments < production
   *
   * @method _log
   * @static
   * @return null
   */
  static _log() {
    if ("production" !== env) {
      console.log(
        "%c Marker",
        "color:orange;font-weight:bold;font-style:italic;",
        console,
        arguments
      );
      console.log(console, arguments);
      console.log("true");
      // console.log.apply(console, arguments)
    }
  }

  /**
   * Log errors to console for environments < production
   *
   * @method _error
   * @static
   * @return null
   */
  static _error() {
    if ("production" !== env) {
      console.log("true");
      console.error.apply(console, arguments);
    }
  }

  example() {
    console.log("YES");
    return this.exampleTwo;
  }
}
Logger._log();
const lg = new Logger();
console.log(lg.example());
