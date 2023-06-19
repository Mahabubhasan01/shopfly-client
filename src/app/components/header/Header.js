import React from "react";
/* https://i.ibb.co/zf4xv7X/dan-gold-4-jh-DO54-BYg-unsplash-1.jpg
https://i.ibb.co/tskc38v/elaine-casap-qg-HGDbb-SNm8-unsplash.jpg*/
const Header = () => {
  return (
    <div>
      <div class="lg:w-4/5 mx-auto">
        <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
          <img
            alt="gallery"
            class="w-full object-cover h-full object-center block  absolute inset-0"
            src="https://i.ibb.co/zf4xv7X/dan-gold-4-jh-DO54-BYg-unsplash-1.jpg"
          />
          <div class="text-center relative z-10 w-full">
            <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
              Shooting Stars
            </h2>
            <p class="leading-relaxed">
              Skateboard +1 mustache fixie paleo lumbersexual.
            </p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="px-2 w-1/2">
            <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block  absolute inset-0"
                src="https://i.ibb.co/ZG9WvWV/18-ba24dbe5-edaf-4e10-bd41-3a592dbc127b-590-X668-crop-center.webp"
              />
              <div class="text-center relative z-10 w-full">
                <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed">
                  Skateboard +1 mustache fixie paleo lumbersexual.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="px-2 w-1/2">
            <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block  absolute inset-0"
                src="https://i.ibb.co/ZG9WvWV/18-ba24dbe5-edaf-4e10-bd41-3a592dbc127b-590-X668-crop-center.webp"
              />
              <div class="text-center relative z-10 w-full">
                <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed">
                  Skateboard +1 mustache fixie paleo lumbersexual.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
