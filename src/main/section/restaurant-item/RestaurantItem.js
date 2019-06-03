import React from 'react'
import Image from './Image'
import Cuisine from './Cuisine'
import Rating from './Rating'
import PriceRange from './PriceRange'
import OpenClosed from './OpenClosed'
import RestaurantName from './RestaurantName'
import LearnMore from './LearnMore'

class RestaurantItem extends React.Component {
    render() {
        const business = this.props.business
        return (
            <div className="restaurant-item">
                <Image src={business.image_url} />
                <RestaurantName name={business.name} />
                <Rating rating={business.rating} />
                <div className="one-row">
                    <div className="lt">
                        <Cuisine category={business.categories[0]} /> • <PriceRange pr={business.price} />
                    </div>
                    <OpenClosed is_close={business.is_close} />
                </div>
                <LearnMore 
                    detail={business} 
                    detailOpenHandler={this.props.detailOpenHandler} 
                    getBusinessId={this.props.getBusinessId}
                    />
            </div>
        )
    }
}

export default RestaurantItem