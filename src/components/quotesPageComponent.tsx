import React from 'react'
import { string } from 'prop-types';
//import MyNavbar from './myNavbarComponent'
interface quoteArray {
    [key:number]: string
}

export default class QuotesPage extends React.Component {
    timerId: number = 0
    state = {
        quote: string,
        quoteArray: Array<string>()
    }

    componentDidMount() {
        fetch('https://api.whatdoestrumpthink.com/api/v1/quotes')
            .then(res => res.json())
            .then(res => this.setState({ quoteArray: res.messages.non_personalized }))
            .catch(() => console.log("Ugh."))

        this.timerId = window.setInterval(
            () => this.switch(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    switch() {
        this.setState({ quote: this.state.quoteArray[Math.floor(Math.random() * this.state.quoteArray.length)] })
    }

    render() {
        return (
            <div>
                <img
                    style={{ width: '60%' }}
                    src='https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F808074%252Fe236d6f0-4e1f-4823-a75f-f00e3ef6a301.jpg%252Foriginal.jpg?signature=8rC9xgP49D61ulyqOkm3zpbGeVc=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com'
                />
                <h1>"{this.state.quote}"</h1>
            </div>
        )
    }
}