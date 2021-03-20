import React from 'react'
import { useDispatch } from 'react-redux';
import { createTutorial, getById } from '../actions/crud';
import { useForm } from '../hooks/useForm';

export const AddTutorial = () => {

    const dispatch = useDispatch();
    
    const [formValues,handleInputChange] = useForm({
        title: '',
        description: '',
    })

    const {title, description} = formValues;

    const handleSubmit= (e) => {
        e.preventDefault();
        const tutorial = {
            title: title,
            description: description
        }
        dispatch(createTutorial(tutorial));
        
    }


    return (
        <div>
            <div className="mt-5">
            <h1>Tutorials Add</h1>
        <form onSubmit={handleSubmit} className="mt-5">
            <div className="form-group">
                <label for="formGroupExampleInput">Title</label>
                <input type="text" 
                className="form-control" 
                id="formGroupExampleInput"
                placeholder="write a title"
                name="title"
                onChange={handleInputChange}
                 />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Description</label>
                <input type="text"
                 className="form-control"
                 id="formGroupExampleInput2"
                 placeholder="write a description"
                 name="description"
                 onChange={handleInputChange}
                   />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-info"><i class="fas fa-address-book    "></i>Save</button>
            </div>
        </form>
        </div>
        </div>
    )
}
