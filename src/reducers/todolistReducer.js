<<<<<<< HEAD
import {
  ADD_TODO,
  TOGGLE_TODO,
  DOWNLOAD_INITIALTODOLIST,
  DOWNLOAD_INITIALTODOLIST_START,
  TODOLIST_FETCH_SUCCESS
} from '../actions/types';

const initialState = []

export default function todolistReducer(state = initialState, action) {
  // console.log("sono nel reducer: ", action)
  // console.log("value of ADD_TODO: ", ADD_TODO);
  switch(action.type) {
    case ADD_TODO:
      console.log("sono nel case giusto?")
=======
import {ADD_TODO, TOGGLE_TODO, DOWNLOAD_TODOLIST } from '../actions/types';

const initialState = [];

export default function todolistReducer(state = initialState, action) {
	switch(action.type) {
    case ADD_TODO:
>>>>>>> master
      return state.concat({
      	title: action.title,
        id: action.id,
        done: false
      })
    case TOGGLE_TODO:
      return state.map(todo => {
      	if (todo.id == action.id) {
        	return Object.assign({}, todo, {
          	done: !todo.done
          })
        }
        return todo
<<<<<<< HEAD
      }
      );
    case DOWNLOAD_INITIALTODOLIST:
      return action.payload
    case TODOLIST_FETCH_SUCCESS:
      return action.payload || {}
=======
      });
    case DOWNLOAD_TODOLIST:
      return action.payload || [];
>>>>>>> master
    default:
      return state;
  }
};
