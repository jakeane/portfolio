/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import './style.scss';
import NavBar from './components/navbar';
import Home from './pages/home';
import Projects from './pages/projects';
import Experience from './pages/experience';
import Interests from './pages/interests';

const dbUrl = 'https://jkeane-portfolio.herokuapp.com';

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
  const [projects, setProjects] = useState({});
  const [interests, setInterests] = useState({});

  useEffect(() => {
    axios.get(`${dbUrl}/api/data`).then((res) => {
      console.log('data', res.data);
      setProjects(res.data.github);
      setInterests(res.data.reddit);
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div>
        <NavBar value={value} handleChange={handleChange} />
        <div className="buffer">
          <TabPanel value={value} index={0}>
            <Home />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Projects data={projects} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Experience />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Interests data={interests} />
          </TabPanel>
        </div>
      </div>
    </Router>
  );
};

export default App;
