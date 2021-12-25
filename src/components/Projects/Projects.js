import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
/* import '@splidejs/splide/dist/css/splide-core.min.css'; */
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import './Projects.scss';
import SlideContainer from '../SlideContainer/SlideContainer';
import projectPortfolio from '../../images/pr1.png';
import projectHowToLearn from '../../images/pr2.png';
import projectRussianTravel from '../../images/russian_travel.png';
import projectMesto from '../../images/mesto_project.png';
import StyledLine from '../Permanent components/StyledLine/StyledLine';

function Projects() {
  const [isClickedHeading, setIsClickedHeading] = useState(false);

  function handleClickHeading() {
    setIsClickedHeading(!isClickedHeading);
  }

  return (
    <>
      <StyledLine />
      <div className="Projects">
        <h2
          className={`Projects__heading ${
            isClickedHeading ? 'Projects__heading_animation' : ''
          }`}
          onClick={handleClickHeading}
          onKeyDown={handleClickHeading}
        >
          {}
        </h2>
        <Splide
          options={{
            rewind: true,
            width: '100%',
            height: 500,
            gap: '2rem',
            pagination: true,
            cover: false,
            speed: 400,
            keyboard: true,
            heightRatio: 1,
          }}
        >
          <SplideSlide>
            <SlideContainer
              img={projectPortfolio}
              address="kseniya.com"
              link="http://localhost:3000/"
              title="Portfolio"
              description="My first project-portfolio as an cv. It builded on React and
            native JS. I used the Slidejs library for slider, animations on
            css, styles wrote on scss. I would like to do it more designed,
            but i need more practice. It&apos;s not diminution of my
            ability, it&apos;s a fact."
            />
          </SplideSlide>
          <SplideSlide>
            <SlideContainer
              img={projectHowToLearn}
              address="/how-to-learn/"
              link="https://kseniya7991.github.io/how-to-learn/"
              title="How to learn"
              description="One-page non-adaptive site. This was the first project in Y.P.
          Only CSS + HTML. There are videos from YouTube, CSS animations,
          flex."
            />
          </SplideSlide>
          <SplideSlide>
            <SlideContainer
              img={projectRussianTravel}
              address="/russian-travel/"
              link="https://kseniya7991.github.io/russian-travel/index.html"
              title="Russian Travel"
              description="The one-page adaptive website about travels in a large country called Russia. Grid and Flex systems, overlaying of elements, BEM methodology were used."
            />
          </SplideSlide>
          <SplideSlide>
            <SlideContainer
              img={projectMesto}
              address="/mesto/"
              link="https://kst.mesto.nomoredomains.club/"
              title="Mesto"
              description="The one-page adaptive website about travels in a large country called Russia. Grid and Flex systems, overlaying of elements, BEM methodology were used."
            />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
}

export default Projects;
