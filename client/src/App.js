/*start code */

import React from "react"; /*for functions */
import "./App.css"; /* for styles */
import logo from "./doge.jpg"; /* for logo */

/* mui tabs block */
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>);}
TabPanel.propTypes = {children: PropTypes.node, index: PropTypes.number.isRequired, value: PropTypes.number.isRequired,};
function a11yProps(index) {return {id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`, };}

/* loadable user interface */
function ButtonSwitch(props) {
  const {shortButtonValue} = props;  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {setValue(newValue);};

  switch (shortButtonValue) {
    case "A": return /*personal information */ (
      <><main>
        <div className="Container">
          <div className="Box"><h1>Name: ANDREW TIMOTHY CERVANTES</h1></div>
          <div className="Box"><h1>名前: 安德魯蒂莫西塞萬提斯</h1></div>
          <div className="Box"><h2>Insert person introduction here.</h2></div>
          <div className="Box"><h3>Add additional information here.</h3></div>
        </div>
      </main></>);
    case "B": return (<><main className="Placeholder">TEST B</main></>); /* backend practice */
    case "C": return (<><main className="Placeholder">TEST C</main></>); /* leaflet practice */
    case "D": return /* react css library practice */ (
      <><main className="Placeholder">
        <Box sx={{width: '100%'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
      </main></>);
    case "E": return (<><main className="Placeholder">TEST E</main></>);
    case "F": return (<><main className="Placeholder">TEST F</main></>);
    case "G": return (<><main className="Placeholder">TEST G</main></>);
    case "H": return (<><main className="Placeholder">TEST H</main></>);
    default:
      return (
        <main className = "Default">
          <img src = {logo} className = "Default-Logo" alt = "Logo"/>
          <p className = "Default-Title">THIS IS A TEST WEBSITE</p>
          <p className = "Default-Subtitle">bork bork</p>
        </main>);}}

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
        {buttonValuesArray.map((buttonName) => (
          <div
            className = {"Key-"+buttonName}
            onClick = {() => {clickButton(buttonName)}}
            onMouseOver = {() => hoverButton(buttonName)}
            onMouseOut = {() => exitButton(buttonName)}>
              <div>{buttonName}</div>
          </div>))}
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