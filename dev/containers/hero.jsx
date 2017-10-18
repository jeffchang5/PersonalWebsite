import React from 'react';
import styled from 'styled-components';
import sample from 'resources/images/sample.jpg';
import Container from 'components/common/responsive_container';

const NavBarBufferWrapper = styled.div`
  padding-top: 15vh;
`;

const HeroWrapper = styled.div`

  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto 5vh auto;
`;


const HeroDescriptionWrapper = styled.div`
  height: 100%;
  background-color: #3398CA;
`;

const AboutImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const HeroSectionWrapper = styled.div`
  @media (min-width: 768px) {
    width: 90%;
    
  @media (min-width: 1200px) {
    min-width: 50%;
    width: 50%;
  }
`;


const HeroDescription = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 75%;
  margin: 0 auto;
`;

const AboutDescriptionHeaderWrapper = styled.div`
  align-self: center;
  margin: 25px 0;
`;


const AboutDescriptionHeader = styled.div`
  display: flex;
  color: white;
  font-family: 'Source Code Pro', monospace;
  font-size: 2.2em;
  font-weight: 300;
  line-height: 35px;
  margin: 20px 0;
  min-width: 35%;
`;

export default () => (
  <NavBarBufferWrapper>
    <Container>
      <HeroWrapper>
        <HeroSectionWrapper>
          <AboutImage src={sample} />
        </HeroSectionWrapper>
        <HeroSectionWrapper>
          <HeroDescriptionWrapper>
            <HeroDescription>
              <AboutDescriptionHeaderWrapper>
                <AboutDescriptionHeader>JEFFREY CHANG</AboutDescriptionHeader>
                <AboutDescriptionHeader>SOFTWARE DEVELOPER</AboutDescriptionHeader>
                <AboutDescriptionHeader>HUMMUS ENTHUSIAST</AboutDescriptionHeader>
              </AboutDescriptionHeaderWrapper>
            </HeroDescription>
          </HeroDescriptionWrapper>
        </HeroSectionWrapper>
        <HeroSectionWrapper />
        <HeroSectionWrapper>
          <AboutImage src={sample} />
        </HeroSectionWrapper>
      </HeroWrapper>
    </Container>
  </NavBarBufferWrapper>);
