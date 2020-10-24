/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// import projectData from '../data/project_data';
import ProjectItem from '../components/projects/project_item';

const Projects = (props) => {
  const projectList =
    props.data.length > 0
      ? props.data
          .map((data) => {
            return <ProjectItem data={data} key={data.title} />;
          })
          .sort((a, b) => {
            return (
              new Date(b.props.data.last_update) -
              new Date(a.props.data.last_update)
            );
          })
      : undefined;

  return (
    <Container maxWidth="md">
      <Typography variant="body1">Scraped from GitHub</Typography>
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
    </Container>
  );
};

export default Projects;
