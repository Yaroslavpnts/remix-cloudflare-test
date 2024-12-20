export const stripHTML = (html: string): string => {
  return html.replace(/(<([^>]+)>)/gi, "");
};
