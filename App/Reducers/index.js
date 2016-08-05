import { List,Map } from 'immutable'
import { combineReducers } from 'redux'
import { INCREMENT,
  DECREMENT,
  ADD_SCORE,
} from '../Actions'

const INIT_PLAYER_SCORE = {}

const score = (state=Map(INIT_PLAYER_SCORE), action) => {
  let points = state.get('points')
  switch (action.type) {
    case INCREMENT:
        state = state.update('points',points => points + action.payload.points)
        return state
      break
    case DECREMENT:
        state = state.update('points',points => points - action.payload.points)
        return state
      break
    default:
      return state
  }
}

const scores = ( state=List([]),action) =>{
  switch (action.type) {
    case ADD_SCORE:
        const newScore = {
          id:Math.random().toString(36).substr(2, 5),
          name: action.payload.name,
          points: 0
        }
        return state.push(Map(newScore))
      break
    case INCREMENT:
        return state.update(state.findIndex((s)=> s.get('id')===action.payload.id),
          (s)=> score(s,action))
      break
    case DECREMENT:
        return state.update(state.findIndex((s)=> s.get('id')===action.payload.id),
          (s)=> score(s,action))
      break
    default:
      return state
  }
}
export default combineReducers( {score,scores} )
