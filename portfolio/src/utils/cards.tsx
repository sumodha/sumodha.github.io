const cards = [
    {
        type: "work",
        imgSrc: "airalliance.png", 
        title:"Air Alliance Houston", 
        role: "FULL-STACK WEB DEVELOPER", 
        githubLink: "https://github.com/rice-apps/aa-dashboard", 
        externalLink: "", 
        text: "rebuilt an existing, inaccessible dashboard, visualizing real-time air quality data from 40+ Houston monitoring stations for 10,000+ residents", 
        date: "AUG 2025 - PRESENT",
        skills: ["Python", "TypeScript", "React", "Django", "Figma", "PostgreSQL"]
    },
    {
        type: "work",
        imgSrc: "nasasuits.png", 
        title:"NASA SUITS", 
        role: "AUGMENTED REALITY SOFTWARE DEVELOPER", 
        githubLink: "https://github.com/OWL-SUITS-2025/Owl_SUITS_2025", 
        externalLink: "https://www.nasa.gov/centers-and-facilities/johnson/nasa-challenge-wraps-student-teams-complete-space-suit-challenges/", 
        text: "built an AR interface for NASA that tracks crew, and scientific assets and optimizes navigation, geologic sampling and EVA tasks to reduce cognitive load on astronaunts", 
        date: "AUG 2024 - AUG 2025",
        skills: ["C#", "MRTK3", "Unity", "Figma", "Agile"]
    },
    {
        type: "work",
        imgSrc: "sprout.png", 
        title:"Sprout", 
        role: "SOFTWARE DEVELOPER", 
        githubLink: "", 
        externalLink: "https://thesproutapp.com", 
        text: "improved a mobile wellness app for college students by streamlining CI/CD pipelines and delivering new in-app activities to 100+ users", 
        date: "AUG 2025 - PRESENT",
        skills: ["Python", "Javascript", "React Native","PostgreSQL", "Flask", "Docker"]
    },
    {
        type: "work",
        imgSrc: "dudoklab.png", 
        title:"Baylor College of Medicine", 
        role: "COMPUTATIONAL RESEARCH ASSISTANT", 
        githubLink: "https://github.com/bdudok/LNCM-lib", 
        externalLink: "", 
        text: "enhanced a large biomedical signal processing codebase by developing an interactive PyQt5 GUI to synchronize EEG and video recordings via TTL pulses, reducing manual seizure review time", 
        date: "MAY - AUG 2025",
        skills: ["Python","OpenCV", "Matplotlib","NumPy"]

    },
    {
        type: "leadership",
        imgSrc: "ar.jpg", 
        title:"Rice AR/VR", 
        role: "PROJECT MANAGER | CO-PRESIDENT", 
        githubLink: "", 
        externalLink: "", 
        text: "coordinated a team of 20+ developers, ui/ux designers and researchers to write a 30+ page research proposal; hosted workshops and industry events to promote AR/VR", 
        date: "AUG 2025 - PRESENT",
        skills: []
    
    },

    {
        type: "leadership",
        imgSrc: "peereducator.webp", 
        title:"Rice University OASUS", 
        role: "MATH 212 PEER EDUCATOR", 
        githubLink: "", 
        externalLink: "https://oasus.rice.edu/", 
        text: "tutored fellow peers on key concepts and ideas in multivariable calculus; attented training and professional development workshops; planned and hosted an exam review session attented by 100+ students",
        date: "JAN 2025 - PRESENT",
        skills: []


    },
    {
        type: "leadership",
        imgSrc: "ta.jpeg", 
        title:"Rice University CS", 
        role: "COMP 140 TA", 
        githubLink: "", 
        externalLink: "", 
        text: "supported a 400+ class by hosting office hours, clarifying key concepts, guiding students through homework problems and assisting with course activities",
        date: "AUG - DEC 2025",
        skills: []


    },
    {
        type: "leadership",
        imgSrc: "teacher.jpg", 
        title:"Breakthrough", 
        role: "TEACHING FELLOW", 
        githubLink: "", 
        externalLink: "https://breakthroughcollaborative.org/", 
        text: "taught two pre-algebra classes with 10+ students at the nation’s largest pre-professional teacher program for underserved communities",
        date: "JUN - AUG 2023",
        skills: []


    },
    {
        type: "leadership",
        imgSrc: "assistant.jpg", 
        title:"Breakthrough ", 
        role: "TEACHING ASSISTANT", 
        githubLink: "", 
        externalLink: "https://breakthroughcollaborative.org/", 
        text: "assisted and communicated with 25+ teachers and directors daily; served as a role model, assisted with transportation services and organized activities for 350+ middle school and high school students",
        date: "JUN - AUG 2022",
        skills: []


    },
    {
        type: "projects",
        imgSrc: "robotics2.png", 
        title:"R-OWL-vers", 
        role: "LEAD SOFTWARE DEVELOPER", 
        githubLink: "https://github.com/rice-robotics-club/rover-base-station-dashboard", 
        externalLink: "", 
        text: "a rover for the university rover challenge (URC) with robotic arm control, ArUco tag, object and sample detection; built a low-latency base station-rover streaming platform for 4 cameras", 
        date: "AUG 2025 - PRESENT",
        skills: ["Python", "ROS2", "WebRTC", "GStreamer", "WebSockets", "Linux", "Docker"]
        


    },
    {
        type: "projects",
        imgSrc: "robotics.png", 
        title:"Rice Robotics", 
        role: "SOFTWARE DEVELOPER", 
        githubLink: "", 
        externalLink: "", 
        text: "a low-cost rover that autonomously explores lunar craters and lava tubes to locate and sample water deposits; worked on a Gazebo-based simulation", 
        date: "AUG 2024 - Aug 2025",
        skills: ["Python", "URDF", "ROS2", "Gazebo", "Ollama", "Linux", "RViz", "Docker"]
        


    },
    {
        type: "projects",
        imgSrc: "thyroiddx.png", 
        title:"thyroidDx", 
        role: "", 
        githubLink: "https://github.com/sumodha/thyroidDx", 
        externalLink: "https://thyroiddx.onrender.com", 
        text: "a full-stack app that gives patient thyroid disease predictions based on routine blood-work tests with 97% model (neural network) accuracy", 
        date: "",
        skills: ["Python", "React", "Flask", "TailwindCSS", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"]
    },
    {
        type: "projects",
        imgSrc: "digits.png", 
        title:"digits", 
        role: "", 
        githubLink: "https://github.com/sumodha/digits", 
        externalLink: "https://nytdigits.onrender.com/", 
        text: "a full-stack application that recreates the New York Times Digits game after its discontinuation", 
        date: "",
        skills: ["JavaScript", "React", "TailwindCSS","Express.js", "Node.js", "MongoDB"]
        
    },
    {
        type: "projects",
        imgSrc: "carenet.png", 
        title:"carenet", 
        role: "", 
        githubLink: "https://github.com/sumodha/CareNet", 
        externalLink: "https://devpost.com/software/carenet-eoip85", 
        text: "a full-stack app with a user-centric conversational AI to guide users in finding and connecting with 550+ federal/state social welfare programs", 
        date: "",
        skills: ["JavaScript", "Python", "React", "TailwindCSS", "Flask"]

    },

    {
        type: "projects",
        imgSrc: "aero.jpeg", 
        title:"bowbot", 
        role: "PROGRAMMER", 
        githubLink: "https://github.com/auriyoyo/FTC2024", 
        externalLink: "https://www.youtube.com/@aerorobotics9850", 
        text: "an autonomous robot for the First Tech Challenge (FTC) Centerstage season by team 10143 Aero Robotics", 
        date: "",
        skills: ["Java", "OpenCV", "TensorFlow"]
    
    }
]

export {cards};