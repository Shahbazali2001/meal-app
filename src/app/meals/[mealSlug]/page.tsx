import React from 'react'
// import { useParams } from 'next/navigation'

const MealDetailsPage = ({params}) => {

    const {mealSlug} = params


  return (
   <div>
     <div> MealDetailsPage</div>
    <p>{mealSlug}</p>
   </div>
  )
}

export default MealDetailsPage