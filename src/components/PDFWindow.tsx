'use client';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { Document, Page, pdfjs } from 'react-pdf';

const PDFWindow = (props: {
  pdf_path: string;
}) => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

  return (
    <Document
      file={props.pdf_path}
    >
      <Page pageNumber={1} width={1024} renderAnnotationLayer={false} />
    </Document>
  );
};

export { PDFWindow };
