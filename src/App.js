import React, {Component} from 'react'
import './App.css'

import Row from './components/Row'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            terms: ['term1', 'term2', 'term3', 'term4']
        }
    }

    render() {
        return (<div className="App">
            <Row/>
        </div>);
    }
}

export default App
