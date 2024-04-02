import React from 'react'
import { MainNavigation } from '../components/MainNavigation'



export const ErrorPage = () => {
  return (
    <>
      <MainNavigation/>
      <main>
         <h1>An error ocurred!</h1>
         <p>Could not find a page!</p>
      </main>
    </>
  )
}
