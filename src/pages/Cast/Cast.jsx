import React from 'react';
import {useFetchCast} from '../../hooks/useFetchCast'


function Cast() {
 const actors = useFetchCast()
 
  return (
    <div>
      <ul>
        {actors &&
          actors.map(({id, name, profile_path, character}) => (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w400${profile_path}`} width='100px' alt="Actor" />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}


export default Cast;
