import PropTypes from 'prop-types'
import { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {
  
    const { description, onInputChange, onResetForm} = useForm({
        description:''
    })


    const onSubmit = ( event ) => {
        event.preventDefault();
        const clearDescriptionValue = description.trim();

        if (clearDescriptionValue.length <=1) return;

        const newTodo = {
            id: new Date().getTime() ,
            description: clearDescriptionValue,
            done: false,
        }
        
        onResetForm();
        onNewTodo( newTodo )
    }
    
    
        return (
        <form onSubmit={ onSubmit }> 
            <input 
            type="text"
            placeholder="¿Que hay que hacer?"
            className="form-control"
            name='description'
            value={ description }
            onChange={ onInputChange }
            />

            <button 
            type="submit"
            className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
        </form>
  )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}
