import React from 'react';

export default function CharacterDetails({character}) {
  return (
    <div className='character-details'>
      <h5>Details</h5>
      <div className='character-details-list'>
        <div className='detail'>
          <span>Height: </span>
          <span>{character.height}''</span>
        </div>

        <div className='detail'>
          <span>Hair Color: </span>
          <span>{character.hair_color}</span>
        </div>

        <div className='detail'>
          <span>Skin Color: </span>
          <span>{character.skin_color}</span>
        </div>

        <div className='detail'>
          <span>Eye Color: </span>
          <span>{character.eye_color}</span>
        </div>

        <div className='detail'>
          <span>Birth Year: </span>
          <span>{character.birth_year}</span>
        </div>

        <div className='detail'>
          <span>gender: </span>
          <span>{character.gender}</span>
        </div>
      </div>
    </div>
  )
}