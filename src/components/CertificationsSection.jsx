import { useEffect } from "react";
import { ArrowUpRight, Award } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const certifications = [
  {
    title: "Blockchain Deep Dive",
    issuer: "Binance Academy",
    year: "2025",
    link: "https://academy.binance.com/en/courses/certificate/17e0d0c9f6e386fafb3cf0e9012a7c808755d3b1e495a4946c1394d036c6d029",
    colorClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    hoverClass: "hover:shadow-[0_12px_35px_rgba(245,158,11,0.25)] hover:border-amber-500 hover:ring-2 hover:ring-amber-500/20",
  },
  {
    title: "Google Cybersecurity Specialization",
    issuer: "Google",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/J627TETUUKIV",
    colorClass: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    hoverClass: "hover:shadow-[0_12px_35px_rgba(59,130,246,0.25)] hover:border-blue-500 hover:ring-2 hover:ring-blue-500/20",
  },
  {
    title: "Microsoft Cybersecurity Analyst",
    issuer: "Microsoft",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/VYY2QJJ5WKCK",
    colorClass: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    hoverClass: "hover:shadow-[0_12px_35px_rgba(99,102,241,0.25)] hover:border-indigo-500 hover:ring-2 hover:ring-indigo-500/20",
  },
  {
    title: "Deep Learning & Neural Networks",
    issuer: "IBM",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/records/6MH4GB2Y3RQ1",
    colorClass: "text-sky-600 bg-sky-500/10 border-sky-500/20",
    hoverClass: "hover:shadow-[0_12px_35px_rgba(14,165,233,0.25)] hover:border-sky-500 hover:ring-2 hover:ring-sky-500/20",
  },
  {
    title: "Generative AI Prompt Engineering",
    issuer: "IBM",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/records/8BSYDFJEUKHU",
    colorClass: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    hoverClass: "hover:shadow-[0_12px_35px_rgba(168,85,247,0.25)] hover:border-purple-500 hover:ring-2 hover:ring-purple-500/20",
  },
  {
    title: "What is Financial Accounting?",
    issuer: "UC Irvine",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/records/VJKQM5SB2HUE",
    colorClass: "text-teal-500 bg-teal-500/10 border-teal-500/20",
    hoverClass: "hover:shadow-[0_12px_35px_rgba(20,184,166,0.25)] hover:border-teal-500 hover:ring-2 hover:ring-teal-500/20",
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
    <section
      id="certifications"
      className="py-24 px-6 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center space-y-3">
          <span className="text-[10px] font-bold tracking-widest uppercase text-primary/80">
            Validated Competence
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Professional Credentials
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm md:text-base">
            Formal specializations, industry certifications, and specialized courses validating my technical capabilities.
          </p>
        </div>

        {/* 3-Column balanced grid matching the custom Bento layout */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 group ${cert.hoverClass}`}
            >
              <div className="space-y-4 text-left">
                {/* Dynamic Styled Badge Header */}
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase border ${cert.colorClass}`}>
                    <Award size={10} />
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    {cert.year}
                  </span>
                </div>

                {/* Content block */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors min-h-[44px] flex items-center">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-start">
                {cert.link && cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest text-primary hover:text-primary/80 uppercase group/btn cursor-pointer"
                  >
                    View Credential{" "}
                    <ArrowUpRight
                      size={11}
                      className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
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