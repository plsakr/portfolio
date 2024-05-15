import {BlinkingCursor} from "@/components/BlinkingCursor.tsx";
import {SocialLinks} from "@/components/SocialLinks.tsx";
import {ResumeDownloadButton} from "@/components/ResumeDownloadButton.tsx";
import headshot from "/headshot.png";
import {forwardRef, useEffect, useState} from "react";

const Links = forwardRef<HTMLDivElement, unknown>(function Links (_props, ref) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const text = 'Peter Sakr';
  const delay = 100;

  useEffect(() => {
    if (visibleChars < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[visibleChars]);
        setVisibleChars(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [visibleChars, currentText]);

  return (
    <div className="flex items-center gap-12 justify-center absolute w-full h-full" ref={ref}>
      <div>
        <div className='flex gap-2 w-[28em]'>
          <h1 className='text-6xl font-mono text-white'>{'>'}</h1>
          <h1 className='text-6xl font-mono text-white flex'><p className='inline-block'>{currentText}</p>{
            <BlinkingCursor blinking={visibleChars >= text.length}/>}</h1>
        </div>
        <h2
          className='text-transparent bg-clip-text text-5xl pb-2 bg-gradient-to-r from-blue-400 to-red-400 via-purple-400 via-20% w-auto inline-block'>Software
          Engineer</h2>
        <SocialLinks/>
        <ResumeDownloadButton />
      </div>
      <img src={headshot} className='w-52 h-52 rounded-full' alt='headshot'/>
    </div>
  );
});

export {Links}