const TextSection = ({ title, html_ }: { title: string; html_: string }) => {
  return (
    <section className="py-8 md:py-20 lg:py-28">
      <div className="container grid grid-cols-12 gap-y-4">
        <div className="col-span-12 md:col-span-5 pr-8">
          <h2 className="yw-h2">{title}</h2>
        </div>

        <div className="col-span-12 md:col-span-7">
          <div
            className="prose yw-t1"
            dangerouslySetInnerHTML={{ __html: html_ }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
