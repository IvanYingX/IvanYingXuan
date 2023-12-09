import { Box, Stack, Typography, Button, Collapse } from '@mui/material';
import React from 'react';
import ExperienceStep from '../../components/ExperienceStep';

import ImperialCollegeLogo from '../../images/icl.png';
import AiCoreLogo from '../../images/aicore_logo.webp';


const steps = [
  {
    label: 'Full Stack Developer',
    description: 
      <Stack direction="column" spacing={2}>
        <Typography variant="body1">
          Orchestrated backend systems using AWS API Gateway and Lambda functions, establishing efficient
          communication with databases. Managed React-based website features and optimized database schemas with PostgreSQL.
        </Typography>
        <Typography variant="body1">
          Leveraged advanced React functionalities to design and maintain high-performance features, ensuring a seamless and intuitive user interface.
        </Typography>
        <Typography variant="body1">
          Enhanced website functionalities by seamlessly integrating tools like Intercom, HubSpot, or Discord via their APIs, bolstering user engagement and experience.
        </Typography>
        <Typography variant="body1">
          Implemented comprehensive testing strategies utilizing Jest and ViTest, ensuring website reliability, stability, and adherence to quality standards while harmonizing frontend and backend components for holistic solutions.
        </Typography>
      </Stack>,
    logo: <img src={AiCoreLogo} alt="logo" style={{ width: "80px", height: "80px" }} />,
    from_date: "2022",
    to_date: "Present",
    company: "AiCore",
    type: "work"
  },
  {
    label: 'Head of Support Engineering',
    description: 
      <Stack direction="column" spacing={2}>
        <Typography variant="body1">
        Orchestrated and managed a specialized team devoted to educating and guiding over 1000 students in Machine Learning (ML) and Data Science (DS), programming fundamentals, as well as Cloud and DevOps methodologies.
        Provided comprehensive support and guidance, fostering an inclusive and collaborative learning environment that empowered students to confidently navigate these intricate technical domains.
        </Typography>
        <Typography variant="body1">
        Innovated and developed multiple user-centric applications facilitating seamless communication with diverse APIs, enabling students to effectively track their learning progress. These applications significantly contributed to a remarkable milestone, ensuring a 100% completion rate among users within the designated course duration. These tools played a pivotal role in structuring and enhancing the educational journey for each student.
        </Typography>
        <Typography variant="body1">
        Regularly conducted dynamic demonstrations aimed at broader audiences, showcasing practical applications of various technological tools such as Machine Learning (ML), Deep Learning (DL), webscraping, and cloud computing. These sessions provided invaluable hands-on experiences, offering insights into real-world applications and fostering a deeper understanding of cutting-edge technologies among learners.
        </Typography>
      </Stack>,
    logo: <img src={AiCoreLogo} alt="logo" style={{ width: "80px", height: "80px" }} />,
    from_date: "2021",
    to_date: "2022",
    company: "AiCore",
    type: "work"
  },
  {
    label: "Data Science and Machine Learning",
    description:
      <Stack direction="column" spacing={2}>
        <Typography variant="body1">
          Acquired comprehensive knowledge and hands-on experience in practical AI applications, encompassing the development and management of data pipelines, implementation of Machine Learning (ML) algorithms, configuration of Deep Learning (DL) networks, and expertise in containerization techniques. Gained proficiency in leveraging these advanced AI tools to address real-world challenges and optimize processes.
        </Typography>
        <Typography variant="body1">
          Attained expertise in designing, implementing, and managing robust data pipelines, demonstrating adeptness in handling data flow, transformation, and orchestration. Acquired a nuanced understanding of data processing methodologies and techniques, ensuring efficient data management across various stages of an application.
        </Typography>
        <Typography variant="body1">
          Acquired a comprehensive skill set in implementing diverse ML and DL algorithms, honing the ability to analyze complex datasets, select suitable algorithms, and optimize model performance. Developed proficiency in creating neural networks and employing advanced algorithms to solve intricate problems across different domains.
        </Typography>
      </Stack>,
    logo: <img src={AiCoreLogo} alt="logo" style={{ width: "80px", height: "80px" }} />,
    from_date: "2020",
    to_date: "2021",
    company: "AiCore",
    type: "education"
  },
  {
    label: "Academic Researcher",
    description:
    <Stack direction="column" spacing={2}>
      <Typography variant="body1">
        Conducted comprehensive literature reviews and analysis of industry-specific power management strategies, encompassing the evaluation of emerging technologies and their potential applications in optimizing energy usage within Oil & Gas operations.
      </Typography>
      <Typography variant="body1">
        Collaborated with cross-disciplinary teams to develop experimental methodologies, conducting in-depth simulations and empirical studies to quantify the efficacy and feasibility of novel power management solutions, resulting in a 15% reduction in energy consumption within test scenarios.
      </Typography>
      <Typography variant="body1">
        Presented research findings at industry conferences and authored peer-reviewed papers for reputable journals, contributing valuable insights to the field of energy optimization in Oil & Gas, and establishing professional networks to exchange knowledge and foster potential collaborations.
      </Typography>
    </Stack>,
    logo: <img src={ImperialCollegeLogo} alt="logo" style={{ width: "80px", height: "80px" }} />,
    from_date: "2019",
    to_date: "2020",
    company: "Imperial College London",
    type: "work"
  },
  {
    label: "PhD in Process and Chemical Engineering",
    description:
      <Stack direction="column" spacing={2}>
        <Typography variant="body1">
          Executed a comprehensive study sponsored by ABB, integrating diverse methodologies from chemical engineering, data science, and process optimization to analyze electricity-intensive processes. Successfully identified and implemented innovative strategies resulting in potential cost savings of millions of dollars annually for industrial partners.
        </Typography>
        <Typography variant="body1">
          Applied cutting-edge clustering and classification algorithms to predict and prevent failures in a critical LNG (Liquefied Natural Gas) facility. The implementation of these algorithms led to a 20% reduction in downtime incidents, ensuring operational efficiency and bolstering safety protocols within the LNG plant.
        </Typography>
        <Typography variant="body1">
          Published research findings in high-impact journals and presented at international conferences, contributing seminal insights to the field of chemical engineering. The dissemination of research outcomes fostered collaborations and industry partnerships, elevating the discourse on energy-intensive processes and predictive maintenance methodologies within the LNG sector.
        </Typography>
      </Stack>,
    logo: <img src={ImperialCollegeLogo} alt="logo" style={{ width: "80px", height: "80px" }} />,
    from_date: "2015",
    to_date: "2019",
    company: "Imperial College London",
    type: "education"
  }
];

