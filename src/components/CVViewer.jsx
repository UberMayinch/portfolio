import React from "react";
import { Viewer, Worker} from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export const CVViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  return (
    <section id="cv" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Resume</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          View or download my professional resume to learn more about my experience and qualifications.
        </p>
        
        <div className="h-[600px] border rounded shadow overflow-hidden bg-white">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/cv.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="/cv.pdf" 
            download
            className="cosmic-button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};