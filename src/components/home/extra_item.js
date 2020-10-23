import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ExtraItem = (props) => {
  return (
    <Grid item>
      <Typography variant="h4">{props.question}</Typography>
      <Typography variant="body1">{props.answer}</Typography>
    </Grid>
  );
};

export default ExtraItem;
