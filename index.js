import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { ADD_SCORE } from './App/Actions'
import reducers from './App/Reducers'
import Root from './App/Root'

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension())

class App extends Component {
	render(){
		return(
			<div>
				<Root scores={store.getState().scores} onAddPlayerClick={(name)=>store.dispatch({type:ADD_SCORE,payload:{name}})}/>
			</div>
		)
	}
}

const render = ()=>{

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
}
store.subscribe(render)
render()
