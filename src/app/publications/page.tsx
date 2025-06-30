import Link from 'next/link';

const publications = [
  {
    id: 'ml-academia',
    title: 'Applications of ML In Academia',
    description: 'This paper explores the diverse applications of machine learning techniques within academic environments, examining how AI technologies are transforming educational methodologies, research processes, and institutional operations. We analyze implementation strategies, effectiveness metrics, and future opportunities for ML integration in higher education.',
    authors: 'Will M',
    year: '2024',
    category: 'Machine Learning',
    readTime: '12 min read'
  },
  {
    id: 'ml-ir-spectroscopy',
    title: 'Analysis of ML Techniques in IR Spectroscopy',
    description: 'An in-depth analysis of machine learning approaches applied to infrared spectroscopy data interpretation. This research compares various ML algorithms for molecular identification, functional group prediction, and spectral pattern recognition, providing insights into the most effective techniques for automated spectroscopic analysis.',
    authors: 'Will M',
    year: '2024',
    category: 'Spectroscopy',
    readTime: '15 min read'
  },
  {
    id: 'qr2-code',
    title: 'QR2 Code',
    description: 'A comprehensive study on next-generation QR code technology, introducing enhanced encoding methods and improved error correction capabilities. This paper presents novel algorithms for data compression, security enhancements, and advanced scanning techniques that significantly improve traditional QR code limitations.',
    authors: 'Will M',
    year: '2024',
    category: 'Computer Science',
    readTime: '10 min read'
  }
];

export default function Publications() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-foreground mb-6">Publications</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-light">
          Research papers and academic contributions exploring machine learning, data analysis, and emerging technologies.
        </p>
      </div>

      <div className="space-y-8">
        {publications.map((paper, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                    {paper.category}
                  </span>
                  <span className="text-foreground/60 text-sm">
                    {paper.year}
                  </span>
                  <span className="text-foreground/60 text-sm">
                    {paper.readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {paper.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 text-base leading-relaxed">
                  {paper.description}
                </p>
                
                <p className="text-foreground/60 text-sm mb-6">
                  By {paper.authors}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[200px]">
                <Link
                  href={`/publications/${paper.id}`}
                  className="inline-flex items-center justify-center bg-accent text-white px-6 py-3 rounded-xl font-medium hover:bg-accent/90 transition-colors text-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"/>
                  </svg>
                  Read Paper
                </Link>
                
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors text-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Interested in Collaboration?</h3>
          <p className="text-foreground/70 mb-6 text-lg">
            I&apos;m always open to discussing research opportunities and academic partnerships.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}