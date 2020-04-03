import React from 'react';

export default function CharacterStarships({starships}) {
  if (starships.length === 0) { return <div></div> }
  
  return (
    <div className='startship-details'>
      <h5>Starships</h5>
      <div className='startship-list'>
        {starships.map((s, i) => (
          <div key={i} className='starship'>
            <h6>{s.name}</h6>

            <div className='detail'>
              <span>model: </span>
              <span>{s.model}</span>
            </div>

            <div className='detail'>
              <span>Manufacturer: </span>
              <span>{s.manufacturer}</span>
            </div>

            <div className='detail'>
              <span>Cost in Credits: </span>
              <span>{s.cost_in_credits}</span>
            </div>

            <div className='detail'>
              <span>Length: </span>
              <span>{s.length}</span>
            </div>

            <div className='detail'>
              <span>Max Speed: </span>
              <span>{s.max_atmosphering_speed}</span>
            </div>

            <div className='detail'>
              <span>Crew: </span>
              <span>{s.crew}</span>
            </div>

            <div className='detail'>
              <span>Cargo Capacity: </span>
              <span>{s.cargo_capacity}</span>
            </div>

            <div className='detail'>
              <span>Hyperdrive Rating: </span>
              <span>{s.hyperdrive_rating}</span>
            </div>

            <div className='detail'>
              <span>Starship Class: </span>
              <span>{s.starship_class}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}