import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../state/store'
import { apiCall } from '../../data/api'

import Page from '../../components/ParentScene'
import CharacterDetails from '../../components/CharacterDetails'
import CharacterHome from '../../components/CharacterHome'
import CharacterStarships from '../../components/CharacterStarships'

export default function CharacterShow(props) {
  const { id } = props.match.params
  const [state, dispatch] = useContext(Context);
  const [homeworld, setHomeworld] = useState({})
  const [starships, setStarships] = useState([])

  async function fetchPerson(personId = 1) {
    await apiCall('https://swapi.co/api/people/' + personId)
      .then(response => {
        dispatch({type: 'SET_PERSON', payload: response.data})
        fetchRelationships(response.data)
      }).catch(error => {
        const newError = error.response.data.detail || error.response.status
        dispatch({type: 'SET_ERRORS', payload: newError})
      })
  }

  function fetchRelationships(character) {
    fetchHomeworld(character)
    fetchStarships(character)
  }

  async function fetchHomeworld(character) {
    await apiCall(character.homeworld)
      .then(response => {
        setHomeworld(response.data)
      })
  }

  async function fetchStarships(character) {
    let starships = []
    let promises = []

    character.starships.forEach(url => {
      promises.push(apiCall(url))
    })

    await Promise.all(promises)
      .then(response => {
        response.forEach(s => {
          starships.push(s.data)
        })
      })

    setStarships(starships)
  }

  useEffect(() => {
    if (state.people.length > 0) {
      dispatch({type: 'SET_PERSON', payload: state.people[id - 1]})
      fetchRelationships(state.people[id - 1])
    } else {
      fetchPerson(id)
    }

    return () => {
      dispatch({type: 'SET_PERSON', payload: null})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const { selectedPerson } = state

  if (!selectedPerson) { return (<Page></Page>) }

  return (
    <Page>
      <div className="character-header">
        <h2>{selectedPerson.name}</h2>
        <h5>Character Bio</h5>
      </div>

      <CharacterDetails character={selectedPerson}/>
      <CharacterHome homeworld={homeworld}/>
      <CharacterStarships starships={starships}/>
    </Page>
  )
}
