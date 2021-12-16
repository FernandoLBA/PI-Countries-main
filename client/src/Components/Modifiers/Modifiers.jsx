import React from "react";
import Search from "../Search/Search";
import { Wrapper } from "../../StyledComponents/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinents,
  sortCountries,
} from "../../Redux/Actions/countriesActions";

/* 
*********FILTROS Y ORDENAMIENTOS*************
Debe filtar por continents [done] y actividades []
Debe ordenar por orden alfabético [done] y por cantidad de población [done]
Debe tener un paginado [] 10 paises por página

Deben poder mezclarse los filtros y los ordenamientos []
*/

const Modifiers = () => {
  const continents = useSelector((state) => state.countriesReducer.continents);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    console.log(e.target.value);
    e.target.name === "continents"
      ? dispatch(filterByContinents(e.target.value))
      : console.log("activities");
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
        width="350px"
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
          <option value="bla">Bla</option>
        </select>
      </Wrapper>
    </Wrapper>
  );
};

export default Modifiers;
