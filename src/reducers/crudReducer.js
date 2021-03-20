import { types } from "../types/types";


const initialState = {
    titulos: [],
}

export const crudReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.getAll:
            return {
                ...state,
                titulos : [...action.payload]
            }

        case types.create:
            return {
                ...state,
                titulos:[...state.titulos, action.payload ]
            }
        
        case types.update:
            return {
                ...state,
                titulos : state.titulos.map(
                    titulo => titulo.id === action.payload.id
                        ? action.payload
                        : titulo
                )
            }
        
        case types.remove:
            return {
                ...state,
                titulos: state.titulos.filter(
                    titulo => titulo.id !== action.payload
                    
                )
                
            }
        
      
                
    
        default:
            return state;
    }

}
