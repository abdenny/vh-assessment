import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import GridCard from './GridCard.component';
import Heading from './Heading.component';

const SavedEvents = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  //Method called in useEffect and deletePost. Fetches all events from API, and creates an array of cards to populate page.
  let fetchPosts = () => {
    fetch('http://localhost:3001/api/weather-events')
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
    fetch('http://localhost:3001/services/delete-weather-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    }).then((response) => {
      fetchPosts();
    });
  };
  return (
    <>
      <Container>
        <Heading subtitle={'View Posts'} />
        <Row>{posts}</Row>
      </Container>
    </>
  );
};

export default SavedEvents;
