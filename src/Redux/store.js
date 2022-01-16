import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cardReducer from './Reducers/cardReducer';
import headerReducer from './Reducers/headerReducer';



const reducers = combineReducers({
    cardReducer: cardReducer,
    headerReducer: headerReducer,
});


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;








