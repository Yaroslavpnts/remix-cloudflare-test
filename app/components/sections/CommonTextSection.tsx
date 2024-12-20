const CommonTextSection = ({ body }: { body: string }) => {
  return (
    <section className="py-8 md:py-20 container">
      <div
        className="prose text-lg !max-w-[700px]"
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </section>
  );
};

export default CommonTextSection;
