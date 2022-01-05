import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card, Col, Container } from "react-bootstrap";
import Rating from "react-rating";
import "../Reviews/Reviews.css";

const Reviews = ({review}) => {
 
  return (
    <Container>
         <Col>
      <Card className='m-3 p-4' style={{height:'500px'}}>
        <Card.Img style={{width:'200px', height:'200px', borderRadius:'50%'}} variant="top" className='mx-auto' src={review.userImg} />
        <Card.Body>
          <Card.Title>{review.userName}</Card.Title>
          <Card.Text>
            {review.userReview}
          </Card.Text>
          <Card.Text>
          <Rating
                  initialRating={review.userRating}
                  readonly
                  emptySymbol="far fa-star text-danger"
                  fullSymbol="fas fa-star text-danger"
                />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </Container>
  );
};

export default Reviews;
