import React from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ProfileHeader = (props) => {
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
            <Typography variant="h2">Jack Keane</Typography>
            <Typography variant="subtitle1">CS Student</Typography>
            <Grid item>
              <Grid container direction="row">
                <IconButton onClick={() => props.navigateTo('GitHub')}>
                  <GitHubIcon />
                </IconButton>
                <IconButton onClick={() => props.navigateTo('LinkedIn')}>
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
