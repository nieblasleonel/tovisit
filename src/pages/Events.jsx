import React, { Suspense } from 'react';
import { defer, json, useLoaderData, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';

export const EventsPage = () => {
  const data = useLoaderData();

  return(
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={data.events}>
      {(events) => { <EventsList events={events}/> }} 
    </Await>
  </Suspense>)
}

export const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
       throw json(
      {
        message: 'Could not fetch events.'
      },
      {
        status: 500,
      });
  } else {
    const respData = await response.json();
        return respData.events;
  }
}

export const loader = () => {
  return defer({
    events: loadEvents()
  })
} 
