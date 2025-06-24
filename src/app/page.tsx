export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-24">
        <h1 className="text-6xl font-bold text-foreground mb-6">Will M</h1>
        <h2 className="text-3xl text-primary mb-8 font-medium">Software Engineer | AI, Data, and Backend Systems</h2>
        <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
          I am a software engineer with a passion for building scalable backend systems, applying machine learning to real-world problems, and developing intelligent software that creates meaningful impact. With experience across data analytics, AI-driven applications, and full-stack development, I enjoy working at the intersection of technology, problem-solving, and business needs.
        </p>
        <p className="text-2xl text-accent font-semibold">
          Building data-driven solutions that make a difference.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-10 mt-20">
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">Backend Systems</h3>
          <p className="text-foreground/70 text-lg">Scalable and robust server-side architectures</p>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">Data Analytics</h3>
          <p className="text-foreground/70 text-lg">Insights from complex datasets and metrics</p>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">AI & ML</h3>
          <p className="text-foreground/70 text-lg">Machine learning solutions for real-world problems</p>
        </div>
      </div>
    </div>
  );
}
