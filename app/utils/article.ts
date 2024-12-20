export const readingTime = (text: string) => {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
};

export const readableDate = (
  date: string,
  options = { year: "numeric", month: "long", day: "numeric" }
) => {
  return new Date(date).toLocaleDateString("en-US", options);
};
