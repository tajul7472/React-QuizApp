import React from 'react'
import Answers from '../Answers'
import MiniPlayer from '../MiniPlayer'
import ProgressBar from '../ProgressBar'

const Quiz = () => {
  return (
   <>
   <h1>Pick three of your favourite Star Wars Films</h1>
   <h4>Questions can have multipule answars</h4>
   <Answers/>
   <ProgressBar/>
   <MiniPlayer/>
   
   </>
  )
}

export default Quiz