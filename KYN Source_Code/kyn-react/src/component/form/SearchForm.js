import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const ref = useRef();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const value = ref.current.value.trim();

    if (value === "") {
      return alert("Please enter valid value");
    }

    navigate(`/stores?search=${value}`);
    ref.current.value = "";
  };
  return (
    <form className="flex w-full max-w-[470px]" onSubmit={onSubmitHandler}>
      <input
        ref={ref}
        type="text"
        name="search "
        placeholder="Search store "
        className="px-3 py-2  rounded rounded-r-none w-full focus:outline-none text-primary bg-color2 "
        required
      />
      <button
        type="submit"
        className="flex items-center bg-primary rounded rounded-l-none text-xl px-3"
      >
        <i className="fa-solid fa-magnifying-glass text-color2 " />
      </button>
    </form>
  );
};

export default SearchForm;
