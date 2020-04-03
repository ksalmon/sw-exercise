import React, { useState, useContext, useEffect } from 'react'
import {Context} from '../../state/store'
import axios from 'axios';

import Page from '../../components/ParentScene'
import CharacterCard from '../../components/CharacterCard'
import Loader from '../../components/molocules/loader'

export default function CharacterDashboard() {
  const [state, dispatch] = useContext(Context);
  const [page, setPage] = useState(1);
  const [fetching, setFetchState] = useState(false);


  function fetchPeople(pageset = 1) {
    console.log('fired')
    axios.get('https://swapi.co/api/people?page=' + pageset)
      .then(response => {
        dispatch({type: 'INDEX_PEOPLE', payload: response.data.results})
        setPage(page + 1)
        setFetchState(false)
      })
      .catch(error => {
        console.log(error)
      })
  };

  function handleScroll() {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var button = document.getElementById("loadButton")
    var height = d.offsetHeight;

    if ((offset >= height) && !fetching && button) {
      setFetchState(true)

      // HACK due to ReactRouter having some issues with hooks.
      // https://reactjs.org/warnings/invalid-hook-call-warning.html
      setTimeout(function(){ button.click() }, 1000);
    }
  };

  useEffect(() => {
    fetchPeople(page);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <div className="character-header">
        <h2>Character</h2>
        <h5>Encyclopedia</h5>
      </div>

      <div className="characters-list">
        {state.people.map((p, i) => (
          <CharacterCard key={i} index={i} person={p} />
        ))}
      </div>

      { fetching && (
        <Loader />
      )}
      
      <button id='loadButton' onClick={() => fetchPeople(page)}>Load More</button>
    </Page>
  )
}