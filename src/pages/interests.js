import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import InterestsItem from '../components/interests/interests_item';
import interestsData from '../data/interests_data';

const Interests = (props) => {
  return (
    <Container maxWidth="md">
      <Typography variant="body1">Scraped from personal Reddit feed</Typography>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="flex-start"
        spacing={3}
        wrap="wrap"
      >
        {interestsData.map((data) => {
          return <InterestsItem data={data} key={data.headline} />;
        })}
      </Grid>
    </Container>
  );
};

export default Interests;
