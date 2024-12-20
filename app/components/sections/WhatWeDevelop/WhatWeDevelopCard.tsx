import StrapiImage from "~/components/StrapiImage";

const WhatWeDevelopCard = ({ themeData, item }) => {
  return (
    <div className={`${themeData.cardBg} rounded-2xl p-8 col-span-12 md:col-span-6 items-start`}>
      { item.icon ?  <div className="mb-4 sm:ml-0">
        <StrapiImage
          image={item.icon}
          className="h-14 w-14"
          alt="icon"
        />
      </div>: null }
      <h3 className={`${themeData.textColorPrimary} yw-h3 mb-4`}>{item.title}</h3>
      <div className={`${themeData.textColorSecondary} yw-t2`}>{item.text}</div>
    </div>
  );
}

export default WhatWeDevelopCard;
