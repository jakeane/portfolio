import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const ExperienceItem = (props) => {
  return (
    <Grid item className="item">
      <Grid container direction="column" className="card">
        <Grid item>
          <Grid container direction="row" justify="space-between">
            <Typography variant="h5" color="textPrimary" className="position">
              {props.data.position}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {props.data.start} - {props.data.end}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" fontWeight="fontWeightLight">
          {props.data.employer}
        </Typography>
        <List>
          {props.data.responsibilities.map((resp) => {
            return (
              <ListItem key={resp} alignItems="flex-start">
                <ChevronRightIcon color="secondary" />
                <Typography varient="body1" color="textSecondary">
                  {resp}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

export default ExperienceItem;
