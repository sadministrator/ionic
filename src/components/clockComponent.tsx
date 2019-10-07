import React from 'react'

export default class Clock extends React.Component {
    timerId: number = 0
    state =  {
        date: new Date()
    }

    componentDidMount() {
        this.timerId = window.setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
                <h5>{this.state.date.toLocaleTimeString()}</h5>
        )
    }
}