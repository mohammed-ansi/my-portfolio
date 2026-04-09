// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero4.jpg";
import HeroDark from "./images/hero3.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "mohammed-ansi";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am a passionate software developer with a Bachelor’s degree in ''Software Engineering'', specializing in Flutter and web development using Laravel. I focus on building modern, efficient, and user-friendly applications, with experience in developing video apps, administrative systems, and interactive solutions. I strive to deliver high-quality code and intuitive designs that meet real-world needs.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="simple-icons:tailwindcss" className="display-4" />,
    name: "Tailwind CSS",
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:laravel" className="display-4" />,
    name: "Laravel",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="simple-icons:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 11,
    skill: <Icon icon="simple-icons:flutter" className="display-4" />,
    name: "Flutter",
  },
  {
    id: 12,
    skill: <Icon icon="simple-icons:firebase" className="display-4" />,
    name: "Firebase",
  },
  {
    id: 13,
    skill: <Icon icon="simple-icons:mysql" className="display-4" />,
    name: "MySQL",
  },
  {
    id: 14,
    skill: <Icon icon="simple-icons:microsoftsqlserver" className="display-4" />,
    name: "SQL Server",
  },
  {
    id: 15,
    skill: <Icon icon="simple-icons:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 16,
    skill: <Icon icon="simple-icons:postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 17,
    skill: <Icon icon="simple-icons:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 18,
    skill: <Icon icon="simple-icons:postman" className="display-4" />,
    name: "Postman",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "/resume.pdf";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
