import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const ProjectItem = (props) => {
  const navigateTo = (location) => {
    window.open(location, '_blank');
  };

  // convert iso date to generic date
  const lastUpdate = new Date(props.data.last_update);

  const updateText = `Last updated: ${
    lastUpdate.getMonth() + 1
  }/${lastUpdate.getDate()}/${lastUpdate.getFullYear()}`;

  return (
    <Grid item className="grid">
      <Grid
        container
        direction="column"
        justify="space-between"
        className="card"
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h5" color="textPrimary">
              {props.data.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {updateText}
            </Typography>
          </Grid>
          <Typography variant="subtitle2" color="textSecondary">
            Built with: {props.data.language}
          </Typography>
          <img
            alt="filler"
            src={props.data.image}
            className="projectsPreview"
          />
          <Typography variant="subtitle1" color="textSecondary">
            {props.data.description}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <IconButton
              onClick={() => navigateTo(props.data.url)}
              color="secondary"
            >
              <GitHubIcon />
              <Typography color="textSecondary" className="textButton">
                Code
              </Typography>
            </IconButton>
            {props.data.live ? (
              <IconButton
                onClick={() => navigateTo(props.data.live)}
                color="secondary"
              >
                <WebIcon />
                <Typography color="textSecondary" className="textButton">
                  Live
                </Typography>
              </IconButton>
            ) : undefined}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectItem;
