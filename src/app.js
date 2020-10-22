/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';

import './style.scss';
import NavBar from './components/navbar';
import Home from './pages/home';
import Projects from './pages/projects';
import Experience from './pages/experience';
import Interests from './pages/interests';

function TabPanel(props) {
  // eslint-disable-next-line object-curly-newline
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <NavBar value={value} handleChange={handleChange} />
      <div className="buffer">
        <TabPanel value={value} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Projects />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Experience />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Interests />
        </TabPanel>
      </div>
    </div>
  );
};

export default App;
