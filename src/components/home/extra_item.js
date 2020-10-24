import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ExtraItem = (props) => {
  return (
    <Grid item className="extra">
      <Typography variant="h4" color="textSecondary">
        {props.question}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {props.answer}
      </Typography>
    </Grid>
  );
};

export default ExtraItem;
