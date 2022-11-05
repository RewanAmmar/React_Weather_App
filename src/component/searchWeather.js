import React, { useState, useEffect } from "react";
import sunny from "./../assets/sunny.jpg";
import { BiSearchAlt } from "react-icons/bi";
import {BsFillCloudFill} from "react-icons/bs"

const SearchWeather = () => {

  const [search, setSearch] = useState("london");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  let componentMounted = true;

  useEffect(()=>{
    const fetchWeather = async () =>{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4e254c5325c5715fa57c27456126ee8d`)

      if(componentMounted){
        setData(await response.json());
        console.log(data)
      }
      return ()=>{
        componentMounted = false;
      }
    }
    fetchWeather();
  },[])

  let temp =(data.main.temp - 273.15).toFixed(2);
  let temp_min =(data.main.temp_min - 273.15).toFixed(2)
  let temp_max =(data.main.temp_max - 273.15).toFixed(2)
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center border-0">
              <img className="card-img" src={sunny} alt="" />
              <div className="card-img-overlay">
                <form>                  
                  <div class="input-group mb-4 w-75 mx-auto">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search City"
                      aria-label="Search City"
                      aria-describedby="basic-addon2"
                    />
                    <button type="submit" className="input-group-text" id="basic-addon2">
                    <BiSearchAlt />
                    </button>
                  </div>
                </form>
                <div className="bg-dark bg-opacity-50 py-3">
                <h2 className="card-title">{data.name}</h2>
                <p className="card-text lead">
                  Friday, November 4, 2022
                </p>
                <hr />
                <BsFillCloudFill size={30}/>
                <h1 className="fw-border mb-5">{temp} &deg;c</h1>
                <p className="lead fw-border mb-0"></p>
                <p className="lead">{temp_min} &deg;c | {temp_max} &deg;c</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
