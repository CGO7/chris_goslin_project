import React, { Component } from 'react';
import ProjectCard from './projectCard/index';
import Wrapper from './wrapper/index';
import projects from '../projects.json';


class Portfolio extends Component {
    state= {
      projects
    };
  
    render() {
      return (
        <Wrapper>
          {this.state.projects.map(project => (
            <ProjectCard
              id={project.id}
              title={project.title}
              image={project.image}
              author={project.author}
            />
          ))}
        </Wrapper> 
      );
    }
  }

export default Portfolio;