import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#aboutme' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="#home" className="text-xl font-bold text-white hover:text-blue-400 transition">
            zuuw.dev
          </Link>
          
          {/* Nav Links */}
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}