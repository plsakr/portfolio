import './App.css';
import React, {useState, useRef, useLayoutEffect} from "react";
import { NavBar } from "@/components/NavBar.tsx";
import { Links } from './pages/Links';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {Skills} from "@/pages/Skills.tsx";
import {Experience} from "@/pages/Experience.tsx";

const dynamicChildFactory = (classNames: string) => (child: React.FunctionComponentElement<{ classNames: string; }>) =>
  React.cloneElement(child, {
    classNames
  });

function App() {
  const [activeNav, setActiveNav] = useState<'links' | 'education' | 'projects' | 'experience'>('links');
  const prevNavRef = useRef<'links' | 'education' | 'projects' | 'experience' | null>(null);

  const nodeRefs = {
    links: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
  };

  const pageOrder = ['links', 'education', 'experience', 'projects'];

  const getPageOrder = (page: string) => pageOrder.indexOf(page);

  const getClassNames = (currentNav: string, previousNav: string | null) => {
    if (previousNav === null) return 'slide-up'; // Default to slide-up if there is no previous navigation
    console.log('currentNav:', currentNav)
    console.log('previousNav:', previousNav)

    const prevIndex = getPageOrder(previousNav);
    const currentIndex = getPageOrder(currentNav);

    return currentIndex > prevIndex ? 'slide-up' : 'slide-down';
  };

  const pages = {
    links: <Links ref={nodeRefs.links} />,
    education: <Skills ref={nodeRefs.education}/>,
    projects: <Links ref={nodeRefs.projects}/>,
    experience: <Experience ref={nodeRefs.experience}/>,
  };

  useLayoutEffect(() => {
    prevNavRef.current = activeNav;
  }, [activeNav]);

  return (
    <div className='bg-dark-100 h-full'>
      <NavBar active={activeNav} setActive={(newNav) => {
        prevNavRef.current = activeNav;
        setActiveNav(newNav);
      }} />
      <TransitionGroup childFactory={dynamicChildFactory(getClassNames(activeNav, prevNavRef.current))}>
        <CSSTransition
          key={activeNav}
          nodeRef={nodeRefs[activeNav]}
          timeout={500}
          classNames={getClassNames(activeNav, prevNavRef.current)}
          unmountOnExit
        >
          {pages[activeNav]}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;