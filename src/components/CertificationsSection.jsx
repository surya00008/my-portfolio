import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Blockchain Deep Dive",
    issuer: "Binance",
    year: "2025",
    link: "https://academy.binance.com/en/courses/certificate/17e0d0c9f6e386fafb3cf0e9012a7c808755d3b1e495a4946c1394d036c6d029",
  },
  {
    title: "Google Cybersecurity Specialization",
    issuer: "Google",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/J627TETUUKIV",
  },
  {
    title: "Microsoft Cybersecurity Analyst Specialization",
    issuer: "Microsoft",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/VYY2QJJ5WKCK",
  },
  {
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/records/6MH4GB2Y3RQ1",
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/records/8BSYDFJEUKHU",
  },
  {
    title: "What is Financial Accounting?",
    issuer: "University of California, Irvine",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/records/VJKQM5SB2HUE",
  },
];

export const CertificationsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-xs card-hover flex items-start gap-4"
            >
              {/* Icon */}
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{cert.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.year}
                </p>

                {cert.link && cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-sm text-primary hover:underline"
                  >
                    View Credential <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};