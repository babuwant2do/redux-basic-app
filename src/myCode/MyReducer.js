import {INCREMENT, CHANGE_POLAR} from './MyAction'

const initState = {number:0}

function numberReducer(state = initState, action) {
    switch (action.type) {
      case INCREMENT:
        return Object.assign({}, state, {  number:Number(state.number) + Number(action.incrementBy)})

      case CHANGE_POLAR:
      return Object.assign({}, state, { number:Number(state.number) * -1 })

      default:
        return state
    }
  }
  export default numberReducer;