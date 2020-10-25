/* eslint-disable operator-linebreak */
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import ProjectItem from '../components/projects/project_item';

const Projects = (props) => {
  // convert data into components
  // render loading animation if no data
  const projectList =
    props.data.length > 0 ? (
      props.data
        .map((data) => {
          return <ProjectItem data={data} key={data.title} />;
        })
        .sort((a, b) => {
          return (
            new Date(b.props.data.last_update) -
            new Date(a.props.data.last_update)
          );
        })
    ) : (
      <CircularProgress color="secondary" />
    );

  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-evenly"
        spacing={3}
        wrap="wrap"
      >
        {projectList}
      </Grid>
      <Typography variant="body1" className="footnote ftProjects">
        Collected from GitHub
      </Typography>
    </Container>
  );
};

export default Projects;
