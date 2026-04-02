import Link from 'next/link';
import { FileCode2, ChevronLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <FileCode2 className="text-blue-500" />
            <span>ContextXode</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2">
            <ChevronLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 pb-32">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="bg-blue-500/10 p-4 rounded-2xl mb-6 ring-1 ring-blue-500/20">
            <ShieldCheck size={48} className="text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-slate-400 font-medium">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-12">
          <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed italic">
              ContextXode respects your privacy. This application is designed to work completely offline and does not collect or share any personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-mono ring-1 ring-blue-500/20">1</span>
              No Data Collection
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              ContextXode does not collect, store, or transmit any personal information. All data used by the application stays on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-mono ring-1 ring-blue-500/20">2</span>
              Offline Usage
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              This application works entirely offline. It does not require an internet connection to function and does not communicate with any external servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-mono ring-1 ring-blue-500/20">3</span>
              Local File Access
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              ContextXode may access files on your device only to perform its core features (such as scanning or processing files). This data is never sent outside your system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-mono ring-1 ring-blue-500/20">4</span>
              No Third-Party Services
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              This application does not use any third-party analytics, tracking tools, or external services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-mono ring-1 ring-blue-500/20">5</span>
              Data Security
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Since all data stays on your device, you are in full control of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-mono ring-1 ring-blue-500/20">6</span>
              Changes to This Policy
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              If this policy is updated in the future, the updated version will be included with the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-mono ring-1 ring-blue-500/20">7</span>
              Contact
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              If you have any questions about this Privacy Policy, you can contact the developer.
            </p>
          </section>

          <hr className="border-slate-800" />

          <section className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-2 text-blue-400">Summary</h3>
            <p className="text-slate-300 leading-relaxed font-medium">
              ContextXode does not collect your data. Everything stays private and on your device.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4 text-slate-500 text-sm">
          <Link href="/" className="flex items-center gap-2 font-semibold text-slate-300">
            <FileCode2 size={18} /> ContextXode
          </Link>
          <p>© {new Date().getFullYear()} ContextXode. Built for developers.</p>
        </div>
      </footer>
    </div>
  );
}
