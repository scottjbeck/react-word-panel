import React, {Component} from 'react'

export default class Tile extends Component {

    render() {
        return (<span>{this.props.children}</span>)
    }
}
