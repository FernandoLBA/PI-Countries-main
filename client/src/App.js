import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getContinents,
  getCountries,
  loadCountries,
} from "./Redux/Actions/countriesActions";
import { getActivities } from "./Redux/Actions/activitiesActions";
import { Route, Routes } from "react-router";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import Create from "./Components/Create/Create";

function App() {
  const dispatch = useDispatch();

  const getter = async () => {
    await dispatch(getCountries());
    dispatch(getContinents());
    dispatch(getActivities());
    dispatch(loadCountries());
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
        <Route
          path="/create"
          element={
            <>
              <Navbar />
              <Create />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
