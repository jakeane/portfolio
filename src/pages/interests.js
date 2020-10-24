/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import InterestsItem from '../components/interests/interests_item';
// import interestsData from '../data/interests_data';

const Interests = (props) => {
  const interestList =
    props.data.length > 0
      ? props.data.map((data) => {
          return <InterestsItem data={data} key={data.headline} />;
        })
      : undefined;

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
        {interestList}
      </Grid>
    </Container>
  );
};

export default Interests;
