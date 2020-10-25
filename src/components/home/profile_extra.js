import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ProfileExtra = () => {
  return (
    <Grid item className="item">
      <Grid container direction="column" className="homeCard">
        <Grid item className="extra">
          <Typography variant="h5" color="textPrimary">
            Flutter or React?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Currently Flutter has taken my heart. I have really been enjoying
            how much comes out of the box with the Flutter framework, and the
            respective documentation is incredibly thorough and easy to follow.
            Learning new features has been relatively easy in my experience as
            the design is very consistent, while React’s relative dependence on
            external packages can become time consuming. Lastly, Dart, the core
            language language for Flutter, strikes a great balance between
            readability and speed, and as a plus, it is statically typed.
          </Typography>
        </Grid>
        <Grid item className="extra">
          <Typography variant="h5" color="textPrimary">
            Preferred way to exit vim?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Best case scenario I just hit reboot on the computer, but I often
            find myself in a pinch. So, I succumb to the versatility of Python
            and hastily write &nbsp;
            <span className="code">
              python -c &quot;from os import system; system(&apos;killall -9
              vim&apos;)&quot;
            </span>
            {'  '}
            into the command line. If all else fails, I simply just walk away.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileExtra;
