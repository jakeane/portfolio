import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ExperienceItem from '../components/experience/experience_item';
import experienceData from '../data/experience_data.json';

const Experience = (props) => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="flex-start"
        spacing={3}
        wrap="wrap"
      >
        {experienceData.map((data) => {
          return <ExperienceItem data={data} key={data.position} />;
        })}
      </Grid>
    </Container>
  );
};

export default Experience;
