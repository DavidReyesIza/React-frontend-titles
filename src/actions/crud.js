import CrudService from '../services/CrudProductoService';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const getAll = () => {
    return async(dispatch) => {


        try {
            CrudService.getAll()
            .then(resp => {
                console.log(resp.data);
                dispatch(TodosObtenidos(resp.data));
                    
            })
        } catch (error) {
            
        }
  }
}

export const getById = (id) =>{
    return async(dispatch) => {
        try {
            await CrudService.findById(id)
             .then(resp=>{
                 console.log(resp.data);
                 dispatch(getTutorialById(resp.data))
             })
        } catch (error) {
            
        }
    }
}

export const createTutorial = (tutorial) =>{
    return async(dispatch) => {
        try {
           await CrudService.create(tutorial)
            .then(resp => {
                console.log(resp.data);
                dispatch(createNewTutorial(resp.data))
                Swal.fire('Tutorial created!', 'Tutorial created suscessfully','success');
            })
            
        } catch (error) {
            
        }
    }
}

export const updateTutorials = (id,data) => {
    return async(dispatch) =>{
        try {
            console.log('Si llega',id,data)
            await CrudService.update(id,data)
             .then(resp =>{
                 console.log(resp.data);
                 dispatch(update(resp.data))
             })
        } catch (error) {
            
        }
    }
}

export const removeTutorial = (id)=> {
    return async(dispatch) =>{
        try {
            await CrudService.remove(id)
                .then(resp =>{
                    
                    dispatch(remove(id))
                })
        } catch (error) {
            
        }
    }
}
export const remove = (id) =>({
    type: types.remove,
    payload: id
})

export const update = (tutorial) => ({
    type: types.update,
    payload: tutorial
})

export const createNewTutorial = (tutorial) => ({
    type: types.create,
    payload: tutorial
})

export const getTutorialById = (tutorial) => ({
    type: types.findById,
    payload: tutorial
})

export const TodosObtenidos = (titulos) => ({
    type: types.getAll,
    payload: titulos
})