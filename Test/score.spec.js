import { Map } from 'immutable'
import { expect } from 'chai'
import { createStore } from 'redux'

import { INCREMENT, DECREMENT } from '../App/Actions'
import reducer from '../App/Reducers'

describe("Score actions",()=>{
  it("should increment",()=>{
    const store = createStore(reducer)
    store.dispatch({type:INCREMENT,payload:{points:2}})
    let score = store.getState().score
    expect(score.get('points')).to.equal(2)

  })
  it("should decrement",()=>{
    const store = createStore(reducer)
    expect(true).to.equal(true)
    store.dispatch({type:DECREMENT,payload:{points:2}})
    let score = store.getState().score
    expect(score.get('points')).to.equal(-2)
  })
})
