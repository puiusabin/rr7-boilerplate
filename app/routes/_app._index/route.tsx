import { Button } from '~/components/shadcn/ui/button';
import type { Route } from './+types/route';
import { Welcome } from './components/welcome/welcome';

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <>
      <Welcome />
      <Button onClick={() => console.log('clicked!')}>Click me</Button>
    </>
  );
}
