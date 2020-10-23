import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const ProjectItem = (props) => {
  const navigateTo = (location) => {
    console.log('Go to:', location);
  };

  return (
    <Grid item className="grid">
      <Grid container direction="column" className="card">
        <Typography variant="h5">{props.data.title}</Typography>
        <Typography variant="subtitle2">
          Built with: {props.data.tech.join(', ')}
        </Typography>
        <img
          alt="filler"
          src="https://picsum.photos/400/200"
          className="preview"
        />
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          arcu vitae dolor congue mattis.
        </Typography>
        <Grid item>
          <Grid container direction="row">
            <IconButton onClick={() => navigateTo(props.data.live)}>
              <WebIcon />
              <Typography>Live</Typography>
            </IconButton>
            <IconButton onClick={() => navigateTo(props.data.url)}>
              <GitHubIcon />
              <Typography>Code</Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectItem;
