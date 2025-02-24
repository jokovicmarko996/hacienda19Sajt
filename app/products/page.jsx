import React from "react";
import BentoGrid from "../_components/BentoGrid";
import BentoGrid1 from "../_components/BentoGrid1";
import BentoGrid2 from "../_components/BentoGrid2";

// bento grid iz tailwinda
const page = () => {
  return (
    <div>
      Products page
      <BentoGrid />
      <BentoGrid1 />
      <BentoGrid2 />
    </div>
  );
};

export default page;
