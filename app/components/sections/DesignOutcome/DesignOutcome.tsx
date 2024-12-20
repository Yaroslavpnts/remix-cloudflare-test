const DesignOutcome = ({ dataSectionName }: { dataSectionName: string }) => {
  return (
    <section
      className="bg-yw-primary-default py-28"
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-10 lg:gap-10">
        <div className="col-span-12 grid grid-cols-1 gap-y-4">
          <h2 className="text-white yw-h2 md:w-4/5 lg:w-3/5 xl:w-1/2">
            Boost Customer Engagement With Splendid UX/UI Design
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <h3 className="text-white yw-h3 mb-4">Make your brand stand out</h3>
          <p className="text-yw-gray-300 yw-t1">
            The Internet is filled with tons of trashy websites that resemble
            one another. Needless to say that it is essential to grab the
            attention of an audience with a product that stands out from the
            rest. As a rule, users pick a particular product depending on the
            user experience it provides them with. Does a website have an
            intuitive layout? Does it meet the needs and expectations of the
            customers? Is it aesthetically pleasing? Is it one of a kind? An
            appealing UI design along with a high-quality UX for mobile and web
            applications are crucial if a company wants to establish a good
            brand’s name in the industry.
            <br />
            <br />
            Not only is good design alluring and engaging, but it also
            satisfying and motivating. The opportunities professional UX design
            services offer are countless. So, hurry up and take advantage of
            what UI/UX design can give with us!
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <h3 className="text-white yw-h3 mb-4">Make more money</h3>
          <p className="text-yw-gray-300 yw-t1 mb-10">
            It shouldn’t come out as a surprise to you that poor user experience
            often leads to a decline in revenue and the loss of customers. The
            websites and applications have to present users with high-level
            convenience of use, simplicity, and responsiveness in order to win
            their loyalty. When businesses choose efficient UI/UX design
            services, they make an investment in the future. A product that
            offers a top-notch user experience can make conversion rates higher
            and increase a company's income.
          </p>
          <h3 className="text-white yw-h3 mb-4">
            Opt for development flexibility
          </h3>
          <p className="text-yw-gray-300 yw-t1">
            Cutting-edge UX/UI design services assist companies with verifying
            business ideas, which is a money-saving approach in terms of
            software development. Digital prototypes enable business owners to
            check features before their implementation. Thanks to this a
            client-company can save money and time whilst getting a clear
            picture of which features a website or application needs and whine
            ones are useless.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignOutcome;
