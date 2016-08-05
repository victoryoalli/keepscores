import React, { Component } from 'react'
import PlayerScore from './Components/PlayerScore'
import PlayersScores from './Components/PlayersScores'

export default class Root extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const { scores, onAddPlayerClick } = this.props
    return(
      <div>
        <h1>Players Scores</h1>
        <div>
          <input ref={ref=>this._input=ref}/> <button onClick={()=>onAddPlayerClick(this._input.value)}> add player </button>
        </div>
        <div>
          <PlayersScores scores={scores} />
        </div>
      </div>
    )
  }
}
