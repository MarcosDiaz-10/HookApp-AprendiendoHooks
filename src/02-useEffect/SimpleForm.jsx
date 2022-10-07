import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Marcos',
        email: 'Marcos@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;

       setFormState({...formState, [ name ]: value });


    };

    useEffect(() => {
        // console.log('useEffect se llamo')
    }, []);

    useEffect(() => {
        // console.log('Se cambio el formState')
    }, [formState]);

    useEffect(() => {
        // console.log('Se cambio el email')
    }, [email]);

    

  return (
    <>
        <h1> SimpleForm</h1>
        <hr />

        <input type="text" className="form-control" placeholder="Username" name="username" value={ username } onChange={ onInputChange } /> 
        {
            username === 'Marcos2' && <Message/>
        }
        <input type="email" className="form-control mt-2" placeholder="itsAnEmail@gmail" name="email" value={ email } onChange={ onInputChange } /> 

    </>
  )
}
