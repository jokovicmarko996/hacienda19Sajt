import React from "react";
// import GSAPReactLearning from "../_components/GSAPReactLearning";

/* ovde bi mogao diy varijantu da dodas, da se importuje kalendar i da se na zahtev posalje req za izradu pergole */
const page = () => {
  return (
    <section className="p-8">
      {/* <GSAPReactLearning /> */}

      <div className="bg-black h-screen w-screen">
        <div>
          <p class="font-panchang text-5xl font-extralight">ExtraLight Text</p>
          <p class="font-panchang text-5xl font-light">Light Text</p>
          <p class="font-panchang text-5xl font-normal">Regular Text</p>
          <p class="font-panchang text-5xl font-medium">Medium Text</p>
          <p class="font-panchang text-5xl font-semibold">SemiBold Text</p>
        </div>
      </div>
    </section>
  );
};

export default page;
