import React, { useState } from "react";
import Main from "./Main";
// import { process } from "process";
import "./style.css";
export default function Header() {
  const [datas, setdatas] = useState([]);
  const [temp, settemp] = useState("");
  const [img_link, setimg_link] = useState(
    "https://api-ninjas.com/images/dogs/golden_retriever.jpg"
  );
  const [name, setname] = useState("Golden Retriever");
  const [good_with_children, setgood_with_children] = useState(5);
  const [good_with_other_dog, setgood_with_other_dog] = useState(5);
  const [good_with_strangers, setgood_with_strangers] = useState(5);
  const [min_height, setmin_height] = useState(23);
  const [max_height, setmax_height] = useState(24);
  const [min_weight, setmin_weight] = useState(65);
  const [max_weight, setmax_weight] = useState(75);
  const [min_life, setmin_life] = useState(10);
  const [max_life, setmax_life] = useState(12);
  const [shedding, setshedding] = useState(4);

  const loaddata = async (event) => {
    event.preventDefault();
    // ---
    // Get the name of the dog from the input field.
    // Create a URL to fetch the dog's information from the API.
    const url = `https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=${temp}`;

    // Create a request object.
    const request = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1ae9d7c9d3msh17dd96620103f5bp12d556jsn848697c45d31",
        "X-RapidAPI-Host": "dogs-by-api-ninjas.p.rapidapi.com",
      },
    };
    // console.log(process.env.REACT_APP_MY_API);
    // Make the request and get the response.
    const response = await fetch(url, request);

    // Check if the response was successful.
    if (response.ok) {
      // The response was successful, so parse the JSON data.
      const data = await response.json();
      setdatas(data);
      console.log(data);
      if (data.length !== 0) {
        // Update the DOM with the dog's information.
        setimg_link(data[0].image_link);
        setname(data[0].name);
        setgood_with_children(data[0].good_with_children);
        setgood_with_other_dog(data[0].good_with_other_dogs);
        setgood_with_strangers(data[0].good_with_strangers);
        setshedding(data[0].shedding);
        setmin_height(data[0].min_height_male);
        setmax_height(data[0].max_height_male);
        setmin_weight(data[0].min_weight_male);
        setmax_weight(data[0].max_weight_male);
        setmin_life(data[0].min_life_expectancy);
        setmax_life(data[0].max_life_expectancy);
        // alert("found.");
      } else {
        alert("Sorry, the dog you are looking for was not found.");
      }
    } else {
      // The response was not successful, so log the error.
      console.error(response);
    }
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              Dogs Info
            </a>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="takename"
                onChange={(event) => settemp(event.target.value)}
              />
              <button
                className="btn btn-outline-success"
                // type="submit"
                id="submit"
                onClick={loaddata}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>

      <Main
        name={name}
        img_link={img_link}
        good_with_children={good_with_children}
        good_with_other_dog={good_with_other_dog}
        good_with_strangers={good_with_strangers}
        shedding={shedding}
        min_height={min_height}
        max_height={max_height}
        min_weight={min_weight}
        max_weight={max_weight}
        min_life={min_life}
        max_life={max_life}
      />
      {datas.slice(1).map((dog) => (
        <Main
          key={dog.name}
          name={dog.name}
          img_link={dog.image_link}
          good_with_children={dog.good_with_children}
          good_with_other_dog={dog.good_with_other_dog}
          good_with_strangers={dog.good_with_strangers}
          shedding={dog.shedding}
          min_height={dog.min_height_male}
          max_height={dog.max_height_male}
          min_weight={dog.min_weight_male}
          max_weight={dog.max_weight_male}
          min_life={dog.min_life_expectancy}
          max_life={dog.max_life_expectancy}
        />
      ))}
    </>
  );
}
