const projects = [
  {
    title: "MedManager",
    description: "Medication management app with AI pill identification, drug conflict detection, and personalized medication tracking.",
    technologies: ["Python", "Flask", "TensorFlow", "React Native", "OpenCV"],
    github: "https://github.com/yourusername/MedManager"
  },
  {
    title: "Clusteroo",
    description: "Customer segmentation platform using ML models to analyze behavior and predict customer actions.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "AWS"],
    github: "https://github.com/yourusername/Clusteroo"
  },
  {
    title: "ListenAT",
    description: "AI-powered accessibility tool that converts sign language into real-time voice synthesis.",
    technologies: ["Python", "PyTorch", "OpenCV", "Flask", "React"],
    github: "https://github.com/yourusername/ListenAT"
  },
  {
    title: "Pin Collector App",
    description: "Mobile app for tracking pin collections using custom backend APIs.",
    technologies: ["React Native (Expo)", "Flask API", "MongoDB"],
    github: "https://github.com/yourusername/PinCollectorApp"
  },
  {
    title: "IR Spectroscopy ML",
    description: "ML model trained on NIST IR spectral data to predict molecular functional groups.",
    technologies: ["Python", "TensorFlow/Keras", "Pandas", "Numpy"],
    github: "https://github.com/yourusername/IRSpectroscopyML"
  }
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-foreground mb-6">Projects</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-light">
          A collection of projects showcasing my work in AI, data analytics, and full-stack development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-foreground mb-4">{project.title}</h3>
            <p className="text-foreground/70 mb-6 text-base leading-relaxed">{project.description}</p>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-xl font-medium hover:bg-accent/90 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.374-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}