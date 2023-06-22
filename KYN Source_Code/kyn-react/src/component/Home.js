import React from "react";
import { hero1 } from "../../assets";
import SearchForm from "../../components/form/SearchForm";

const Home = () => {
  return (
    <section className="grid md:grid-cols-2 mt-10 h-max">
      <div className="flex flex-col justify-center mr-0 md:mr-8">
        <h2 className="font-extrabold text-3xl text-black md:text-4xl font-inter">
          Welcome to
        </h2>
        <h2 className="font-extrabold text-3xl text-black md:text-4xl font-inter">
          Know Your Neighborhood
        </h2>
        <p className="max-w-[550px] text-gray-600 font-medium mt-1">
          Our website is a comprehensive resource hub for the neighborhood,
          offering a wealth of information ranging from local businesses to
          essential phone numbers and helpful resources catered to residents.
        </p>
        <div className="flex my-5 max-w-[550px]">

          <SearchForm />
        </div>
      </div>
      <img
        src={hero1}
        alt=""
        className="rounded-3xl lg:-[150px] lg:rounded-tl-[50px] lg:rounded-br-[50px] shadow-lg 
        cursor-pointer brightness-95 hover:brightness-90 transition duration-150"
      />
    </section>


  );
};

export default Home;