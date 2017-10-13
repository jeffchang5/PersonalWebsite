import React from 'react';
import styled from 'styled-components';
import { WideContainer } from 'components/common/responsive_container';
import SectionHeader from 'components/common/section_header';
import ProjectMenu from 'components/projects/projectsmenu';
import ProjectCard from 'components/projects/projectcard';
import ProjectClearButton from 'components/projects/projectclearbutton';
import ProjectCardConfig from 'config/project_cards';
import ProjectCategories from 'config/project_categories';


const ProjectCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default class ProjectsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.menuCallback = this.menuCallback.bind(this);
    this.state = {
      category: 'default',
    };
  }

  filterAndMapProjectCards(projectCardList) {
    let cardList;
    if (this.state.category === 'default') {
      cardList = projectCardList.filter(projectCard => projectCard.featured === true);
    } else {
      cardList = projectCardList
        .filter(projectCard => projectCard.category === this.state.category);
    }
    return cardList.map(projectCard =>
      (<ProjectCard key={projectCard.key} project={projectCard} />));
  }

  menuCallback(category) {
    this.setState({
      category,
    });
  }
  clearCallback(category) {
    this.setState({
      category,
    });
  }

  render() {
    return (
      <WideContainer>
        { Object.keys(ProjectCategories).map(category => (
          <svg key={category} xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
            <filter id={`${category}-filter`}>
              { ProjectCategories[category].filter }
            </filter>
          </svg>
        )) }
        <SectionHeader />
        <ProjectMenu callback={this.menuCallback} />
        <ProjectClearButton callback={this.clearCallback} />
        <ProjectCardWrapper>
          { this.filterAndMapProjectCards(ProjectCardConfig) }
        </ProjectCardWrapper>
      </WideContainer>
    );
  }
}
