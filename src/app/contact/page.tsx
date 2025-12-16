import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-700 mb-4 inline-block">← Back to Home</a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Contact
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-slate-700 mb-8">
            I'd love to hear from you! Feel free to reach out through any of the following channels.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">
                <a href="mailto:your-email@example.com" className="text-blue-600 hover:text-blue-700">
                  your-email@example.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Social Media</h3>
              <p className="text-slate-600">
                Add links to your Instagram, Twitter, LinkedIn, or other social profiles here.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">
                Add your location or timezone information here.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Contact Form</h3>
            <p className="text-slate-600 mb-4">
              You can add a contact form here for inquiries and commissions.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add Form
            </button>
          </div>
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
