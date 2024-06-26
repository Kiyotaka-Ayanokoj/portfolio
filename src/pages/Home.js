import React, { useEffect, useState } from "react";

import "../styles/Home.css";
import Config from "../Config";

import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import BackToTopButton from "../components/backToTopButton";
import Skill from "../components/Skill";
import { forward } from "../utils/Functions";

import { getLangBox } from "../locales/langBox";

const Home = () => {

  const [langBox, setLangBox] = useState(getLangBox());

  useEffect(() => {
    document.title = Config.pName
  }, [])

  return (
    <>
      <Navbar />
      <BackToTopButton />

      <div className="Home">
        <section className="section--welcome container">
          <div className="content">
            <Reveal delay="0.30">
              <span className="fullName">{langBox.home.welcome.fullName}</span>
            </Reveal>
            <Reveal delay="0.40">
              <span className="profession">
                {langBox.home.welcome.profession}
              </span>
            </Reveal>
            <Reveal delay="0.70">
              <span
                className="description"
              >{langBox.home.welcome.description}</span>
            </Reveal>
            <div className="socialNetworks">
              <Reveal delay="0.80">
                <svg
                  onClick={() => forward(Config.socialMedia.github)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="rgba(255, 255, 255, 0.503)"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </Reveal>
              <Reveal delay="0.90">
                <svg
                  onClick={() => forward(Config.socialMedia.linkedin)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="rgba(255, 255, 255, 0.503)"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </Reveal>
              <Reveal delay="1">
                <svg
                  onClick={() => forward(Config.socialMedia.telegram)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="rgba(255, 255, 255, 0.503)"
                    d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
                  />
                </svg>
              </Reveal>
              <Reveal delay="1.1">
                <svg
                  onClick={() => forward(Config.socialMedia.facebook)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="rgba(255, 255, 255, 0.50)"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                  />
                </svg>
              </Reveal>
            </div>
            <div className="getInTouchCont">
              <Reveal delay="1">
                <Button text={langBox.home.welcome.getInTouch}></Button>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section--about">
          <Reveal>
            <h1 className="title">{langBox.home.about.title}</h1>
          </Reveal>
          <Reveal delay="0.3">
            <span className="description">
              {langBox.home.about.description}
            </span>
          </Reveal>
          <div className="seeResumeCont">
            <Reveal delay="0.4">
                <Button text={langBox.home.about.seeResume}></Button>
            </Reveal>
          </div>
        </section>

        <section className="section--skills">
          <Reveal>
            <h1 className="title">{langBox.home.skills.title}</h1>
          </Reveal>
          {Object.keys(Config.skills).map((categoryKey) => {
            const category = Config.skills[categoryKey];
            return (
              <div key={categoryKey}>
                <Reveal>
                  <h2
                    className="category"
                    style={{
                      color: category.color
                        ? category.color
                        : "rgba(214, 243, 250, 0.597)",
                    }}
                  >
                    <span className="categoryIcon">
                      <span>{category.title[0]}</span>
                    </span>
                    {category.title}
                  </h2>
                </Reveal>
                <ul className="skillsContent">
                  {Object.keys(category).map((skillKey) => {
                    const skill = category[skillKey];

                    if (
                      typeof skill === "object" &&
                      skill !== null &&
                      "color" in skill
                    ) {
                      return (
                        <Reveal delay="0.3" key={skillKey}>
                          <Skill
                            icon={skill.icon}
                            color={skill.color}
                            name={skillKey}
                          />
                        </Reveal>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            );
          })}
        </section>

        <section className="section--projects">
          <Reveal>
            <h1 className="title">{langBox.home.projects.title}</h1>
          </Reveal>
          <div className="projects">
            <Reveal>
              <ProjectCard projects={Config["projects"]}/>
            </Reveal>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
