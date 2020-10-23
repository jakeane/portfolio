import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ProfileHeader from '../components/home/profile_header';
import ProfileBody from '../components/home/profile_body';
import ProfileExtra from '../components/home/profile_extra';

const Home = (props) => {
  const navigateTo = (location) => {
    console.log('Go to:', location);
  };

  return (
    <Container maxWidth="md">
      <Grid container direction="column" alignItems="center" spacing={3}>
        <ProfileHeader navigateTo={navigateTo} />
        <ProfileBody />
        <ProfileExtra />
      </Grid>
    </Container>
  );
};

export default Home;
