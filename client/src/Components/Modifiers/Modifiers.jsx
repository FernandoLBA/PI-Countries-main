import React from "react";
import Search from "../Search/Search";
import { Wrapper } from "../../StyledComponents/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByActivities,
  filterByContinents,
  sortCountries,
} from "../../Redux/Actions/countriesActions";

const Modifiers = () => {
  const continents = useSelector((state) => state.countriesReducer.continents);
  const activities = useSelector((state) => state.activitiesReducer.activities);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    e.target.name === "continents"
      ? dispatch(filterByContinents(e.target.value))
      : dispatch(filterByActivities(e.target.value));
  };

  const handleSort = (e) => {
    dispatch(sortCountries(e.target.value));
  };

  return (
    <Wrapper
      flex="flex"
      jContent="space-around"
      bground="#00000090"
      margin="0 50px"
      padding="20px"
      height="fit-content"
    >
      <Search />

      {/* Sort */}
      <Wrapper
        flex="flex"
        jContent="space-between"
        width="350px"
        bground="chocolate"
        padding="10px 15px"
        height="fit-content"
      >
        <label htmlFor="sort">Sort </label>
        <select name="alphabetic" id="sort" onChange={handleSort}>
          <option value="alphabetic">Alphabetic</option>
          <option value="ascendant">A-Z</option>
          <option value="descendant">Z-A</option>
        </select>

        <select name="population" onChange={handleSort}>
          <option value="sort">Population</option>
          <option value="major">Major to minor</option>
          <option value="minor">Minor to Major</option>
        </select>
      </Wrapper>

      <Wrapper
        flex="flex"
        jContent="space-between"
        width="380px"
        height="fit-content"
        padding="10px 15px"
        bground="chocolate"
      >
        {/* Filter Continents*/}
        <label htmlFor="continents">Filter</label>
        <select name="continents" id="continents" onChange={handleFilter}>
          <option value="continents">Continents</option>
          {continents.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Filter Activities*/}
        <select name="activities" id="activities" onChange={handleFilter}>
          <option value="activities">Activities</option>
          {activities.map((a) => (
            <option key={a.id} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
      </Wrapper>
    </Wrapper>
  );
};

export default Modifiers;
