import Link from 'next/link';

export default function Illustrations() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-700 mb-4 inline-block">← Back to Home</a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Illustrations
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-slate-700 mb-6">
            Welcome to my Illustrations gallery. This is where you can showcase your digital and traditional illustration work.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-slate-200 rounded-lg h-48 flex items-center justify-center">
              <p className="text-slate-500">Image placeholder</p>
            </div>
            <div className="bg-slate-200 rounded-lg h-48 flex items-center justify-center">
              <p className="text-slate-500">Image placeholder</p>
            </div>
            <div className="bg-slate-200 rounded-lg h-48 flex items-center justify-center">
              <p className="text-slate-500">Image placeholder</p>
            </div>
          </div>

          <p className="text-slate-600 mt-8">
            Add your illustration images and descriptions here.
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
