import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    const { counter, increment, reset, decrement} = useCounter(10);


  return (
    
    <>
        <h1>Counter with Hook: {counter}</h1>

        <hr />

        <button className="btn btn-primary" onClick={ () => increment() } >+1</button>
        <button className="btn btn-primary" onClick={ reset }>reset</button>
        <button className="btn btn-primary" onClick={ () => decrement() } >-1</button>

    </>

  )
}
