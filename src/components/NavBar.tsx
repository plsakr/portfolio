import {Briefcase, GitPullRequestCreateArrow, GraduationCap, Link} from "lucide-react";
import {cn} from "@/lib/utils.ts";

import {useState, useEffect, useRef, MouseEvent} from 'react';

// Hamburger Menu Component
const HamburgerMenu = (props: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div ref={menuRef} className={cn('basis-full top-0 w-full bg-black z-40 block mb-2')}>
      <button className='text-4xl' onClick={() => setIsOpen(!isOpen)}>☰</button>
      {isOpen && (
        <div className="w-full fixed z-40 flex flex-col justify-center items-center">
          <HamButton icon={<Link className={iconClasses} />} label={'Links'} onClick={() => props.setActive('links')} active={props.active==='links'}/>
          <HamButton icon={<GraduationCap className={iconClasses}/>} label={'Skills & Education'} onClick={() => props.setActive('education')} active={props.active==='education'}/>
          <HamButton icon={<Briefcase className={iconClasses}/>} label={'Experience'} onClick={() => props.setActive('experience')} active={props.active==='experience'}/>
          <HamButton icon={<GitPullRequestCreateArrow className={iconClasses}/>} label={'Projects'} onClick={() => props.setActive('projects')} active={props.active==='projects'}/>
        </div>
      )}
    </div>
  );
};

// Main Component
function MainNavComponent(props: NavBarProps) {
  return (
    <div>
      {props.isMobile ? <HamburgerMenu {...props} /> : <NavBar {...props} />}
    </div>
  );
}

type NavButtonProps = {
  icon: JSX.Element;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const iconClasses = 'h-8 w-8'

const HamButton = (props: NavButtonProps) => {
  return <div className={cn('w-full flex flex-row justify-center items-center cursor-pointer gap-2 bg-black py-1 px-1 pr-2 ',
    props.active ? 'bg-white text-black' : '')}
              onClick={() => props.onClick()}>
    <div>{props.icon}</div>
    <p>{props.label}</p>
  </div>
}

const NavButton = (props: NavButtonProps) => {
  return <div className={cn('flex flex-row items-center cursor-pointer gap-2 bg-black py-1 px-1 pr-2 overflow-hidden w-10 hover:w-52 text-nowrap ease-in-out duration-100 hover:rounded hover:bg-gradient-to-r from-blue-400 to-red-400 via-purple-400 via-50%',
    props.active ? 'bg-white hover:bg-white w-52 text-black hover:text-white' : '')}
    onClick={() => props.onClick()}>
    <div>{props.icon}</div>
    <p>{props.label}</p>
  </div>
}

type NavBarProps = {
  isMobile: boolean;
  active: 'links' | 'education' | 'experience' | 'projects';
  setActive: (active: 'links' | 'education' | 'experience' | 'projects') => void;
}

function NavBar(props: NavBarProps) {
  return (
    <div className='absolute my-auto h-52 left-0 top-0 bottom-0 z-10 text-lg'>
      <NavButton icon={<Link className={iconClasses} />} label={'Links'} onClick={() => props.setActive('links')} active={props.active==='links'}/>
      <NavButton icon={<GraduationCap className={iconClasses}/>} label={'Skills & Education'} onClick={() => props.setActive('education')} active={props.active==='education'}/>
      <NavButton icon={<Briefcase className={iconClasses}/>} label={'Experience'} onClick={() => props.setActive('experience')} active={props.active==='experience'}/>
      <NavButton icon={<GitPullRequestCreateArrow className={iconClasses}/>} label={'Projects'} onClick={() => props.setActive('projects')} active={props.active==='projects'}/>
    </div>
  )
}

export {MainNavComponent}