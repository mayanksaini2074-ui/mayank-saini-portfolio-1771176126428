import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Mayank Saini",
    "title": "Professional",
    "email": "mayanksaini2941@gmail.com",
    "phone": "9053502583",
    "linkedin": "",
    "github": "",
    "location": "Gurugram, Haryana, India",
    "summary": "Aspiring software engineer with hands-on experience in software development and effective application performance optimization. Strong background in web technologies and collaboration skills through multiple internships at leading companies such as Microsoft."
  },
  "experience": [
    {
      "title": "Software Engineer (Internship)",
      "company": "Microsoft",
      "dates": "May 2024 - June 2024",
      "description": "Designed and integrated caching functionality using IndexedDB, reducing load times and enhancing user experience.",
      "highlights": [
        "Achieved a 50% reduction in load times.",
        "Partnered with a cross-functional team to design and implement a shared generic interface."
      ]
    },
    {
      "title": "Software Developer (Internship)",
      "company": "CALinfo",
      "dates": "Jan 2024 - April 2024",
      "description": "Collaborated to architect and deploy ReactJS modules, enhancing user experience in existing websites.",
      "highlights": [
        "Led the end-to-end development of a React Native application."
      ]
    },
    {
      "title": "Software Engineer (Internship)",
      "company": "BigTechGuru",
      "dates": "June 2023 - July 2023",
      "description": "Developed and launched a website startup using Squarespace.",
      "highlights": [
        "Collaborated with Google's Software Engineer.",
        "Managed Google Ads and optimized marketing strategies using Google Analytics."
      ]
    },
    {
      "title": "Teaching Assistant (Internship)",
      "company": "Coding Ninjas",
      "dates": "May 2023 - Sep 2023",
      "description": "Facilitated interactive sessions and resolved student inquiries on Data Structures.",
      "highlights": [
        "Assisted over 200 students and resolved over 400 doubts.",
        "Received a commendable rating of 4.9 out of 5.0."
      ]
    }
  ],
  "education": [
    {
      "degree": "B.Tech. in Computer Science",
      "institution": "National Institute of Technology, Kurukshetra",
      "years": "Aug 2021-Present",
      "gpa": "9.087"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Bukizz",
      "description": "Developed a responsive website using React (Vite) and Tailwind CSS, implementing lazy loading techniques. Utilized Node.js, Express, and MySQL for backend functionality.",
      "technologies": [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MySQL"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "WMark Application",
      "description": "Created a React Native Expo application for watermarking images, supporting batch processing.",
      "technologies": [
        "React Native",
        "Expo"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "spotlight",
  "about": "split",
  "experience": "cards",
  "projects": "featured",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "floating",
  "colorPalette": "rose"
};
