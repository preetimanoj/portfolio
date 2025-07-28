import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}



export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "ice",
    position: "Web Developer (Co-op)",
    company: "Institute of Canadian Education",
    location: "Toronto, Ontario, Canada",
    startDate: new Date("2022-09-01"),
    endDate: new Date("2023-01-02"),
    description: [
      "Accountable for maintaining and optimizing 2 institutional websites using HTML5, CSS3, JavaScript, andjQuery, contributing to a high-performance culture and user-centric design",
      "Led performance optimization techniques reducing page load times by 25%, supporting a low carbon digitalstrategy and enhancing energy efficiency.",
      "Managed and administered the Moodle LMS platform, including updates, plugin management, issue troubleshooting, and serving 100+ active users in a software development environment.",
      "Gathered requirements, drafted and maintained clear written documentation for updates and workflows, andprioritized bug fixes demonstrating time management and responsible communication"
    ],
    achievements: [
      "Supported the IT Services team in delivering digital solutions aligned with accessibility, employment equity, andperformance culture principles.",
      "Ensured AODA and WCAG 2.1 accessibility compliance, improving usability and promoting human rights and Indigenous inclusion in digital education.",
      "Supervised and mentored 2 remote junior developers; delegated tasks, conducted code reviews, and supported growth through knowledge sharing and interview preparation."
    ],
    skills: ["Typescript", "React", "Databricks", "Java", "Python"],
    companyUrl: "https://www.iceducation.ca/,",
    logo: "/career/ice-logo.png",
  },
  {
    id: "dexlock",
    position: "Full Stack Developer",
    company: "Dexlock",
    location: "Kerala, India",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2021-04-01"),
    description: [
      "Designed and implemented RESTful APIs with software engineering principles, reducing latency by 30% via performance optimization and caching strategies.",
      "Contributed to architectural design discussions using software design patterns and supported containerization with Docker and Azure DevOps.",
      "Integrated AI-powered modules for emerging technologies while ensuring security, compliance, and IT services governance in cloud deployments on Microsoft Azure.",
    ],
    achievements: [
      "Delivered innovative, scalable full-stack solutions using ASP.NET Core, C#, React, and SQL within Agile software development environments tied to pay-for-performance SLAs.",
      "Authored written technical documentation, participated in Agile ceremonies, system audits, and interviews, contributing vision and knowledge sharing for future-proof software solutions.",
    ],
    skills: ["Next.js", "React", "Node.js", "AWS", "MongoDB", "Typescript"],
    companyUrl: "https://dexlock.com/",
    logo: "/career/dexlock-logo.jpeg",
  },
  {
    id: "terrific Minds",
    position: "Junior Full-Stack Developer",
    company: "Terrific Minds",
    location: "Kerala, India",
    startDate: new Date("2019-06-01"),
    endDate: new Date("2020-01-01"),
    description: [
      "Developed and deployed full-stack features using React, JavaScript, .NET Core, and Node.js, ensuring roduct stability, scalability, and adherence to security principles.",
      "Created and maintained CI/CD pipelines, integrated Git workflows, optimized backend queries, andsupported containerization for a low carbon, efficient codebase.",
      "Participated in interviews, stakeholder meetings, and documentation efforts, collaborating with QA and design teams to deliver sprint-ready releases ahead of schedule with leadership and accountability"
    ],
    achievements: [
      "Developed and deployed full-stack features in cross-functional teams, supporting product stability and growth."
    ],
    skills: [
      "React",
      "Angular",
      "GraphQL",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://www.terrificminds.com/",
    logo: "/career/tm-logo.svg",
  },
  {
    id: "mitsogo",
    position: "Junior Full-Stack Developer",
    company: "Mitsogo",
    location: "Kerala, India",
    startDate: new Date("2018-06-01"),
    endDate: new Date("2019-04-01"),
    description: [
      "Contributed to enterprise-grade internal tools in a secure, Agile software development environment using ASP.NET MVC, C#, SQL Server, JavaScript, and jQuery.",
      "Participated in unit testing, bug tracking, and peer code reviews to uphold software design integrity, optimization, and industry quality standards.",
      "Migrated legacy modules to modern frameworks and authored written walkthroughs to support maintainability, onboarding, and knowledge sharing.",
    ],
    achievements: [
      "Contributed to enterprise-grade internal tools in a secure, Agile software development environment.",
    ],
    skills: [
      "React",
      "Angular",
      "GraphQL",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://www.mitsogo.com/",
    logo: "/career/hexnode-logo.png",
  },
  // {
  //   id: "fhg",
  //   position: "Concierge",
  //   company: "Forest Hill Group",
  //   location: "Toronto, Ontario, Canada",
  //   startDate: new Date("2023-01-01"),
  //   endDate: new Date("2025-04-01"),
  //   description: [
      
  //     "Delivered personalized customer service in a high-volume residential setting, exhibiting communication, commitment, leadership, and support.",
  //     "Maintained written records and coordinated bookings and deliveries using scheduling tools and interview-style intake, ensuring responsible operations.",
  //     "Introduced a digital package tracking system, reducing logging errors by 20% and aligning with the company’s performance culture, vision, and integrity.",
  //   ],
  //   achievements: [
  //     "Represented the company’s values through integrity, support, and service in a high-volume residential environment."
  //   ],
  //   skills: [
  //     "Javascript",
  //   ],
  //   companyUrl: "https://thefhgroup.com/",
  //   logo: "/career/logo-fhg.svg",
  // },
];
