/* eslint-disable operator-linebreak */
import React from 'react';

import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ProfileHeader = (props) => {
  const github = 'https://github.com/jakeane';
  const linkedin = 'https://www.linkedin.com/in/jack-keane-co/';
  const resume =
    'https://www.dropbox.com/s/bl931y4v0lgvlgw/jkeaneResume.pdf?dl=0';

  const navigateTo = (location) => {
    window.open(location, '_blank');
  };

  return (
    <Grid item className="item">
      <Grid
        container
        direction="row"
        className="homeCard"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          {/* <Avatar
            alt="John Keane"
            src="src/img/jkeane.jpg"
            className="profile"
          /> */}
          <img alt="John Keane" src="src/img/jkeane.jpg" className="profile" />
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Typography variant="h2" color="textPrimary">
              John Keane
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Teaching assistant and undergraduate research assistant
            </Typography>
            <Grid item>
              <Grid container direction="row" alignItems="center">
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
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  className="resume"
                  onClick={() => navigateTo(resume)}
                >
                  Resume
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
