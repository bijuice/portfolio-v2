import { Experience } from "@/types/Experience";

const experiences: Experience[] = [
  {
    startYear: 2022,
    duration: 16,
    title: "Pesapal",
    role: "Developer",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
    skills: [
      "Tailwind",
      "Git",
      ".NET",
      "CSS",
      "Powershell",
      "Bash",
      "SQL",
      "C#",
      "Next.js",
      "JavaScript",
      "Leadership",
      "React.js",
      "TypeScript",
    ],
    description:
      "<ul>\n  <li>Worked on several frontend and fullstack projects using C#, .NET, React.js and Next.js</li>\n  <li>Performed training on Human Centered Desgin in software development.</li>\n  <li>Developed script that used AI to generate change request forms from GitHub Pull Requests.</li>\n  <li>Mentored intern for three months, delivering comprehensive guidance and professional training on React development.</li>\n  <li>Worked on 3 major projects:</li>\n  <ul>\n    <li>\n      Sabi Enterprise: This project acts as a proxy between Pesapal POS terminals and merchant systems; forwarding incoming transactions to different integrations such as Oracle, KopoKopo, or REST applications. Used by over 70 merchants including KFC and Art Caffe. Built using C# and ASP.NET.\n      <ul>\n        <li>Tasked with improving legacy code and adding new features.</li>\n        <li>Redesigned database structure to be easier to use and more maintainable.</li>\n        <li>Optimized backend APIs to eliminate inefficiencies (such as n+1 problems). In some cases improving response times by over 90%</li>\n        <li>Rebuilt frontend dashboard using ASP.NET.</li>\n        <li>Integrated Pesapal's single sign on authentication.</li>\n      </ul>\n    </li>\n    <li>\n      Payment Pages: A fullstack project that allows merchants to generate their own payment links to accept online payments using Pesapal's API. Built using Next.js and .NET Core.\n      <ul>\n        <li>Built frontend web application from scratch using Next.js.</li>\n        <li>Integrated Pesapal's single sign on authentication using Next Auth.</li>\n        <li>Implemented the ability to create payment links with custom form fields, logos, and colors. This creation process featured a real time preview of the page.</li>\n        <li>Created customer facing payment links that adhered to the specifications defined in the payment link process.</li>\n        <li>Inherited backend codebase and extended functionalities of API.</li>\n      </ul>\n    </li>\n    <li>\n      Subscitpions Dashboard: A frontend Next.JS project that allows customers to manage their recurring payments and subscriptions (such as monthly internet bills and cellphone airtime purchases).\n      <ul>\n        <li>Created frontend dashboard.</li>\n        <li>Integrated Pesapal's single sign on authentication using Next Auth.</li>\n      </ul>\n    </li>\n  </ul>\n</ul>",
  },
  {
    startYear: 2022,
    endYear: 2022,
    duration: 3,
    title: "Africa Law Partners",
    role: "Freelance",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
    skills: ["Tailwind", "Git", "CSS", "JAMstack", "Next.js", "React.js"],
    description: `<ul>
  <li>Redesigned Africa Law Partner's website: <a href="https://africalawpartners.com/">https://africalawpartners.com/</a></li>
  <li>Rebuilt website from server rendered wordpress website to custom built static site using Next.js and React.js.</li>
  <li>Migrated data from relational database on a single server to a distributed system on Contentful.</li>
  <li>Optimized performance of site; from a lighthouse score of 35 to 97.</li>
</ul>`,
  },
  {
    startYear: 2021,
    duration: 26,
    title: "KamiLimu",
    role: "Committee Member",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
    skills: ["Mentorship", "Leadership"],
    description: `<ul>
  <li>Participated in top level decision making for the program.</li>
  <li>Guided creation of 5 year strategic plan.</li>
  <li>Participated in fundraising for the program.</li>
  <li>Taught a zero-to-hero course on web development to four mentees: <a href="https://github.com/bijuice/intro-to-react">https://github.com/bijuice/intro-to-react</a></li>
  <li>Provided one-on-one consultation/mentorship sessions with over ten mentees on topics such as mental health, web development, career planning, and confidence building.</li>
  <li>Guided a group of four mentees on an intensive eight month long mentorship program.</li>
  <li>Had over ten sessions with the mentee group on various topics such as CV writing, scholarship applications, confidence building, public speaking, mental health, and more.</li>
</ul>`,
  },
  {
    startYear: 2020,
    endYear: 2021,
    duration: 12,
    title: "KamiLimu",
    role: "Mentee",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
    skills: ["Mentorship", "Leadership"],
    description: ``,
  },

  {
    startYear: 2020,
    duration: 40,
    title: "Culture Capture",
    role: "Co-founder",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
    skills: [
      "Git",
      "Pitching",
      "Entrepreneurship",
      "Figma",
      "JavaScript",
      "Leadership",
    ],
    description: `<ul>
  <li>Pitched in local and global innovation competitions.</li>
  <li>Handled media presence in interviews on local radio stations.</li>
  <li>Created video content for marketing and promotion.</li>
  <li>Designed and drafted business proposals.</li>
  <li>Utilized Figma to design prototypes for mobile applications.</li>
  <li>Utilized Flutter and Firebase to create a cultural preservation social media app for iOS and Android.</li>
</ul>`,
  },

  {
    startYear: 2021,
    endYear: 2021,
    duration: 8,
    title: "Hisa",
    role: "Developer",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
    skills: ["Git", "CSS", "Bash", "Cybersecurity", "JavaScript"],
    description: `<ul>
  <li>Utilized Vue JS with the Composition API and Bootstrap 4 to create a single page web app used to manage users of the Hisa financial platform.</li>
  <li>Created a REST API using Laravel 8 which called on a MySQL database to provide data.</li>
  <li>Managed security and malware removal from a Linux server that hosts 3 WordPress websites.</li>
  <li>Trained 10 members of staff on Cyber Security Awareness, covering topics such as social engineering and malware prevention.</li>
</ul>`,
  },

  {
    startYear: 2017,
    endYear: 2021,
    duration: 48,
    title: "USIU",
    role: "Student",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
    skills: ["Cybersecurity", "Leadership", "Public Speaking"],
    description: ``,
  },
  {
    startYear: 2016,
    endYear: 2018,
    duration: 24,
    title: "iPhones Kenya",
    role: "Founder",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
    skills: ["Entrepreneurship", "Leadership"],
    description: `<p>As the founder of iPhones Kenya I was responsible for the sourcing and importation of mobile devices from the U.S, Hong Kong, and China. I repaired and refurbished broken phones. I also handled the social media presence of the business. I created marketing campaigns on Facebook, Instagram, and OLX to promote the business. The responsibility of in-person sales and delivery was also handled by me.</p>`,
  },
];

export default experiences;
