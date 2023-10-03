import { Project } from "@/types/Project";

export const personalProjects: Project[] = [
  {
    name: "Portfolio v2",
    gitHub: "https://github.com/bijuice/portfolio-v2",
    link: "arehmtulla.com",
    description: "The site you are looking at right now.",
    stack: ["TypeScript", "Next.js", "Framer Motion", "Tailwind", "CSS"],
    photos: [],
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
    photos: [
      {
        src: "https://res.cloudinary.com/drtxwwv6c/image/upload/v1692103863/portfolio%20landing.jpg",
        alt: "Bijuiceflix Landing page",
        title: "Landing page",
      },
      {
        src: "https://res.cloudinary.com/drtxwwv6c/image/upload/v1692103863/portfolio%20experience%20showcase.jpg",
        alt: "bijuiceflix experience showcase ",
        title: "Showcase",
      },
      {
        src: "https://res.cloudinary.com/drtxwwv6c/image/upload/v1692103863/portfolio%20player.jpg",
        alt: "bijuiceflix video player",
        title: "Video player",
      },
    ],
  },
  {
    name: "Diction Scraper ",
    gitHub: "https://github.com/bijuice/web-scraper",
    description: `A full stack web application built using Node JS and React that scrapes data from a URL
and visualizes the unique words and frequency of each word. The app can also compare
the data from two websites.`,
    stack: ["JavaScript", "React.js", "Cheerio", "Express"],
    photos: [
      {
        src: "https://res.cloudinary.com/drtxwwv6c/image/upload/v1692112476/landing_nkrzcz.jpg",
        alt: "scraper landing page",
        title: "Landing Page",
      },
      {
        src: "https://res.cloudinary.com/drtxwwv6c/image/upload/v1692112476/comparison_fj31n0.jpg",
        alt: "scraper comparison page",
        title: "Site Comparison",
      },
      {
        src: "https://res.cloudinary.com/drtxwwv6c/image/upload/v1692112477/word_cloud_szt2yb.jpg",
        alt: "scraper word cloud ",
        title: "Word Cloud",
      },
    ],
  },
  {
    name: "Markdown Engine",
    gitHub: "https://github.com/bijuice/markdown-engine",
    link: "https://legendary-stroopwafel-247b20.netlify.app/",
    description: `This is a Markdown parser built using React that converts markdown into html and LaTeX.
It also visualizes the html output.`,
    stack: ["JavaScript", "React.js", "Express"],
    photos: [
      {
        src: "https://res.cloudinary.com/drtxwwv6c/image/upload/v1692112477/markdown_parser_g8o7gl.png",
        alt: "markdown parser",
        title: "Parser interface",
      },
    ],
  },
  {
    name: "Pull Request Documenter",
    gitHub: "https://github.com/bijuice/pull-request-documenter",
    description: `A simple documentation script that fetches the latest pull request from a repo and generates a change request form using the Open AI API.`,
    stack: ["JavaScript", "OpenAI", "OctoKit"],
    photos: [],
  },
  {
    name: "React Video Player",
    gitHub: "https://github.com/bijuice/nflix-player",
    link: "https://github.com/bijuice/nflix-player",
    description: `A simple documentation script that fetches the latest pull request from a repo and generates a change request form using the Open AI API.`,
    stack: ["JavaScript", "OpenAI", "OctoKit"],
    photos: [],
  },
];

export const professionalProjects: Project[] = [
  {
    name: "Payment Pages",
    gitHub: "",
    link: "store.pesapal.com",
    description: "The site you are looking at right now.",
    stack: ["TypeScript", "Next.js", "Tailwind", ".NET Core", "C#"],
    photos: [
      {
        src: "https://res.cloudinary.com/drtxwwv6c/image/upload/v1696323858/Screenshot_2023-10-03_115500_aoz6wb.png",
        alt: "Payment Pages Home Page ",
        title: "Home Page",
      },
      {
        src: "https://res.cloudinary.com/drtxwwv6c/image/upload/v1696323858/Screenshot_2023-10-03_115659_zeieko.png",
        alt: "Create or Edit A Payment Page View",
        title: "Create or Edit A Payment Page ",
      },
      {
        src: "https://res.cloudinary.com/drtxwwv6c/image/upload/v1696323858/Screenshot_2023-10-03_120322_fuscfm.png",
        alt: "Customer payment form",
        title: "Customer Payment Form",
      },
    ],
  },
];
