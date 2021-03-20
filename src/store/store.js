import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { crudReducer } from '../reducers/crudReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({

    titulos: crudReducer

   

});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );