import { useEffect } from "react";
import { site } from "@/site";

const pdfUrl = `${import.meta.env.BASE_URL}cv.pdf`;

export const Resume = () => {
  useEffect(() => {
    document.title = `Resume | ${site.name}`;
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Resume</h1>
          <p className="text-muted">Education, research, projects, and experience.</p>
        </div>
        <div className="flex gap-3">
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Open PDF
          </a>
          <a href={pdfUrl} download="Chinmay_Sharma_Resume.pdf" className="btn-primary">
            Download
          </a>
        </div>
      </div>

      <object
        data={pdfUrl}
        type="application/pdf"
        aria-label="Resume PDF"
        className="w-full h-[85vh] min-h-[520px] rounded-xl border border-border bg-surface"
      >
        <div className="h-full flex flex-col items-center justify-center gap-3 p-8 text-center">
          <p className="text-muted">Your browser can't show the PDF inline.</p>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="link">
            Open the resume &rarr;
          </a>
        </div>
      </object>
    </div>
  );
};
