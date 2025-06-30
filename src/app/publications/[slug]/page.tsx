import Link from 'next/link';
import { notFound } from 'next/navigation';

const papers = {
  'ml-academia': {
    title: 'Applications of ML In Academia',
    authors: 'Will M',
    year: '2024',
    category: 'Machine Learning',
    readTime: '12 min read',
    abstract: 'This paper explores the diverse applications of machine learning techniques within academic environments, examining how AI technologies are transforming educational methodologies, research processes, and institutional operations. We analyze implementation strategies, effectiveness metrics, and future opportunities for ML integration in higher education.',
    content: `
      <h2>Abstract</h2>
      <p>Machine learning (ML) has emerged as a transformative force across various sectors, and academia is no exception. This comprehensive study examines the current state and future potential of ML applications in academic environments, from personalized learning systems to research acceleration tools.</p>

      <h2>Introduction</h2>
      <p>The integration of machine learning technologies in academic institutions has accelerated significantly over the past decade. Educational institutions worldwide are leveraging ML to enhance student experiences, improve administrative efficiency, and accelerate research outcomes.</p>

      <h2>Key Applications</h2>
      <h3>1. Personalized Learning Systems</h3>
      <p>ML algorithms analyze student learning patterns to create customized educational pathways, adapting content difficulty and presentation style to individual needs. These systems have shown remarkable success in improving student engagement and academic performance.</p>

      <h3>2. Predictive Analytics for Student Success</h3>
      <p>Universities employ ML models to identify at-risk students early in their academic journey, enabling timely interventions and support services. These predictive systems consider factors such as attendance patterns, assignment submissions, and engagement metrics.</p>

      <h3>3. Research Acceleration</h3>
      <p>ML tools are revolutionizing academic research by automating literature reviews, hypothesis generation, and data analysis. Researchers can now process vast datasets and identify patterns that would be impossible to detect manually.</p>

      <h2>Implementation Challenges</h2>
      <p>Despite the promising applications, several challenges persist in ML implementation within academic settings, including data privacy concerns, ethical considerations, and the need for specialized technical expertise.</p>

      <h2>Future Directions</h2>
      <p>The future of ML in academia looks promising, with emerging technologies like natural language processing and computer vision opening new possibilities for educational innovation and research advancement.</p>

      <h2>Conclusion</h2>
      <p>Machine learning represents a paradigm shift in how academic institutions operate and deliver education. As these technologies continue to evolve, we can expect even more sophisticated applications that will further transform the academic landscape.</p>
    `,
    keywords: ['Machine Learning', 'Education Technology', 'Academic Research', 'Predictive Analytics'],
    references: [
      'Smith, J. (2023). "AI in Higher Education: A Comprehensive Review"',
      'Johnson, M. et al. (2024). "Personalized Learning Through Machine Learning"',
      'Brown, K. (2023). "Predictive Analytics in Student Success Programs"'
    ]
  },
  'ml-ir-spectroscopy': {
    title: 'Analysis of ML Techniques in IR Spectroscopy',
    authors: 'Will M',
    year: '2024',
    category: 'Spectroscopy',
    readTime: '15 min read',
    abstract: 'An in-depth analysis of machine learning approaches applied to infrared spectroscopy data interpretation. This research compares various ML algorithms for molecular identification, functional group prediction, and spectral pattern recognition, providing insights into the most effective techniques for automated spectroscopic analysis.',
    content: `
      <h2>Abstract</h2>
      <p>Infrared (IR) spectroscopy combined with machine learning represents a powerful analytical approach for molecular characterization. This study evaluates the performance of various ML algorithms in interpreting IR spectral data for automated molecular identification and functional group analysis.</p>

      <h2>Introduction</h2>
      <p>Traditional IR spectroscopy interpretation relies heavily on expert knowledge and manual analysis. The integration of machine learning techniques offers the potential to automate and enhance the accuracy of spectroscopic analysis while reducing analysis time and human error.</p>

      <h2>Methodology</h2>
      <h3>Data Collection</h3>
      <p>We utilized the NIST IR spectral database containing over 200,000 high-quality IR spectra of organic and inorganic compounds. The dataset was preprocessed to normalize spectra and remove noise artifacts.</p>

      <h3>Machine Learning Models</h3>
      <p>Several ML algorithms were evaluated, including:</p>
      <ul>
        <li>Support Vector Machines (SVM)</li>
        <li>Random Forest Classifiers</li>
        <li>Neural Networks (CNN and RNN architectures)</li>
        <li>Gradient Boosting Methods</li>
      </ul>

      <h2>Results and Analysis</h2>
      <h3>Molecular Identification Accuracy</h3>
      <p>Convolutional Neural Networks achieved the highest accuracy (94.7%) for molecular identification tasks, followed by Random Forest classifiers (91.2%). The CNN's ability to capture spectral features and patterns proved particularly effective for complex molecular structures.</p>

      <h3>Functional Group Prediction</h3>
      <p>For functional group identification, ensemble methods combining multiple algorithms showed superior performance, achieving 96.3% accuracy for common functional groups such as hydroxyl, carbonyl, and amine groups.</p>

      <h2>Applications and Implications</h2>
      <p>The developed ML models have significant applications in pharmaceutical analysis, environmental monitoring, and quality control in chemical manufacturing. The automated analysis reduces interpretation time from hours to minutes while maintaining high accuracy.</p>

      <h2>Conclusion</h2>
      <p>Machine learning techniques, particularly deep learning approaches, demonstrate exceptional potential for automated IR spectroscopy analysis. The integration of these methods into analytical workflows can significantly enhance the efficiency and reliability of molecular characterization processes.</p>
    `,
    keywords: ['IR Spectroscopy', 'Machine Learning', 'Molecular Identification', 'Neural Networks', 'NIST Database'],
    references: [
      'Wilson, R. et al. (2023). "Deep Learning for Spectroscopic Analysis"',
      'Davis, L. (2024). "NIST IR Database Applications in ML"',
      'Thompson, A. (2023). "Automated Functional Group Recognition"'
    ]
  },
  'qr2-code': {
    title: 'QR2 Code',
    authors: 'Will M',
    year: '2024',
    category: 'Computer Science',
    readTime: '10 min read',
    abstract: 'A comprehensive study on next-generation QR code technology, introducing enhanced encoding methods and improved error correction capabilities. This paper presents novel algorithms for data compression, security enhancements, and advanced scanning techniques that significantly improve traditional QR code limitations.',
    content: `
      <h2>Abstract</h2>
      <p>QR codes have become ubiquitous in modern digital communication, but traditional implementations face limitations in data capacity, error correction, and security. This paper introduces QR2 Code, a next-generation QR code system that addresses these limitations through innovative encoding algorithms and enhanced error correction mechanisms.</p>

      <h2>Introduction</h2>
      <p>The widespread adoption of QR codes in applications ranging from payments to contact tracing has highlighted both their utility and limitations. Current QR code standards, while effective, struggle with data density constraints and vulnerability to damage or tampering.</p>

      <h2>QR2 Code Architecture</h2>
      <h3>Enhanced Data Encoding</h3>
      <p>The QR2 Code system introduces a hierarchical encoding scheme that increases data density by 40% compared to traditional QR codes. This is achieved through:</p>
      <ul>
        <li>Multi-level data compression algorithms</li>
        <li>Context-aware encoding optimization</li>
        <li>Dynamic symbol size adjustment</li>
      </ul>

      <h3>Advanced Error Correction</h3>
      <p>QR2 implements a novel error correction system based on Reed-Solomon codes enhanced with machine learning-assisted error prediction. This approach provides:</p>
      <ul>
        <li>30% better error recovery rates</li>
        <li>Adaptive correction based on environmental conditions</li>
        <li>Real-time quality assessment during scanning</li>
      </ul>

      <h2>Security Enhancements</h2>
      <h3>Cryptographic Integration</h3>
      <p>QR2 codes incorporate lightweight cryptographic features, including digital signatures and data integrity verification, making them suitable for secure applications such as digital certificates and authenticated transactions.</p>

      <h3>Anti-Tampering Mechanisms</h3>
      <p>The system includes built-in tamper detection through distributed checksums and visual authenticity markers that are difficult to replicate without proper authorization.</p>

      <h2>Scanning Technology</h2>
      <p>QR2 codes are optimized for modern smartphone cameras and computer vision systems, supporting:</p>
      <ul>
        <li>Multi-angle scanning (up to 45-degree tilt)</li>
        <li>Partial occlusion recovery</li>
        <li>Low-light condition optimization</li>
        <li>Motion blur compensation</li>
      </ul>

      <h2>Performance Evaluation</h2>
      <p>Extensive testing demonstrates that QR2 codes maintain compatibility with existing QR code readers while providing significant improvements in reliability and data capacity. Field trials show 99.7% successful scan rates under various environmental conditions.</p>

      <h2>Applications and Future Work</h2>
      <p>QR2 codes are particularly well-suited for applications requiring high data density and security, such as digital identity documents, secure payment systems, and IoT device configuration. Future research will focus on integration with emerging technologies like augmented reality and blockchain systems.</p>

      <h2>Conclusion</h2>
      <p>QR2 Code represents a significant advancement in 2D barcode technology, addressing key limitations of traditional QR codes while maintaining backward compatibility. The enhanced capabilities make QR2 suitable for next-generation applications requiring higher security and data capacity.</p>
    `,
    keywords: ['QR Codes', 'Data Encoding', 'Error Correction', 'Computer Vision', 'Cryptography'],
    references: [
      'Miller, S. (2023). "Advanced Error Correction in 2D Barcodes"',
      'Chen, W. et al. (2024). "Computer Vision for QR Code Recognition"',
      'Anderson, P. (2023). "Cryptographic Applications in QR Technology"'
    ]
  }
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PaperDetail({ params }: PageProps) {
  const { slug } = await params;
  const paper = papers[slug as keyof typeof papers];

  if (!paper) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link
          href="/publications"
          className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Publications
        </Link>
      </div>

      {/* Paper Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
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
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {paper.title}
        </h1>
        
        <p className="text-foreground/60 text-lg mb-6">
          By {paper.authors}
        </p>
        
        <div className="bg-background/50 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">Abstract</h3>
          <p className="text-foreground/80 leading-relaxed">
            {paper.abstract}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {paper.keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent text-white px-6 py-3 rounded-xl font-medium hover:bg-accent/90 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Download PDF
          </a>
          
          <a 
            href="javascript:window.print()"
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
            </svg>
            Print
          </a>
        </div>
      </div>

      {/* Paper Content */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
        <div 
          className="prose prose-lg max-w-none text-foreground/80"
          style={{
            '--tw-prose-headings': 'var(--foreground)',
            '--tw-prose-body': 'var(--foreground)',
            '--tw-prose-bold': 'var(--foreground)',
          } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: paper.content }}
        />
      </div>

      {/* References */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-foreground mb-6">References</h3>
        <ol className="space-y-2">
          {paper.references.map((ref, index) => (
            <li key={index} className="text-foreground/70">
              <span className="font-medium">[{index + 1}]</span> {ref}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(papers).map((slug) => ({
    slug: slug,
  }));
}