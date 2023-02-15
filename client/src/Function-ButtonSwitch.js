import logo from "./doge.jpg";

function ButtonSwitch(props) {
  const {shortButtonValue} = props;  
   switch (shortButtonValue) {
    case "A": /* for info */
      return (
        <><main><header className="Header">
          <h1>TEST A</h1>
        </header></main></>);
    case "B": /* for backend */
      return (
        <><main><header className="Header">
          <h1>TEST B</h1>
        </header></main></>);
    case "C": /* for leaflet */
      return (
        <><main><header className="Header">
          <h1>TEST C</h1>
        </header></main></>);
    case "D": /* for react css library */
      return (
        <><main><header className="Header">
          <h1>TEST D</h1>
        </header></main></>);
    case "E":
      return (
        <><main><header className="Header">
          <h1>TEST E</h1>
        </header></main></>);
    case "F":
      return (
        <><main><header className="Header">
          <h1>TEST F</h1>
        </header></main></>);
    case "G":
      return (
        <><main><header className="Header">
          <h1>TEST G</h1>
        </header></main></>);
    case "H":
      return (
        <><main><header className="Header">
          <h1>TEST H</h1>
        </header></main></>);
    default: return (
      <><div className="Container"><img src = {logo} className = "Logo" alt = "Logo"/></div>
      <main><header className="Header">
        <h1>ANDREW TIMOTHY CERVANTES</h1>
        <h2>GEOSPATIAL IT DEVELOPER</h2>
      </header></main></>);}}