"use client";
{
  /* <div class="container">
  <h1 class="text">
    TEXT EFFECT<span>WOAH</span>
  </h1>
  <h1 class="text">
    GSAP<span>AND CLIPPING</span>
  </h1>
  <h1 class="text">
    CRAZYYY<span>CRAZYYY</span>
  </h1>
  <h1 class="text">
    HOVER ON ME
    <span>
      <a href="https://stacksorted.com/text-effects/minh-pham" target="_blank">
        SOURCE
      </a>
    </span>
  </h1>
  <h1 class="text">
    LIKE THIS?
    <span>
      <a href="https://twitter.com/juxtopposed" target="_blank">
        LET'S CONNECT
      </a>
    </span>
  </h1>
</div>;

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #0D0D0D;
  margin: 10%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 200vh;
}

.text {
  font-size: 10vw;
  letter-spacing: -.01em;
  line-height: 100%;
  margin: 0;
  
  width: 100%;
  color: rgb(182, 182, 182, 0.2);
  background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;
  

  border-bottom: 1px solid #2F2B28;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}

span {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #4246ce;
  color: #0D0D0D;
  
  clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
  transform-origin: center;
  transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text:hover > span {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

a {
  text-decoration: none;
  color: inherit;
}

gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
}); */
}

// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const AboutPageTextAnimation = () => {
//   useEffect(() => {
//     const textElements = document.querySelectorAll(".text");

//     textElements.forEach((text) => {
//       gsap.to(text, {
//         backgroundSize: "100%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: text,
//           start: "center 80%",
//           end: "center 20%",
//           scrub: true,
//         },
//       });
//     });
//   }, []);

//   return (
//     <div className="container">
//       <h1 className="text">
//         TEXT EFFECT<span>WOAH</span>
//       </h1>
//       <h1 className="text">
//         GSAP<span>AND CLIPPING</span>
//       </h1>
//       <h1 className="text">
//         CRAZYYY<span>CRAZYYY</span>
//       </h1>
//       <h1 className="text">
//         HOVER ON ME
//         <span>
//           <a
//             href="https://stacksorted.com/text-effects/minh-pham"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             SOURCE
//           </a>
//         </span>
//       </h1>
//       <h1 className="text">
//         LIKE THIS?
//         <span>
//           <a
//             href="https://twitter.com/juxtopposed"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             LET'S CONNECT
//           </a>
//         </span>
//       </h1>
//     </div>
//   );
// };

// export default AboutPageTextAnimation;
