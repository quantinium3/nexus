import Navbar from '@/components/navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">This is the about page.</p>
      </main>
    </div>
  );
}
