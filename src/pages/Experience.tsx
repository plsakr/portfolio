import {forwardRef} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog.tsx";

interface ExperienceEntryProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ title, company, duration, description }) => {

  return (
    <div className='relative'>
      <div className='group bg-white relative z-10 p-2 text-black hover:text-white hover:bg-black ease-in duration-75 hover:left-1.5 hover:top-1.5'>
        <h2 className='text-xl text-purple-200'>{title}</h2>
        <h3 className='text-lg italic'>{company}</h3>
        <p className='text-md'>{duration}</p>
        <Dialog>
          <DialogTrigger className='text-black group-hover:text-white'>
            View Details
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='text-xl text-purple-200'>{title}</DialogTitle>
              <DialogDescription className='text-lg'>{description.split('\n').map((text) => <p>{text}</p>)}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div
        className='absolute left-1.5 top-1.5 w-full h-full z-0 bg-gradient-to-r from-blue-400 to-red-400 via-purple-400 via-20%'/>
    </div>
  );
};

const Experience = forwardRef<HTMLDivElement>(function Experience(_props, ref) {

  const experienceEntries = [
    {
      title: 'Software Engineer Intern',
      company: 'Morgan Stanley',
      duration: 'May 2023 – August 2023',
      description: '• Led standup and retro meetings to facilitate agile methodologies during weekly sprints.\n' +
        '• Identified and reported bugs during testing, and ensured code stability by reviewing pull requests.\n' +
        '• Reduced technical debt and improved codebase by debugging and refactoring, following OOP principles.\n • Enhanced frontend interfaces and developed backend API endpoints using REST technology.'
    },
    {
      title: 'Unity Developer Intern',
      company: 'Oreyeon',
      duration: 'January 2022 – May 2022',
      description: '• Leveraged Unity3D C# Perception package to design simulations and streamline data generation for internal company use, significantly reducing data collection time from several hours to just minutes.\n' +
        '• Created 3D environments based on pre-made assets for specific data output.\n' +
        '• Produced comprehensive documentation for team onboarding.'
    },
    {
      title: 'Software Engineer Intern',
      company: 'BMW Group',
      duration: 'March 2020 – July 2020',
      description: '• Optimized codebases through extensive refactoring.\n' +
        '• Migrated a file-based app to a MongoDB database for multi-user collaboration.\n' +
        '• Engineered a custom pathfinding system with A-Star algorithm for generating AI paths in milliseconds.\n • Implemented state machines in C# for 3D scene vehicle movements.'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center md:h-full left-0 right-0 md:w-[40em] mx-auto" ref={ref}>
      <h1 className='text-4xl md:text-5xl font-mono mr-auto'>Experience</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mr-auto relative'>
        {experienceEntries.map((entry, index) => (
          <ExperienceEntry key={index} title={entry.title} company={entry.company} duration={entry.duration} description={entry.description} />
        ))}
      </div>
    </div>
  );
});

export {Experience}