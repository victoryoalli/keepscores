import React, { Component } from 'react'
import PlayerScoreItem from './PlayerScoreItem'

export default class PlayersScoresList extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const { scores } = this.props
    return(
      <div>
      {scores.map(score => {
        score=score.toJS()
        return <PlayerScoreItem key={score.id} {...score} />
      })}
      </div>
    )
  }
}
