import { dataanotation, utec, scale } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    aws,
    pytorch,
    powerbi,
    tensorflow,
    cpp,
    jupyter,
    RStudio,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "AI",
    },
    {
        imageUrl: pytorch,
        name: "Pytorch",
        type: "AI",
    },
    {
        imageUrl: powerbi,
        name: "PowerBI",
        type: "Data Visualization",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: jupyter,
        name: "Jupyter",
        type: "Data Science",
    },
    {
        imageUrl: RStudio,
        name: "RStudio",
        type: "Data Science",
    }
];

export const experiences = [
    {
        title: "Software Engineer for AI Training Data",
        company_name: "ScaleAI",
        location: "San Francisco, US (Remote)",
        icon: scale,
        iconBg: "#000000",
        date: "Mar 2024 - Present",
        points: [
            "Reviewed over 30 prompt generations per day, ensuring accuracy and relevance in AI-generated code.",
            "Collaborated with cross-functional teams to optimize AI outputs and integrate data into clear, interactive visuals using JavaScript and Python libraries.",
            "Applied programming skills, including JavaScript and WebGL, to enhance visual representations of data, ensuring performance and responsiveness across devices."
        ],
    },
    {
        title: "AI Data Trainer",
        company_name: "DataAnnotation",
        location: "New York, US (Remote)",
        icon: dataanotation,
        iconBg: "#000000",
        date: "Dec 2023 - Mar 2024",
        points: [
            "Developed and tested over 100 prompts for AI models, refining outputs into cohesive visual representations.",
            "Improved functionality of AI-generated REST API functions with 20% efficiency gains by implementing robust unit tests.",
            "Partnered with data scientists to craft guidelines and integrate narrative elements for enhanced visual insights."
        ],
    },
    {
        title: "Head of Practice of Programming Pre-UTEC",
        company_name: "Universidad De Ingenieria Y Tecnologia (UTEC)",
        location: "Lima, Peru",
        icon: utec,
        iconBg: "#e4e4e4",
        date: "Jan 2023 - Mar 2023",
        points: [
            "Provided guidance and advice to 40 pre-university UTEC students in the Programming course.",
            "Conducted consultations to assist students in understanding programming concepts and solving coding problems.",
            "Attended weekly meetings with professors to consult the progress of the curriculum mesh of the students."
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AlvaUtec',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/alvaro-garc%C3%ADa-hurtado-5901212a6/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];