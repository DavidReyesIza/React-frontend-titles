import React from 'react'
import { useSelector } from 'react-redux'

export const Test = () => {

    const {titulos} = useSelector(state => state.titulos)

    console.log(titulos)

    return (
        <div>
            <h1>Test</h1>
            {
                titulos.map(tutorial => (
                    <p>{tutorial.title}</p>
                ))
            } 
        </div>
    )
}
