import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import GridCard from './GridCard.component';
import Heading from './Heading.component';

const SavedEvents = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, []);

  //Method called in useEffect and deletePost. Fetches all events from API, and creates an array of cards to populate page.
  let fetchPosts = () => {
    fetch(
      'http://ec2-3-134-91-231.us-east-2.compute.amazonaws.com/api/weather-events'
    )
      .then((response) => {
        return response.json();
      })
      .then((dbPosts) => {
        setPosts(
          dbPosts.map((post, index) => {
            return (
              <GridCard key={index} cardInfo={post} deletePost={deletePost} />
            );
          })
        );
      });
  };

  //Method passed to GridCard.js. Takes in the cards db ID, posts to server to delete. Calls fetchPosts to update the view.
  let deletePost = (id) => {
    fetch(
      'http://ec2-3-134-91-231.us-east-2.compute.amazonaws.com/services/delete-weather-event',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      }
    ).then((response) => {
      fetchPosts();
    });
  };
  return (
    <>
      <Container>
        <Heading subtitle={'Saved weather events'} />
        <Row style={{ marginBottom: '20px' }}>{posts}</Row>
      </Container>
    </>
  );
};

export default SavedEvents;
