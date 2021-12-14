import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "./Redux/Actions/countriesActions";
import { Route, Routes } from "react-router";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
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
      </Routes>
    </div>
  );
}

export default App;
