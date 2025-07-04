export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-foreground mb-6">Get In Touch</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-light">
          I&apos;m always interested in discussing new opportunities, collaborations, or interesting projects. 
          Feel free to reach out!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">Email</h3>
          <a 
            href="mailto:your.email@example.com" 
            className="text-primary hover:text-accent transition-colors font-medium text-lg"
          >
            your.email@example.com
          </a>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">LinkedIn</h3>
          <a 
            href="https://www.linkedin.com/in/yourprofile/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors font-medium text-lg"
          >
            Connect with me
          </a>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="w-20 h-20 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.374-12-12-12z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">GitHub</h3>
          <a 
            href="https://github.com/yourusername/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors font-medium text-lg"
          >
            View my code
          </a>
        </div>
      </div>

      <div className="mt-24 text-center max-w-3xl mx-auto">
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
          <h2 className="text-4xl font-semibold text-foreground mb-6">Let&apos;s Work Together</h2>
          <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
            Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
            I&apos;d love to hear from you. I&apos;m particularly interested in projects involving AI, data analytics, 
            and backend systems.
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Send me an email
          </a>
        </div>
      </div>
    </div>
  );
}