import React, { useState, useContext, useEffect } from 'react'
import {Context} from '../../state/store'
import axios from 'axios';

import Page from '../../components/ParentScene'
import CharacterCard from '../../components/CharacterCard'
import Loader from '../../components/molocules/loader'

import useInfiniteScroll from "../../hooks/scroll"

export default function CharacterDashboard() {
  const [state, dispatch] = useContext(Context);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchPeople);
  const [page, setPage] = useState(1);

  function fetchPeople() {

    axios.get('https://swapi.co/api/people?page=' + page)
      .then(response => {
        dispatch({type: 'INDEX_PEOPLE', payload: response.data.results})
        setPage(page + 1)
        setIsFetching(false)
      })
      .catch(error => {
        console.log(error)
      })
  };

  useEffect(() => {
    if (state.people.length <= 0) {
      fetchPeople();
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

      { isFetching && (
        <Loader />
      )}
      
      <button id='loadButton' onClick={() => fetchPeople(page)}>Load More</button>
    </Page>
  )
}