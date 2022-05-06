import React from 'react';
import PropTypes from 'prop-types';
import {Li} from './Reviews.styled'
import {useReviews} from '../../hooks/useReviews'

function Reviews() {
  const reviews = useReviews();
  
  return (
    <div>
      {reviews &&
        reviews.map(review => (
          <Li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </Li>
        ))}
      {reviews.length === 0 && <p>We don't have any reviews</p>}
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
