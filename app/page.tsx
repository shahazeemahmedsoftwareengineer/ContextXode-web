import Link from 'next/link';
import { 
  Download, 
  FolderTree, 
  FileCode2, 
  Copy, 
  Monitor, 
  ShieldCheck, 
  ChevronRight,
  Zap
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <FileCode2 className="text-blue-500" />
            <span>ContextXode</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#download" className="hover:text-white transition-colors">Download</a>
          </div>
          <a href="#download" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2">
            <Download size={16} />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        
        {/* 1. Hero Section */}
        <section className="py-24 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now available for Windows
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
            Transform Your Codebase into AI-Ready Context in One Click.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Stop the manual copy-paste cycle. ContextXode scans your project and packages your files into a perfectly formatted structure designed for ChatGPT, Claude, and Gemini.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a href="#download" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 group">
              Download Free
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>

          {/* Abstract App UI Mockup */}
          <div className="mt-20 w-full max-w-4xl rounded-xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden flex flex-col">
            <div className="h-10 border-b border-slate-800 flex items-center px-4 gap-2 bg-slate-950/50">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-4 text-xs font-mono text-slate-500">ContextXode - MyProject</div>
            </div>
            <div className="p-6 flex flex-col md:flex-row gap-6 h-64 text-left font-mono text-sm">
              <div className="flex-1 border border-slate-800 rounded-md bg-slate-950 p-4 text-slate-400">
                <div className="text-blue-400 mb-2 flex items-center gap-2"><FolderTree size={16}/> Explorer</div>
                <div>📁 src/</div>
                <div className="ml-4">📄 index.ts</div>
                <div className="ml-4 text-white bg-slate-800 rounded px-1 w-fit">📄 app.tsx</div>
                <div>📄 package.json</div>
              </div>
              <div className="flex-[2] border border-slate-800 rounded-md bg-slate-950 p-4 text-slate-300 overflow-hidden relative">
                <div className="text-slate-500 mb-4"># FILE: src/app.tsx</div>
                <div className="text-green-400">export function App() {'{'}</div>
                <div className="ml-4">return &lt;div&gt;Ready for LLM&lt;/div&gt;;</div>
                <div className="text-green-400">{'}'}</div>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded text-xs flex items-center gap-2 shadow-lg">
                  <Copy size={14}/> Context Copied!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & Features */}
        <section id="features" className="py-24 border-t border-slate-800/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Bridge from IDE to AI.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              ContextXode is a lightweight, high-performance desktop application that simplifies how you share your project with AI. Built for speed and a tiny footprint.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FolderTree size={24} className="text-blue-400" />}
              title="Visual Explorer"
              description="Navigate your project using a familiar, icon-rich tree view. Select exactly what you need, leave behind what you don't."
            />
            <FeatureCard 
              icon={<FileCode2 size={24} className="text-blue-400" />}
              title="AI-Ready Formatting"
              description="Files are wrapped in clear path tags, optimized specifically for LLM comprehension so it never gets confused."
            />
            <FeatureCard 
              icon={<Copy size={24} className="text-blue-400" />}
              title="One-Click Copy"
              description="Copy the entire structured project context or individual files directly to your clipboard in milliseconds."
            />
            <FeatureCard 
              icon={<Monitor size={24} className="text-blue-400" />}
              title="Desktop Native"
              description="Built with native desktop technologies for a blazing-fast, responsive Windows native experience."
            />
            <FeatureCard 
              icon={<ShieldCheck size={24} className="text-green-400" />}
              title="Privacy First (100% Offline)"
              description="Your code never leaves your machine. ContextXode processes everything locally—no cloud, no data harvesting."
            />
            <FeatureCard 
              icon={<Zap size={24} className="text-yellow-400" />}
              title="Zero Noise"
              description="Automatically excludes node_modules, build folders, and binaries so you don't waste your AI prompt limits."
            />
          </div>
        </section>

        {/* 5. Download Section */}
        <section id="download" className="py-24 border-t border-slate-800/50 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to supercharge your AI workflow?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mb-12">
            ContextXode is completely free. No installation required for portable versions—just run the executable and start exporting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
            <a 
              href="/ContextXode_1.0.0_x64_en-US.msi?v=1" 
              download 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white p-6 rounded-xl text-left transition-all group flex flex-col gap-2"
            >
              <span className="font-bold text-lg flex items-center gap-2">
                <Download size={20} />
                Download Installer
              </span>
              <span className="text-blue-200 text-sm">Windows .msi package (Recommended)</span>
            </a>
            
            <a 
              href="/contextxode.exe?v=1" 
              download 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white p-6 rounded-xl text-left transition-all border border-slate-700 flex flex-col gap-2"
            >
              <span className="font-bold text-lg flex items-center gap-2">
                <Zap size={20} />
                Download Portable
              </span>
              <span className="text-slate-400 text-sm">Standalone .exe (No install needed)</span>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 mt-12 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <div className="flex items-center gap-2 font-semibold text-slate-300">
            <FileCode2 size={18} /> ContextXode
          </div>
          <p>© {new Date().getFullYear()} ContextXode. Built for developers.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper component for the feature grid
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/50 transition-colors">
      <div className="mb-4 bg-slate-950 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-800">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-100">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
