import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Nexus</Link>
        </div>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
          <Link href="/profile" className="text-gray-300 hover:text-white">Profile</Link>
        </div>
      </div>
    </nav>
  );
}
