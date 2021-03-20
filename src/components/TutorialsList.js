import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAll, removeTutorial } from '../actions/crud';
import { useForm } from '../hooks/useForm';


export const TutorialsList = () => {

  const dispatch = useDispatch();
  const {titulos} = useSelector(state => state.titulos)

  console.log(titulos)

  useEffect(() => {
    
    dispatch(getAll());

  }, [dispatch])

  const eliminar = (id) =>{
    dispatch(removeTutorial(id));
  }

/*     const [handleInputChange] = useForm({
        tutorials: [],
        currentTutorial: null,
        currentIndex:  -1,
        searchTitle: ""
    });
     */
    return (
        <div>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Published</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {titulos.map((e) =>
           (  
              <tr key={e.id}>  
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.description}</td>
                <td>{e.published ? 'yes' : 'no'
                  
                  }</td>
                <td><Link className="btn btn-info" to={"tutorials/" + e.id}>Edit</Link></td>
                <td><button onClick={()=> eliminar(e.id)} className="btn btn-danger">Delete</button></td>
              </tr>)
          )
          }
       
        </tbody>
      </table>
        </div>
    )
}
