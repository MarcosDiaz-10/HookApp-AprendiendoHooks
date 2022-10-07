import { useEffect } from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";


export const MultipleCustomHooks = () => {
  
   const { counter, increment, decrement, reset } = useCounter( 1 );
  

    

    const { data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

                              //Si la data tiene un valor, entonces que agarre la posicion 0
    const { author, quote } = !!data && data[0];


  return (

    <>

        <h1>Breaking Bad Quotes</h1>
        <hr />

   
        {
          isLoading 
              ? <LoadingQuote/> 
              : <Quote quote={ quote } author={ author} /> 
        }


          <button 
          className="btn btn-primary "
          disabled={counter === 1 || isLoading === true }
          onClick={ () => decrement() }
          >
              Prev quote
          </button>

          <button 
          className="btn btn-primary ml-1"
          disabled={isLoading}
          onClick={ reset }
          >
              First quote
          </button>

          <button 
          className="btn btn-primary ml-1"
          disabled={isLoading}
          onClick={ () => increment() }
          >
              Next quote
          </button>
              
            </>
    
  )
}
