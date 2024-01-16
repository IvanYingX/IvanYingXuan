import AiCoreLogo from '../../images/aicore_logo.webp';

export const projects = [
  {
    title: 'Serverless Portfolio Website with Automated CI/CD Deployment',
    description: [
      `Engineered a fully serverless portfolio website using AWS, leveraging services like S3 for hosting HTML, CSS, and JavaScript files, and integrating CloudFront for content delivery. Ensured website security by configuring HTTPS redirection and SSL certification via AWS Certificate Manager.`,
      `Acquired and set up a custom domain name (dillonmeacham.net) using AWS Route53 as the domain registrar, creating A records to link the domain with the CloudFront distribution for a seamless user experience.`,
      `Crafted a custom, interactive resume from scratch using React, showcasing advanced front-end development skills and a deep understanding of modern web technologies for creating dynamic, responsive user interfaces.`,
      `Integrated CI/CD pipelines using GitHub Actions, automating the deployment process with YAML workflows for seamless and efficient updates to the web application directly from VSCode.`
    ],
    image: AiCoreLogo
  },
  {
    title: 'Cloud-Based Data Analytics Optimization and Automation Project',
    description: [
      `Played a key role in transitioning the company's data analytics infrastructure to AWS, utilizing services like AWS Glue, AWS Athena, and DynamoDB. This strategic move resulted in a substantial 72% improvement in data retrieval times, significantly boosting overall efficiency.`,
      `Engineered and implemented a suite of custom Python scripts, integrated with GitHub Actions, to automate daily data updates. This innovation reduced the need for manual processes and enhanced operational efficiency by 200%.`,
      `Employed AWS Quicksight for advanced data visualization, enabling the company to derive actionable insights from complex datasets and make informed business decisions.`
    ],
    image: AiCoreLogo
  },
  {
    title: 'Platform Engagement Tracking and Automation System',
    description: [
      `Developed and implemented a comprehensive tracking system to monitor user interactions and progress within the platform, employing advanced data analytics to capture key metrics that inform user engagement strategies and platform enhancements.`,
      `Engineered a robust integration solution using Google Sheets API that automates the capture and organization of user progress data, streamlining data management processes and ensuring real-time data accuracy for reporting purposes.`,
      `Orchestrated a notification system utilizing Slack API to automatically alert team members of user progress updates, enhancing team collaboration and enabling swift response to user engagement trends.`,
      `Architected a synchronized workflow leveraging webhooks and GitHub Actions to ensure seamless operation of the tracking, data population, and notification systems, resulting in an integrated ecosystem that operates with high efficiency and minimal manual oversight.`
    ],
    image: AiCoreLogo
  },
  {
    title: "Job Market Analysis and Skills Extraction Using NLP",
    description: [
      `Conducted extensive web scraping to accumulate over 15,000 job descriptions, creating a rich dataset for detailed job market analysis.`,
      `Implemented sophisticated data cleaning techniques to refine the dataset, ensuring high-quality input for subsequent NLP tasks.`,
      `Applied NLP methodologies to extract key skills and requirements from job descriptions, effectively decoding the nuances of various job specifications.`,
      `Analyzed the processed data to uncover trends and insights that informed strategic business decisions, providing a data-driven approach to understanding job market demands.`
    ],
    image: AiCoreLogo
  },
  {
    title: 'IKEA Furniture Image Generation with GANs',
    description: [
      `Developed a web scraping system using Selenium to automatically collect numerous high-quality images of IKEA furniture, successfully capturing a diverse dataset for model training purposes.`,
      `Managed large datasets by storing and organizing scraped images in an AWS S3 bucket, ensuring data durability and easy accessibility for processing and model training.`,
      `Utilized advanced machine learning techniques to train a Generative Adversarial Network (GAN), calibrating it to generate realistic and varied images of furniture based on the attributes of the collected IKEA product images.`,
      `Pioneered the use of GANs within the project to synthesize new furniture designs, pushing the boundaries of creative design and potential manufacturing applications.`,
    ],
    image: AiCoreLogo
  }
];