import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog.tsx";
import {forwardRef} from "react";

interface ProjectProps {
  name: string;
  date: string;
  technologies: string[];
  description: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({ name, date, technologies, description, link }) => {
  return (
    <div className='relative'>
      <div className='group bg-white h-full relative z-10 p-2 text-black hover:text-white hover:bg-black ease-in duration-75 hover:left-1.5 hover:top-1.5'>
        <h2 className='text-xl'>{name}</h2>
        <p className='text-md'>{date}</p>
        <Dialog>
          <DialogTrigger className='text-black group-hover:text-white'>
            View Details
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{name}</DialogTitle>
              <DialogDescription>
                <ul>
                  {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div
        className='absolute left-1.5 top-1.5 w-full h-full z-0 bg-gradient-to-r from-blue-400 to-red-400 via-purple-400 via-20%'/>
    </div>
  )};

const Projects = forwardRef<HTMLDivElement>(function Projects(_props, ref) {

  const projectEntries = [
    {name: 'Portfolio Website', date: 'May 2024',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      description: 'This website was built using React, TypeScript, and TailwindCSS. It showcases my projects, skills, and experience. The site is fully responsive and optimized for mobile devices. The color scheme is inspired by the One Dark theme for IDEs',
      link: 'https://portfolio.psakr.dev'},
    {name: 'Research - Performance of Quantized Language Models', date: 'Spring 2024',
      technologies: ['Python', 'GGUF Models', 'HumanEval benchmark', 'Quantization'],
      description: 'This research focused on evaluating the performance of quantized language models. We used freely available GGUF Models on Huggingface and benchmarked them using HumanEval as well as Multi-PLe to compare the performance of quantized models to full-precision models. The analysis showed that quantized models definitely lose accuracy across most tasks, however, their performance relative to the smaller size may make them feasible replacements when running on low-resource machines such as local laptops.',
      link: '/GGUF-performance-report.pdf'},
    {name: 'RecycleVision', date: 'Spring 2024',
      technologies: ['expo', 'React Native', 'Huggingface', 'T5 Transformer Model', 'TailwindCSS', 'Figma'],
      description: 'This project involved developing a cross-platform mobile application using expo. The app uses a custom-built T5 transformer model hosted on Huggingface to classify images of waste items into several recyclable and non-recyclable categories. The app also provides information on how to properly dispose of the items based on the classification. The UI was designed on Figma and development used TailwindCSS for styling.',
      link: 'https://github.com/shafiqimtiaz/RecycleVision'},
    {name: 'AR Translation App', date: 'Fall 2023',
    technologies: ['Swift', 'MLKit', 'MobileNetV2'],
    description: 'This mobile application allows users to take pictures of everyday objects, and then translates the object in the image to a different language. The app uses MLKit and MobileNetV2 to identify objects in the image, and then translates the object to the desired language.',
    link: 'https://github.com/AbderraoufDrine/AITranslator'},
    {name: 'Medical Appointment System', date: 'Spring 2023',
      technologies: ['React.js', 'express.js', 'Prisma', 'PostgreSQL'],
      description: 'A fully functional medical appointment system that allows patients to book appointments with doctors. The system includes features such as user authentication, appointment scheduling, and staff utilities. The frontend is built with React.js and the backend is built with express.js. The database is managed with Prisma and PostgreSQL.',
      link: 'https://github.com/shafiqimtiaz/Medical-Appointment-System'},
    {name: 'DragonScale', date: 'Fall 2022',
      technologies: ['React.js', 'C#', '.NET Core', 'EF Core', 'PostgreSQL', 'Docker'],
      description: 'This is a work in progress personal project that aims to be a character and campaign management tool for tabletop role-playing games like Dungeons & Dragons. The frontend is built with React.js and the backend is built with C# and .NET Core. The database is managed with EF Core and PostgreSQL. The entire project is containerized with Docker. It is currently in alpha feature development, and the link below will take you to the current development build (Registration disabled).',
      link: 'https://beta.dragonscale.dev'},
    {name: 'Flight Information System', date: 'Fall 2022',
      technologies: ['React.js', 'express.js', 'MySQL'],
      description: 'This full-stack web application focuses on using several architectural patterns like Table Data Gateways, Data Mappers, and Service Layers. The application allows users to view and filter flight information retrieved from a public REST API. The frontend is built with React.js and the backend is built with express.js. The database is managed with MySQL.',
      link: 'https://github.com/plsakr/Flight-Information-System'},
    {name: 'Apollo - First Responder App', date: 'Fall 2021',
    technologies: ['React Native', 'Electron', 'React.js', 'Hardware', 'Micropython', 'Parse Server', 'Machine Learning'],
    description: 'This capstone project involved developing a cross-platform mobile application and desktop application for first responders. The mobile application was built with React Native and the desktop application was built with Electron. The app allows first responders to view and respond to emergency calls from patients, and includes features like GPS tracking and emergency contact information. The app also includes a hardware component (communicated with via bluetooth) that can be used to measure vitals such as an ECG or blood oxygen. The data can be sent to the backend and analyzed using ML algorithms to predict any diseases before the patient reaches the hospital. The backend is built with Parse Server.',
    link: 'https://github.com/ApolloLAU'},
    {name: 'RNA Sequence Comparison & Patch Tool', date: 'Spring 2021',
      technologies: ['Python', 'Biopython'],
      description: 'This tool compares two RNA sequences and identifies the differences between them. It uses the Biopython library to parse and compare the sequences. The tool outputs a patch file that can be used to update one sequence to match the other.',
      link: 'https://github.com/plsakr/rna-sequence-diff-patch'},
    {name: 'Age Prediction Tool', date: 'Fall 2020',
      technologies: ['Python', 'TensorFlow', 'Keras'],
      description: 'This tool uses a Convolutional Neural Network to predict the age of a person from an image. The model was trained on the UTKFace dataset, which contains over 20,000 images of faces with age labels. The tool takes an image as input and outputs the predicted age of the person in the image.',
      link: 'https://github.com/plsakr/CVAgePredictionTool'},
    {name: 'Book SwApp', date: 'Fall 2020',
    technologies: ['Angular', '.NET Core', 'EF Core', 'MySQL', 'C#', 'TypeScript'],
    description: 'A full-stack application that demonstrates the use of RESTful APIs to interact with a database. The application allows users to search for books, view book details, add books to the library and check them out. The frontend is built with Angular and the backend is built with .NET Core. The database is managed with MySQL and EF Core.',
    link: 'https://github.com/plsakr/BookSwApp'},
    {name: 'D&D Discord Bot', date: 'Spring 2020 - Present',
      technologies: ['Python', 'mongoDB', 'py-cord'],
      description: 'A Discord bot written in Python. This bot is designed to help Dungeon Masters run Dungeons & Dragons games on Discord. It includes features like dice rolling, and character and encounter management. It stores and references data in a mongoDB database hosted on mongoDB atlas. The bot is currently online on private Discord channels and has been in use since launch.',
      link: 'https://github.com/plsakr/dnd-bot'}
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full left-0 right-0 w-[40em] mx-auto absolute" ref={ref}>
      <h1 className='text-5xl text-white font-mono mr-auto'>Projects</h1>
      <div className='grid grid-cols-2 gap-6 mt-4'>
        {projectEntries.map((entry, index) => (
          <Project key={index} name={entry.name} date={entry.date} technologies={entry.technologies} description={entry.description} link={entry.link} />
        ))}
      </div>
    </div>
  );
});

export {Projects}