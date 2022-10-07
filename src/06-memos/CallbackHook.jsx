import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      ( incremetValue = 1  ) => {
        setCounter( (value) => value + incremetValue )
      },
      [],
    )
    
    //   useEffect(() => {
    //     console.log( 'se esta ejecutando')

    //     incrementFather();

    //   }, [incrementFather])
      

   
    return (
  
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />


        <ShowIncrement increment={ incrementFather } />
    </>

  )
}
