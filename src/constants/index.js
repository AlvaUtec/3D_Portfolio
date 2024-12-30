import { dataanotation, utec, scale } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    gradio,
    threejs,
    problematic_internet,
    react,
    tailwindcss,
    typescript,
    python,
    aws,
    pytorch,
    powerbi,
    tensorflow,
    cpp,
    jupyter,
    RStudio,
    summiz,
    estate,
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
        iconUrl: gradio,
        theme: 'btn-back-orange',
        name: 'Gradio Applications',
        description: 'This project uses the open-source library Gradio to create UIs for various models such as image captioning, text generation, and chatbot. It demonstrates integration with Hugging Face models hosted on the Hugging Face Hub.',
        link: 'https://github.com/AlvaUtec/Gradio-Applications',
    },
    {
        iconUrl: problematic_internet,
        theme: 'btn-back-blue',
        name: 'Child Mind Institute: Problematic Internet Use Prediction',
        description: 'Predicts problematic internet use (PIU) among children based on physical activity, demographic, and behavioral data. Combines tabular and time-series data to evaluate severity levels categorized as None, Mild, Moderate, and Severe.',
        link: 'https://github.com/AlvaUtec/child-mind-institute-problematic-internet-use',
    },
    {
        iconUrl: threejs,
        theme: 'btn-back-yellow',
        name: 'Threejs Samples',
        description: 'Basic 3D elements implemented in pure Three.js to demonstrate fundamental 3D visualization techniques.',
        link: 'https://github.com/AlvaUtec/Threejs-Samples',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'NY House Price Prediction',
        description: 'Predicts house prices in New York City using machine learning techniques and a Kaggle-sourced dataset. Utilizes libraries like NumPy, Pandas, Matplotlib, Scikit-Learn, and XGBoost, with a Flask-based backend.',
        link: 'https://github.com/AlvaUtec/NY-Price-Prediction',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Dynamic Data Dashboard',
        description: 'Visualizes e-commerce trends dynamically and renders 3D data visualizations using WebGL. Interactive charts and visuals are developed with D3.js and Three.js, integrated into a Flask backend for real-time analytics.',
        link: '',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Text Feature Extraction Methods',
        description: 'Explores feature extraction methods like Bag of Words, TF-IDF, and Word Embeddings for sentiment analysis of messages. Demonstrates binary classification to identify negative or hateful messages.',
        link: 'https://www.kaggle.com/code/alvamau09/text-feature-extraction-methods',
    },
];