import NASASuits2025Content from '../projects-markdown/nasa-suits-2025.mdx';
import NASASuits2026Content from '../projects-markdown/nasa-suits-2026.mdx';
import Breakthrough2023Content from '../projects-markdown/breakthrough-2023.mdx';
import Breakthrough2022Content from '../projects-markdown/breakthrough-2022.mdx';
import DigitsContent from '../projects-markdown/digits.mdx';
import AirAllianceHoustonContent from '../projects-markdown/aah.mdx';
import SproutContent from '../projects-markdown/sprout.mdx';
import RiceRoboticsContent from '../projects-markdown/rice-robotics.mdx';
import ThyroidDxContent from '../projects-markdown/thyroiddx.mdx';
import CareNetContent from '../projects-markdown/carenet.mdx';
import BowBotContent from '../projects-markdown/bowbot.mdx';
import RiceArVrContent from '../projects-markdown/rice-ar-vr.mdx';
import RiceUniversityOASUSContent from '../projects-markdown/rice-oasus.mdx';
import RiceUniversityCSContent from '../projects-markdown/rice-cs.mdx';
import Phil318Content from '../projects-markdown/phil-318.mdx';
import AbstractThoughtsContent from '../projects-markdown/abstract-thoughts.mdx';


export const cards = [
    {
        type: "work",
        slug: "aah",
        imgSrc: "airalliance.png", 
        title:"Air Alliance Houston", 
        role: "FULL-STACK WEB DEVELOPER", 
        githubLink: "https://github.com/rice-apps/aa-dashboard", 
        externalLink: "", 
        text: "rebuilt an existing, inaccessible dashboard, visualizing real-time air quality data from 40+ Houston monitoring stations for 10,000+ residents", 
        date: "AUG 2025 - MAY 2026",
        skills: ["Python", "TypeScript", "React", "Django", "Figma", "PostgreSQL"], 
        Content: AirAllianceHoustonContent
    },
    {
        type: "work",
        slug: "nasa-suits-2026",
        imgSrc: "nasasuits-2026.png", 
        title:"NASA SUITS", 
        role: "LEAD SOFTWARE DEVELOPER", 
        githubLink: "https://github.com/Rice-ARVR/OWL-SUITS-2026-PR", 
        externalLink: "", 
        text: "built a mission-critical rover control interface for NASA that integrates live data from NASA’s TSS and autonomously navigates to lost LTV", 
        date: "AUG 2025 - MAY 2026",
        skills: ["React", "TypeScript", "Python", "FastAPI", "MongoDB", "WebSockets"],
        Content: NASASuits2026Content
    },
    {
        type: "work",
        slug: "nasa-suits-2025",
        imgSrc: "nasasuits.png", 
        title:"NASA SUITS", 
        role: "AUGMENTED REALITY SOFTWARE DEVELOPER", 
        githubLink: "https://github.com/OWL-SUITS-2025/Owl_SUITS_2025", 
        externalLink: "https://www.nasa.gov/centers-and-facilities/johnson/nasa-challenge-wraps-student-teams-complete-space-suit-challenges/", 
        text: "built an AR interface for NASA that tracks crew, and scientific assets and optimizes navigation, geologic sampling and EVA tasks to reduce cognitive load on astronaunts", 
        date: "AUG 2024 - AUG 2025",
        skills: ["C#", "MRTK3", "Unity", "Figma", "Agile"],
        Content: NASASuits2025Content
    },
    {
        type: "projects",
        slug: "rice-robotics",
        imgSrc: "robotics.png", 
        title:"🌟 Rice Robotics", 
        role: "LEAD SOFTWARE DEVELOPER", 
        githubLink: "https://github.com/rice-robotics-club/rover-base-station-dashboard", 
        externalLink: "", 
        text: "a rover for the university rover challenge (URC) with robotic arm control, ArUco tag, object and sample detection", 
        date: "AUG 2024 - PRESENT",
        skills: ["Python", "URDF", "ROS2", "Gazebo", "Ollama", "Linux", "RViz", "Docker", "WebRTC", "GStreamer", "WebSockets"],
        Content: RiceRoboticsContent
        


    },
    {
        type: "projects",
        slug: "sprout",
        imgSrc: "sprout.png", 
        title:"🌟 Sprout", 
        role: "SOFTWARE DEVELOPER", 
        githubLink: "", 
        externalLink: "https://thesproutapp.com", 
        text: "improved a mobile wellness app for college students by streamlining CI/CD pipelines and delivering new in-app activities to 100+ users", 
        date: "AUG 2025 - MAY 2026",
        skills: ["Python", "Javascript", "React Native","PostgreSQL", "Flask", "Docker"], 
        Content: SproutContent
    },
    {
        type: "projects",
        slug: "thyroiddx",
        imgSrc: "thyroiddx.png", 
        title:"🌟 thyroidDx", 
        role: "", 
        githubLink: "https://github.com/sumodha/thyroidDx", 
        externalLink: "https://thyroiddx.onrender.com", 
        text: "a full-stack app that gives patient thyroid disease predictions based on routine blood-work tests with 97% model (neural network) accuracy", 
        date: "",
        skills: ["Python", "React", "Flask", "TailwindCSS", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"], 
        Content: ThyroidDxContent
    },
    {
        type: "projects",
        slug: "digits",
        imgSrc: "digits.png", 
        title:"digits", 
        role: "", 
        githubLink: "https://github.com/sumodha/digits", 
        externalLink: "https://nytdigits.onrender.com/", 
        text: "a full-stack application that recreates the New York Times Digits game after its discontinuation", 
        date: "",
        skills: ["JavaScript", "React", "TailwindCSS","Express.js", "Node.js", "MongoDB"], 
        Content: DigitsContent
        
    },
    {
        type: "projects",
        slug: "carenet",
        imgSrc: "carenet.png", 
        title:"carenet", 
        role: "", 
        githubLink: "https://github.com/sumodha/CareNet", 
        externalLink: "https://devpost.com/software/carenet-eoip85", 
        text: "a full-stack app with a user-centric conversational AI to guide users in finding and connecting with 550+ federal/state social welfare programs", 
        date: "SEPT 19-21, 2025",
        skills: ["JavaScript", "Python", "React", "TailwindCSS", "Flask"], 
        Content: CareNetContent

    },

    {
        type: "projects",
        slug: "bowbot",
        imgSrc: "aero.jpeg", 
        title:"bowbot", 
        role: "PROGRAMMER", 
        githubLink: "https://github.com/auriyoyo/FTC2024", 
        externalLink: "https://www.youtube.com/@aerorobotics9850", 
        text: "an autonomous robot for the First Tech Challenge (FTC) Centerstage season by team 10143 Aero Robotics", 
        date: "AUG 2023 - MAY 2024",
        skills: ["Java", "OpenCV", "TensorFlow"], 
        Content: BowBotContent
    
    },
    {
        type: "other",
        slug: "abstract-thoughts",
        imgSrc: "papers.jpeg", 
        title:"Abstract Thoughts", 
        role: "", 
        githubLink: "", 
        externalLink: "", 
        text: "reading, outlining, and thinking through academic research and papers",
        skills: [], 
        Content: AbstractThoughtsContent
    },
    {
        type: "other",
        slug: "sketchbook",
        imgSrc: "art.jpg", 
        title:"Sketchbook", 
        role: "", 
        githubLink: "", 
        externalLink: "", 
        text: "a collection of my art",
        skills: []
    },
    {
        type: "other",
        slug: "phil-318",
        imgSrc: "phil.webp", 
        title:"Philosphy of Language", 
        role: "", 
        githubLink: "", 
        externalLink: "", 
        text: "papers for Philosophy of Language (PHIL 318) class at Rice University, taught by Brian Miller",
        date: "AUG - DEC 2025",
        skills: [], 
        Content: Phil318Content
    },
    {
        type: "leadership",
        slug: "rice-ar-vr",
        imgSrc: "ar.jpg", 
        title:"Rice AR/VR", 
        role: "PROJECT MANAGER | CO-PRESIDENT", 
        githubLink: "", 
        externalLink: "", 
        text: "coordinated a team of 20+ developers, ui/ux designers and researchers to write a 30+ page research proposal; hosted workshops and industry events to promote AR/VR", 
        date: "AUG 2025 - PRESENT",
        skills: [], 
        Content: RiceArVrContent
    
    },

    {
        type: "leadership",
        slug: "rice-oasus",
        imgSrc: "peereducator.webp", 
        title:"Rice University OASUS", 
        role: "MATH 212 PEER EDUCATOR", 
        githubLink: "", 
        externalLink: "https://oasus.rice.edu/", 
        text: "worked as a peer educator for Multivariable Calculus (MATH 212)",
        date: "JAN - MAY 2026",
        skills: [], 
        Content: RiceUniversityOASUSContent


    },
    {
        type: "leadership",
        slug: "rice-cs",
        imgSrc: "ta.jpeg", 
        title:"Rice University CS", 
        role: "COMP 140 TA", 
        githubLink: "", 
        externalLink: "", 
        text: "served as a teaching assistant for Computational Thinking (COMP 140)",
        date: "AUG - DEC 2025",
        skills: [], 
        Content: RiceUniversityCSContent


    },
    {
        type: "leadership",
        slug: "breakthrough-2023",
        imgSrc: "teacher.jpg", 
        title:"Breakthrough", 
        role: "TEACHING FELLOW", 
        githubLink: "", 
        externalLink: "https://breakthroughcollaborative.org/", 
        text: "taught two pre-algebra classes with 10+ students at the nation’s largest pre-professional teacher program for underserved communities",
        date: "JUN - AUG 2023",
        skills: [],
        Content: Breakthrough2023Content


    },
    {
        type: "leadership",
        slug: "breakthrough-2022",
        imgSrc: "assistant.jpg", 
        title:"Breakthrough ", 
        role: "TEACHING ASSISTANT", 
        githubLink: "", 
        externalLink: "https://breakthroughcollaborative.org/", 
        text: "volunteered as a teaching assistant for Breakthrough non-profit",
        date: "JUN - AUG 2022",
        skills: [], 
        Content: Breakthrough2022Content


    }

]

export const getProjectBySlug = (slug: string) =>
  cards.find(c => c.slug === slug);