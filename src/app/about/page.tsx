import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-700 mb-4 inline-block">← Back to Home</a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            About
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-slate-700 mb-6">
            Welcome! I'm Autumn Shi, an artist passionate about creating across multiple mediums.
          </p>
          
          <p className="text-lg text-slate-700 mb-6">
            This is where you can add more information about yourself, your background, inspiration, and artistic journey.
          </p>

          <p className="text-lg text-slate-700">
            Feel free to customize this content with your own story and vision.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-600">
          <p>&copy; 2025 Autumn Shi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
