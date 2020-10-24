/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import InterestsItem from '../components/interests/interests_item';
// import interestsData from '../data/interests_data';

const Interests = (props) => {
  const interestList =
    props.data.length > 0 ? (
      props.data.map((data) => {
        return <InterestsItem data={data} key={data.headline} />;
      })
    ) : (
      <CircularProgress color="secondary" />
    );

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
        {interestList}
      </Grid>
      <Typography variant="body1" className="footnote ftInterests">
        Collected from personal Reddit feed
      </Typography>
    </Container>
  );
};

export default Interests;
