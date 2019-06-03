import React from 'react'

class RestaurantName extends React.Component {
    render() {
        return (
            <h3>
                {this.props.name}
            </h3>
        )
    }
}

export default RestaurantName