import Config from "../Config";

const langBox = {
  en: {
    readMore: "Read more",
    navbar: {
      title: "$Pf",
      hireMe: "Hire me",
    },
    home: {
      welcome: {
        fullName: "Jose Sanchez",
        profession: "Software Developer",
        getInTouch: "Get in touch",
        slogan: "Your vision, my execution.",
      },
      about: {
        title: "About",
        description:
          "Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.",
        seeResume: "See Resumé",
      },
      skills: {
        title: "Technologies",
      },
    },
  },
};

export default langBox[Config.lang];