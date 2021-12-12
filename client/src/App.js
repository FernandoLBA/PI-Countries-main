import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "./Redux/Actions/countriesActions";
import { Route, Routes } from "react-router";
import Landing from "./Components/Landing/Landing"

function App() {
  const dispatch = useDispatch();
  // const countries = useSelector(state => state.countriesReducer.countries)

  useEffect(() => {
    dispatch(getCountries());
  });
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />}/>
      </Routes>
    </div>
  );
}

export default App;
