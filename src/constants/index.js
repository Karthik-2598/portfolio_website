import project1 from "../assets/Shop_for_home.png";
import project2 from "../assets/Chat_application.png";
import project3 from "../assets/Food_app.png";
import project4 from "../assets/Weather.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including  Java,React, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Developer",
    company: "Center for Development of Telematics",
    description: `Ideated and developed the website applications using React JS and Node JS frameworks.Developed the user-role management, and session management workflows in the applications using the React Libraries.Managed data-driven operations using MySQL and Mongo databases.Performed API testing, Functional Testing, and Stress Testing on the web applications to ensure an efficient workflow.Worked on the Automation of the Web applications using the Cypress tool to reduce the time and manual effort for testing.Met the timeline deliverables to successfully deliver the projects by collaborating with co-workers.
`,
    technologies: ["Javascript", "React.js", "NodeJS", "ExpressJS","Docker","MongoDB", "Cypress"],
  },
  {
    year: "2022",
    role: "Java-GCP intern",
    company: "Wipro",
    description: `Trained in technologies such as HTML, CSS, JavaScript, Java, Docker, and MySQL
Database.Received training in the Angular JS Framework.Received training in cloud computing infrastructure, storage, and network through
Google Cloud Platform.Developed an e-commerce website and deployed it on the cloud platform.Successfully met timeline deliverables and deadlines.
`,
    technologies: ["HTML", "CSS", "Javascript", "mySQL", "SpringBoot", "Google Cloud Platform"],
  }
 
];

export const PROJECTS = [
  {
    title: "Shop For Home",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication,Product search and filter",
    technologies: ["HTML", "CSS", "javascript", "java","SpringBoot", "Google Cloud Platform"],
  },
  {
    title: "Chat Application",
    image: project2,
    description:
      "A chat application features the transfer of messages between two users using the WebSockers, developed using ReactJs and Node JS",
    technologies: ["ReactJS", "NodeJs", "WebSockets"],
  },
  {
    title: "Food-Order Application",
    image: project3,
    description:
      "The application developed using the MERN frameworks, application reflects the features like User Management, Session Management,Cookie and JWT Authentication",
    technologies: ["ReactJS", "Express JS", "Node JS", "MongoDB", "Bootstrap"],
  },
  {
    title: "Weather application",
    image: project4,
    description:
    "A Responsive Weather application Website crafted with React, Vite JS, and styled using Tailwind CSS, powered by data from openweatherapi.",
    technologies: ["ReactJS", "Tailwind CSS","Javascript"]
  }
];

export const CONTACT = {
  
};
