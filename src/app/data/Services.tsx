import { FaMobileAlt } from "react-icons/fa";
import { FaCode, FaServer } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";

export const SERVICES = [
  {
    id: "01",
    icon: <FaCode />,
    title: "Web Development",
    description: `I create responsive, high-performance websites tailored to your needs. From simple landing pages to complex web applications.`,
  },
  {
    id: "02",
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    description: `I specialize in developing intuitive and feature-rich mobile applications. My mobile development services focus on delivering apps that provide a smooth user experience, high performance.`,
  },
  {
    id: "03",
    icon: <FaServer />,
    title: "Backend Development",
    description: `With a foundation in Node.js, I build the backend infrastructure needed to support your applications. I focus on efficient APIs, security, and scalability for smooth data flow.`,
  },
  {
    id: "04",
    icon: <MdDesignServices />,
    title: "UI/UX Design",
    description: `I bring concepts to life with visually appealing and user-centered designs. Leveraging Figma, I craft interfaces that prioritize usability and seamless user experiences.`,
  },
];
