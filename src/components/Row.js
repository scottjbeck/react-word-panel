import React, {Component} from 'react'

import Tile from './Tile'

export default class Row extends Component {
    render() {
        return (<div>
            <Tile>content 1</Tile>
            <Tile>content 2</Tile>
        </div>)
    }
}