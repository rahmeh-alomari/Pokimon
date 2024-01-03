import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import PokimonList from "./Compnents/PokimonList";
import Pagination from "./Compnents/Pagination";
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  useEffect(() => {
    let cancel;
    setLoading(true);

    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((response) => {
        setLoading(false);
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
        setPokemon(response.data.results.map((p) => p.name));
      })
      .catch((error) => console.log(error));
    return () => cancel();
  }, [currentPageUrl]);

  if (loading) return "Loading...";
  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }
  return (
    <div>
      <PokimonList pokemon={pokemon} />{" "}
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </div>
  );
}

export default App;
