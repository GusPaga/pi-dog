import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../redux/action";
import style from "./SearchBar.module.css";

export default function SearchBar({ setPage }) {
  const dispatch = useDispatch();

  // STATE FOR COMPONENT SEARCHBAR //
  const [name, setName] = useState("");

  // FUNCTION TO CATCH A INPUT CHANGE //
  function handleImputChange(e) {
    setName(e.target.value);
    //console.log(name);
  }

  // FUNCTION TO SUBMIT THE VALUE OF INPUT //
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      alert("Please, write a valid name!");
      return;
    }
    dispatch(searchByName(name));
    setPage(1);
    setName("");
  }

  return (
    <div className={style.search}>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        SEARCH
      </button>
      <input
        value={name}
        type="text"
        placeholder="Write a Breed and push search!"
        onChange={(e) => handleImputChange(e)}
      />
    </div>
  );
}
