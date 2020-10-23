import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ProfileBody = () => {
  return (
    <Grid item className="item">
      <Grid container className="card">
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
          metus quis varius cursus. In vitae rhoncus libero. Donec placerat nisl
          sit amet augue faucibus, nec aliquam magna commodo. Proin est sapien,
          convallis sit amet arcu et, eleifend hendrerit ligula. Nulla bibendum
          erat eu mi sagittis vehicula. Vivamus tristique purus non nunc
          venenatis aliquam. Curabitur nec neque est. Vestibulum tincidunt est
          nibh, ut scelerisque mi sagittis sed. Phasellus molestie tristique
          eros, vel egestas felis. Aenean ut elit eget ex sodales scelerisque.
          Aenean mattis risus nisl. Duis neque lectus, interdum eget mi nec,
          tincidunt rhoncus erat. Cras tincidunt sagittis leo, at.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileBody;
