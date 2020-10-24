import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const InterestsItem = (props) => {
  return (
    <Grid item className="item">
      <Link
        to={props.data.link}
        target="_blank"
        onClick={(event) => {
          event.preventDefault();
          window.open(props.data.link);
        }}
      >
        <Grid container direction="row" justify="flex-start" className="card">
          <img
            alt="filler"
            src={props.data.image}
            className="interestsPreview"
          />
          <Grid item className="interestData">
            <Grid container direction="column">
              <Grid item xs>
                <Typography variant="h6" noWrap color="textPrimary">
                  {props.data.headline}
                </Typography>
              </Grid>
              <Typography variant="subtitle1" color="textSecondary">
                Found on {props.data.source}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
};

export default InterestsItem;
