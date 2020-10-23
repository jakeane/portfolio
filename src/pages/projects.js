import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import projectData from '../data/project_data';
import ProjectItem from '../components/projects/project_item';

const Projects = (props) => {
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
        {projectData.map((data) => {
          return <ProjectItem data={data} key={data.title} />;
        })}
      </Grid>
    </Container>
  );
};

export default Projects;
