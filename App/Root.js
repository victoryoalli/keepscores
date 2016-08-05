import React, { Component } from 'react'
import PlayersScoresList from './Components/PlayersScoresList'

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
          <PlayersScoresList scores={scores} />
        </div>
      </div>
    )
  }
}
