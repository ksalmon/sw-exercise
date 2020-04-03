import React from 'react';
import { Link } from "react-router-dom";

export default function CharacterCard({index, person}) {

  return (
    <Link to={`/people/${index + 1}`} className='character-item'>
      <div>{person.name}</div>
      <div className='carot-right'></div>
    </Link>
  )
}