import React from 'react';

export default function CharacterHome({homeworld}) {
  if (!homeworld.name) { return <div></div> }

  return (
    <div className='home-details'>
      <h5>Homeworld: {homeworld.name}</h5>
      <div className='home-details-list'>
        <div className='detail'>
          <span>Rotation Period: </span>
          <span>{homeworld.rotation_period}</span>
        </div>

        <div className='detail'>
          <span>Diameter: </span>
          <span>{homeworld.diameter}</span>
        </div>

        <div className='detail'>
          <span>Climate: </span>
          <span>{homeworld.climate}</span>
        </div>

        <div className='detail'>
          <span>Gravity: </span>
          <span>{homeworld.gravity}</span>
        </div>

        <div className='detail'>
          <span>Terrain: </span>
          <span>{homeworld.terrain}</span>
        </div>

        <div className='detail'>
          <span>Population: </span>
          <span>{homeworld.population}</span>
        </div>
      </div>
    </div>
  )
}