const Experience: React.FC = () => {
  const [showWork, setShowWork] = React.useState<boolean>(true);
  const [showEducation, setShowEducation] = React.useState<boolean>(true);
  const [toggleAllExpanded, setToggleAllExpanded] = React.useState<boolean>(true);

  const toggleWork = () => {
    setShowWork(!showWork);
  }
  const toggleEducation = () => {
    setShowEducation(!showEducation);
  }
  const toggleAll = () => {
    setToggleAllExpanded(!toggleAllExpanded);
  }

  return (
    <Box className="container" sx={{ display: "flex", flexDirection: "flex-start" }} id="experience" >
      <Box sx={{ alignItems: "center", marginLeft: "auto", marginRight: "auto", width: "80%" }}>
        <Typography variant="h3" sx={{ marginBottom: "20px" }}>Experience</Typography>
        <Stack direction="column" spacing={5} sx={{ marginBottom: "20px" }}>
          <Stack direction="row" spacing={2} sx={{ marginBottom: "20px" }} >
            <Button
              sx={{
                backgroundColor: showWork ? "#222" : "white",
                color: showWork ? "white" : "#444",
                fontWeight: 600,
                display: "flex",
                padding: "5px 30px",
                ":hover": {
                  backgroundColor: showWork ? "white" : "#222",
                  color: showWork ? "#444" : "white",
                  transition: "0.2s"
                }
              }}
              onClick={toggleWork}
            >
              {showWork ? "Hide" : "Show"} Work Experience
            </Button>
            <Button
              sx={{
                width: "fit-content",
                backgroundColor: showEducation ? "#222" : "white",
                color: showEducation ? "white" : "#444",
                fontWeight: 600,
                display: "flex",
                padding: "5px 30px",
                ":hover": {
                  backgroundColor: showEducation ? "white" : "#222",
                  color: showEducation ? "#444" : "white",
                  transition: "0.2s"
                }
              }}
              onClick={toggleEducation}
            >
              {showEducation ? "Hide" : "Show"} Education
            </Button>
            <Button
              sx={{
                width: "fit-content",
                backgroundColor: toggleAllExpanded ? "#222" : "white",
                color: toggleAllExpanded ? "white" : "#444",
                fontWeight: 600,
                display: "flex",
                padding: "5px 30px",
                ":hover": {
                  backgroundColor: toggleAllExpanded ? "white" : "#222",
                  color: toggleAllExpanded ? "#444" : "white",
                  transition: "0.2s"
                }
              }}
              onClick={toggleAll}
            >
              {toggleAllExpanded ? "Collapse" : "Expand"} All
            </Button>
          </Stack>
            <Box sx={{ marginRight: "10px" }}>
              {steps.map((step, index) => (
                <Collapse in={((step.type === "work" && showWork) || (step.type === "education" && showEducation))} key={`experience-step-${step.label}`}>
                    <ExperienceStep
                      key={`experience-step-${step.label}`}
                      title={step.label}
                      company={step.company}
                      from_date={step.from_date}
                      to_date={step.to_date}
                      description={step.description}
                      logo={step.logo}
                      toggleAllExpanded={toggleAllExpanded}
                    />
                </Collapse>
              ))}
            </Box>
        </Stack>
        
      </Box>
    </Box>
  );
};

export default Experience;