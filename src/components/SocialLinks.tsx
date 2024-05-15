import GitHubLogo from '/icons/github-mark-white.png';
import LinkedInLogo from '/LI-In-Bug.png';

function SocialLinks() {

  return (
    <div className='mt-2 flex flex-row gap-4'>
      <a href="https://github.com/plsakr" target="_blank" rel="noreferrer" className="text-white">
        <img src={GitHubLogo} alt="GitHub Logo" className="w-8 h-8 inline-block" />
      </a>
      <a href="https://linkedin.com/in/peterlsakr" target="_blank" rel="noreferrer" className="text-white brightness-0 invert">
        <img src={LinkedInLogo} alt="LinkedIn Logo" className="h-8 inline-block" />
      </a>
    </div>
  );
}
export { SocialLinks }