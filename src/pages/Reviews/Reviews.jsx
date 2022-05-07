import React from 'react';
import {Li} from './Reviews.styled'
import {useReviews} from '../../hooks/useReviews'

function Reviews() {
  const reviews = useReviews();
  
  return (
    <div>
      {reviews &&
        reviews.map(({id, author, content}) => (
          <Li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </Li>
        ))}
      {reviews.length === 0 && <p>We don't have any reviews</p>}
    </div>
  );
}

export default Reviews;
