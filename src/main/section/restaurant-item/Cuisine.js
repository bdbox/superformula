import React from 'react'

class Cuisine extends React.Component {
    render() {
        return (
            <span>{this.props.category?this.props.category.alias:null}</span>
        )
    }
}

export default Cuisine