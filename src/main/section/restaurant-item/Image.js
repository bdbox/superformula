import React from 'react'

class Image extends React.Component {
    render() {
        const bg = {background: 'url(' + this.props.src + ')'}
        return (
            <div className="thumbnail" style={bg}> 
                <img src={this.props.src} />
            </div>
        )
    }
}

export default Image