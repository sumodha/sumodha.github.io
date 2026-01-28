const cards = [
    {
        type: "work",
        imgSrc: "airalliance.png", 
        title:"Air Alliance Houston", 
        subtitle: "Full-Stack Software Developer | Aug 2025 - Present", 
        githubLink: "https://github.com/rice-apps/aa-dashboard", 
        externalLink: "", 
        text: "rebuilt an existing, inaccessible dashboard, visualizing real-time air quality data from 40+ Houston monitoring stations for 10,000+ residents", 
        skills: {
            languages: ["Python", "Typescript"],
            frameworks: ["React","PostgreSQL", "Django"],
            developer: ["Figma"]
        }
    },
    {
        type: "work",
        imgSrc: "nasasuits.png", 
        title:"NASA SUITS", 
        subtitle: "Augmented Reality Software Developer | Aug 2024 - Present", 
        githubLink: "https://github.com/OWL-SUITS-2025/Owl_SUITS_2025", 
        externalLink: "https://www.nasa.gov/centers-and-facilities/johnson/nasa-challenge-wraps-student-teams-complete-space-suit-challenges/", 
        text: "built an AR interface for NASA that tracks crew, and scientific assets and optimizes navigation, geologic sampling and EVA tasks to reduce cognitive load on astronaunts", 
        skills: {
            languages: ["C#"],
            frameworks: ["MRTK3"],
            developer: ["Unity", "Figma", "Agile"]
        }
    },
    {
        type: "work",
        imgSrc: "dudoklab.png", 
        title:"Baylor College of Medicine", 
        subtitle: "Computational Research Assistant | May - Aug 2025", 
        githubLink: "https://github.com/bdudok/LNCM-lib", 
        externalLink: "", 
        text: "enhanced a large biomedical signal processing codebase by developing an interactive PyQt5 GUI to synchronize EEG and video recordings via TTL pulses, reducing manual seizure review time", 
        skills: {
            languages: ["Python"],
            libraries: ["OpenCV", "Matplotlib","NumPy"]
        }
    },
    {
        type: "leadership",
        imgSrc: "ar.jpg", 
        title:"Rice AR/VR", 
        subtitle: "Co-President | Aug 2025 - Present", 
        githubLink: "", 
        externalLink: "", 
        text: "coordinated a team of 20+ developers, ui/ux designers and researchers to write a 30+ page research proposal; hosted workshops and industry events to promote AR/VR", 
        skills: {
            languages: ["C#"],
            frameworks: ["MRTK3"],
            developer: ["Unity", "Figma", "Agile"]
        }
    },
    {
        type: "leadership",
        imgSrc: "robotics.png", 
        title:"Rice Robotics", 
        subtitle: "Lead Software Developer | Aug 2024 - Present", 
        githubLink: "https://github.com/rice-robotics-club/auto-nav-f2025", 
        externalLink: "", 
        text: "developed an low-cost autonomous mars rover with robotic arm control, Gazebo-based simulation, and ArUco tag, object and sample detection", 
        skills: {
            languages: ["Python", "URDF"],
            frameworks: ["ROS2", "Gazebo", "MoveIt2", "Nav2"],
            libraries: ["Ollama"],
            developer: ["Linux", "RViz", "Docker"]
        }


    },
    {
        type: "leadership",
        imgSrc: "peereducator.webp", 
        title:"Rice University OASUS", 
        subtitle: "MATH 212 Peer Educator | Jan 2025 - Present", 
        githubLink: "", 
        externalLink: "https://oasus.rice.edu/", 
        text: "tutored fellow peers on key concepts and ideas in multivariable calculus; attented training and professional development workshops",
        skills: {
        }


    },
    {
        type: "leadership",
        imgSrc: "ta.jpeg", 
        title:"Rice University CS", 
        subtitle: "COMP 140 TA | Aug - Dec 2025", 
        githubLink: "", 
        externalLink: "", 
        text: "supported a 400+ class by hosting office hours, clarifying key concepts, guiding students through homework problems and assisting with course activities",
        skills: {
        }


    },
    {
        type: "leadership",
        imgSrc: "teacher.jpg", 
        title:"Breakthrough", 
        subtitle: "Teaching Fellow | Jun - Aug 2023", 
        githubLink: "", 
        externalLink: "https://breakthroughcollaborative.org/", 
        text: "taught two pre-algebra classes with 10+ students at the nation’s largest pre-professional teacher program for underserved communities",
        skills: {
        }


    },
    {
        type: "leadership",
        imgSrc: "assistant.jpg", 
        title:"Breakthrough ", 
        subtitle: "Teaching Assistant | Jun - Aug 2022", 
        githubLink: "", 
        externalLink: "https://breakthroughcollaborative.org/", 
        text: "assisted and communicated with 25+ teachers and directors daily; served as a role model, assisted with transportation services and organized activities for 350+ middle school and high school students",
        skills: {
        }


    },
    {
        type: "projects",
        imgSrc: "thyroiddx.png", 
        title:"thyroidDx", 
        subtitle: "", 
        githubLink: "https://github.com/sumodha/thyroidDx", 
        externalLink: "https://thyroiddx.onrender.com", 
        text: "a full-stack app that gives patient thyroid disease predictions based on routine blood-work tests with 97% model (neural network) accuracy", 
        skills: {
            languages: ["Python"],
            frameworks: ["React", "Flask", "TailwindCSS"],
            libraries: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib"]
        }
    },
    {
        type: "projects",
        imgSrc: "digits.png", 
        title:"digits", 
        subtitle: "", 
        githubLink: "https://github.com/sumodha/digits", 
        externalLink: "https://nytdigits.onrender.com/", 
        text: "a full-stack application that recreates the New York Times Digits game after its discontinuation", 
        skills: {
            languages: ["JavaScript"],
            frameworks: ["React", "TailwindCSS","Express.js", "Node.js", "MongoDB"]
        }
    },
    {
        type: "projects",
        imgSrc: "carenet.png", 
        title:"carenet", 
        subtitle: "", 
        githubLink: "https://github.com/sumodha/CareNet", 
        externalLink: "https://devpost.com/software/carenet-eoip85", 
        text: "a full-stack app with a user-centric conversational AI to guide users in finding and connecting with 550+ federal/state social welfare programs", 
        skills: {
            languages: ["JavaScript", "Python"],
            frameworks: ["React", "TailwindCSS", "Flask"]
        }
    },

    {
        type: "projects",
        imgSrc: "aero.jpeg", 
        title:"10143 AERO Robotics", 
        subtitle: "Programmer", 
        githubLink: "https://github.com/auriyoyo/FTC2024", 
        externalLink: "https://www.youtube.com/@aerorobotics9850", 
        text: "an autonomous robot for the First Tech Challenge (FTC) Centerstage season", 
        skills: {
            languages: ["Java"],
            libraries: ["OpenCV", "TensorFlow"]
        }
    }
]
export {cards}