import React from "react";
import ContentCard from "./ContentCard";

const Skills = () => {
  const skills = [
    {
        title: "Python",
        text: "2015",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png",
      },
    {
      title: "Django",
      text: "2016",
      img: "https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png",
    },
    {
      title: "Python",
      text: "2015",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png",
    },
  {
    title: "Django",
    text: "2016",
    img: "https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png",
  },
  {
    title: "Python",
    text: "2015",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png",
  },
{
  title: "Django",
  text: "2016",
  img: "https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png",
},
  ];
  return (
    <ContentCard data={skills} md={2} title={'Tecnologías'}></ContentCard>
  );
};

export default Skills;
