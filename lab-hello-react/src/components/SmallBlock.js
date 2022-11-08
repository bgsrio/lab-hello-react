import DeclarativeIcon from "./src/images/icon1.png";
import ComponentsIcon from "./src/images/icon2.png";
import SinglewayIcon from "./src/images/icon3.png";
import JSXIcon from "./src/images/icon4.png";

function SmallBlock() {
    return (
      <div className="SmallBlock">
        <div>
          <img className="DeclarativeIcon"
          src="DeclarativeIcon"
          alt="Declarative Icon"/>
          <h3>Declarative</h3>
          <p>
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div>
          <img
            className="ComponentsIcon"
            src= "ComponentsIcon"
            alt="Components Icon"
          />
          <h3>Components</h3>
          <p>
            Build encapsulated components that manage their state
          </p>
        </div>
        <div>
          <img className="SinglewayIcon"
          src="SinglewayIcon"
          alt="Single-Way Icon" />
          <h3>Single-Way</h3>
          <p>
            A set of immutable values are passed to the components
          </p>
        </div>
        <div>
          <img className="JSXIcon"
          src="JSXIcon"
          alt="JSX Icon" />
          <h3>JSX</h3>
          <p>
            Statically-typed, designed to run on modern browsers
          </p>
        </div>
      </div>
    );
  }
  export default SmallBlock;