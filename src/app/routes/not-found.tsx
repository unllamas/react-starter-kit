import { Button } from '@/components/ui/button';

export const NotFoundRoute = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-full">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-bold text-2xl">404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>

      <Button asChild>
        <a href="/">Go to Home</a>
      </Button>
    </div>
  );
};
