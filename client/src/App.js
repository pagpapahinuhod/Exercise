/*start code */

import React from "react"; /*for functions */
import "./App.css"; /* for styles */
import logo from "./assets/images/doge.jpg"; /* for logo */
import sample from "./assets/images/sample-image.jpg"; /* for sample images */

/* mui block */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from '@mui/material/styles';

/*mui global style */
const globalTheme = createTheme({
  typography: {
    fontFamily: 'Kanit',}});

/* mui tabs */
function TabPanel(props) {
  const {children, value, index, ...other} = props;
  return (
    <div role = "tabpanel" hidden = {value !== index} id = {`simple-tabpanel-${index}`} aria-labelledby = {`simple-tab-${index}`} {...other}>
        {value === index && (<Box sx = {{ p: 2 }}><Typography>{children}</Typography></Box>)}
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
        <div className = "Container">
          <div className = "Box"><h1>Name: ANDREW TIMOTHY CERVANTES</h1></div>
          <div className = "Box"><h1>名前: 安德魯蒂莫西塞萬提斯</h1></div>
          <div className = "Box"><h2>Insert person introduction here.</h2></div>
          <div className = "Box"><h3>Add additional information here.</h3></div>
        </div>
      </main></>);
    case "B": return /*personal information */ (<><main className="Placeholder">TEST B</main></>);
    case "C": return /* backend practice */ (
      <ThemeProvider theme = {globalTheme}>
        <Box className = "Tabs-Container">
          <Box className = "Tabs-Header"><h1>Our People</h1></Box>
        </Box>
      </ThemeProvider>);
    case "D": return /* react css library practice */ (
      <ThemeProvider theme = {globalTheme}>
        <Box className = "Tabs-Container">
          <Box className = "Tabs-Header"><h1>Our International Partners</h1></Box>
          <Box sx = {{widthborderBottom: 2, borderColor: 'divider' }}>
            <Tabs value = {value} onChange={handleChange} aria-label = "basic tabs example" centered>
              <Tab label = "Eartheye Space" {...a11yProps(0)} />
              <Tab label = "ICEYE" {...a11yProps(1)} />
              <Tab label = "NTT DATA" {...a11yProps(2)} />
              <Tab label = "planet." {...a11yProps(3)} />
              <Tab label = "RESTEC" {...a11yProps(4)} />
              <Tab label = "SPACEKNOW" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <TabPanel value = {value} index = {0}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4} sx={{ m: '4vmin' }}>
                <Grid xs={6}>
                  <img src = {sample} className = "Sample-Image" alt = "Sample"/>
                </Grid>
                <Grid xs={6}>
                  <h1>Eartheye Space</h1>
                  <h3>Driven by delightful experiences, transparency, global reach, local touch, and sustainability, Eartheye Space is committed to solving timely access and affordability issues with geospatial data. The earth observation (EO) business models are broken. The gaps between demand and supply of 'tasked data' and data 'haves' and 'have-nots' motivates the company to fix these gaps through business model innovations and technology.</h3>
                  <br></br><br></br>
                  <p className = "Partner-Link">Learn more about <a href = "https://www.eartheye.space" rel = "noreferrer" target = "_blank">Eartheye Space</a>.</p>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value = {value} index = {1}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4} sx={{m: '4vmin'}}>
                <Grid xs={6}>
                  <img src = {sample} className = "Sample-Image" alt = "Sample"/>
                </Grid>
                <Grid xs={6}>
                  <h1>ICEYE</h1>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt egestas felis commodo faucibus. Ut at hendrerit dui. Duis pellentesque, mauris sit amet viverra commodo, nibh enim mattis massa, id tincidunt libero est eu mauris. Cras quis dolor in ante tincidunt tristique. Aenean vitae sem sed ligula pharetra aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis quis mi eu odio consequat egestas posuere eu velit. Donec ultricies lectus sed ante interdum ultrices. Donec id euismod nulla. Fusce gravida iaculis metus, in porta arcu cursus quis. Praesent facilisis ex a ligula cursus, sed vestibulum metus luctus. Fusce ligula odio, euismod pulvinar convallis non, pretium in felis.</h3>
                  <br></br><br></br>
                  <p className = "Partner-Link">Learn more about <a href = "https://www.iceye.com" rel = "noreferrer" target = "_blank">ICEYE</a>.</p>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value = {value} index = {2}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4} sx={{ m: '4vmin' }}>
                <Grid xs={6}>
                  <img src = {sample} className = "Sample-Image" alt = "Sample"/>
                </Grid>
                <Grid xs={6}>
                  <h1>NTT DATA</h1>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt egestas felis commodo faucibus. Ut at hendrerit dui. Duis pellentesque, mauris sit amet viverra commodo, nibh enim mattis massa, id tincidunt libero est eu mauris. Cras quis dolor in ante tincidunt tristique. Aenean vitae sem sed ligula pharetra aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis quis mi eu odio consequat egestas posuere eu velit. Donec ultricies lectus sed ante interdum ultrices. Donec id euismod nulla. Fusce gravida iaculis metus, in porta arcu cursus quis. Praesent facilisis ex a ligula cursus, sed vestibulum metus luctus. Fusce ligula odio, euismod pulvinar convallis non, pretium in felis.</h3>
                  <br></br><br></br>
                  <p className = "Partner-Link">Learn more about <a href = "https://www.nttdata.com/global/en" rel = "noreferrer" target = "_blank">NTT DATA</a>.</p>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value = {value} index = {3}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4} sx={{ m: '4vmin' }}>
                <Grid xs={6}>
                  <img src = {sample} className = "Sample-Image" alt = "Sample"/>
                </Grid>
                <Grid xs={6}>
                  <h1>planet.</h1>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt egestas felis commodo faucibus. Ut at hendrerit dui. Duis pellentesque, mauris sit amet viverra commodo, nibh enim mattis massa, id tincidunt libero est eu mauris. Cras quis dolor in ante tincidunt tristique. Aenean vitae sem sed ligula pharetra aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis quis mi eu odio consequat egestas posuere eu velit. Donec ultricies lectus sed ante interdum ultrices. Donec id euismod nulla. Fusce gravida iaculis metus, in porta arcu cursus quis. Praesent facilisis ex a ligula cursus, sed vestibulum metus luctus. Fusce ligula odio, euismod pulvinar convallis non, pretium in felis.</h3>
                  <br></br><br></br>
                  <p className = "Partner-Link">Learn more about <a href = "https://www.planet.com" rel = "noreferrer" target = "_blank">planet.</a></p>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value = {value} index = {4}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4} sx={{ m: '4vmin' }}>
                <Grid xs={6}>
                  <img src = {sample} className = "Sample-Image" alt = "Sample"/>
                </Grid>
                <Grid xs={6}>
                  <h1>RESTEC</h1>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt egestas felis commodo faucibus. Ut at hendrerit dui. Duis pellentesque, mauris sit amet viverra commodo, nibh enim mattis massa, id tincidunt libero est eu mauris. Cras quis dolor in ante tincidunt tristique. Aenean vitae sem sed ligula pharetra aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis quis mi eu odio consequat egestas posuere eu velit. Donec ultricies lectus sed ante interdum ultrices. Donec id euismod nulla. Fusce gravida iaculis metus, in porta arcu cursus quis. Praesent facilisis ex a ligula cursus, sed vestibulum metus luctus. Fusce ligula odio, euismod pulvinar convallis non, pretium in felis.</h3>
                  <br></br><br></br>
                  <p className = "Partner-Link">Learn more about <a href = "https://www.restec.or.jp/en" rel = "noreferrer" target = "_blank">RESTEC</a>.</p>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value = {value} index = {5}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4} sx={{ m: '4vmin' }}>
                <Grid xs={6}>
                  <img src = {sample} className = "Sample-Image" alt = "Sample"/>
                </Grid>
                <Grid xs={6}>
                  <h1>SPACEKNOW</h1>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt egestas felis commodo faucibus. Ut at hendrerit dui. Duis pellentesque, mauris sit amet viverra commodo, nibh enim mattis massa, id tincidunt libero est eu mauris. Cras quis dolor in ante tincidunt tristique. Aenean vitae sem sed ligula pharetra aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis quis mi eu odio consequat egestas posuere eu velit. Donec ultricies lectus sed ante interdum ultrices. Donec id euismod nulla. Fusce gravida iaculis metus, in porta arcu cursus quis. Praesent facilisis ex a ligula cursus, sed vestibulum metus luctus. Fusce ligula odio, euismod pulvinar convallis non, pretium in felis.</h3>
                  <br></br><br></br>
                  <p className = "Partner-Link">Learn more about <a href = "https://spaceknow.com" rel = "noreferrer" target = "_blank">SPACEKNOW</a>.</p>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </Box>
      </ThemeProvider>);
    case "E": return /* react css library practice */ (
      <ThemeProvider theme = {globalTheme}>
        <Box className = "Tabs-Container">
          <Box className = "Tabs-Header"><h1>Our Products</h1></Box>
          <Box sx = {{widthborderBottom: 2, borderColor: 'divider' }}>
            <Tabs value = {value} onChange={handleChange} aria-label = "basic tabs example" centered>
              <Tab label = "PCiS" {...a11yProps(0)} />
              <Tab label = "SEEDs" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value = {value} index = {0}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4} sx={{ m: '4vmin' }}>
                <Grid xs={6}>
                  <img src = {sample} className = "Sample-Image" alt = "Sample"/>
                </Grid>
                <Grid xs={6}>
                  <h1>PCiS</h1>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value = {value} index = {1}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4} sx={{ m: '4vmin' }}>
                <Grid xs={6}>
                  <img src = {sample} className = "Sample-Image" alt = "Sample"/>
                </Grid>
                <Grid xs={6}>
                  <h1>SEEDs</h1>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </Box>
      </ThemeProvider>);
    case "F": return  /* leaflet practice */ (<><main className = "Placeholder">TEST F</main></>);
    case "G": return (<><main className = "Placeholder">TEST G</main></>);
    case "H": return (<><main className = "Placeholder">TEST H</main></>);
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