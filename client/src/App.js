import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContinents, getCountries } from "./Redux/Actions/countriesActions";
import { Route, Routes } from "react-router";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";

function App() {
  const dispatch = useDispatch();

  const getter = async () => {
    await dispatch(getCountries());
    dispatch(getContinents());
  };

  useEffect(() => {
    getter();
  });

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/home/country/"
          element={
            <>
              <Navbar />
              <Detail />
            </>
          }
        />
        <Route
          path="/home/country/:id"
          element={
            <>
              <Navbar />
              <Detail />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
