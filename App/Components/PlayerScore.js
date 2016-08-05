import React, { Component } from 'react'

export default class PlayerScore extends Component {
  render(){
    const { id, name, points, onDecrementClick, onIncrementClick} = this.props

    return(
      <div className="score">
        <h3 className="player">{name}</h3>
        <div className="points">{points}</div>
        <div className="id">{id}</div>
        <div className="controls">
          <button onClick={onDecrementClick}>-</button>{' '}
          <input defaultValue={1}/>{' '}
          <button onClick={onIncrementClick}>+</button>
        </div>
      </div>
    )
  }
}
