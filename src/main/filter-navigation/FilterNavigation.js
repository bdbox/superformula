import React from 'react'
import OpenNow from './OpenNow'
import Price from './Price'
import Categories from './Categories'

class FilterNavigation extends React.Component {
    render() {
        return (
            <div className="filter-nav">       
                <div className="filter-nav-left">
                    <label className="filter-label">Filter by: </label>
                    <OpenNow 
                        isOpen={this.props.isOpen} 
                        filterHandler={this.props.filterHandler} 
                        />
                    <Price 
                        price={this.props.price} 
                        filterHandler={this.props.filterHandler} 
                        />
                    <Categories 
                        categories={this.props.categories} 
                        categoryValue={this.props.categoryValue} 
                        filterHandler={this.props.filterHandler} 
                        />
                </div>                
                <div className="filter-nav-right">
                    <button onClick={this.props.filterHandler}>CLEAR ALL</button>
                </div>
            </div>
        )
    }
}

export default FilterNavigation