import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDog, getTemp } from "../redux/action";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import style from "./Home.module.css";
import Paginated from "./Paginated";
import Logo from "./Logo";
import ButForm from "./ButForm";
import ButLand from "./ButLand";
import SearchBar from "./SearchBar";
import { Temp } from "./Temp";
import Order from "./Order";
import NoResult from "./NoResult";
import CreateFil from "./CreateFil";
import ClearBut from "./ClearBut";
import { apiOrOwn } from "../redux/action";
import { filterByTemp } from "../redux/action";
import Loader from "./Loader";

export default function Home() {
  const dispatch = useDispatch();
  const allDog = useSelector((state) => state.dog);
  const allTemp = useSelector((state) => state.temp);

  // LOAD ALL DOGS IN STATE //
  useEffect(() => {
    dispatch(getAllDog());
  }, [dispatch]);
  // console.log("allDog", allDog);

  useEffect(() => {
    dispatch(getTemp());
  }, [dispatch]);
  //console.log("allTemp", allTemp);

  const [origin, setOrigin] = useState();

  // FUNCTION TO SELECT THE ORIGIN OF DATA
  function originHandleSelect(value) {
    dispatch(apiOrOwn(value));
    setPage(1);
    setOrigin(value);
    setOrder(`Ordenado ${value}`);
  }

  // FUNCTION TO CLEAR ALL FILTERS IN HOME
  function clearHandleClick(e) {
    setPage(1);
    originHandleSelect("All");
    handleFilterByTemp("All");
    dispatch(getAllDog());
    dispatch(getTemp());
  }
  const [temp, setTemp] = useState();

  //FUNCTION TO FILTER BY TEMPERAMENTS
  function handleFilterByTemp(value) {
    dispatch(filterByTemp(value));
    setPage(1);
    setTemp(value);
  }

  // STATE FOR COMOPONENT PAGINATED //
  const [page, setPage] = useState(1);

  // STATE TO ALFABETIC ORDER
  const [, setOrder] = useState("");

  // FUNCTION PAGINATED
  const paginated = (number) => {
    setPage(number);
  };
  const cardsPerPage = 4;
  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentPage = allDog.slice(indexOfFirstCard, indexOfLastCard);

  const [loader, setLoader] = useState(true);
  if (allDog.length > 0 && loader) {
    setLoader(false);
  }
  if (loader) return <Loader />;

  return (
    <div>
      <div>
        <nav className={style.nav}>
          <div className={style.navLogo}>
            {/* COMPONENT LOGO */}
            <Logo />
          </div>

          <div>
            {/* COMPONENT PAGINATED */}
            <Paginated
              page={page}
              state={allDog}
              paginated={paginated}
              cardsPerPage={cardsPerPage}
            />
          </div>
          <div className={style.navButtons}>
            {/* COMPONENT BUTTON FORM */}
            <ButForm />

            {/* COMPONENT BUTTON LANDING */}
            <ButLand />
          </div>
        </nav>
      </div>

      {/* FILTERS */}
      <div className={style.filters}>
        <SearchBar setPage={setPage} />
        <Temp
          handleFilterByTemp={handleFilterByTemp}
          temp={temp}
          state={allTemp}
        />
        <Order setOrder={setOrder} setPage={setPage} />
        <CreateFil originHandleSelect={originHandleSelect} origin={origin} />
        <ClearBut clearHandleClick={clearHandleClick} />
      </div>

      {/* COMPONENT CARD */}
      <div className={currentPage.length ? style.cards : style.noresult}>
        {currentPage.length ? (
          currentPage?.map((e) => {
            return (
              <NavLink to={"/home/" + e.id} key={e.id} className={style.card}>
                <Card
                  className={style.card}
                  name={e.name}
                  image={e.image}
                  min_weight={e.min_weight}
                  max_weight={e.max_weight}
                  temperament={e.temperament}
                />
              </NavLink>
            );
          })
        ) : (
          <NoResult />
        )}
      </div>
    </div>
  );
}
