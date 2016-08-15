import {FETCH_WEATHER} from '../actions/index.js';

export default function(state = [], action) {
    if (action.type === FETCH_WEATHER) {
        return [
            action.payload.data,
            ...state
        ];
    }
    return state;
}