import React from 'react'

class OpenClosed extends React.Component {
    render() {
        const isClosed = this.props.is_close ? "close" : "open"
        return (
            <div className={isClosed + ' rt'}>
                <span>&bull;</span> {isClosed}
            </div>
        )
    }
}

export default OpenClosed