import {Briefcase, GitPullRequestCreateArrow, GraduationCap, Link} from "lucide-react";
import {cn} from "@/lib/utils.ts";

type NavButtonProps = {
  icon: JSX.Element;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const iconClasses = 'h-8 w-8'

const NavButton = (props: NavButtonProps) => {
  return <div className={cn('flex flex-row items-center cursor-pointer gap-2 bg-black py-1 px-1 pr-2 overflow-hidden w-10 hover:w-52 text-nowrap ease-in-out duration-100 hover:rounded hover:bg-gradient-to-r from-blue-400 to-red-400 via-purple-400 via-50%',
    props.active ? 'bg-white hover:bg-white w-52 text-black hover:text-white' : '')}
    onClick={() => props.onClick()}>
    <div>{props.icon}</div>
    <p>{props.label}</p>
  </div>
}

type NavBarProps = {
  active: 'links' | 'education' | 'experience' | 'projects';
  setActive: (active: 'links' | 'education' | 'experience' | 'projects') => void;
}

function NavBar(props: NavBarProps) {
  return (
    <div className='absolute my-auto h-52 top-0 bottom-0 z-10 text-lg'>
      <NavButton icon={<Link className={iconClasses} />} label={'Links'} onClick={() => props.setActive('links')} active={props.active==='links'}/>
      <NavButton icon={<GraduationCap className={iconClasses}/>} label={'Skills & Education'} onClick={() => props.setActive('education')} active={props.active==='education'}/>
      <NavButton icon={<Briefcase className={iconClasses}/>} label={'Experience'} onClick={() => props.setActive('experience')} active={props.active==='experience'}/>
      <NavButton icon={<GitPullRequestCreateArrow className={iconClasses}/>} label={'Projects'} onClick={() => props.setActive('projects')} active={props.active==='projects'}/>
    </div>
  )
}

export {NavBar}