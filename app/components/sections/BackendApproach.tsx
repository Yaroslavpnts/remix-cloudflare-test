const BackendApproach = ({
  title,
  text,
  section_navigation_name,
  dataSectionName,
}: any) => (
  <section
    data-sectionid={section_navigation_name}
    className="py-20"
    data-section-name={dataSectionName}
  >
    <div className="container">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4 yw-h2">
          <h2 className="yw-h2 sticky top-48 leading-none col-span-12 md:col-span-4 text-[#313339]">
            {title}
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 yw-t1">{text}</div>
      </div>
    </div>
  </section>
);

export default BackendApproach;
