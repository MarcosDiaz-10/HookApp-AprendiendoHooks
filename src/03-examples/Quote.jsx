import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ quote, author }) => {
   const pRef = useRef();
  const [boxsize, setBoxsize] = useState({ width: 0, height: 0});


    useLayoutEffect(() => {
      useState
      const { height, width } = pRef.current.getBoundingClientRect();

      setBoxsize( {height, width} );        

    }, [])


  return (

    <>
    
    <blockquote className="blockquote text-end" style={ { display: 'flex'} }>    
        <p ref={ pRef } className="mb-3">{ quote }</p>
        <footer className="blockquote-footer ">{ author}</footer>
    </blockquote>

    <code>{ JSON.stringify( boxsize )}</code>
    
    </>

  )
}
