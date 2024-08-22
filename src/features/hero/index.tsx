import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-full">
      <h1 className="text-3xl font-extrabold">
        <p>React-Starter-Kit</p>
      </h1>

      <Button asChild>
        <a href="https://github.com/unllamas/react-starter-kit" target="_blank" rel="noreferrer">
          <GitHubLogoIcon />
          <p className="ml-2">GitHub</p>
        </a>
      </Button>
    </div>
  );
};
