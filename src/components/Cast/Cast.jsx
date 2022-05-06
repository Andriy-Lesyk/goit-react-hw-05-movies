import React from 'react';
import PropTypes from 'prop-types';
import {useFetchCast} from '../../hooks/useFetchCast'


function Cast() {
 const actors = useFetchCast()

  return (
    <div>
      <ul>
        {actors &&
          actors.map(actor => (
            <li key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`} width='100px' alt="Actor" />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default Cast;
