/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/socials/3.jpg";

const imageAltText = "Simple background image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My blog website",
    description:
      "This is my blog website where I write about my experience and learnings in the tech industry.",
    url: "https://github.com/sai-sanjana3/DevFolio.github.io",
  },
  {
    title: "Chat bot",
    description:
      "This is an AI chat bot which answers our queries.",
    url: "https://github.com/sai-sanjana3/chat-bot.github.io",
  },
  {
    title: "E commerce luxury",
    description:
      "This is an frontend e-commerce website with greatly styled CSS.",
    url: "https://github.com/sai-sanjana3/e-commerce_luxury.github.io",
  },
  {
    title: "Virtyal tryon",
    description:
      "This is an web application which converts 2D image to 3D model and renders fashion.",
    url: "https://github.com/sai-sanjana3/virtual-tryon.github.io",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
