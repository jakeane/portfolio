import React from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ProfileHeader = (props) => {
  const github = 'https://github.com/jakeane';
  const linkedin = 'https://www.linkedin.com/in/jack-keane-co/';

  const navigateTo = (location) => {
    window.open(location, '_blank');
  };

  return (
    <Grid item className="item">
      <Grid
        container
        direction="row"
        className="card"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Avatar
            alt="John Keane"
            src="src/img/jkeane.jpg"
            className="profile"
          />
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Typography variant="h2" color="textPrimary">
              Jack Keane
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              CS Student
            </Typography>
            <Grid item>
              <Grid container direction="row">
                <IconButton
                  onClick={() => navigateTo(github)}
                  color="secondary"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  onClick={() => navigateTo(linkedin)}
                  color="secondary"
                >
                  <LinkedInIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
