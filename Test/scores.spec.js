import { Map } from 'immutable'
import { expect } from 'chai'
import { createStore } from 'redux'

import { ADD_SCORE,INCREMENT } from '../App/Actions'
import reducer from '../App/Reducers'

describe("Players Scores actions",()=>{
  it("should add score",()=>{
    const store = createStore(reducer)
    let scores = store.getState().scores
    store.dispatch({type:ADD_SCORE,payload:{name:'Vic'}})
    expect(store.getState().scores.size).to.equal(1)
    expect(store.getState().scores.first().get('name')).to.equal('Vic')
  })
  it("should update score points",()=>{
    const store = createStore(reducer)
    let scores = store.getState().scores
    expect(scores.size).to.equal(0)

    store.dispatch({type:ADD_SCORE,payload:{name:'Vic'}})
    expect(store.getState().scores.size).to.equal(1)

    let score = store.getState().scores.first()
    expect(score.get('points')).to.equal(0)
    store.dispatch({type:INCREMENT,payload:{id:score.get('id'),points:1}})
    score = store.getState().scores.first()
    expect(score.get('points')).to.equal(1)

  })
})
