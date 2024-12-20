
const Pagination = ({ nextLink, prevLink }) => {
  return (
    <>
      {prevLink && (
        <div className="flex items-center cursor-pointer mr-auto">
          <a href={prevLink} className="yw-button-small flex items-center">
            <img
              loading="lazy"
              alt="arrow left"
              src="/icons/arrow-black.svg"
              className="ltr:mr-2 rtl:ml-2 inline"
            />
            Newer
          </a>
        </div>
      )}

      {nextLink && (
        <div className="flex items-center cursor-pointer ml-auto">
          <a href={nextLink} className="yw-button-small flex items-center">
            Older
            <img
              loading="lazy"
              alt="arrow right"
              src="/icons/arrow-black.svg"
              className="ltr:ml-2 rtl:mr-2 inline rotate-180"
              width="16px"
              height="16px"
            />
          </a>
        </div>
      )}
    </>
  );
};

export default Pagination;
