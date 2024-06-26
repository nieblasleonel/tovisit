import React from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import EventForm from '../components/EventForm'

export const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail');
  
  return (
     <EventForm method='patch' event={data.event}/>
  )
}
