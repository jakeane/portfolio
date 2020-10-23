/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
};

const a11yProps = (index) => {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
};

const NavBar = (props) => {
  return (
    <div>
      <AppBar position="fixed">
        <Grid container direction="row" justify="flex-end">
          <Tabs
            value={props.value}
            onChange={props.handleChange}
            selectionFollowsFocus
          >
            <LinkTab label="Home" href="/home" {...a11yProps(0)} />
            <LinkTab label="Projects" href="/projects" {...a11yProps(1)} />
            <LinkTab label="Experience" href="/experience" {...a11yProps(2)} />
            <LinkTab label="Interests" href="/interests" {...a11yProps(3)} />
          </Tabs>
        </Grid>
      </AppBar>
    </div>
  );
};

export default NavBar;
