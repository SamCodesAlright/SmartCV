declare module "pdfjs-dist/build/pdf.mjs" {
  export * from "pdfjs-dist";
  import * as pdfjs from "pdfjs-dist";
  export default pdfjs;
}

declare module "pdfjs-dist/build/pdf.worker.mjs?url" {
  const workerSrc: string;
  export default workerSrc;
}
