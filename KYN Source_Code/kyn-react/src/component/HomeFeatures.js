import React from "react";

const HomeFeatures = () => {
  return (
    <section className="grid md:grid-cols-3 mt-8 md:mt-14 gap-5 md:gap-10">
      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-black text-lg">
          Routing of Where ever in the neighbourhood
        </h2>
        <i className="fa-sharp fa-solid fa-location-dot text-5xl" />
        <p className="text-gray-500 text-[15px]">
          Access any desired location, explore, and establish contact within the neighborhood with just a single click.
        </p>
      </div>

      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-black text-lg">
          Introduce yourself to the neighbourhood
        </h2>
        <i className="fa-solid fa-user-group text-5xl" />
        <p className="text-gray-500 text-[15px]">
          Our portal provides a seamless way for newcomers to introduce themselves to the neighborhood,
          offering native portlets designed specifically to facilitate their integration.
        </p>
      </div>

      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-black text-lg">
          User inputed authentic content
        </h2>
        <i className="fa-solid fa-user-plus text-5xl" />
        <p className="text-gray-500 text-[15px]">
          The portal users contribute verified and genuine content and posts,
          reassuring others that they are on the right path to discovering a well-established
          living neighborhood that consistently delivers valuable and significant information.
        </p>
      </div>
    </section>
  );
};

export default HomeFeatures;
