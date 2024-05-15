import resume from '/peter_resume.pdf';
import {HardDriveDownload} from "lucide-react";

function ResumeDownloadButton() {


  return (
    <div className='relative'>
    <a
      className='relative left-0 top-0 z-10 mt-32 bg-white text-dark-100 h-12 w-64 flex justify-center items-center gap-4 px-4 hover:bg-black hover:text-white ease-in duration-75 hover:left-1.5 hover:top-1.5'
      href={resume} target='_blank'>
      <p>Download My Resume</p>
      {<HardDriveDownload/>}
    </a>
    <div className='absolute left-1.5 top-1.5 h-12 w-64 bg-gradient-to-r from-blue-400 to-red-400 via-purple-400 via-20%' />
    </div>
  );
}

export {ResumeDownloadButton};