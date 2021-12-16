import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCountryByName } from '../../Redux/Actions/countriesActions';
import { Button } from '../../StyledComponents/Button';
import { Wrapper } from '../../StyledComponents/Wrapper';

const Search = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [input, setInput] = useState("");

     const handleInput = (e) => {
          setInput(e.target.value)
          console.log(input)
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          navigate(`/home/country?name=${input}`);
          // e.target.search.select();
          setInput("");
          dispatch(getCountryByName(input));
     }

     return (
          <Wrapper flex="flex" width="fit-content">
               <form onSubmit={handleSubmit}>
                    <input name="search" type="text" value={input} placeholder='Search here...' onChange={handleInput}/>
                    <Button type="submit" margin="0 15px">Search</Button>
               </form>
          </Wrapper>
     )
}

export default Search