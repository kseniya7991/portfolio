import React, { lazy } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import './Projects.scss';
import projectPortfolio from '../../images/projects/portfolio.webp';
import projectHowToLearn from '../../images/projects/how-to-learn.webp';
import projectRussianTravel from '../../images/projects/travel.webp';
import projectMesto from '../../images/projects/mesto.webp';
import projectMovies from '../../images/projects/movies.webp';
import projectIrvas from '../../images/projects/irvas.webp';
import StyledLine from '../Permanent components/StyledLine/StyledLine';

const SlideContainer = lazy(() => import('../SlideContainer/SlideContainer'));

function Projects() {
  return (
    <>
      <StyledLine />
      <section className="Projects">
        <span className="anchor" id="projects" />
        <h2
          className="Projects__heading"
        >
          Projects
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
              img={projectMovies}
              alt="Проект Movies"
              link="https://movies.kst.nomoredomains.monster/"
              github="https://github.com/kseniya7991/movies-explorer-frontend"
              title="Movies"
              description="This is a graduation project on React. The service allows to search movies by keywords from a third-party API, to save movies, to create new users on the site. The project includes 2 parts: front-end and back-end."
            />
          </SplideSlide>
          <SplideSlide>
            <SlideContainer
              img={projectPortfolio}
              alt="Проект Портфолио"
              link="https://kseniya7991.github.io/portfolio/"
              github="https://github.com/kseniya7991/Portfolio"
              title="Portfolio"
              description="My first project-portfolio as an cv. It is on React and
              native JS. I used the Slide JS library for the slider. There are animations and styles written on scss. I would like to do it more designed,
              but i need more practice."
            />
          </SplideSlide>
          <SplideSlide>
            <SlideContainer
              img={projectMesto}
              alt="Проект Место"
              link="https://kst.mesto.nomoredomains.club/"
              github="https://github.com/kseniya7991/react-mesto-api-full"
              title="Mesto"
              description="The one-page adaptive website with possibility sharing photos and likes. Here you can change yourself profile information and delete yourself photos. The project includes 2 parts: front-end and back-end."
            />
          </SplideSlide>
          <SplideSlide>
            <SlideContainer
              img={projectHowToLearn}
              alt="Проект How To Learn"
              link="https://kseniya7991.github.io/how-to-learn/"
              github="https://github.com/kseniya7991/how-to-learn"
              title="How to learn"
              description="One-page non-adaptive site. This was the first project in Y.P.
              I used only CSS + HTML. There are videos from YouTube, CSS animations and using flex blocks."
            />
          </SplideSlide>
          <SplideSlide>
            <SlideContainer
              img={projectRussianTravel}
              alt="Проект Russian Travel"
              link="https://kseniya7991.github.io/russian-travel/index.html"
              github="https://github.com/kseniya7991/russian-travel"
              title="Russian Travel"
              description="The one-page adaptive website about travels in a large country called Russia. Grid and Flex blocks, overlaying of elements, BEM methodology were used."
            />
          </SplideSlide>
          <SplideSlide>
            <SlideContainer
              img={projectIrvas}
              alt="Проект Ирвас"
              link="https://github.com/kseniya7991/irvas-js"
              github="https://github.com/kseniya7991/irvas-js"
              title="Irvas"
              description="Udemy's project. Specifications provided by the customer. The tasks of the project: to create functionality on the page, to add switch tabs, opening popups, sending forms to the server. Working with gulp, MAMP server."
            />
          </SplideSlide>
        </Splide>
      </section>
    </>
  );
}

export default Projects;
