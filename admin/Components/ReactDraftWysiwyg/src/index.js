import Control from "./Control";
import Preview from "./Preview";

if (typeof window !== "undefined") {
  window.ReactDraftWysiwyg = Control;
  window.ReactDraftWysiwygPreview = Preview;
}

export { ReactDraftWysiwyg, ReactDraftWysiwygPreview };
