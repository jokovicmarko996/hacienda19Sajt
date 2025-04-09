import React from "react";

const ProbaFontova = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center h-screen w-screen">
      <p className="font-panchang text-5xl font-extralight text-white">
        ExtraLight Text
      </p>
      <p className="font-panchang text-5xl font-light text-white">Light Text</p>
      <p className="font-panchang text-5xl font-normal text-white">
        Regular Text
      </p>
      <p className="font-panchang text-5xl font-medium text-white">
        Medium Text
      </p>
      <p className="font-panchang text-5xl font-semibold text-white">
        SemiBold Text
      </p>
    </div>
  );
};

export default ProbaFontova;
