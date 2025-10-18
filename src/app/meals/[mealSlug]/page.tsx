import React from 'react'

interface Props {
    params: {
        mealSlug: string
    }
}

const MealDetailsPage : React.FC<Props> = ({params}) => {

    const {mealSlug} = params


  return (
   <div>
     <div> MealDetailsPage</div>
    <p>{mealSlug}</p>
   </div>
  )
}

export default MealDetailsPage