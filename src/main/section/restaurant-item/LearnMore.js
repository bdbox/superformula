import React from 'react'

class LearnMore extends React.Component {
    render() {
        return (
            <div className="learn-more">
                <button onClick={this.onClickLearnMore.bind(this)}>Learn More</button>
            </div>
        )
    }

    //
    onClickLearnMore() {
        console.log("learn more...")
        this.props.detailOpenHandler(true)
        this.props.getBusinessId(this.props.detail.id)
    }
}

export default LearnMore