import React, { Component } from 'react'
import PlayerScore from './PlayerScore'

export default class PlayersScores extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const { scores } = this.props
    return(
      <div>
      {scores.map(score => {
        score=score.toJS()
        return <PlayerScore key={score.id} {...score} />
      })}
      </div>
    )
  }
}
