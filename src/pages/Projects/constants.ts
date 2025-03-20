import Portfolio from '../../images/Portfolio.png';
import DataPlatform from '../../images/DataPlatform.png';
import Jupyter from '../../images/GPTFinal.gif';
import FurnitureGAN from '../../images/FurnitureGAN.GIF';

export const projects = [
  {
    title: 'JupyterLab AI Assistant & SQL Editor',
    description: [
      `Developed a JupyterLab extension that integrates LLMs to assist users with lesson-specific questions, generate practical exercises, and create quizzes.`,
      `Built an interactive SQL editor within JupyterLab, allowing users to query a predefined database seamlessly.`,
      `Designed a real-time evaluation system that automatically assesses practical exercises and provides instant feedback.`,
      `Utilized React and TypeScript to create an intuitive user interface within JupyterLab.`,
      `Optimized the extension for smooth integration with existing Jupyter workflows, ensuring a seamless user experience.`,
      `Implemented backend logic in Python to handle AI interactions, query execution, and grading automation.`
    ],
    image: Jupyter,
    techStack: ["TypeScript", "React", "Python", "JupyterLab", "LLMs", "SQL"]
  },
  {
    title: 'Serverless Portfolio Website with Automated CI/CD Deployment',
    description: [
      `Built a serverless portfolio website on AWS, using S3 for hosting and CloudFront for content delivery, secured with HTTPS via AWS Certificate Manager.`,
      `Configured a custom domain with Route 53, linking it to CloudFront for seamless user access.`,
      `Developed an interactive resume with React, demonstrating advanced front-end skills and responsive UI design.`,
      `Automated CI/CD deployment with GitHub Actions, using YAML workflows for frictionless updates.`
    ],
    url: "https://github.com/IvanYingX/IvanYingXuan",
    image: Portfolio,
    techStack: ["React", "Typescript", "Node.js", "Route 53", "S3", "CloudFront", "GitHub"]
  },
  {
    title: 'Cloud-Based Data Analytics Optimization and Automation Project',
    description: [
      `Led the migration of the company's data analytics infrastructure to AWS, leveraging Glue, Athena, and DynamoDB, improving data retrieval speeds by 72%.`,
      `Engineered and implemented a suite of custom Python scripts, integrated with GitHub Actions, to automate daily data updates. This innovation reduced the need for manual processes and enhanced operational efficiency by 200%.`,
      `Designed interactive data visualizations using AWS QuickSight, enabling data-driven decision-making.`
    ],
    image: DataPlatform,
    techStack: ["Python", "AWS Glue", "AWS Athena", "DynamoDB", "QuickSight"]
  },
  {
    title: 'Platform Engagement Tracking and Automation System',
    description: [
      `Developed a user engagement tracking system to monitor interactions and progress, driving data-informed platform improvements.`,
      `Automated data collection and organization with Google Sheets API, ensuring real-time reporting accuracy.`,
      `Integrated Slack API notifications to alert team members about user progress, improving collaboration.`,
      `Designed an automated workflow using Webhooks and GitHub Actions, reducing manual oversight.`
    ],
    techStack: ["Python", "Google Sheets API", "Slack API", "Webhooks"]
  },
  {
    title: "Job Market Analysis and Skills Extraction Using NLP",
    description: [
      `Scraped and processed 15,000+ job descriptions to create a dataset for job market analysis.`,
      `Applied NLP techniques to extract key skills and requirements, identifying hiring trends.`,
      `Implemented data cleaning pipelines to improve dataset quality for accurate analysis.`,
      `Analyzed trends and insights to support data-driven hiring strategies.`
    ],
    techStack: ["Python", "NLP", "Web Scraping", "Selenium", "Pandas", "Data Cleaning"]
  },
  {
    title: 'IKEA Furniture Image Generation with GANs',
    description: [
      `Built a web scraping system using Selenium to collect high-quality IKEA furniture images for training a Generative Adversarial Network (GAN).`,
      `Stored and managed large datasets in AWS S3, ensuring durability and accessibility for model training.`,
      `Trained a GAN model to generate realistic furniture designs based on collected images.`,
      `Explored creative AI applications for automated furniture design and prototyping.`,
    ],
    url: "https://github.com/gamladz/Furniture-StyleGAN",
    image: FurnitureGAN,
    techStack: ["Python", "PyTorch", "GANs", "AWS", "Selenium", "S3"]
  }
];