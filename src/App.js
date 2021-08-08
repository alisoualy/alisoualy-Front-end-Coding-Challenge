import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import {List, Pagination} from "./components/index";

function App() {

  const [todayDate, setTodayDate] = useState("");
  const [repos, setRepos] = useState(null);
  const [page, setPage] = useState(1);

   // this function for go to next page
   function nextPage() {
    setPage(page + 1);
  }

  // this function for go to prev page
  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function setDate() {
    const date = new Date();
    const day = date.getDate() - 1 < 10 ? `0${date.getDate() - 1}` :date.getDate() - 1 ;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    setTodayDate([year, month, day].join("-"));
  }
  console.log(todayDate, "date");


  
  useEffect(() => {
    setDate();
    // fetch data from github url
    todayDate &&
      axios
        .get(
          `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`
        )
        .then((result) => {
          const data = result.data.items;
          console.log(data, "data");
          setRepos(data);
        });
  }, [todayDate, page]);

  return (
    <div className="App">
      <Pagination
          next={nextPage}
          prev={prevPage}
          page={page}
        />
      <List repos={repos}/>
    </div>
  );
}

export default App;
