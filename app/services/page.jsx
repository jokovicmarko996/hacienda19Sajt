import React from "react";

/* ovde bi mogao diy varijantu da dodas, da se importuje kalendar i da se na zahtev posalje req za izradu pergole */
const page = () => {
  return (
    <section className="p-8">
   

      <div className="bg-black h-screen w-screen">
        <div>
          <p class="font-panchang text-5xl font-extralight">ExtraLight Text</p>
          <p class="font-panchang text-5xl font-light">Light Text</p>
          <p class="font-panchang text-5xl font-normal">Regular Text</p>
          <p class="font-panchang text-5xl font-medium">Medium Text</p>
          <p class="font-panchang text-5xl font-semibold">SemiBold Text</p>
        </div>
        {/* <!-- Your background container --> */}
        {/* <div class="">
          <h1
            class="text-transparent font-light text-5xl 
             [-webkit-text-stroke:1px_white] [text-stroke:1px_white]"
          >
            OUTLINED TEXT
          </h1>
        </div> */}

        <h1 className="text-transparent font-panchang font-semibold text-6xl [-webkit-text-stroke:1px_white] [text-stroke:1px_white]">
          OUTLINED TEXT
        </h1>
      </div>
    </section>
  );
};

export default page;
