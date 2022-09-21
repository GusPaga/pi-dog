import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemp, dogCreator } from "../redux/action";
import ButHome from "./ButHome";
import ButLand from "./ButLand";
import Logo from "./Logo";
import style from "./Form.module.css";


// FUNCTION TO VALIDATE ALL INFO
function validate(input) {
  let errors = {};
  let validName = /^[A-Z]+$/i;
  let validFormat = /^[0-99]{1,2}-[0-99]{1,2}$/;
  let validImage = /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/;
  let validNumber = /^[0-99]{1,2}$/;
  if (!input.name) {
    errors.name = "Please, write a name!";
  } else if (!validName.test(input.name)) {
    errors.name = "Please, write e valid text!";
  } else if (!input.life) {
    errors.life = "Write a range of life!";
  } else if (!validFormat.test(input.life)) {
    errors.life = "Please, the correct format is 1-9";
  } else if (!input.image) {
    errors.image = "Insert a image!";
  } else if (!validImage.test(input.image)) {
    errors.image = "Please, insert a valid image!";
  } else if (!input.min_weight) {
    errors.min_weight = "Insert a min weight!";
  } else if (!validNumber.test(input.min_weight)) {
    errors.min_weight = "it is not a valid number!";
  } else if (!input.max_weight) {
    errors.max_weight = "Insert a max weight!";
  } else if (!validNumber.test(input.max_weight)) {
    errors.max_weight = "it is not a valid number!";
  } else if (!input.min_height) {
    errors.min_height = "Insert a min height!";
  } else if (!validNumber.test(input.min_height)) {
    errors.min_height = "it is not a valid number!";
  } else if (!input.max_height) {
    errors.max_height = "Insert a max height!";
  } else if (!validNumber.test(input.max_height)) {
    errors.max_height = "it is not a valid number!";
  } else if (!input.temperament) {
    errors.temperament = "Select one or more temperaments!";
  }
  //  else if (!input.min_weight < input.max_weight) {
  //   errors.max_weight = "max weight must be greater than min weight";
  // } else if (!input.min_height < input.max_height) {
  //   errors.max_height = "max height must be greater than min height";
  // }
  return errors;
}

// COMPONENT FORM
export default function Form() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.temp);
  const [errors, setErrors] = useState({});

  // FUNCTION TO CHARGE ALL TEMPERAMENT IN THE LIST
  useEffect(() => {
    dispatch(getTemp());
  }, [dispatch]);

  // FUNCTION TO FILTER AND SORT ARRAY //
  const filter = state.filter((e) => e.name !== "");
  const temp = filter.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });


  // STATE TO COLLETC THE INFORMATION //
  const [input, setInput] = useState({
    name: "",
    min_weight: "",
    max_weight: "",
    min_height: "",
    max_height: "",
    life: "",
    image: "",
    temperament: [],
  });

// FUNCTION TO CAPTUR AND VALIDAT THE DATA //
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log("input:", input);
    console.log("errors:", errors);
  }

  // FUNCTION TO CAPTURE THE TEMPERAMENT VALUES AND FILTER THE REPEATED ONES//
  function handleSelect(e) {
    const currentIndex = input.temperament.indexOf(e.target.value);
    if (currentIndex === -1 && e.target.value !== "") {
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
    }
  }

  // FUNCTION TO ERASE THE VALUES SELECT IN TEMPERAMENTS //
  function onClose() {
    setInput({
      ...input,
      temperament: [],
    });
  }

  //FUNCTION TO COLLECT AN VERIFY THE DATA PREVIUS TO SEND DB //
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !input.name ||
      !input.life ||
      !input.image ||
      !input.min_weight ||
      !input.max_weight ||
      !input.min_height ||
      !input.max_height ||
      !input.temperament ||
      Object.values(errors).filter((e) => e !== "").length > 0
    ) {
      alert("there are empty fields or with errors!!");
      return;
    }
    dispatch(dogCreator(input));
    setInput({
      name: "",
      min_weight: "",
      max_weight: "",
      min_height: "",
      max_height: "",
      life: "",
      image: "",
      temperament: [],
    });
    console.log("input", input);
    alert("Breed Created Successfully");
  }

  return (
    <div>
      {/* NAVBAR */}
      <nav className={style.nav}>
        <div className={style.navLogo}>
          <Logo />
        </div>
        <div className={style.navButtons}>
          <ButHome />
          <ButLand />
        </div>
      </nav>

      {/* FORM */}
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div className={style.title}>
            <h1>CREATE YOUR SELF DOG!</h1>
          </div>
          <div>
            <input
              className={style.input}
              type="text"
              name="name"
              placeholder="write a name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              className={style.input}
              type="text"
              name="life"
              placeholder="write time of life"
              value={input.life}
              onChange={(e) => handleChange(e)}
            />
            <input
              className={style.input}
              type="text"
              name="image"
              placeholder="insert a image"
              value={input.image}
              onChange={(e) => handleChange(e)}
            />
            <div className={style.short}>
              <input
                type="text"
                name="min_weight"
                placeholder="write a min weight"
                value={input.min_weight}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                name="max_weight"
                placeholder="write a max weight"
                value={input.max_weight}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={style.short}>
              <input
                type="text"
                name="min_height"
                placeholder="write a min height"
                value={input.min_height}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                name="max_height"
                placeholder="write a max height"
                value={input.max_height}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* SELECTOR OF TEMPERAMENTS */}
            <div className={style.temper}>
              <select onChange={(e) => handleSelect(e)} name="temp">
                <option>Select Temperament</option>
                {temp?.map((e) => (
                  <option key={e.id}>{e.name}</option>
                ))}
              </select>
            </div>

            {/* FUNCTION TO RENDER ERRORS */}
            <div className={style.errors}>
              {errors.name && <p className="errors">{errors.name}</p>}
              {errors.life && <p className="errors">{errors.life}</p>}
              {errors.image && <p className="errors">{errors.image}</p>}
              {errors.min_weight && (
                <p className="errors">{errors.min_weight}</p>
              )}
              {errors.max_weight && (
                <p className="errors">{errors.max_weight}</p>
              )}
              {errors.min_height && (
                <p className="errors">{errors.min_height}</p>
              )}
              {errors.max_height && (
                <p className="errors">{errors.max_height}</p>
              )}
              {errors.temperament && (
                <p className="errors">{errors.temperament}</p>
              )}
            </div>
          </div>
        </div>

        {/* BUTTON CREATE */}
        <button className={style.button}>CREATE</button>

        {/* FUNCTION TO RENDER LIST OF TEMPERAMENTS AN ALSO RENDER BUTTON "CLEAR TEMP"  */}
        <ul>
          <li className={style.li}>
            {input.temperament.length > 0 &&
              input.temperament?.map((e, i) => (
                <p value={e} key={i}>
                  {e}
                </p>
              ))}
            {input.temperament.length > 0 && (
              <button className={style.button} onClick={(e) => onClose(e)}>
                CLEAR TEMP
              </button>
            )}
          </li>
        </ul>
      </form>
    </div>
  );
}
