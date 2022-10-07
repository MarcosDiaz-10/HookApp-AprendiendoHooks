import React from "react"; 

export const Small = React.memo(({ value }) => {

    console.log('me volvi a ejecutar')

  return (
   <small>{ value }</small>
  )
})
