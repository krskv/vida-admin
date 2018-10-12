import { combineReducers } from 'redux'

export const SIDEBAR_COLLAPSED = true;
export const SIDEBAR_FULL = false;

function counter(state = 0, action) {
  switch (action.state) {
    case ADD:
      return state + 1  
    case SUB:
    return state -1  
    default:
      return state
  }
}

const generalData = combineReducers({
  counter
})

export default generalData