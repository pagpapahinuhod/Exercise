/*start code */

import React from "react"; /*for functions */
import "./App.css"; /* for styles */
import logo from "./doge.jpg"; /* for logo */

/* loadable user interface */
function ButtonSwitch(props) {
  const {shortButtonValue} = props;  
   switch (shortButtonValue) {
    case "A": return (<><main>Andrew Timothy Cervantes</main></>); /* personal information */
    case "B": return (<><main className="Placeholder">TEST B</main></>); /* backend practice */
    case "C": return (<><main className="Placeholder">TEST C</main></>); /* leaflet practice */
    case "D": return (<><main className="Placeholder">TEST D</main></>); /* react css library practice */
    case "E": return (<><main className="Placeholder">TEST E</main></>);
    case "F": return (<><main className="Placeholder">TEST F</main></>);
    case "G": return (<><main className="Placeholder">TEST G</main></>);
    case "H": return (<><main className="Placeholder">TEST H</main></>);
    default:
      return (
        <div className = "Default">
          <img src = {logo} className = "Default-Logo" alt = "Logo"/>
          <p className = "Default-Title">THIS IS A TEST WEBSITE</p>
          <p className = "Default-Subtitle">bork bork</p>
        </div>);}}

function App() {
  const buttonValuesArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const [buttonValue, setButtonValue] = React.useState("0"); 
  const [oldValue, setOldValue] = React.useState("Z");
  /* button interaction functions */
  const clickButton = (newValue) => {
    if (oldValue === newValue) {
      setButtonValue(newValue);
      setOldValue("0");}
    else {
      setButtonValue(newValue);
      setOldValue(newValue);}}
  const hoverButton = (newValue) => {setButtonValue(newValue);}
  const exitButton = () => {setButtonValue(oldValue);}
  /*main user interface */
  return (
    <div className = "App">
      <ButtonSwitch shortButtonValue = {buttonValue}/>
      <header>
        <table>
          <tr>
            {buttonValuesArray.map((buttonName) => (
              <td
                className = {"Key-"+buttonName}
                onClick = {() => {clickButton(buttonName)}}
                onMouseOver = {() => hoverButton(buttonName)}
                onMouseOut = {() => exitButton(buttonName)}>
                  {buttonName}
              </td>))}
          </tr>
        </table>
      </header>
      <footer>
        <a className = "Link-1" href = "https://linkedin.com/in/andrew-timothy-cervantes" rel = "noreferrer" target = "_blank">LinkedIn</a>
        <a className = "Link-2" href = "https://github.com/pagpapahinuhod" rel = "noreferrer" target = "_blank">GitHub</a>
        <a className = "Link-3" href = "http://facebook.com/pagpapahinuhod" rel = "noreferrer" target = "_blank">Facebook</a>
        <a className = "Link-4" href = "https://www.geospectrum.com.ph/" rel = "noreferrer" target = "_blank">Geospectrum Marketing Services, Inc. 2023</a>
      </footer>
    </div>);}

export default App;

/* end code */