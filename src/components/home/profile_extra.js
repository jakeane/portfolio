import React from 'react';

import Grid from '@material-ui/core/Grid';

import extraData from '../../data/extra_data';
import ExtraItem from './extra_item';

const ProfileExtra = () => {
  return (
    <Grid item className="item">
      <Grid container direction="column" className="homeCard">
        {extraData.map((data) => {
          return (
            <ExtraItem
              question={data.question}
              answer={data.answer}
              key={data.question}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ProfileExtra;
