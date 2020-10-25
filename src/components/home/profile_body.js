import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ProfileBody = () => {
  return (
    <Grid item className="item">
      <Grid container className="homeCard">
        <Typography variant="body1" color="textSecondary">
          I am a computer science and quantitative social science student at
          Dartmouth College. I find myself most interested in{' '}
          <span className="highlight">application development</span> and{' '}
          <span className="highlight">machine learning</span>, especially where
          the two areas intersect. My current work pertains to the AIM HIGH
          Laboratory at the Geisel School of Medicine, where I am developing a
          chatbot using Flutter and ParlAI aimed to help people manage their
          anxiety and/or depression.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileBody;
