import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import CrudProductoService from '../services/CrudProductoService';
import {updateTutorials} from '../actions/crud'

export const Tutorial = (props) => {
	const dispatch = useDispatch();

	const [ inputValues, handleInputChange, setValues ] = useForm({
		title: '',
		description: ''
	});

    

	const { title, description } = inputValues;
    //console.log(title)

	const getTutorial = (id) => {
        console.log(id)
		CrudProductoService.findById(id).then((resp) => {
			console.log(resp.data);
			setValues({
				title: resp.data.title,
				description: resp.data.description
			});
		});
	};

    const updateTutorial = (e) =>{

        e.preventDefault();
       //console.log(e)
      console.log(title,description)
      let tutorial = {
            title: title,
            description: description
        }
        dispatch(updateTutorials(props.match.params.id,tutorial)); 

    }

    
    
    //const memoProcesoPesado = useMemo(() =>)


	useEffect(() => {
		getTutorial(props.match.params.id);
        
	}, []);

	return (
		<div className="mt-5">
			<h1>Tutorials Edit/Add</h1>
			<form onSubmit={updateTutorial} className="mt-5">
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Title</label>
					<input type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="write a title"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                    
                        />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput2">Description</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput2"
						placeholder="write a description"
                        name="description"
                        value={description}
                        onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					{/* <button className="btn btn-info">Publish</button> */}
                    <button type="submit"  className="btn btn-info">Edit</button>
				</div>
			</form>
		</div>
	);
};
