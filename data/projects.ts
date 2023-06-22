type Project = {
  name: string;
  gitHub: string;
  link?: string;
  description: string;
  stack: string[];
};

const projects: Project[] = [
  {
    name: "Portfolio v2",
    gitHub: "https://github.com/bijuice/portfolio-v2",
    link: "arehmtulla.com",
    description: "The site you are looking at right now.",
    stack: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Framer Motion",
      "Tailwind",
      "CSS",
    ],
  },
  {
    name: "Bijuiceflix ",
    gitHub: "https://github.com/bijuice/portfolio",
    link: "https://super-biscuit-1456ce.netlify.app/",
    description: `Bijuiceflix is a Netflix inspired portfolio web app created using React JS, Express, Figma,
and Firebase. The app uses Material UI for styled components and a combination of CSS
and Framer Motion for the animations. The video player was created from scratch for this
app.`,
    stack: ["JavaScript", "React.js", "Material UI", "Framer Motion", "CSS"],
  },
  {
    name: "Diction Scraper ",
    gitHub: "https://github.com/bijuice/web-scraper",
    description: `A full stack web application built using Node JS and React that scrapes data from a URL
and visualizes the unique words and frequency of each word. The app can also compare
the data from two websites.`,
    stack: ["JavaScript", "React.js", "Cheerio", "Express"],
  },
  {
    name: "Markdown Engine",
    gitHub: "https://github.com/bijuice/markdown-engine",
    link: "https://legendary-stroopwafel-247b20.netlify.app/",
    description: `This is a Markdown parser built using React that converts markdown into html and LaTeX.
It also visualizes the html output.`,
    stack: ["JavaScript", "React.js", "Express"],
  },
];

export default projects;
