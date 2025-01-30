import { Link, Outlet } from 'react-router';
import { Button } from '~/components/shadcn/ui/button';

const PocLayout = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <Link to="/" className="mr-4">
        <Button variant="secondary">Go to Home</Button>
      </Link>
      <Outlet />
    </div>
  );
};

export default PocLayout;
