import React from 'react'
import FilterNavigation from './filter-navigation/FilterNavigation'
import Section from './section/Section'

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Restaurants</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <FilterNavigation 
                    businesses={this.props.data.businesses} 
                    categories={this.props.data.categories} 
                    isOpen={this.props.data.filters.isOpen} 
                    price={this.props.data.filters.price}
                    categoryValue={this.props.data.filters.categoryValue}
                    filterHandler={this.props.filterHandler}
                    />
                <Section 
                    data={this.props.data} 
                    loadMoreHandler={this.props.loadMoreHandler} 
                    filterHandler={this.props.filterHandler}
                    detailHandler={this.props.detailHandler} />
            </div>
        )
    }
}

export default Main